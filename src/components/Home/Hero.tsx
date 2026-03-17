'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiWhatsapp } from "react-icons/si";
import { Calendar } from "lucide-react";
import styles from './Hero.tsx.module.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const backgroundImages = ['/hero1.jpg', '/hero2.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section className={styles.hero}>
      {/* Dynamic Background Slider */}
      <div className={styles.bgSlider}>
        {backgroundImages.map((img, index) => (
          <div
            key={img}
            className={`${styles.bgImage} ${index === currentImage ? styles.active : ''}`}
          >
            <Image
              src={img}
              alt="Hero Background"
              fill
              priority={index === 0}
              quality={90}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.content}>
          <h1 className={styles.mainTitle}>
            Best <span className={styles.highlight}>Dry Clean & <br /> Laundry Service,</span> <br /> Now In India
          </h1>
          
          <hr className={styles.separator} />
          
          <p className={styles.tagline}>
            Where Every Fabric Gets Premium Care.
          </p>
          
          <div className={styles.offerContainer}>
            <span className={styles.offerText}>Flat 20% Off On 1st Order</span>
          </div>

          <hr className={styles.separator} />

          <div className={styles.orderSection}>
            <h3 className={styles.orderSubtitle}>To Place Your Order</h3>
            <div className={styles.actions}>
              <Link href="https://wa.me/917080803074" className="btn btn-secondary">
                <SiWhatsapp size={22} />
                Chat On WhatsApp
              </Link>
              <Link href="/contact" className="btn btn-primary">
                <Calendar size={22} />
                Schedule Free Pickup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
