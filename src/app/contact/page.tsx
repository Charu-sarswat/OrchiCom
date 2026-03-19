"use client";

import { useState } from 'react';
import { MessageSquare, MapPin, Phone, Mail as MailIcon } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData)
      });
      if (response.ok) { setStatus('success'); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }
      else setStatus('error');
    } catch (error) { console.error('Submit error:', error); setStatus('error'); }
  };

  const inputCls = "py-[0.9rem] px-[1.2rem] rounded-xl border border-black/10 bg-white/50 font-[inherit] transition-all duration-300 ease outline-none focus:border-secondary focus:bg-white focus:shadow-[0_0_0_4px_rgba(70,198,206,0.1)] w-full";

  return (
    <div className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="mb-[0.8rem] max-[576px]:text-[2.5rem]">Get in <span className="text-gradient">touch</span></h1>
          <p className="text-[#666] text-[1.1rem]">Have questions? We're here to help you with all your laundry needs.</p>
        </div>

        <div className="grid gap-10 min-[992px]:gap-10 grid-cols-1 min-[992px]:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-start p-6 border border-[#e2e8f0] rounded-[20px] bg-white transition-[border-color] duration-200 hover:border-[#18a1d8]">
              <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: 'rgba(70, 198, 206, 0.1)' }}><MapPin size={24} /></div>
              <div>
                <h3 className="text-[1.1rem] mb-2">Our Location</h3>
                <p className="text-[#555] text-[0.95rem] mb-[0.2rem]">Shop No. 3, Priyanka Compound, Near MHADA Colony, Badlapur Pipeline Road, Khoni, Dombivli East - 421204</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 border border-[#e2e8f0] rounded-[20px] bg-white transition-[border-color] duration-200 hover:border-[#18a1d8]">
              <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: 'rgba(70, 198, 206, 0.1)' }}><Phone size={24} /></div>
              <div>
                <h3 className="text-[1.1rem] mb-2">Call Us</h3>
                <p className="text-[#555] text-[0.95rem] mb-[0.2rem]">Orders: 7080803074</p>
                <p className="text-[#555] text-[0.95rem] mb-[0.2rem]">Support: 7080804074</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 border border-[#e2e8f0] rounded-[20px] bg-white transition-[border-color] duration-200 hover:border-[#18a1d8]">
              <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: 'rgba(70, 198, 206, 0.1)' }}><MailIcon size={24} /></div>
              <div>
                <h3 className="text-[1.1rem] mb-2">Email Us</h3>
                <p className="text-[#555] text-[0.95rem] mb-[0.2rem]">Info@theorchidlaundry.com</p>
                <p className="text-[#555] text-[0.95rem] mb-[0.2rem]">care@theorchidlaundry.com</p>
              </div>
            </div>
            
            <a href="https://wa.me/917080803074" target="_blank" rel="noopener noreferrer" className="bg-green-500 py-6 px-8 rounded-[20px] text-white flex items-center gap-6 no-underline transition-all duration-200 hover:-translate-y-[5px] hover:bg-green-600">
              <div className="w-[60px] h-[60px] bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <MessageSquare size={32} fill="white" />
              </div>
              <div>
                <h3 className="text-white mb-[0.2rem] text-[1.4rem] font-extrabold">Chat on WhatsApp</h3>
                <p className="mb-0 opacity-95 text-base">Instant support for your queries</p>
              </div>
            </a>
          </div>

          <div className="relative">
            <h2 className="mb-8 text-[#1e293b]">Send us a message</h2>
            {status === 'success' ? (
              <div className="text-center py-20 px-12 flex flex-col items-center glass-card">
                <div className="text-[4rem] mb-4">✅</div>
                <h2 className="mb-4 font-extrabold">Message Sent!</h2>
                <p className="mb-10 text-[#666] max-w-[400px] leading-[1.6]">Thank you for reaching out. Our team will contact you shortly.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 max-[576px]:p-6 md:p-8 border border-[#e2e8f0] rounded-3xl bg-white glass-card">
                <div className="grid grid-cols-1 min-[576px]:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-[0.6rem] mb-6">
                    <label className="font-semibold text-[0.9rem] text-primary">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-[0.6rem] mb-6">
                    <label className="font-semibold text-[0.9rem] text-primary">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-[0.6rem] mb-6">
                    <label className="font-semibold text-[0.9rem] text-primary">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="708080XXXX" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-[0.6rem] mb-6">
                    <label className="font-semibold text-[0.9rem] text-primary">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Dry Cleaning Inquiry" className={inputCls} />
                  </div>
                </div>
                <div className="flex flex-col gap-[0.6rem] mb-6">
                  <label className="font-semibold text-[0.9rem] text-primary">Your Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="How can we help you today?" className={inputCls}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && <p className="text-[#ff4d4d] mt-4 text-[0.9rem]">Something went wrong. Please try again.</p>}
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 w-full">
          <iframe 
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4353966186486!2d73.1188939!3d19.1761764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795ca24710af3%3A0x4895fa5fec477883!2sThe%20Orchid%20Laundry%20LLP!5e0!3m2!1sen!2sin!4v1773768246349!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '24px' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
