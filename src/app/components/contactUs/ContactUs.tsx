"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
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
    <section id="contact-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Text Content */}
          <div id="contact-info" className="space-y-8 scroll-perfect">
            {/* Header */}
            <div id="contact-header" className="scroll-perfect">
              <h2 className="text-h2 text-heading-secondary mb-6">
                Custom Boxes That Build Trust And Growth
              </h2>
              <p className="text-body-large text-body-secondary">
                Our boxes give strength, style, and clear branding. Each box
                design supports your products while helping your business grow
                with lasting customer trust and recognition.
              </p>
            </div>

            <div>
              <h3 className="text-h3 text-heading-secondary mb-6">
                Get In Touch
              </h3>
              <p className="text-body text-body-secondary mb-8">
                Reach out today for quick answers. Our friendly team guides
                every step, making custom box orders simple and stress-free.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            id="contact-form"
            className={`bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl shadow-xl scroll-perfect transition-all duration-1000 ${
              isHighlighted
                ? "ring-4 ring-[#0c6b76] ring-opacity-50 shadow-2xl"
                : ""
            }`}
          >
            <h3 className="text-h3 text-heading-secondary mb-6">
              Request a Free Quote
            </h3>

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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-turquoise-bright)] focus:border-transparent transition-all duration-200"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-turquoise-bright)] focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-turquoise-bright)] focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-turquoise-bright)] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Please provide details about your packaging needs: box type, dimensions, quantity, material preference, printing requirements, delivery timeline, and any special instructions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-brown-rustic hover:bg-[#97602f] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 disabled:hover:shadow-lg cursor-pointer flex items-center justify-center space-x-2"
                  >
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
                  </button>

                  <p className="text-caption text-body-muted text-center">
                    * Required fields. We&apos;ll respond within 24 hours with
                    your custom quote.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
