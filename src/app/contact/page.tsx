"use client";

import { useState } from 'react';
import { MessageSquare, MapPin, Phone, Mail as MailIcon } from 'lucide-react';
import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

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
    <>
    <div className="section-padding bg-[#f8fafc] py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16 px-4">
          <h1 className="text-[2rem] md:text-[3.2rem] text-black font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="max-w-[700px] mx-auto text-[1.1rem] text-[#444]">
            Have questions? We're here to help you with all your laundry and dry cleaning needs.
          </p>
        </div>

        <div className="grid gap-10 lg:gap-16 grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-start p-8 border border-[#e2e8f0] rounded-[30px] bg-white transition-all duration-400 hover:border-primary/30 shadow-none">
              <div className="w-[55px] h-[55px] rounded-2xl flex items-center justify-center text-primary shrink-0" style={{ background: 'rgba(24, 161, 216, 0.1)' }}><MapPin size={26} /></div>
              <div>
                <h3 className="text-[1.25rem] font-bold text-black mb-2">Our Location</h3>
                <p className="text-[#444] text-[1rem] leading-relaxed">Shop No. 3, Priyanka Compound, Near MHADA Colony, Badlapur Pipeline Road, Khoni, Dombivli East - 421204</p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-8 border border-[#e2e8f0] rounded-[30px] bg-white transition-all duration-400 hover:border-primary/30 shadow-none">
              <div className="w-[55px] h-[55px] rounded-2xl flex items-center justify-center text-primary shrink-0" style={{ background: 'rgba(24, 161, 216, 0.1)' }}><Phone size={26} /></div>
              <div>
                <h3 className="text-[1.25rem] font-bold text-black mb-2">Call Us</h3>
                <p className="text-[#444] text-[1rem] leading-relaxed mb-1">Orders: <span className="font-bold">7080803074</span></p>
                <p className="text-[#444] text-[1rem] leading-relaxed">Support: <span className="font-bold">7080804074</span></p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-8 border border-[#e2e8f0] rounded-[30px] bg-white transition-all duration-400 hover:border-primary/30 shadow-none">
              <div className="w-[55px] h-[55px] rounded-2xl flex items-center justify-center text-primary shrink-0" style={{ background: 'rgba(24, 161, 216, 0.1)' }}><MailIcon size={26} /></div>
              <div>
                <h3 className="text-[1.25rem] font-bold text-black mb-2">Email Us</h3>
                <p className="text-[#444] text-[1rem] leading-relaxed mb-1">Info@theorchidlaundry.com</p>
                <p className="text-[#444] text-[1rem] leading-relaxed">care@theorchidlaundry.com</p>
              </div>
            </div>
            
            <a href="https://wa.me/917080803074" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-8 rounded-[30px] text-white flex items-center gap-8 no-underline transition-all duration-400 hover:-translate-y-2 shadow-none group">
              <div className="w-[70px] h-[70px] bg-white/20 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                <MessageSquare size={36} fill="white" />
              </div>
              <div>
                <h3 className="text-white mb-1 text-[1.4rem] font-bold">Chat on WhatsApp</h3>
                <p className="mb-0 opacity-90 text-[1rem]">Instant support for your queries</p>
              </div>
            </a>
          </div>

          <div className="relative">
            <h2 className="mb-8 text-[1.8rem] md:text-[2.2rem] text-black font-bold">Send Us a <span className="text-gradient">Message</span></h2>
            {status === 'success' ? (
              <div className="text-center py-24 px-12 flex flex-col items-center bg-white border border-[#e2e8f0] rounded-[40px]">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-[2.5rem] mb-6">✅</div>
                <h2 className="mb-4 font-bold text-[2rem] text-black">Message Sent!</h2>
                <p className="mb-10 text-[#444] max-w-[400px] text-[1.1rem] leading-relaxed">Thank you for reaching out. Our team will contact you shortly regarding your inquiry.</p>
                <button onClick={() => setStatus('idle')} className="bg-primary text-white py-4 px-10 rounded-xl font-bold text-[1rem] hover:opacity-90 transition-all">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-12 border border-[#e2e8f0] rounded-[40px] bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col gap-2.5">
                    <label className="font-bold text-[0.95rem] text-black ml-1 uppercase tracking-wider">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="font-bold text-[0.95rem] text-black ml-1 uppercase tracking-wider">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col gap-2.5">
                    <label className="font-bold text-[0.95rem] text-black ml-1 uppercase tracking-wider">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="708080XXXX" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="font-bold text-[0.95rem] text-black ml-1 uppercase tracking-wider">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Dry Cleaning Inquiry" className={inputCls} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 mb-10">
                  <label className="font-bold text-[0.95rem] text-black ml-1 uppercase tracking-wider">Your Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="How can we help you today?" className={inputCls}></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-5 rounded-[20px] font-bold text-[1.1rem] transition-all hover:bg-primary/90 hover:scale-[1.01]" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && <p className="text-[#ef4444] mt-5 text-center font-bold">Something went wrong. Please try again.</p>}
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
      
      {/* Global FAQ Section */}
      <GlobalFAQ faqs={contactFaqs} />
    </>
  );
};

const contactFaqs = [
  {
    question: "How fast do you respond to WhatsApp inquiries?",
    answer: "Our dedicated support team is incredibly responsive. During our standard business hours (8 AM - 9 PM), you can expect a reply within 5 to 10 minutes regarding any order or service inquiry."
  },
  {
    question: "Who can I contact if there is an issue with my recent delivery?",
    answer: "You can instantly reach our customer care via the 'Support' hotline listed above (7080804074), or safely message us directly from the WhatsApp button on the bottom right of the screen for an immediate resolution."
  },
  {
    question: "Do you entertain enterprise or B2B contracts?",
    answer: "Yes, we actively provide high-volume and specialized laundry care for local hotels, boutique clinics, and commercial enterprises. Please email Info@theorchidlaundry.com with your exact requirements for a custom B2B rate sheet."
  },
  {
    question: "Can I drop off my clothes physically at your facility?",
    answer: "While we highly encourage our free doorstep pickup service for your ultimate convenience, you are more than welcome to drop off your garments at our Dombivli East facility during regular working hours."
  },
  {
    question: "What are your customer support operational hours?",
    answer: "Our phone lines and WhatsApp support are active from 8:00 AM to 9:00 PM every day. For support outside these hours, please email us and we'll reply first thing in the morning."
  },
  {
    question: "Do you have a physical office for billing or payment inquiries?",
    answer: "Yes, our registered administrative office handles all commercial and billing inquiries. You can find our address at Priyanka Compound, Khoni, Dombivli East."
  },
  {
    question: "How can I provide feedback or file a complaint about my experience?",
    answer: "We value your feedback! You can email our management team directly at help@theorchidlaundry.com or fill out the contact form on this page."
  },
  {
    question: "Can I speak directly with a garment technician regarding a specific item?",
    answer: "Yes. If you have a highly technical question about a delicate garment, our support team can schedule a callback from one of our senior facility technicians."
  },
  {
    question: "Does The Orchid Laundry offer franchise opportunities?",
    answer: "We are currently focusing on expanding our company-owned professional facilities to maintain strict quality control, but feel free to email us to register your interest for future's sake."
  },
  {
    question: "Is there a dedicated line for reporting urgent or lost items?",
    answer: "Yes, please call our Support line (7080804074) immediately and specify that it's an urgent matter. Our team will prioritize your query through our tracking system."
  },
  {
    question: "How do I change my registered phone number or email address?",
    answer: "Simply message us on WhatsApp from your old number or email us from your registered email, and our team will securely update your customer profile."
  },
  {
    question: "Do you have social media channels for latest updates?",
    answer: "Yes! You can follow us on Instagram and Facebook to see behind-the-scenes footage of our processing facility and stay updated on the latest seasonal cleaning offers."
  }
];

export default ContactPage;
