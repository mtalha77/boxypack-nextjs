"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Phone, MessageCircle, Package, Award, Clock, Users, ArrowRight } from "lucide-react";
import { CldImage } from "next-cloudinary";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle hash scrolling when component mounts
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash === "#contact-section") {
        setTimeout(() => {
          const element = document.getElementById("contact-section");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            // Highlight the form section
            setIsHighlighted(true);
            setTimeout(() => setIsHighlighted(false), 3000);
            // Focus on the form after scrolling
            setTimeout(() => {
              const nameInput = document.getElementById("name");
              if (nameInput) {
                nameInput.focus();
              }
            }, 1000);
          }
        }, 100);
      }
    };

    // Handle initial load
    handleHashScroll();

    // Handle hash changes
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // EmailJS configuration - these should be set in your .env file
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      console.log("EmailJS Config:", {
        serviceId: serviceId ? `${serviceId.substring(0, 8)}...` : "missing",
        templateId: templateId ? `${templateId.substring(0, 8)}...` : "missing",
        publicKey: publicKey ? `${publicKey.substring(0, 8)}...` : "missing",
      });

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      // Validate form data before sending
      console.log("📋 Form Data Before Processing:", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      // Ensure all fields have values and convert to strings explicitly
      const fullName = String(formData.name?.trim() || "Not provided");
      const email = String(formData.email?.trim() || "Not provided");
      const phone = String(formData.phone?.trim() || "Not provided");
      const orderDetails = String(
        formData.message?.trim() || "No message provided"
      );
      const timeValue = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      // Prepare template parameters - matching EmailJS template variable names exactly
      // Using object literal to ensure proper property names
      const templateParams: Record<string, string> = {
        full_name: fullName,
        email: email,
        phone: phone,
        order_details: orderDetails,
        time: timeValue,
      };

      // Debug: Log all parameters being sent with actual values
      console.log("📧 EmailJS Template Parameters Being Sent:", {
        "full_name (value)": templateParams.full_name,
        "email (value)": templateParams.email,
        "phone (value)": templateParams.phone,
        "order_details (value)": templateParams.order_details,
        "time (value)": templateParams.time,
      });

      console.log(
        "📧 Full Template Params Object:",
        JSON.stringify(templateParams, null, 2)
      );

      // Send email via EmailJS - public key is passed as 4th parameter
      // This is the recommended approach for EmailJS v3+
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("EmailJS response:", response);

      // EmailJS returns status 200 on success, but sometimes status can be 0 or undefined
      // Check if response exists and doesn't have an error
      if (!response) {
        throw new Error("No response from EmailJS");
      }

      // Check for error in response
      if (response.status && response.status >= 400) {
        throw new Error(
          response.text || `EmailJS error: Status ${response.status}`
        );
      }

      // Success - show success message
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("EmailJS error details:", {
        error: err,
        errorType: typeof err,
        errorKeys: err && typeof err === "object" ? Object.keys(err) : [],
        errorText:
          err && typeof err === "object" && "text" in err
            ? (err as { text: string }).text
            : null,
        errorMessage: err instanceof Error ? err.message : null,
      });

      // Provide more specific error messages
      let errorMessage =
        "Failed to send message. Please try again or contact us directly.";

      // Check for EmailJS specific error format
      if (err && typeof err === "object") {
        if ("text" in err) {
          errorMessage = `EmailJS Error: ${(err as { text: string }).text}`;
        } else if ("message" in err) {
          errorMessage = (err as { message: string }).message;
        } else if (err instanceof Error) {
          errorMessage = err.message;
        } else {
          errorMessage = `Error: ${JSON.stringify(err)}`;
        }
      } else if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === "string") {
        errorMessage = err;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact-section" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Text Content */}
          <div id="contact-info" className="space-y-8 scroll-perfect">
            {/* Header */}
            <div id="contact-header" className="scroll-perfect">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-[#0c6b76] to-[#0ca6c2] rounded-full"></div>
                <span className="text-sm font-semibold text-[#0c6b76] uppercase tracking-wider">Get In Touch</span>
              </div>
              <h2 className="text-h2 text-heading-secondary mb-6">
                Custom Boxes That Build Trust And Growth
              </h2>
              <p className="text-body-large text-body-secondary">
                Our boxes give strength, style, and clear branding. Each box
                design supports your products while helping your business grow
                with lasting customer trust and recognition.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="group bg-gradient-to-br from-white via-white to-gray-50/50 p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0c6b76]/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-heading-secondary mb-2 text-lg">Fast Response</h4>
                <p className="text-sm text-body-secondary">24-hour response time</p>
              </div>
              
              <div className="group bg-gradient-to-br from-white via-white to-gray-50/50 p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-[#97602F]/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#97602F] to-[#c47a3f] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-heading-secondary mb-2 text-lg">Expert Team</h4>
                <p className="text-sm text-body-secondary">Professional guidance</p>
              </div>
              
              <div className="group bg-gradient-to-br from-white via-white to-gray-50/50 p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-[#0c6b76]/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0c6b76] to-[#0ca6c2] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-heading-secondary mb-2 text-lg">Custom Solutions</h4>
                <p className="text-sm text-body-secondary">Tailored to your needs</p>
              </div>
              
              <div className="group bg-gradient-to-br from-white via-white to-gray-50/50 p-6 rounded-2xl border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-[#97602F]/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-[#97602F] to-[#c47a3f] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-heading-secondary mb-2 text-lg">Dedicated Support</h4>
                <p className="text-sm text-body-secondary">From idea to delivery</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            id="contact-form"
            className={`relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-gray-100 scroll-perfect transition-all duration-1000 ${
              isHighlighted
                ? "ring-4 ring-[#0c6b76] ring-opacity-50 shadow-2xl scale-[1.02] border-[#0c6b76]/30"
                : "hover:border-[#0c6b76]/20 hover:shadow-3xl"
            }`}
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-[#0c6b76]" />
                <span className="text-sm font-semibold text-[#0c6b76] uppercase tracking-wider">Free Quote</span>
              </div>
              <h3 className="text-h3 text-heading-secondary mb-2">
                Request a Free Quote
              </h3>
              <p className="text-body-secondary text-sm">
                Fill out the form below and we&apos;ll get back to you within 24 hours with a custom quote.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-h4 font-semibold text-green-600 mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-600">
                  Your message has been sent. We&apos;ll get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-red-800 mb-1">
                        Error sending message
                      </h4>
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-caption font-semibold text-body-primary mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0c6b76] focus:border-[#0c6b76] transition-all duration-200 shadow-sm hover:shadow-md"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-caption font-semibold text-body-primary mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0c6b76] focus:border-[#0c6b76] transition-all duration-200 shadow-sm hover:shadow-md"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-caption font-semibold text-body-primary mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0c6b76] focus:border-[#0c6b76] transition-all duration-200 shadow-sm hover:shadow-md"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-caption font-semibold text-body-primary mb-2"
                    >
                      Order Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0c6b76] focus:border-[#0c6b76] transition-all duration-200 resize-none shadow-sm hover:shadow-md"
                      placeholder="Please provide details about your packaging needs: box type, dimensions, quantity, material preference, printing requirements, delivery timeline, and any special instructions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full bg-gradient-to-r from-[#0c6b76] via-[#0ca6c2] to-[#0c6b76] bg-size-200 hover:bg-pos-0 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] disabled:hover:scale-100 disabled:hover:shadow-xl cursor-pointer flex items-center justify-center space-x-2 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                    <span className="relative z-10 flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Free Quote Request</span>
                      </>
                    )}
                    </span>
                  </button>
                </form>
              </>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
