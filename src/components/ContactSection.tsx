import React, { useState } from 'react';
import { toast } from 'sonner';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyRole: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      companyRole: '',
      message: ''
    });
    setIsSubmitting(false);
  };
  return <section id="contact" className="py-20 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="group">
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" placeholder="Your name" />
              </div>

              {/* Email Input */}
              <div className="group">
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" placeholder="your.email@example.com" />
              </div>
          </div>{/* Company/Role Input */}
          <div className="group md:col-span-2">
                <label htmlFor="companyRole" className="block text-white font-semibold mb-2">
                  Company / Role
                </label>
            <input type="text" id="companyRole" name="companyRole" value={formData.companyRole} onChange={handleChange} required
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
 placeholder="Company name or role (e.g. HR, CTO, etc.)"/>
            </div>

            {/* Message Input */}
            <div className="group">
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none" placeholder="Tell me about your project..." />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" disabled={isSubmitting} className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed">
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:alex@example.com" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">noureldimahmoud02@example.com</a>
            <span className="hidden sm:block text-gray-600">•</span>
            <a href="tel:+1234567890" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">+20 10 0885 6582</a>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;