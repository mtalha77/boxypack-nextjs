'use client';

import React from 'react';
import { FileText, Scale, Users, CreditCard, Truck, Shield, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const TermsContent: React.FC = () => {
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
          <h2 className="text-h2 font-bold text-heading-primary mb-6">Agreement to Terms</h2>
          <div className="prose prose-lg max-w-none text-body-primary">
            <p>
              These Terms of Use (&quot;Terms&quot;) constitute a legally binding agreement between you and Boxypack 
              (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) regarding your use of our website and services. By accessing 
              or using our services, you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree to these Terms, please do not use our services. We reserve the right to 
              modify these Terms at any time, and your continued use of our services constitutes acceptance 
              of any changes.
            </p>
          </div>
        </div>

        {/* Services Description */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold text-heading-primary mb-6 flex items-center">
            <Truck className="w-8 h-8 mr-3 text-[var(--color-teal-deep)]" />
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-[var(--color-turquoise-bright)]" />
                  Custom Packaging
                </h3>
                <ul className="space-y-2 text-body-primary">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Design and manufacturing of custom boxes
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Printing and branding services
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Material selection and consultation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Prototype development and testing
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-[var(--color-brown-golden)]" />
                  Customer Support
                </h3>
                <ul className="space-y-2 text-body-primary">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Design consultation and advice
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Order tracking and updates
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Technical support and troubleshooting
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Post-delivery assistance
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-[var(--color-brown-rustic)]" />
                  Order Processing
                </h3>
                <ul className="space-y-2 text-body-primary">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Quote generation and pricing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Payment processing and invoicing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Production scheduling and management
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Quality control and inspection
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 rounded-lg border border-[var(--color-turquoise-bright)]/20">
                <h3 className="text-h4 font-semibold text-[var(--color-teal-deep)] mb-4">
                  Service Limitations
                </h3>
                <ul className="space-y-2 text-body-primary">
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    Minimum order quantities may apply
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    Lead times vary by complexity
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    Rush orders subject to availability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* User Responsibilities */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold text-heading-primary mb-6">User Responsibilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[var(--color-turquoise-bright)]/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[var(--color-turquoise-bright)]" />
              </div>
              <h3 className="text-h4 font-semibold text-heading-secondary mb-3">Accurate Information</h3>
              <p className="text-body-primary text-sm">
                Provide accurate and complete information for quotes, orders, and communications.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[var(--color-teal-deep)]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[var(--color-teal-deep)]" />
              </div>
              <h3 className="text-h4 font-semibold text-heading-secondary mb-3">Legal Compliance</h3>
              <p className="text-body-primary text-sm">
                Ensure your designs and content comply with applicable laws and regulations.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[var(--color-brown-golden)]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[var(--color-brown-golden)]" />
              </div>
              <h3 className="text-h4 font-semibold text-heading-secondary mb-3">Timely Communication</h3>
              <p className="text-body-primary text-sm">
                Respond promptly to requests for information and approvals during production.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold text-heading-primary mb-6">Payment Terms</h2>
          <div className="bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4">Payment Schedule</h3>
                <ul className="space-y-3 text-body-primary">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>50% deposit required to start production</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Balance due before shipping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Net 30 terms available for qualified accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Rush orders require full payment upfront</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4">Accepted Methods</h3>
                <ul className="space-y-3 text-body-primary">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Credit cards (Visa, MasterCard, American Express)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Bank transfers and wire transfers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>PayPal and other digital payment methods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Company purchase orders (with approval)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold text-heading-primary mb-6">Intellectual Property</h2>
          <div className="space-y-6">
            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-h4 font-semibold text-heading-secondary mb-4">Your Content</h3>
              <p className="text-body-primary mb-4">
                You retain ownership of all designs, artwork, and content you provide to us. By submitting content, 
                you grant us a license to use it solely for the purpose of fulfilling your order and providing our services.
              </p>
              <div className="bg-[var(--color-turquoise-bright)]/10 p-4 rounded-lg">
                <p className="text-sm text-[var(--color-teal-deep)] font-medium">
                  We will never use your designs for other customers without your explicit permission.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-h4 font-semibold text-heading-secondary mb-4">Our Content</h3>
              <p className="text-body-primary mb-4">
                All website content, designs, processes, and materials created by Boxypack remain our intellectual property.{" "}
                This includes our website design, packaging templates, and proprietary manufacturing processes.
              </p>
            </div>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold text-heading-primary mb-6">Limitation of Liability</h2>
          <div className="bg-gradient-to-r from-[var(--color-turquoise-bright)]/5 to-[var(--color-teal-deep)]/5 p-8 rounded-lg">
            <div className="space-y-4 text-body-primary">
              <p>
                To the maximum extent permitted by law, Boxypack&apos;s liability for any claims arising from our services 
                is limited to the amount you paid for the specific order in question.
              </p>
              <p>
                We are not liable for any indirect, incidental, special, or consequential damages, including but not 
                limited to loss of profits, data, or business opportunities.
              </p>
              <p>
                This limitation applies regardless of the legal theory on which the claim is based, whether in contract, 
                tort, or otherwise.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-h2 font-bold text-heading-primary mb-6">Contact Information</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4">Legal Questions</h3>
                <p className="text-body-primary mb-4">
                  If you have any questions about these Terms of Use or need legal clarification, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[var(--color-teal-deep)] mr-3" />
                    <span className="text-body-primary">legal@boxypack.com</span>
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
                <h3 className="text-h4 font-semibold text-heading-secondary mb-4">General Inquiries</h3>
                <p className="text-body-primary mb-4">
                  For general questions about our services or orders, please use our main contact channels.
                </p>
                <div className="p-4 bg-[var(--color-turquoise-bright)]/10 rounded-lg">
                  <p className="text-sm text-[var(--color-teal-deep)] font-medium">
                    Our customer service team is available Monday-Friday, 9 AM - 6 PM EST.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Governing Law */}
        <div className="mb-8">
          <h2 className="text-h2 font-bold text-heading-primary mb-6">Governing Law</h2>
          <div className="prose prose-lg max-w-none text-body-primary">
            <p>
              These Terms of Use are governed by and construed in accordance with the laws of the State of Delaware, 
              without regard to its conflict of law principles. Any disputes arising from these Terms or our services 
              will be resolved in the courts of Delaware.
            </p>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in 
              full force and effect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsContent;
