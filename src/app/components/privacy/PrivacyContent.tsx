'use client';

import React from 'react';
import { Shield, Eye, Database, Users, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const PrivacyContent: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Last Updated */}
        <div className="mb-8 p-4 bg-[var(--color-turquoise-bright)]/10 rounded-lg border-l-4 border-[var(--color-turquoise-bright)]">
          <div className="flex items-center text-sm text-[var(--color-teal-deep)]">
            <Clock className="w-4 h-4 mr-2" />
            <span className="font-semibold">Last Updated:</span>
            <span className="ml-2">December 15, 2024</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold text-heading-primary mb-6">Introduction</h2>
          <div className="prose prose-lg max-w-none text-body-primary">
            <p>
              Welcome to Boxypack! This Privacy Policy describes how we collect, use, and protect your personal information 
              when you visit our website, use our services, or interact with us. We are committed to maintaining the privacy 
              and security of your personal information.
            </p>
            <p>
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold text-heading-primary mb-6 flex items-center">
            <Database className="w-8 h-8 mr-3 text-[var(--color-teal-deep)]" />
            Information We Collect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[var(--color-turquoise-bright)]" />
                  Personal Information
                </h3>
                <ul className="space-y-2 text-body-primary">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Name and contact information
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Email address and phone number
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Billing and shipping addresses
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Company information (if applicable)
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4 flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-[var(--color-brown-golden)]" />
                  Usage Information
                </h3>
                <ul className="space-y-2 text-body-primary">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Website usage and browsing patterns
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Device information and IP address
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Cookies and similar technologies
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Communication preferences
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-[var(--color-brown-rustic)]" />
                  Business Information
                </h3>
                <ul className="space-y-2 text-body-primary">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Project specifications and requirements
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Design files and artwork
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Order history and preferences
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Payment information (processed securely)
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-lg border border-[var(--color-turquoise-bright)]/20">
                <h3 className="text-h4 font-semibold text-[var(--color-teal-deep)] mb-4">
                  We Never Collect
                </h3>
                <ul className="space-y-2 text-body-primary">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    Social Security Numbers
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    Financial account details
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    Sensitive personal data without consent
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold text-heading-primary mb-6">How We Use Your Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[var(--color-turquoise-bright)]/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[var(--color-turquoise-bright)]" />
              </div>
              <h3 className="text-h4 font-semibold text-heading-secondary mb-3">Service Delivery</h3>
              <p className="text-body-primary text-sm">
                Process orders, provide customer support, and deliver our packaging solutions.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[var(--color-teal-deep)]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[var(--color-teal-deep)]" />
              </div>
              <h3 className="text-h4 font-semibold text-heading-secondary mb-3">Communication</h3>
              <p className="text-body-primary text-sm">
                Send updates, respond to inquiries, and provide important service notifications.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[var(--color-brown-golden)]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[var(--color-brown-golden)]" />
              </div>
              <h3 className="text-h4 font-semibold text-heading-secondary mb-3">Improvement</h3>
              <p className="text-body-primary text-sm">
                Analyze usage patterns to improve our services and develop new features.
              </p>
            </div>
          </div>
        </div>

        {/* Data Protection */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold text-heading-primary mb-6">Data Protection & Security</h2>
          <div className="bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4">Security Measures</h3>
                <ul className="space-y-3 text-body-primary">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>SSL encryption for all data transmission</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Secure servers with regular security updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Access controls and authentication protocols</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Regular security audits and monitoring</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4">Your Rights</h3>
                <ul className="space-y-3 text-body-primary">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Access and review your personal data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Request corrections or updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Request data deletion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Opt-out of marketing communications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold text-heading-primary mb-6">Contact Us</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4">Privacy Questions</h3>
                <p className="text-body-primary mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[var(--color-teal-deep)] mr-3" />
                    <span className="text-body-primary">privacy@boxypack.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[var(--color-teal-deep)] mr-3" />
                    <span className="text-body-primary">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[var(--color-teal-deep)] mr-3 mt-1" />
                    <span className="text-body-primary">
                      123 Packaging Street<br />
                      Design City, DC 12345
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4">Response Time</h3>
                <p className="text-body-primary mb-4">
                  We typically respond to privacy-related inquiries within 48 hours during business days.
                </p>
                <div className="p-4 bg-[var(--color-turquoise-bright)]/10 rounded-lg">
                  <p className="text-sm text-[var(--color-teal-deep)] font-medium">
                    For urgent privacy concerns, please call us directly or mark your email as &quot;URGENT - Privacy Concern.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Changes to Policy */}
        <div className="mb-8">
          <h2 className="text-h2 font-bold text-heading-primary mb-6">Changes to This Policy</h2>
          <div className="prose prose-lg max-w-none text-body-primary">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this Privacy 
              Policy periodically for any changes.
            </p>
            <p>
              Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of our 
              services after any changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;
