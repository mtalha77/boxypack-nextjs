'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    projectType: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-teal-deep)] mb-6">
            Let&apos;s Create Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our packaging experts. We&apos;re here to help bring your vision to life with custom packaging solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-teal-deep)] mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Ready to start your packaging project? Our team of experts is standing by to help you create the perfect packaging solution for your brand.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-turquoise-bright)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-teal-deep)] text-lg mb-1">Call Us</h4>
                  <p className="text-gray-600 mb-2">Speak directly with our packaging specialists</p>
                  <a href="tel:1-800-725-9660" className="text-[var(--color-turquoise-bright)] font-semibold hover:text-[var(--color-teal-deep)] transition-colors">
                    1-800-725-9660
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-teal-deep)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-teal-deep)] text-lg mb-1">Email Us</h4>
                  <p className="text-gray-600 mb-2">Send us your project details and requirements</p>
                  <a href="mailto:hello@boxypack.com" className="text-[var(--color-turquoise-bright)] font-semibold hover:text-[var(--color-teal-deep)] transition-colors">
                    hello@boxypack.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-brown-golden)] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-teal-deep)] text-lg mb-1">Visit Us</h4>
                  <p className="text-gray-600 mb-2">Come see our facility and capabilities</p>
                  <p className="text-gray-700">
                    123 Packaging Street<br />
                    BoxyPack City, PC 12345
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-2xl border border-[var(--color-turquoise-bright)]/10">
                <div className="w-12 h-12 bg-[var(--color-brown-rustic)] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-teal-deep)] text-lg mb-1">Business Hours</h4>
                  <p className="text-gray-600 mb-2">We&apos;re here when you need us</p>
                  <div className="text-gray-700 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-[var(--color-teal-deep)] mb-6">
              Request a Free Quote
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h4>
                <p className="text-gray-600">Your message has been sent. We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
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
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
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
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-turquoise-bright)] focus:border-transparent transition-all duration-200"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-turquoise-bright)] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a project type</option>
                    <option value="mailer-boxes">Mailer Boxes</option>
                    <option value="product-boxes">Product Boxes</option>
                    <option value="rigid-boxes">Rigid Boxes</option>
                    <option value="shipping-boxes">Shipping Boxes</option>
                    <option value="pouches">Pouches</option>
                    <option value="shopping-bags">Shopping Bags</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-turquoise-bright)] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your packaging needs, quantity, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--color-brown-rustic)] hover:bg-[#97602f] text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Free Quote Request</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                    * Required fields. We&apos;ll respond within 24 hours with your custom quote.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center rounded-3xl p-12" style={{
          background: 'linear-gradient(135deg, rgba(12, 166, 194, 0.1) 0%, rgba(12, 107, 118, 0.1) 100%)',
          backgroundColor: '#f8fafc'
        }}>
          <h3 className="text-3xl font-bold text-[var(--color-teal-deep)] mb-4">
            Need Help Choosing?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our packaging experts are here to guide you through the process and help you find the perfect solution for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1-800-725-9660"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brown-rustic)] hover:bg-[#97602f] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 1-800-725-9660
            </a>
            <a
              href="mailto:hello@boxypack.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white font-semibold rounded-full transition-all duration-300 cursor-pointer"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
