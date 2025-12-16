'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { Socket } from 'socket.io-client';
import { Send, Search, X, CheckCircle, RotateCcw, CheckCheck } from 'lucide-react';
import Image from 'next/image';

interface Message {
  message: string;
  sender: 'client' | 'admin';
  timestamp: Date | string;
  userId?: string; // Added to identify which chat the message belongs to
  attachments?: Array<{
    type: 'image' | 'file' | 'logo';
    url: string;
    name: string;
    size?: number;
  }>;
  read?: boolean;
}

interface ChatSummary {
  userId: string;
  userName?: string;
  userPhone?: string;
  messageCount: number;
  lastMessage: Message | null;
  createdAt: string;
  updatedAt: string;
  status?: 'active' | 'closed' | 'inactive';
  unreadCount?: number;
  assignedTo?: string;
}

interface QueueStatus {
  queueLength: number;
  queuedChats: Array<{
    userId: string;
    queuedAt: Date;
    priority: number;
    waitTime: number;
  }>;
  agents: Array<{
    agentId: string;
    status: string;
    activeChats: number;
    maxCapacity: number;
    isAvailable: boolean;
  }>;
  totalAgents: number;
  availableAgents: number;
}

const AgentDashboard: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [chats, setChats] = useState<ChatSummary[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [isAdminTyping, setIsAdminTyping] = useState(false);
  const [queueStatus, setQueueStatus] = useState<QueueStatus | null>(null);
  const [agentId, setAgentId] = useState<string>('');
  const [assignedChats, setAssignedChats] = useState<string[]>([]);
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'closed' | 'inactive'>('active');
  const [agentName, setAgentName] = useState<string>('Agent');
  const [agentEmail, setAgentEmail] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const selectedChatRef = useRef<string | null>(null);

  const CHAT_SERVER_URL = process.env.NEXT_PUBLIC_CHAT_SERVER_URL || 'http://localhost:5001';
  
  // Helper function to safely parse JSON responses
  const safeJsonParse = async (response: Response) => {
    const contentType = response.headers.get('content-type');
    
    // If content type is not JSON, read as text and throw error
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Non-JSON response received:', text.substring(0, 200));
      throw new Error('Response is not JSON. Backend server may be down or returned an error page.');
    }
    
    // Try to parse as JSON using response.json()
    try {
      return await response.json();
    } catch (error) {
      // If JSON parsing fails, try to read as text to see what we got
      const clonedResponse = response.clone();
      const text = await clonedResponse.text().catch(() => 'Unable to read response');
      console.error('Failed to parse JSON response. Response text:', text.substring(0, 200));
      throw new Error('Invalid JSON response from server. The response may be corrupted or the server returned an error.');
    }
  };
  
  // Check authentication and get agent ID
  useEffect(() => {
    // Check if agent is logged in
    if (typeof window === 'undefined') return;
    
    const agentData = localStorage.getItem('agentData');
    const storedAgentId = localStorage.getItem('agentId');
    
    if (!agentData || !storedAgentId) {
      // Redirect to login if not authenticated
      window.location.href = '/agent/login';
      return;
    }
    
    try {
      const agent = JSON.parse(agentData);
      if (agent && agent._id) {
        setAgentId(agent._id);
        // Store agent name and email for display
        if (agent.name) {
          localStorage.setItem('agentName', agent.name);
          setAgentName(agent.name);
        }
        if (agent.email) {
          localStorage.setItem('agentEmail', agent.email);
          setAgentEmail(agent.email);
        }
      } else {
        window.location.href = '/agent/login';
      }
    } catch (e) {
      console.error('Error parsing agent data:', e);
      window.location.href = '/agent/login';
    }
  }, []);

  // Initialize socket connection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let newSocket: Socket | null = null;

    // Dynamically import socket.io-client to avoid SSR issues
    import('socket.io-client').then(({ io }) => {
      const newSocketInstance = io(CHAT_SERVER_URL, {
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

      newSocket = newSocketInstance;

      newSocketInstance.on('connect', () => {
        console.log('✅ Agent connected to chat server');
        setIsConnected(true);
        
        // Register as agent using the logged-in agent's ID
        const loggedInAgentId = localStorage.getItem('agentId');
        if (!loggedInAgentId) {
          console.error('❌ No agent ID found, redirecting to login');
          window.location.href = '/agent/login';
          return;
        }
        
        const storedAvailability = localStorage.getItem('agentAvailability') !== 'false'; // Default to true
        setIsAvailable(storedAvailability);
        
        newSocketInstance.emit('agentRegister', { 
          agentId: loggedInAgentId,
          maxCapacity: 5, // Max 5 concurrent chats
          isAvailable: storedAvailability
        });
        setAgentId(loggedInAgentId);
      });

      newSocketInstance.on('connect_error', (error) => {
        // Log all connection errors for debugging
        const errorMessage = error?.message || String(error);
        // Socket.io error may have additional properties
        const socketError = error as Error & { type?: string; description?: string };
        const errorType = socketError?.type || 'unknown';
        const errorDescription = socketError?.description || '';
        
        console.error('❌ Agent Socket.io Connection Error:', {
          message: errorMessage,
          type: errorType,
          description: errorDescription,
          url: CHAT_SERVER_URL,
          error: error
        });
        
        setIsConnected(false);
      });

      newSocketInstance.on('disconnect', (reason) => {
        console.log('❌ Agent disconnected from chat server:', reason);
        setIsConnected(false);
        
        // Attempt to reconnect if not a manual disconnect
        if (reason === 'io server disconnect') {
          newSocketInstance?.connect();
        }
      });

      newSocketInstance.on('reconnect', (attemptNumber) => {
        console.log('🔄 Agent reconnected after', attemptNumber, 'attempts');
        setIsConnected(true);
        
        // Re-register as agent after reconnection
        const storedAgentId = localStorage.getItem('agentId');
        if (!storedAgentId) {
          window.location.href = '/agent/login';
          return;
        }
        const storedAvailability = localStorage.getItem('agentAvailability') !== 'false';
        newSocketInstance.emit('agentRegister', { 
          agentId: storedAgentId,
          maxCapacity: 5,
          isAvailable: storedAvailability
        });
      });

      newSocketInstance.on('newMessage', (message: Message) => {
        console.log('💬 New message received in real-time:', message);
        const messageUserId = message.userId;
        
        if (!messageUserId) {
          console.warn('⚠️ Message received without userId');
          fetchChats(); // Fallback: refresh chat list
          return;
        }
        
        // Use ref to get current selectedChat value (always up-to-date)
        const currentSelectedChat = selectedChatRef.current;
        
        // If this message is for the currently selected chat, add it INSTANTLY to chat body
        if (currentSelectedChat === messageUserId) {
          setMessages((prev) => {
            // Check for duplicates - use lenient check (within 5 seconds)
            const messageTime = new Date(message.timestamp).getTime();
            const exists = prev.some((m) => {
              const msgTime = new Date(m.timestamp).getTime();
              const timeDiff = Math.abs(messageTime - msgTime);
              return (
                m.message === message.message &&
                m.sender === message.sender &&
                timeDiff < 5000 // Within 5 seconds = likely duplicate
              );
            });
            
            if (exists) {
              console.log('⚠️ Duplicate message detected, skipping');
              return prev;
            }
            
            // Add message INSTANTLY to chat body (like WhatsApp)
            console.log('✅ Adding message to chat body instantly:', message.message.substring(0, 50));
            return [...prev, message];
          });
        }
        
        // Update chat list to show latest message INSTANTLY (without full refresh)
        setChats((prevChats) => {
          const chatExists = prevChats.some(c => c.userId === messageUserId);
          
          if (chatExists) {
            // Update existing chat with latest message
            return prevChats.map((chat) => {
              if (chat.userId === messageUserId) {
                return {
                  ...chat,
                  lastMessage: message,
                  updatedAt: new Date(message.timestamp).toISOString(),
                  messageCount: chat.messageCount + 1,
                  // Update unread count if message is from client
                  unreadCount: message.sender === 'client' 
                    ? (chat.unreadCount || 0) + 1 
                    : chat.unreadCount,
                };
              }
              return chat;
            });
          } else {
            // New chat - add it to the list
            return [
              {
                userId: messageUserId,
                messageCount: 1,
                lastMessage: message,
                createdAt: new Date(message.timestamp).toISOString(),
                updatedAt: new Date(message.timestamp).toISOString(),
                status: 'active' as const,
                unreadCount: message.sender === 'client' ? 1 : 0,
              },
              ...prevChats,
            ];
          }
        });
      });

      newSocketInstance.on('userTyping', (data: { userId: string; sender: 'client' | 'admin'; isTyping: boolean }) => {
        // Use ref to get current selectedChat value
        if (data.userId === selectedChatRef.current) {
          if (data.sender === 'client') {
            setIsUserTyping(data.isTyping);
            if (data.isTyping && typingTimeoutRef.current) {
              clearTimeout(typingTimeoutRef.current);
            }
            if (data.isTyping) {
              typingTimeoutRef.current = setTimeout(() => {
                setIsUserTyping(false);
              }, 3000);
            }
          }
        }
      });

      // Queue management events
      newSocketInstance.on('chatAssigned', (data: { userId: string; assignedAt: Date }) => {
        console.log('📋 Chat assigned:', data.userId);
        setAssignedChats(prev => {
          if (!prev.includes(data.userId)) {
            return [...prev, data.userId];
          }
          return prev;
        });
        fetchChats();
        fetchQueueStatus();
      });

      newSocketInstance.on('queueStatus', (status: QueueStatus) => {
        setQueueStatus(status);
      });

      newSocketInstance.on('assignedChats', (data: { chats: string[] }) => {
        setAssignedChats(data.chats);
        // Join all assigned chat rooms to receive real-time messages
        data.chats.forEach((chatUserId) => {
          newSocketInstance.emit('joinChat', chatUserId);
          console.log(`📥 Joined chat room for real-time updates: ${chatUserId}`);
        });
      });

      newSocketInstance.on('agentAvailabilityUpdated', (data: { isAvailable: boolean }) => {
        setIsAvailable(data.isAvailable);
      });

      // Chat status updates
      newSocketInstance.on('chatStatusUpdated', (data: { userId: string; status: string; timestamp: Date }) => {
        if (data.status === 'closed') {
          setChats(prevChats => prevChats.filter(chat => chat.userId !== data.userId));
          if (data.userId === selectedChat) {
            setSelectedChat(null);
            setMessages([]);
          }
        } else {
          fetchChatsWithRetry().catch(() => {});
          if (data.userId === selectedChat) {
            fetchChatMessages(data.userId).catch(() => {});
          }
        }
      });

      // Messages read updates
      newSocketInstance.on('messagesRead', (data: { userId: string; timestamp: Date }) => {
        if (data.userId === selectedChat) {
          fetchChatMessages(data.userId);
        }
        fetchChats();
      });

      // Chat closed/reopened events
      newSocketInstance.on('chatClosed', (data: { userId: string; reason?: string }) => {
        setChats(prevChats => prevChats.filter(chat => chat.userId !== data.userId));
        if (data.userId === selectedChat) {
          setSelectedChat(null);
          setMessages([]);
        }
      });

      newSocketInstance.on('chatReopened', (data: { userId: string }) => {
        if (data.userId === selectedChat) {
          fetchChatsWithRetry().catch(() => {});
        }
      });

      // Chat reassigned
      newSocketInstance.on('chatReassigned', (data: { userId: string; oldAgentId: string; newAgentId: string }) => {
        fetchChatsWithRetry().catch(() => {});
        if (data.userId === selectedChat) {
          fetchChatMessages(data.userId).catch(() => {});
        }
      });

      setSocket(newSocketInstance);
    }).catch((error) => {
      console.error('❌ Failed to load socket.io-client:', error);
    });

    return () => {
      if (selectedChat && newSocket) {
        try {
          newSocket.emit('adminLeaveChat', selectedChat);
        } catch (error) {
          console.error('Error leaving chat on cleanup:', error);
        }
      }
      if (newSocket) {
        newSocket.removeAllListeners();
        newSocket.close();
      }
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = null;
      }
    };
  }, []);

  const fetchChatsWithRetry = async (retries = 3): Promise<void> => {
    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        await fetchChats();
        return;
      } catch (error) {
        if (attempt === retries - 1) {
          console.error('Failed to fetch chats after retries:', error);
          throw error;
        }
        await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
      }
    }
  };

  const fetchChats = async () => {
    try {
      const loggedInAgentId = localStorage.getItem('agentId');
      
      const params = new URLSearchParams();
      if (loggedInAgentId) {
        params.append('agentId', loggedInAgentId);
      }
      if (statusFilter !== 'active') {
        params.append('status', statusFilter);
      }
      
      const url = `/api/chats${params.toString() ? '?' + params.toString() : ''}`;
      
      const response = await fetch(url);
      const data = await safeJsonParse(response);
      
      if (data.success) {
        const chatsWithUnread = data.chats.map((chat: ChatSummary & { messages?: Message[] }) => {
          const unreadCount = chat.messages?.filter(
            (m: Message) => m.sender === 'client' && !m.read
          ).length || 0;
          return {
            ...chat,
            unreadCount,
          };
        });
        setChats(chatsWithUnread);
      }
    } catch (error: unknown) {
      console.error('Error fetching chats:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch messages for selected chat
  const fetchChatMessages = async (userId: string) => {
    try {
      const response = await fetch(`/api/chats/${userId}`);
      const data = await safeJsonParse(response);
      
      if (data.success) {
        setMessages(data.chat.messages || []);
        // Mark messages as read
        if (socket) {
          socket.emit('markMessagesAsRead', { userId });
        }
      }
    } catch (error: unknown) {
      console.error('Error fetching chat messages:', error);
    }
  };

  // Fetch queue status
  const fetchQueueStatus = async () => {
    try {
      const response = await fetch('/api/queue/status');
      const data = await safeJsonParse(response);
      
      if (data.success) {
        setQueueStatus(data);
      }
    } catch (error: unknown) {
      console.error('Error fetching queue status:', error);
    }
  };

  useEffect(() => {
    fetchChats();
    fetchQueueStatus();
    const interval = setInterval(() => {
      fetchChats();
      fetchQueueStatus();
    }, 5000);
    return () => clearInterval(interval);
  }, [statusFilter]);

  useEffect(() => {
    // Update ref whenever selectedChat changes
    selectedChatRef.current = selectedChat;
    
    if (selectedChat && socket) {
      // Fetch initial messages first
      fetchChatMessages(selectedChat);
      
      // Join the chat room to receive real-time updates (like WhatsApp)
      socket.emit('joinChat', selectedChat);
      socket.emit('adminJoinChat', selectedChat);
      console.log(`📥 Agent joined chat room for real-time messages: ${selectedChat}`);
      
      // Cleanup: leave chat when switching to another chat
      return () => {
        socket.emit('adminLeaveChat', selectedChat);
      };
    }
  }, [selectedChat, socket]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isUserTyping]);

  const sendMessage = async () => {
    if (!socket || !inputMessage.trim() || !selectedChat || !isConnected) return;

    const messageData = {
      userId: selectedChat,
      message: inputMessage.trim(),
      sender: 'admin' as const,
    };

    // Optimistically add message to UI
    const tempMessage: Message = {
      message: inputMessage.trim(),
      sender: 'admin',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, tempMessage]);

    socket.emit('chatMessage', messageData);
    setInputMessage('');
    setIsAdminTyping(false);

    // Refresh chat list
    setTimeout(() => fetchChats(), 500);
  };

  const handleTyping = (isTyping: boolean) => {
    if (!socket || !selectedChat) return;

    setIsAdminTyping(isTyping);
    socket.emit('typing', {
      userId: selectedChat,
      isTyping,
      sender: 'admin',
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    } else {
      handleTyping(true);
    }
  };

  const formatTime = (timestamp: Date | string) => {
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
    });
  };

  const filteredChats = chats.filter((chat) => {
    return chat.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
           chat.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
           chat.userPhone?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Sort chats: unread first, then by last activity
  const sortedChats = [...filteredChats].sort((a, b) => {
    if (a.unreadCount && !b.unreadCount) return -1;
    if (!a.unreadCount && b.unreadCount) return 1;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  // Get status badge color
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      case 'inactive':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const selectedChatData = chats.find((c) => c.userId === selectedChat);
  const isAssignedToMe = selectedChatData?.assignedTo === agentId;
  const isInQueue = queueStatus?.queuedChats?.some(q => q.userId === selectedChat) || false;

  // Handle accepting a queued chat
  const handleAcceptChat = () => {
    if (socket && selectedChat) {
      socket.emit('agentAcceptChat', { userId: selectedChat });
    }
  };

  // Handle releasing a chat
  const handleReleaseChat = () => {
    if (socket && selectedChat) {
      socket.emit('agentReleaseChat', { userId: selectedChat });
      setSelectedChat(null);
      setMessages([]);
    }
  };

  // Handle availability toggle
  const handleToggleAvailability = () => {
    if (!socket) return;
    
    const newAvailability = !isAvailable;
    setIsAvailable(newAvailability);
    localStorage.setItem('agentAvailability', newAvailability.toString());
    
    socket.emit('agentSetAvailability', { isAvailable: newAvailability });
  };

  // Handle closing a chat
  const handleCloseChat = async () => {
    if (!selectedChat) {
      console.warn('No chat selected');
      return;
    }
    
    console.log('Closing chat:', selectedChat);
    
    try {
      const response = await fetch(`/api/chats/${selectedChat}/close`, {
        method: 'PUT',
      });
      
      console.log('Close chat response status:', response.status);
      
      const data = await safeJsonParse(response);
      console.log('Close chat response data:', data);
      
      if (data.success) {
        if (socket) {
          socket.emit('agentCloseChat', { userId: selectedChat });
        }
        // Refresh chats to update status
        await fetchChats();
        // Also refresh the current chat data
        if (selectedChat) {
          await fetchChatMessages(selectedChat);
        }
      } else {
        console.error('Failed to close chat:', data.error);
        alert(data.error || 'Failed to close chat');
      }
    } catch (error) {
      console.error('Error closing chat:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`Error closing chat: ${errorMessage}`);
    }
  };

  // Handle reopening a chat
  const handleReopenChat = async () => {
    if (!selectedChat) return;
    
    try {
      const response = await fetch(`/api/chats/${selectedChat}/reopen`, {
        method: 'PUT',
      });
      
      const data = await safeJsonParse(response);
      if (data.success) {
        if (socket) {
          socket.emit('agentReopenChat', { userId: selectedChat });
        }
        await fetchChats();
        if (selectedChat) {
          await fetchChatMessages(selectedChat);
        }
      } else {
        console.error('Failed to reopen chat:', data.error);
        alert(data.error || 'Failed to reopen chat');
      }
    } catch (error) {
      console.error('Error reopening chat:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`Error reopening chat: ${errorMessage}`);
    }
  };

  // Handle marking messages as read
  const handleMarkAsRead = async () => {
    if (!selectedChat) return;
    
    try {
      const response = await fetch(`/api/chats/${selectedChat}/mark-read`, {
        method: 'PUT',
      });
      
      const data = await safeJsonParse(response);
      if (data.success) {
        if (socket) {
          socket.emit('markMessagesAsRead', { userId: selectedChat });
        }
        await fetchChats();
        await fetchChatMessages(selectedChat);
      } else {
        console.error('Failed to mark messages as read:', data.error);
        alert(data.error || 'Failed to mark messages as read');
      }
    } catch (error) {
      console.error('Error marking messages as read:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`Error marking messages as read: ${errorMessage}`);
    }
  };

  // Handle mark all as read
  const handleMarkAllAsRead = async () => {
    try {
      const unreadChats = chats.filter(chat => chat.unreadCount && chat.unreadCount > 0);
      
      const results = await Promise.allSettled(
        unreadChats.map(async (chat) => {
          const response = await fetch(`/api/chats/${chat.userId}/mark-read`, { method: 'PUT' });
          const data = await safeJsonParse(response);
          if (!data.success) {
            throw new Error(data.error || 'Failed to mark as read');
          }
          return data;
        })
      );
      
      // Check if any failed
      const failed = results.filter(r => r.status === 'rejected');
      if (failed.length > 0) {
        console.warn(`${failed.length} chats failed to mark as read`);
      }
      
      await fetchChats();
    } catch (error) {
      console.error('Error marking all as read:', error);
      alert('Error marking all as read. Please check console for details.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-screen flex flex-col">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Assigned Chats</h1>
              <p className="text-gray-600 text-sm mt-1">
                View and manage chats assigned to you
              </p>
            </div>
            <div className="flex items-center gap-4">
              {queueStatus && (
                <div className="flex items-center gap-3 text-sm">
                  <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    <span className="font-semibold">{queueStatus.queueLength}</span> in queue
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    <span className="font-semibold">{queueStatus.availableAgents}</span> agents available
                  </div>
                  <div className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
                    <span className="font-semibold">{assignedChats.length}</span> assigned to me
                  </div>
                </div>
              )}
              
              {/* Availability Toggle */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg">
                <span className="text-sm text-gray-700 font-medium">Status:</span>
                <button
                  onClick={handleToggleAvailability}
                  disabled={!isConnected}
                  className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${
                    isAvailable
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isAvailable ? (
                    <>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-semibold">Available</span>
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-semibold">Away</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    isConnected ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
                <span className="text-sm text-gray-600">
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </div>

              {/* Agent Info and Logout */}
              <div className="flex items-center gap-3 pl-4 border-l border-gray-300">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {agentName}
                  </div>
                  <div className="text-xs text-gray-500">
                    {agentEmail}
                  </div>
                </div>
                <button
                  onClick={() => {
                    // Clear agent data and redirect to login
                    localStorage.removeItem('agentData');
                    localStorage.removeItem('agentId');
                    localStorage.removeItem('agentName');
                    localStorage.removeItem('agentEmail');
                    localStorage.removeItem('adminAgentId');
                    if (socket) {
                      socket.disconnect();
                    }
                    window.location.href = '/agent/login';
                  }}
                  className="px-3 py-1.5 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                  title="Logout"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Chat List */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search chats..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
              
              {/* Status Filter Tabs */}
              <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                    statusFilter === 'all'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setStatusFilter('active')}
                  className={`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                    statusFilter === 'active'
                      ? 'bg-white text-green-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setStatusFilter('closed')}
                  className={`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                    statusFilter === 'closed'
                      ? 'bg-white text-gray-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Closed
                </button>
              </div>

              {/* Mark All as Read Button */}
              {chats.some(chat => chat.unreadCount && chat.unreadCount > 0) && (
                <button
                  onClick={handleMarkAllAsRead}
                  className="w-full px-3 py-1.5 text-xs bg-blue-50 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Mark All as Read
                </button>
              )}
            </div>
            <div className="flex-1 overflow-y-auto">
              {loading ? (
                <div className="p-4 text-center text-gray-500">Loading chats...</div>
              ) : sortedChats.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="text-gray-400 mb-2 flex justify-center">
                    <Image
                      src="/favicon.png"
                      alt="Boxypack"
                      width={48}
                      height={48}
                      className="opacity-50"
                    />
                  </div>
                  <p className="text-gray-600 font-medium mb-1">No assigned chats</p>
                  <p className="text-sm text-gray-500">New chats will be automatically assigned to you when available</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {sortedChats.map((chat) => (
                    <button
                      key={chat.userId}
                      onClick={() => setSelectedChat(chat.userId)}
                      className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                        selectedChat === chat.userId
                          ? 'bg-blue-50 border-l-4 border-blue-600'
                          : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold text-gray-900 truncate">
                              {chat.userName || chat.userId}
                            </div>
                            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${getStatusBadgeColor(chat.status || 'active')}`}>
                              {chat.status || 'active'}
                            </span>
                          </div>
                          {chat.lastMessage && (
                            <p className="text-sm text-gray-600 mt-1 truncate">
                              {chat.lastMessage.message}
                            </p>
                          )}
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-xs text-gray-400">
                              {formatDate(chat.updatedAt)}
                            </p>
                            {chat.messageCount > 0 && (
                              <span className="text-xs text-gray-400">
                                • {chat.messageCount} messages
                              </span>
                            )}
                          </div>
                        </div>
                        {chat.unreadCount && chat.unreadCount > 0 && (
                          <span className="ml-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">
                            {chat.unreadCount}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 bg-white flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div>
                          <h2 className="font-semibold text-gray-900">
                            Chat with {selectedChatData?.userName || selectedChat}
                          </h2>
                          {selectedChatData?.userName && selectedChatData?.userPhone && (
                            <p className="text-xs text-gray-500 mt-0.5">
                              Phone: {selectedChatData.userPhone}
                            </p>
                          )}
                        </div>
                        {isInQueue && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">
                            In Queue
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {messages.length} message{messages.length !== 1 ? 's' : ''}
                        {selectedChatData?.status && (
                          <span className="ml-2">
                            • Status: <span className={`capitalize px-2 py-0.5 rounded text-xs font-semibold ${getStatusBadgeColor(selectedChatData.status)}`}>
                              {selectedChatData.status}
                            </span>
                          </span>
                        )}
                        {selectedChatData?.unreadCount && selectedChatData.unreadCount > 0 && (
                          <span className="ml-2 text-blue-600 font-semibold">
                            • {selectedChatData.unreadCount} unread
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {isInQueue && !isAssignedToMe && (
                        <button
                          onClick={handleAcceptChat}
                          className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-xs rounded-lg transition-colors flex items-center gap-1"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Accept
                        </button>
                      )}
                      {isAssignedToMe && (
                        <button
                          onClick={handleReleaseChat}
                          className="px-3 py-1.5 bg-gray-500 hover:bg-gray-600 text-white text-xs rounded-lg transition-colors flex items-center gap-1"
                        >
                          <X className="w-4 h-4" />
                          Release
                        </button>
                      )}
                      
                      {/* Mark as Read */}
                      {selectedChatData?.unreadCount && selectedChatData.unreadCount > 0 && (
                        <button
                          onClick={handleMarkAsRead}
                          className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded-lg transition-colors flex items-center gap-1"
                          title="Mark all messages as read"
                        >
                          <CheckCheck className="w-4 h-4" />
                          Mark Read
                        </button>
                      )}
                      
                      {/* Close/Reopen Chat */}
                      {selectedChatData?.status === 'closed' ? (
                        <button
                          onClick={handleReopenChat}
                          className="px-3 py-1.5 bg-gray-500 hover:bg-gray-600 text-white text-xs rounded-lg transition-colors flex items-center gap-1"
                          title="Reopen chat"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Reopen
                        </button>
                      ) : (
                        <button
                          onClick={handleCloseChat}
                          className="px-3 py-1.5 bg-gray-500 hover:bg-gray-600 text-white text-xs rounded-lg transition-colors flex items-center gap-1"
                          title="Close chat"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Close
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                  {messages.length === 0 ? (
                    <div className="text-center text-gray-500 mt-8">
                      <div className="flex justify-center mb-2">
                        <Image
                          src="/favicon.png"
                          alt="Boxypack"
                          width={48}
                          height={48}
                          className="opacity-50"
                        />
                      </div>
                      <p>No messages yet. Start the conversation!</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {messages.map((msg, index) => (
                        <div
                          key={index}
                          className={`flex ${
                            msg.sender === 'admin' ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg px-4 py-2 ${
                              msg.sender === 'admin'
                                ? 'bg-blue-600 text-white'
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
                                        <span className="text-xs truncate">{att.name}</span>
                                      </a>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                            <p className="text-sm whitespace-pre-line">{msg.message}</p>
                            <div className="flex items-center justify-between mt-1">
                              <p
                                className={`text-xs ${
                                  msg.sender === 'admin'
                                    ? 'text-blue-100'
                                    : 'text-gray-500'
                                }`}
                              >
                                {formatTime(msg.timestamp)}
                              </p>
                              {msg.sender === 'admin' && (
                                <div className="flex items-center gap-1 ml-2" title={msg.read ? 'Read' : 'Sent'}>
                                  {msg.read ? (
                                    <CheckCheck className="w-3 h-3 text-blue-200" />
                                  ) : (
                                    <CheckCircle className="w-3 h-3 text-blue-200 opacity-50" />
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* User Typing Indicator */}
                      {isUserTyping && (
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 border border-gray-200 rounded-lg px-4 py-2">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                              <span className="ml-2 text-xs text-gray-500">User is typing...</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="border-t border-gray-200 p-4 bg-white">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      onBlur={() => handleTyping(false)}
                      placeholder="Type your message..."
                      disabled={!isConnected}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!isConnected || !inputMessage.trim()}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/favicon.png"
                      alt="Boxypack"
                      width={64}
                      height={64}
                      className="opacity-50"
                    />
                  </div>
                  <p className="text-lg font-medium">Select a chat to view messages</p>
                  <p className="text-sm mt-2">Choose a conversation from the list to start replying</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;

