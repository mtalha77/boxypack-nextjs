'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import type { Socket } from 'socket.io-client';
import { X, Send, FileText, ArrowLeft, MessageSquareX } from 'lucide-react';
import { ErrorBoundary } from './ErrorBoundary';
import { socketRateLimiter, socketMessageLimiter, socketTypingLimiter } from '../../utils/socketRateLimit';
import { retryWithBackoff } from '../../utils/retry';

interface Message {
  message: string;
  sender: 'client' | 'admin';
  timestamp: Date | string;
  attachments?: Array<{
    type: 'image' | 'file' | 'logo';
    url: string;
    name: string;
    size?: number;
  }>;
}

interface SmartSuggestion {
  suggestions: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

// FAQ Questions and Answers
const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What are your shipping options?",
    answer: "We offer various shipping options including standard shipping (5-7 business days), express shipping (2-3 business days), and overnight shipping. Shipping costs are calculated based on your order size and destination."
  },
  {
    question: "How long does production take?",
    answer: "Production time typically ranges from 7-14 business days depending on the complexity of your order and current production queue. Rush orders can be accommodated with expedited timelines."
  },
  {
    question: "What is your minimum order quantity?",
    answer: "Our minimum order quantity varies by product type. For custom boxes, the minimum is typically 100 units. For standard products, minimums may be lower. Contact us for specific requirements."
  },
  {
    question: "Can I customize the box design?",
    answer: "Yes! We offer full customization including size, material, printing, colors, and finishes. You can upload your design or work with our design team to create something unique."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, bank transfers, and purchase orders for qualified businesses. Payment terms can be discussed for larger orders."
  },
  {
    question: "Do you offer samples?",
    answer: "Yes, we offer samples for most products. Sample costs vary by product type and can often be credited toward your first order. Contact us to request samples."
  }
];

// Pre-defined questions for quick replies (used in agent chat)
const QUICK_QUESTIONS = [
  "What are your shipping options?",
  "How long does production take?",
  "What is your minimum order quantity?",
  "Can I customize the box design?",
  "What payment methods do you accept?",
  "Do you offer samples?",
];

