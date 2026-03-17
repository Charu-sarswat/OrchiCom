import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Wallet, 
  Hourglass, 
  Star, 
  Heart, 
  Leaf, 
  Fan, 
  Flame, 
  Sparkles, 
  Smartphone, 
  Shield,
  Headphones, 
  UserCheck,
  Target,
  Eye,
  Rocket,
  IndianRupee,
  Handshake,
  Zap
} from 'lucide-react';
import Hero from '@/components/Home/Hero';
import ServicesGrid from '@/components/Home/ServicesGrid';
import Delivery from '@/components/Home/Delivery';
import Process from '@/components/Home/Process';
import Testimonials from '@/components/Home/Testimonials';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* About Section */}
      <section className={`${styles.homeSection} bg-light`}>
        <div className="container">
          <div className="grid grid-2 items-center">
            <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', minHeight: '500px' }}>
              <Image 
                src="/about2.png" 
                alt="The Orchid Laundry LLP" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ paddingLeft: '1.5rem' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>About The Orchid <span className="text-gradient">Laundry LLP</span></h2>
              <p style={{ fontWeight: 800, color: '#000', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Fast - Reliable - Affordable</p>
              
              <p style={{ color: '#333', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                At <strong style={{ color: 'var(--primary)' }}>The Orchid Laundry</strong>, we turn an everyday chore into a seamless, stress-free experience.
              </p>
              
              <p style={{ color: '#333', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                We know the hours spent on washing, drying, ironing, and folding can add up, time that could be better spent on family, work, or simply enjoying life.
              </p>

              <p style={{ color: '#333', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                That is why we started <strong className="text-gradient">The Orchid Laundry LLP</strong>, to make laundry fast, reliable, and affordable. What began as a small idea in Dombivli has grown into a professional, tech-enabled service dedicated to quality, convenience, and customer delight.
              </p>

              <div className={styles.featureGrid}>
                {[
                  { label: "FAST", desc: "Quick on-time service" },
                  { label: "RELIABLE", desc: "Consistent quality" },
                  { label: "AFFORDABLE", desc: "Transparent pricing" },
                  { label: "ECO-FRIENDLY", desc: "Safe processes" }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontSize: '1.05rem' }}>
                    <CheckCircle2 size={22} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} /> 
                    <span><strong style={{ color: 'var(--primary)' }}>{item.label}:</strong> {item.desc}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn btn-primary" style={{ marginTop: '2rem' }}>Read More</Link>
            </div>
          </div>

          {/* Approach Section (from About page) */}
          <div style={{ 
            background: '#fdfcf6', 
            padding: '3rem', 
            borderRadius: '40px', 
            border: '1px solid rgba(24, 161, 216, 0.15)',
            marginTop: '4rem',
            textAlign: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <Rocket size={32} className="text-gradient" />
              <h2 style={{ margin: 0, fontSize: '2.5rem' }}>Our <span className="text-gradient">Approach</span></h2>
            </div>
            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8', maxWidth: '1000px', margin: '0 auto' }}>
              We combine technology, expert care, and efficient operations to deliver a consistent, high-quality laundry experience. From scheduled pickups and doorstep delivery to customizable instructions for every garment, we ensure your clothes are treated with care while saving you time, effort, and money.
            </p>
          </div>

          {/* Mission & Vision Section (from About page) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '30px', border: '1px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <Target size={28} className="text-gradient" />
                <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Our <span className="text-gradient">Mission</span></h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                To improve the quality of life for our customers by saving them time, energy, and hassle through a highly reliable, convenient, and affordable laundry service.
              </p>
            </div>
            <div style={{ background: 'white', padding: '2.5rem', borderRadius: '30px', border: '1px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <Eye size={28} className="text-gradient" />
                <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Our <span className="text-gradient">Vision</span></h3>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                To become the most trusted laundry brand in India, starting from Dombivli and expanding across Maharashtra and beyond, delivering consistent quality, convenience, and value.
              </p>
            </div>
          </div>

          {/* Values Section (Summary) */}
          <div style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Our Core <span className="text-gradient">Values</span></h2>
          </div>
          
          <div className="grid grid-3" style={{ gap: '1.5rem' }}>
            {[
              { icon: <Leaf size={24} />, title: "SUSTAINABILITY", desc: "Caring for the environment with eco-friendly processes.", bg: "#f0fdf4" },
              { icon: <CheckCircle2 size={24} />, title: "RELIABLE", desc: "Consistent quality, every wash, every time.", bg: "#f0f9ff" },
              { icon: <IndianRupee size={24} />, title: "AFFORDABLE", desc: "Premium service at fair, transparent pricing.", bg: "#fffcf0" },
              { icon: <Handshake size={24} />, title: "RESPECT", desc: "Treating everyone with dignity and care.", bg: "#fef2f2" },
              { icon: <Shield size={24} />, title: "INTEGRITY", desc: "Honest, transparent, and ethical in all dealings.", bg: "#f5f3ff" },
              { icon: <Zap size={24} />, title: "FAST", desc: "Quick, on-time service with efficiency.", bg: "#ecfdf5" }
            ].map((value, i) => (
              <div key={i} style={{ 
                padding: '1.5rem', 
                borderRadius: '24px', 
                background: value.bg,
                border: '1px solid rgba(24, 161, 216, 0.1)',
                textAlign: 'center'
              }}>
                <div style={{ color: 'var(--primary)', marginBottom: '0.8rem', display: 'flex', justifyContent: 'center' }}>{value.icon}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '1px' }}>{value.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.4' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Why Choose Us */}
      <section className="section-padding bg-white" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '3rem' }}>The Orchid Laundry – <span className="text-gradient">Why Choose Us?</span></h2>
          </div>
        </div>
        
        <div className="why-choose-wrapper">
          <div className="why-choose-track">
            {[...Array(2)].map((_, listIndex) => (
              <div key={listIndex} style={{ display: 'flex', gap: '2rem' }}>
                {[
                  { title: "Cost-Effective Laundry by Kilo", desc: "Get professional cleaning at affordable prices. Outsourcing your laundry saves money compared to frequent home washing, especially for busy families.", icon: Wallet },
                  { title: "Saves Time, Space & Effort", desc: "Laundry takes hours every week, plus drying requires space and attention. We take care of it all, letting you focus on what matters most.", icon: Hourglass },
                  { title: "Professional-Grade Cleaning", desc: "Our trained experts handle all types of fabrics—cotton, silk, wool, polyester, and blends—ensuring flawless cleaning without damage.", icon: Star },
                  { title: "Skin-Friendly & Safe", desc: "We use premium detergents, softeners, and stain removers that are gentle on your skin and suitable for all ages.", icon: Heart },
                  { title: "Eco-Conscious & Water-Smart", desc: "Our machines use up to 40% less water than traditional washing. We follow sustainable practices to minimize environmental impact while maintaining superior hygiene.", icon: Leaf },
                  { title: "Controlled Air Drying & Anti-Bacterial Care", desc: "Clothes are dried in temperature-controlled, anti-bacterial dryers, preventing colour fading, shrinkage, and bacterial growth—unlike line drying under direct sunlight.", icon: Fan },
                  { title: "Precision Steam Ironing", desc: "We use high-pressure steam presses with Teflon-coated plates for a crisp, wrinkle-free finish, preserving delicate fabrics like silk, polyester, and wool.", icon: Flame },
                  { title: "Stain Removal Experts", desc: "Tough stains don't stand a chance! We use specialised enzyme soaks and targeted treatments for oil, grease, wine, and other stubborn stains.", icon: Sparkles },
                  { title: "Complete Convenience", desc: "Enjoy doorstep pickup and delivery, customizable schedules, and easy online booking. Your laundry fits seamlessly into your lifestyle.", icon: Smartphone },
                  { title: "Quality Assurance & Customer Care", desc: "Every garment goes through multiple quality checks, and our customer support team is ready to assist with any special requests or concerns.", icon: CheckCircle2 },
                  { title: "Hygiene & Safety First", desc: "From detergents to packaging, every step is hygienic, UV-safe, and allergy-conscious, ensuring peace of mind for your family.", icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="why-choose-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', width: '100%', marginBottom: '1rem' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        backgroundColor: '#f1f5f9', 
                        borderRadius: '8px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <item.icon size={20} color="#000" strokeWidth={2.5} />
                      </div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: '1.2', margin: 0 }}>
                        {item.title.split(' ')[0]} 
                        <span style={{ color: 'var(--primary)', marginLeft: '4px' }}>
                          {item.title.split(' ').slice(1).join(' ')}
                        </span>
                      </h3>
                    </div>
                    <p style={{ color: '#555', fontSize: '0.8rem', lineHeight: '1.4', margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Delivery />
      <Process />
      <Testimonials />
    </main>
  );
}
