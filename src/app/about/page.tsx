import { Target, Eye, Rocket, ShieldCheck, Heart, Leaf, CheckCircle, IndianRupee, Handshake, Shield, Zap } from "lucide-react";
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div className="container">
          <div className={styles.header}>
            <h1>About <span style={{ color: 'white' }}>The Orchid Laundry LLP</span></h1>
            <p>Fast - Reliable - Affordable</p>
          </div>
        </div>
      </section>

      <div className="section-padding">
        <div className="container">
          {/* Main Introduction */}
          <div className={styles.grid}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <img src="/img/about-new.jpg" alt="The Orchid Laundry Service" />
              </div>
            </div>
            <div className={styles.contentColumn}>
              <p>
                At The Orchid Laundry, we turn an everyday chore into a seamless, stress-free experience.
              </p>
              <p>
                We know the hours spent on washing, drying, ironing, and folding can add up, time that could be better spent on family, work, or simply enjoying life.
              </p>
              <p>
                That is why we started <strong className="text-gradient">The Orchid Laundry LLP</strong>, to make laundry fast, reliable, and affordable. What began as a small idea in Dombivli has grown into a professional, tech-enabled service dedicated to quality, convenience, and customer delight.
              </p>
            </div>
          </div>

          {/* Our Approach Card */}
          <div className={styles.approachCard}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
              <h2 style={{ margin: 0 }}>Our <span className="text-gradient">approach</span></h2>
            </div>
            <p>
              We combine technology, expert care, and efficient operations to deliver a consistent, high-quality laundry experience. From scheduled pickups and doorstep delivery to customizable instructions for every garment, we ensure your clothes are treated with care while saving you time, effort, and money.
            </p>
            <p>
              Our eco-friendly detergents, advanced washing machines, and streamlined processes make laundry simpler for our customers and better for the planet.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0 }}>Our <span className="text-gradient">mission</span></h3>
              </div>
              <p>
                To improve the quality of life for our customers by saving them time, energy, and hassle through a highly reliable, convenient, and affordable laundry service.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                <h3 style={{ margin: 0 }}>Our <span className="text-gradient">vision</span></h3>
              </div>
              <p>
                To become the most trusted laundry brand in India, starting from Dombivli and expanding across Maharashtra and beyond, delivering consistent quality, convenience, and value to every household.
              </p>
            </div>
          </div>

          <div className={styles.sectionTitle}>
            <h2>Our core <span className="text-gradient">values</span></h2>
          </div>
          
          <div className={styles.valuesGrid}>
            {[
              { icon: <Zap size={28} />, title: "Fast", desc: "Quick, on-time service with efficiency at every step." },
              { icon: <CheckCircle size={28} />, title: "Reliable", desc: "Consistent quality, every wash, every time." },
              { icon: <IndianRupee size={28} />, title: "Affordable", desc: "Premium service at fair, transparent pricing." },
              { icon: <Shield size={28} />, title: "Integrity", desc: "Honest, transparent, and ethical in all dealings." },
              { icon: <Handshake size={28} />, title: "Respect", desc: "Treating every customer, associate, and partner with dignity." },
              { icon: <Leaf size={28} />, title: "Sustainability", desc: "Caring for the environment with eco-friendly processes and resources." },
            ].map((value, i) => (
              <div key={i} className={styles.valueCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                  {/* <span style={{ color: 'var(--primary)', display: 'flex' }}>{value.icon}</span> */}
                  <h4 style={{ margin: 0 }}>{value.title}</h4>
                </div>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Promise */}
          <div className={styles.promiseBox}>
            <h2 style={{ marginBottom: '0.8rem' }}>Our <span className="text-gradient">promise</span></h2>
            <p>
              At The Orchid Laundry, we do not just clean clothes — we give you back your time, peace of mind, and confidence in every wash. With every pickup, wash, and delivery, we aim to make laundry faster, reliable, and more affordable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