const SupportChat: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Start closed
  const [isVisible, setIsVisible] = useState(false); // Control visibility with animation
  const [socket, setSocket] = useState<Socket | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [showUserInfoForm, setShowUserInfoForm] = useState<boolean>(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [isAdminTyping, setIsAdminTyping] = useState(false);
  const [smartSuggestions, setSmartSuggestions] = useState<string[]>([]);
  const [isAgentConnected, setIsAgentConnected] = useState(false);
  const [showFAQ, setShowFAQ] = useState(true); // Show FAQ first
  const [isConnectingToAgent, setIsConnectingToAgent] = useState(false); // Show connecting message
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null); // Track which FAQ is expanded
  const [showChatSummary, setShowChatSummary] = useState(false); // Show chat summary view
  const [showCloseConfirmModal, setShowCloseConfirmModal] = useState(false); // Show close chat confirmation modal
  const [pendingCloseAction, setPendingCloseAction] = useState<'chat' | 'popup' | null>(null); // Track what action is pending
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const agentConnectedRef = useRef<boolean>(false);
  const connectingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if user is on admin route or agent route - hide chat widget on these routes
  const isAdminRoute = pathname?.startsWith('/admin') || false;
  const isAgentRoute = pathname?.startsWith('/agent') || false;

  // Ensure component only renders on client and create dedicated container
  useEffect(() => {
    setMounted(true);

    // Create a dedicated container outside body's transform context
    if (typeof window !== 'undefined' && document.documentElement) {
      let container = document.getElementById('chat-widget-portal-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'chat-widget-portal-container';
        // Append to documentElement (html) instead of body to bypass transform
        document.documentElement.appendChild(container);
      }
    }

    // Show chat widget after 5 seconds with smooth animation
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Auto-open chat window after appearing (not just the bubble)
      setIsOpen(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      // Cleanup on unmount
      const container = document.getElementById('chat-widget-portal-container');
      if (container) {
        container.remove();
      }
    };
  }, []);

  // Persist chat open state across navigation
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('chatIsOpen', isOpen.toString());
    }
  }, [isOpen, mounted]);

  // Generate or retrieve userId and user info from localStorage
  useEffect(() => {
    let storedUserId = localStorage.getItem('chatUserId');
    if (!storedUserId) {
      storedUserId = `guest_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('chatUserId', storedUserId);
    }
    setUserId(storedUserId);
    
    // Check if user info already exists
    const storedName = localStorage.getItem('chatUserName');
    const storedPhone = localStorage.getItem('chatUserPhone');
    if (storedName && storedPhone) {
      setUserName(storedName);
      setUserPhone(storedPhone);
      setShowUserInfoForm(false);
    }
  }, []);

  // Re-join chat with user info when it becomes available
  useEffect(() => {
    if (socket && isConnected && userName && userPhone) {
      socket.emit('joinChat', userId, { userName, userPhone });
    }
  }, [userName, userPhone, socket, isConnected, userId]);

  // Initialize socket connection - only when user requests agent chat
  useEffect(() => {
    // Don't initialize socket on admin routes or agent routes
    if (isAdminRoute || isAgentRoute) return;
    // Only connect if user has requested agent chat (showFAQ is false)
    if (showFAQ) return;
    if (!userId || !mounted || typeof window === 'undefined') return;

    let newSocket: Socket | null = null;

    // Dynamically import socket.io-client to avoid SSR issues
    import('socket.io-client').then(({ io }) => {
      const socketUrl = process.env.NEXT_PUBLIC_CHAT_SERVER_URL || 'http://localhost:5001';
      console.log('🔌 Connecting to chat server:', socketUrl);

      newSocket = io(socketUrl, {
        transports: ['polling', 'websocket'], // Try polling first for better compatibility with Replit
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        timeout: 20000,
        forceNew: false,
        autoConnect: true,
        withCredentials: false, // Disable credentials to avoid CORS preflight issues
        upgrade: true,
        rememberUpgrade: false,
        path: '/socket.io/', // Explicitly set the path
      });

      newSocket.on('connect', () => {
        console.log('✅ Connected to chat server', newSocket?.id);
        setIsConnected(true);
        
        // Join chat when connected, send user info if available
        if (userName && userPhone) {
          newSocket?.emit('joinChat', userId, { userName, userPhone });
        } else {
          newSocket?.emit('joinChat', userId);
        }
        
        // Clear timeout since we're connected
        if (connectingTimeoutRef.current) {
          clearTimeout(connectingTimeoutRef.current);
          connectingTimeoutRef.current = null;
        }
        
        // Hide connecting message after a short delay (even if agent not connected yet)
        setTimeout(() => {
          setIsConnectingToAgent(false);
        }, 1000);
      });

      newSocket.on('connect_error', (error) => {
        // Log all connection errors for debugging
        const errorMessage = error?.message || String(error);
        // Socket.io error may have additional properties
        const socketError = error as Error & { type?: string; description?: string };
        const errorType = socketError?.type || 'unknown';
        const errorDescription = socketError?.description || '';
        
        console.error('❌ Socket.io Connection Error:', {
          message: errorMessage,
          type: errorType,
          description: errorDescription,
          url: socketUrl,
          error: error
        });
        
        setIsConnected(false);
        // Hide connecting message on error, show chat interface anyway
        setIsConnectingToAgent(false);
        // The reconnection mechanism will handle retries automatically
      });

      newSocket.on('disconnect', (reason) => {
        console.log('❌ Disconnected from chat server:', reason);
        setIsConnected(false);
        
        // Attempt to reconnect if not a manual disconnect
        if (reason === 'io server disconnect') {
          // Server disconnected, reconnect manually
          newSocket?.connect();
        }
      });

      newSocket.on('reconnect', (attemptNumber) => {
        console.log('🔄 Reconnected after', attemptNumber, 'attempts');
        setIsConnected(true);
        if (userName && userPhone) {
          newSocket?.emit('joinChat', userId, { userName, userPhone });
        } else {
          newSocket?.emit('joinChat', userId);
        }
      });

      newSocket.on('reconnect_attempt', (attemptNumber) => {
        // Only log every 5th attempt to reduce console noise
        if (attemptNumber % 5 === 0) {
          console.log('🔄 Reconnection attempt', attemptNumber);
        }
      });

      newSocket.on('reconnect_error', (error) => {
        // Suppress transient reconnection errors to reduce console noise
        const errorMessage = error?.message || String(error);
        const isTransientError = 
          errorMessage.includes('xhr poll error') ||
          errorMessage.includes('websocket error') ||
          errorMessage.includes('transport error');
        
        if (!isTransientError) {
          console.error('❌ Reconnection error:', errorMessage);
        }
      });

      newSocket.on('reconnect_failed', () => {
        console.error('❌ Reconnection failed');
        setIsConnected(false);
      });

      newSocket.on('chatHistory', (data: { userId: string; messages: Message[] }) => {
        console.log('📜 Chat history received:', data);
        // Only set messages if we don't have any yet, or if this is a fresh load
        setMessages((prev) => {
          // If we already have messages, don't overwrite (might be from optimistic updates)
          // Only set if previous messages array is empty
          if (prev.length === 0) {
            return data.messages || [];
          }
          // Otherwise, merge with existing messages (avoid duplicates)
          const existingKeys = new Set(
            prev.map(msg => `${msg.message}-${msg.sender}-${new Date(msg.timestamp).getTime()}`)
          );
          const newMessages = (data.messages || []).filter(msg => {
            const key = `${msg.message}-${msg.sender}-${new Date(msg.timestamp).getTime()}`;
            return !existingKeys.has(key);
          });
          return [...prev, ...newMessages];
        });
      });

      newSocket.on('newMessage', (message: Message) => {
        console.log('💬 New message received:', message);
        
        // Add message instantly to chat body
        setMessages((prev) => {
          // Check if this message already exists (prevent duplicates)
          // Use a more lenient check - same message content and sender within 5 seconds
          const messageTime = new Date(message.timestamp).getTime();
          const messageExists = prev.some((msg) => {
            const msgTime = new Date(msg.timestamp).getTime();
            const timeDiff = Math.abs(messageTime - msgTime);
            // Same message content, same sender, and within 5 seconds = likely duplicate
            return (
              msg.message === message.message &&
              msg.sender === message.sender &&
              timeDiff < 5000
            );
          });
          
          if (messageExists) {
            console.log('⚠️ Duplicate message detected, skipping');
            return prev; // Return previous state unchanged
          }
          
          // Add new message instantly
          console.log('✅ Adding message to chat body instantly');
          return [...prev, message];
        });
      });

      newSocket.on('error', (error: { message: string } | Error) => {
        console.error('❌ Socket error:', error);
        const errorMsg = typeof error === 'object' && 'message' in error ? error.message : String(error);
        
        if (errorMsg.includes('closed') || errorMsg.includes('This chat has been closed')) {
          const newUserId = `guest_${Math.random().toString(36).substr(2, 9)}`;
          localStorage.setItem('chatUserId', newUserId);
          setUserId(newUserId);
          setMessages([]);
          setShowFAQ(true);
          setShowChatSummary(false);
          setIsAgentConnected(false);
          agentConnectedRef.current = false;
          setSmartSuggestions([]);
        } else if (errorMsg.includes('E11000') || errorMsg.includes('duplicate key')) {
          const newUserId = `guest_${Math.random().toString(36).substr(2, 9)}`;
          localStorage.setItem('chatUserId', newUserId);
          setUserId(newUserId);
          setMessages([]);
          if (newSocket && newSocket.connected) {
            newSocket.emit('joinChat', newUserId, { userName, userPhone });
          }
        } else if (!errorMsg.includes('Rate limit')) {
          console.error('Chat error:', errorMsg);
        }
        setIsConnected(false);
      });

      newSocket.on('botThinking', (data: { thinking: boolean }) => {
        console.log('🤔 Bot thinking state:', data.thinking);
        setIsBotThinking(data.thinking);
      });

      newSocket.on('userTyping', (data: { userId: string; sender: 'client' | 'admin'; isTyping: boolean }) => {
        if (data.sender === 'admin') {
          setIsAdminTyping(data.isTyping);
        }
      });

      newSocket.on('agentConnected', (data: { agentId: string; message: string }) => {
        console.log('👨‍💼 Agent connected:', data);
        agentConnectedRef.current = true;
        setIsAgentConnected(true);
        setIsConnectingToAgent(false); // Hide connecting message
        // Clear timeout if agent connects
        if (connectingTimeoutRef.current) {
          clearTimeout(connectingTimeoutRef.current);
          connectingTimeoutRef.current = null;
        }
        // Clear smart suggestions when agent connects
        setSmartSuggestions([]);
      });

      newSocket.on('smartSuggestions', (data: SmartSuggestion) => {
        console.log('💡 Smart suggestions received:', data.suggestions);
        // Only show suggestions if no agent is connected
        if (!agentConnectedRef.current) {
          setSmartSuggestions(data.suggestions);
        } else {
          setSmartSuggestions([]);
        }
      });

      newSocket.on('chatClosed', (data: { reason?: string; userId?: string }) => {
        console.log('🔒 Chat closed:', data.reason);
        agentConnectedRef.current = false;
        setIsAgentConnected(false);
        setSmartSuggestions([]);
        setShowChatSummary(false);
        setMessages([]);
        setShowFAQ(true);
        
        if (data.reason && data.reason === 'closed by client') {
          const newUserId = `guest_${Math.random().toString(36).substr(2, 9)}`;
          localStorage.setItem('chatUserId', newUserId);
          setUserId(newUserId);
        } else if (data.reason) {
          alert('Chat has been closed due to inactivity. You can start a new conversation anytime!');
          const newUserId = `guest_${Math.random().toString(36).substr(2, 9)}`;
          localStorage.setItem('chatUserId', newUserId);
          setUserId(newUserId);
        }
      });

      newSocket.on('chatStatusUpdated', (data: { userId: string; status: string }) => {
        if (data.userId === userId && data.status === 'closed') {
          agentConnectedRef.current = false;
          setIsAgentConnected(false);
          setSmartSuggestions([]);
          setShowChatSummary(false);
        }
      });

      setSocket(newSocket);
    }).catch((error) => {
      console.error('❌ Failed to load socket.io-client:', error);
      setIsConnected(false);
      setIsConnectingToAgent(false);
    });

    return () => {
      if (newSocket) {
        try {
          newSocket.removeAllListeners();
          newSocket.close();
          if (newSocket.id) {
            socketRateLimiter.reset(newSocket.id);
            socketMessageLimiter.reset(newSocket.id);
            socketTypingLimiter.reset(newSocket.id);
          }
        } catch (error) {
          console.error('Error cleaning up socket:', error);
        }
      }
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = null;
      }
      if (connectingTimeoutRef.current) {
        clearTimeout(connectingTimeoutRef.current);
        connectingTimeoutRef.current = null;
      }
    };
  }, [userId, mounted, showFAQ, userName, userPhone]);

  // Scroll to bottom when new messages arrive or bot is thinking
  useEffect(() => {
    // Small delay to ensure DOM is updated before scrolling
    const timeoutId = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [messages, isBotThinking, isAdminTyping]);

  const handleTyping = useCallback((isTyping: boolean) => {
    if (!socket || !userId || !isConnected) return;
    
    if (!socketTypingLimiter.checkLimit(socket.id || 'unknown')) {
      return;
    }
    
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
    
    try {
      socket.emit('typing', { userId, isTyping, sender: 'client' });
    } catch (error) {
      console.error('Error emitting typing:', error);
    }
    
    if (isTyping) {
      typingTimeoutRef.current = setTimeout(() => {
        if (socket && socket.connected) {
          try {
            socket.emit('typing', { userId, isTyping: false, sender: 'client' });
          } catch (error) {
            console.error('Error emitting typing stop:', error);
          }
        }
        typingTimeoutRef.current = null;
      }, 3000);
    }
  }, [socket, userId, isConnected]);


  const sendMessage = (messageText?: string, attachments?: Message['attachments']) => {
    const messageToSend = messageText || inputMessage.trim();
    if (!messageToSend && !attachments) {
      return;
    }

    if (!socket) {
      console.error('❌ Socket not initialized');
      alert('Chat connection not ready. Please refresh the page.');
      return;
    }

    if (!isConnected || socket.disconnected) {
      console.error('❌ Not connected to server. Socket state:', socket.connected);
      alert('Not connected to chat server. Please wait for connection or refresh the page.');
      return;
    }

    if (!userId) {
      console.error('❌ User ID not set');
      alert('User session not initialized. Please refresh the page.');
      return;
    }

    // Stop typing indicator
    handleTyping(false);

    const messageData = {
      userId,
      message: messageToSend || '',
      sender: 'client' as const,
      attachments,
    };

    console.log('📤 Sending message:', messageData);
    
    // Clear smart suggestions when sending a message (especially if agent is connected)
    if (isAgentConnected) {
      setSmartSuggestions([]);
    }
    
    // Check if socket is actually connected
    if (!socket.connected) {
      console.error('❌ Socket is not connected');
      alert('Connection lost. Please wait for reconnection...');
      return;
    }

    // Clear input
    setInputMessage('');

    // Optimistically add message to UI immediately for instant feedback
    const optimisticMessage: Message = {
      message: messageToSend,
      sender: 'client',
      timestamp: new Date(),
      ...(attachments && { attachments }),
    };
    
    setMessages((prev) => {
      // Check if message already exists (prevent duplicates)
      const exists = prev.some(
        (m) =>
          m.message === optimisticMessage.message &&
          m.sender === optimisticMessage.sender &&
          Math.abs(new Date(m.timestamp).getTime() - new Date(optimisticMessage.timestamp).getTime()) < 1000
      );
      if (exists) return prev;
      return [...prev, optimisticMessage];
    });

    // Emit the message
    try {
      socket.emit('chatMessage', messageData);
      console.log('✅ Message emitted to server');
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Please try again.';
      console.error('❌ Error emitting message:', error);
      alert('Failed to send message: ' + errorMessage);
      // Remove optimistic message on error
      setMessages((prev) => prev.filter((m) => m !== optimisticMessage));
    }
  };

  const handleQuickQuestion = (question: string) => {
    sendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userPhone.trim()) {
      alert('Please enter both name and phone number');
      return;
    }
    
    // Store user info in localStorage
    localStorage.setItem('chatUserName', userName.trim());
    localStorage.setItem('chatUserPhone', userPhone.trim());
    
    // Update chat with user info if socket is connected
    if (socket && isConnected) {
      socket.emit('joinChat', userId, { userName: userName.trim(), userPhone: userPhone.trim() });
    }
    
    setShowUserInfoForm(false);
  };

  const handleConnectToAgent = () => {
    if (connectingTimeoutRef.current) {
      clearTimeout(connectingTimeoutRef.current);
    }
    
    setIsConnectingToAgent(true);
    setShowFAQ(false);
    setShowChatSummary(false);
    
    connectingTimeoutRef.current = setTimeout(() => {
      setIsConnectingToAgent(false);
    }, 10000);
  };

  const handleBackToSummary = () => {
    setShowChatSummary(true);
  };

  const confirmCloseChat = () => {
    if (socket && isConnected && userId) {
      socket.emit('clientCloseChat', userId);
    }
    
    const newUserId = `guest_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('chatUserId', newUserId);
    setUserId(newUserId);
    
    setMessages([]);
    setShowFAQ(true);
    setShowChatSummary(false);
    setIsAgentConnected(false);
    agentConnectedRef.current = false;
    setSmartSuggestions([]);
    
    if (socket) {
      socket.emit('leaveChat', userId);
    }
    
    if (pendingCloseAction === 'popup') {
      setIsOpen(false);
    }
    
    setShowCloseConfirmModal(false);
    setPendingCloseAction(null);
  };

  const handleCloseChat = () => {
    setPendingCloseAction('chat');
    setShowCloseConfirmModal(true);
  };

  const handleClosePopup = () => {
    if (!showFAQ && !showUserInfoForm && (isAgentConnected || messages.length > 0)) {
      setPendingCloseAction('popup');
      setShowCloseConfirmModal(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleCancelClose = () => {
    setShowCloseConfirmModal(false);
    setPendingCloseAction(null);
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const formatTime = (timestamp: Date | string) => {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Hide chat widget on admin routes and agent routes (check after all hooks)
  if (!mounted || isAdminRoute || isAgentRoute || !isVisible) {
    return null;
  }

  const chatContent = (
    <>
      {/* Close Chat Confirmation Modal */}
      {showCloseConfirmModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100000]"
          onClick={handleCancelClose}
          style={{ pointerEvents: 'auto' }}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
            style={{ pointerEvents: 'auto' }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <MessageSquareX className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
              Close Chat?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Are you sure you want to close this chat? The chat will be closed, but you can start a new conversation anytime.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleCancelClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmCloseChat}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] text-white rounded-lg hover:from-[#0ca6c2] hover:to-[#0c6b76] transition-all font-medium shadow-md hover:shadow-lg"
              >
                Close Chat
              </button>
            </div>
          </div>
        </div>
      )}

      <div 
        id="chat-widget-root"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99999,
          pointerEvents: 'none',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
        }}
      >
      {/* Floating Chat Bubble - Always visible when closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          data-chat-widget="bubble"
          className="group relative bg-gradient-to-br from-[#0c6b76] via-[#0ca6c2] to-[#0c6b76] text-white rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(12,107,118,0.6)] transition-all duration-500 hover:scale-110 active:scale-95"
          aria-label="Open chat"
          style={{
            position: 'relative',
            width: '64px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            pointerEvents: 'auto',
            animation: 'fadeInUp 0.6s ease-out, pulse-glow 2s ease-in-out infinite',
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 50%',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundPosition = '100% 50%';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundPosition = '0% 50%';
          }}
        >
          {/* Animated ring effect */}
          <div 
            className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
            style={{
              animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
          
          {/* Icon with enhanced styling */}
          <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/favicon.png"
              alt="Chat with us"
              width={32}
              height={32}
              className="drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
              }}
            />
          </div>
        </button>
      )}

      {/* Chat Window - Always visible when open */}
      {isOpen && (
        <div 
          style={{ 
            position: 'relative', 
            pointerEvents: 'auto',
            animation: 'slideInUp 0.5s ease-out',
          }}
        >
          {/* Close Button - Outside top-left corner */}
          <button
            onClick={handleClosePopup}
            className="absolute bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg border border-gray-200 transition-all duration-200 hover:scale-110 z-50"
            aria-label="Close chat"
            style={{
              top: '-16px',
              left: '-16px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          <div 
            data-chat-widget="window"
            className="bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200"
            style={{
              position: 'relative',
              width: typeof window !== 'undefined' && window.innerWidth < 640 
                ? 'calc(100vw - 40px)' 
                : '384px',
              maxWidth: '384px',
              height: typeof window !== 'undefined' && window.innerWidth < 640
                ? 'calc(100vh - 40px)'
                : '600px',
              maxHeight: '600px',
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  {!showUserInfoForm && !showFAQ && !isConnectingToAgent && !showChatSummary && messages.length > 0 && (
                    <button
                      onClick={handleBackToSummary}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                      aria-label="View chat summary"
                      title="View ongoing chat"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Support Chat</h3>
                    <p className="text-xs text-white/80">
                      {isConnected ? (
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                          Connected
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                {!showUserInfoForm && !showFAQ && !isConnectingToAgent && !showChatSummary && messages.length > 0 && (
                  <button
                    onClick={handleCloseChat}
                    className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                    aria-label="Close chat"
                    title="Close chat"
                  >
                    <MessageSquareX className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

          {/* User Info Form - Show before FAQ if not filled */}
          {showUserInfoForm && (
            <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center leading-tight">Get Instant Help with Your Custom Packaging</h3>
                  <p className="text-base text-gray-700 mb-6 text-center leading-relaxed">Our packaging experts are ready to assist you. Share your details and let&apos;s create the perfect packaging solution for your business.</p>
                  
                  <form onSubmit={handleUserInfoSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c6b76] text-gray-900"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="userPhone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="userPhone"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        required
                        placeholder="Enter your phone number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c6b76] text-gray-900"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] text-white py-2 px-4 rounded-lg hover:from-[#0ca6c2] hover:to-[#0c6b76] transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                    >
                      Continue
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Section - Show after user info form */}
          {!showUserInfoForm && showFAQ && (
            <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
              <div className="flex flex-col items-center justify-start h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Image
                      src="/favicon.png"
                      alt="Boxypack"
                      width={32}
                      height={32}
                      className="drop-shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How can we help you?</h3>
                  <p className="text-sm text-gray-600 mb-1">Browse our frequently asked questions</p>
                </div>
                
                <div className="w-full max-w-sm space-y-3 mb-6">
                  {FAQ_ITEMS.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-700 pr-2">{faq.question}</span>
                        <span className="text-gray-500 text-lg flex-shrink-0">
                          {expandedFAQ === index ? '−' : '+'}
                        </span>
                      </button>
                      {expandedFAQ === index && (
                        <div className="px-4 pb-3 pt-0">
                          <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Connect to Agent Button */}
                <div className="w-full max-w-sm mt-4">
                  <button
                    onClick={handleConnectToAgent}
                    className="w-full bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] text-white py-3 px-4 rounded-lg hover:from-[#0ca6c2] hover:to-[#0c6b76] transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                  >
                    Talk with an Agent Now
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Still have questions? Our support team is here to help
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Chat Summary View */}
          {!showUserInfoForm && !showFAQ && !isConnectingToAgent && showChatSummary && (
            <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
              <div className="mb-4">
                <button
                  onClick={() => setShowChatSummary(false)}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to chat
                </button>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Chat</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {messages.length} {messages.length === 1 ? 'message' : 'messages'} in this conversation
                </p>
              </div>
              
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === 'client' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        msg.sender === 'client'
                          ? 'bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] text-white'
                          : 'bg-white text-gray-800 border border-gray-200'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.message}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === 'client'
                            ? 'text-white/80'
                            : 'text-gray-500'
                        }`}
                      >
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={handleCloseChat}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors font-medium"
                >
                  Close Chat
                </button>
              </div>
            </div>
          )}

          {/* Connecting to Agent Message */}
          {!showUserInfoForm && !showFAQ && !showChatSummary && isConnectingToAgent && (
            <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connecting you with our customer support</h3>
                <p className="text-sm text-gray-600">Please wait while we connect you with an available agent...</p>
              </div>
            </div>
          )}

          {/* Messages Area - Only show when connected to agent */}
          {!showUserInfoForm && !showFAQ && !isConnectingToAgent && !showChatSummary && (
            <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Image
                      src="/favicon.png"
                      alt="Boxypack"
                      width={32}
                      height={32}
                      className="drop-shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome to BoxyPack Support!</h3>
                  <p className="text-gray-600 mb-1">How can we help you today?</p>
                  <p className="text-sm text-gray-500 mb-6">Ask us anything about our custom packaging solutions</p>
                </div>
                
                <div className="w-full max-w-sm space-y-2">
                  <p className="text-xs font-medium text-gray-700 mb-3 text-center">Quick questions to get started:</p>
                  {QUICK_QUESTIONS.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      disabled={!isConnected}
                      className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gradient-to-r hover:from-[#0c6b76]/5 hover:to-[#0ca6c2]/5 hover:border-[#0c6b76]/30 transition-all duration-200 text-sm text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                    >
                      {question}
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-400">Or type your question in the input below</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === 'client' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        msg.sender === 'client'
                          ? 'bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] text-white'
                          : 'bg-white text-gray-800 border border-gray-200'
                      }`}
                    >
                      {msg.attachments && msg.attachments.length > 0 && (
                        <div className="mb-2 space-y-2">
                          {msg.attachments.map((att, attIdx) => (
                            <div key={attIdx} className="rounded overflow-hidden">
                              {att.type === 'image' || att.type === 'logo' ? (
                                <Image 
                                  src={att.url} 
                                  alt={att.name}
                                  width={400}
                                  height={200}
                                  className="max-w-full h-auto rounded"
                                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                                  unoptimized
                                />
                              ) : (
                                <a 
                                  href={att.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 p-2 bg-gray-100 rounded hover:bg-gray-200"
                                >
                                  <FileText className="w-4 h-4" />
                                  <span className="text-xs truncate">{att.name}</span>
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      {msg.message && (
                        <p className="text-sm whitespace-pre-line">{msg.message}</p>
                      )}
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === 'client'
                            ? 'text-white/80'
                            : 'text-gray-500'
                        }`}
                      >
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Bot Thinking Indicator */}
                {isBotThinking && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 border border-gray-200 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Admin Typing Indicator */}
                {isAdminTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 border border-gray-200 rounded-lg px-4 py-2">
                      <p className="text-xs text-gray-500 italic">Admin is typing...</p>
                    </div>
                  </div>
                )}

                {/* Smart Suggestions - Only show when no agent is connected */}
                {smartSuggestions.length > 0 && !isAgentConnected && (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs text-gray-500 font-medium">💡 You might also ask:</p>
                    <div className="flex flex-wrap gap-2">
                      {smartSuggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            sendMessage(suggestion);
                            setSmartSuggestions([]);
                          }}
                          className="px-3 py-1.5 text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
          )}

          {/* Input Area - Only show when connected to agent */}
          {!showUserInfoForm && !showFAQ && !isConnectingToAgent && !showChatSummary && (
            <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
              <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => {
                  setInputMessage(e.target.value);
                  handleTyping(e.target.value.length > 0);
                }}
                onKeyPress={handleKeyPress}
                onBlur={() => handleTyping(false)}
                placeholder="Type your message..."
                disabled={!isConnected}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!isConnected || !inputMessage.trim()}
                className="bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] hover:from-[#0ca6c2] hover:to-[#46959c] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
              </div>
            </div>
          )}
          </div>
        </div>
      )}
      </div>
    </>
  );

  // Render to dedicated container or documentElement to bypass body's transform
  if (typeof window === 'undefined' || !document.documentElement) {
    return null;
  }

  const container = document.getElementById('chat-widget-portal-container');
  const target = container || document.documentElement;

  return createPortal(chatContent, target);
};

export default SupportChat;

