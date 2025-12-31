import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Mail, MapPin, Phone, Send, Mic } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-16">
      <div className="container-narrow">
        <SectionHeading title="Contact" />

        {/* Activities & Invitation Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-xl p-6 md:p-8 border border-burgundy-100">
            <div className="flex items-center mb-4">
              <Mic className="text-burgundy-800 mr-3" size={28} />
              <h3 className="text-2xl font-serif font-bold text-burgundy-800">Activities & Speaking</h3>
            </div>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Dr. Ali has founded and continues to direct major international conferences including the
              Harvard Islamic Finance Conference (29+ years), the HBKU International Conference on Islamic
              Finance, and collaborative workshops and annual Islamic finance events with LSE and SOAS
              University of London.
            </p>
            <div className="bg-white rounded-lg p-4 border border-cream-200">
              <h4 className="font-semibold text-burgundy-800 mb-2">Invitation Requests</h4>
              <p className="text-slate-600 text-sm">
                Dr. Ali is available for select activities and engagements on topics related to Islamic
                finance, ethical banking, and information systems in financial institutions. Use the form below to submit your request.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800">Get in Touch</h3>
            <p className="text-slate-700 mb-8 leading-relaxed">
              For academic inquiries, activity requests, or collaboration opportunities,
              please use the contact form or reach out directly using the information below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-navy-100 rounded-full p-3 mr-4">
                  <Mail className="text-navy-700" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-800 mb-1">Email</h4>
                  <p className="text-slate-600">snnali@outlook.com</p>
                  <p className="text-slate-600">ifpnazimali@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-100 rounded-full p-3 mr-4">
                  <Phone className="text-navy-700" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-800 mb-1">Mobile</h4>
                  <p className="text-slate-600">+1 774 434 0812</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-100 rounded-full p-3 mr-4">
                  <MapPin className="text-navy-700" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-navy-800 mb-1">Address</h4>
                  <p className="text-slate-600">
                    119 Chauncy Street<br />
                    Mansfield, MA 02048, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-slate-700 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-700 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-slate-700 mb-1">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-slate-700 mb-1">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all"
                >
                  <option value="">Please select...</option>
                  <option value="Academic Inquiry">Academic Inquiry</option>
                  <option value="Activity Request">Activity Request</option>
                  <option value="Research Collaboration">Research Collaboration</option>
                  <option value="Media Interview">Media Interview</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-700 mb-1">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`btn-primary w-full flex justify-center items-center ${
                    formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" /> Send Message
                    </>
                  )}
                </button>
                
                {formStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md">
                    Your message has been sent successfully. Thank you for reaching out!
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;