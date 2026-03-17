"use client";

import { useState } from 'react';
import { MessageSquare, MapPin, Phone, Mail as MailIcon } from 'lucide-react';
import styles from './contact.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('error');
    }
  };

  return (
    <div className={`section-padding ${styles.contactPage}`}>
      <div className="container">
        <div className={styles.header}>
          <h1>Get in <span className="text-gradient">Touch</span></h1>
          <p>Have questions? We're here to help you with all your laundry needs.</p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <div className={styles.icon}><MapPin size={24} /></div>
              <div>
                <h3>Our Location</h3>
                <p>Shop No. 3, Priyanka Compound, Near MHADA Colony, Badlapur Pipeline Road, Khoni, Dombivli East - 421204</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}><Phone size={24} /></div>
              <div>
                <h3>Call Us</h3>
                <p>Orders: 7080803074</p>
                <p>Support: 7080804074</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}><MailIcon size={24} /></div>
              <div>
                <h3>Email Us</h3>
                <p>Info@theorchidlaundry.com</p>
                <p>care@theorchidlaundry.com</p>
              </div>
            </div>
            
            <a href="https://wa.me/917080803074" target="_blank" rel="noopener noreferrer" className={styles.whatsappCard}>
              <div className={styles.waIconBox}>
                <MessageSquare size={32} fill="white" />
              </div>
              <div className={styles.waText}>
                <h3>Chat on WhatsApp</h3>
                <p>Instant support for your queries</p>
              </div>
            </a>
          </div>

          <div className={styles.formColumn}>
            <h2 className={styles.formTitle}>Send Us a Message</h2>
            {status === 'success' ? (
              <div className={`${styles.successMessage} glass-card`}>
                <div className={styles.successIcon}>✅</div>
                <h2 className={styles.successTitle}>Message Sent!</h2>
                <p className={styles.successSubtitle}>Thank you for reaching out. Our team will contact you shortly.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`${styles.form} glass-card`}>
                <div className={styles.formGrid}>
                  <div className={styles.inputGroup}>
                    <label>Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="708080XXXX" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Dry Cleaning Inquiry" />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label>Your Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="How can we help you today?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && <p className={styles.errorText}>Something went wrong. Please try again.</p>}
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <iframe 
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.9067571342!2d73.1368565!3d19.2238565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79589d7000001%3A0xe24fa3f6fb36873c!2sThe%20Orchid%20Laundry!5e0!3m2!1sen!2sin!4v1710680000000!5m2!1sen!2sin" 
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
