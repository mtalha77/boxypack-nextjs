'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import LightBlueBackground from '../../UI/LightBlueBackground';

const RequestQuote: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    quantity: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <LightBlueBackground id="request-quote-section" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0c6b76] mb-6">
                Request Your Custom Box Quote
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Get a clear quote for your custom box needs. Our team reviews your details carefully and shares fair pricing with helpful guidance. We are here to support you at every step.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#0c6b76] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#0c6b76] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">quotes@boxypack.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#0c6b76] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">123 Packaging Street, Design City, DC 12345</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-[#0c6b76] mb-4">Why Choose BoxyPack?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0c6b76] rounded-full"></div>
                  <span>Fast delivery you can trust</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0c6b76] rounded-full"></div>
                  <span>Flexible custom box options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0c6b76] rounded-full"></div>
                  <span>Helpful support for brands</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#0c6b76] rounded-full"></div>
                  <span>Strong quality every time</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Quote Request Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-transparent transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Company & Project Fields */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your Company Inc."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select Type</option>
                    <option value="shipping-boxes">Shipping Boxes</option>
                    <option value="custom-packaging">Custom Packaging</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-transparent transition-all duration-200"
                    placeholder="e.g., 1,000"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project, specifications, timeline, and any special requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-brown-rustic hover:bg-[#97602f] text-white cursor-pointer font-semibold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Request Quote</span>
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </LightBlueBackground>
  );
};

export default RequestQuote;
