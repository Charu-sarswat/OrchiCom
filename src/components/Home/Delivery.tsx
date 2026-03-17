"use client";

import { motion } from "framer-motion";
import { Truck, Zap, Check, Calendar } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import styles from "./Delivery.module.css";

export default function Delivery() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Free Home Pickup <span className="text-gradient">& Delivery</span></h2>
          <p className={styles.description}>
            The Orchid Laundry provides free home pickup and delivery at your convenience. 
            We also offer express delivery services for urgent requirements.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Regular Delivery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.deliveryCard}
          >
            <div className={styles.cardHeader}>
              <Truck size={36} color="#000" />
              <h3>Regular <span style={{ color: 'var(--primary)' }}>Delivery</span></h3>
            </div>
            <ul className={styles.list}>
              <li><Check size={20} className={styles.checkIcon} /> Free (No extra charges)</li>
              <li><Check size={20} className={styles.checkIcon} /> Laundry Per KG – 72 Hours</li>
              <li><Check size={20} className={styles.checkIcon} /> Dry Clean – 72 Hours</li>
              <li><Check size={20} className={styles.checkIcon} /> Shoe Cleaning – 72 Hours</li>
            </ul>
          </motion.div>

          {/* Express Delivery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${styles.deliveryCard} ${styles.express}`}
          >
            <div className={styles.cardHeader}>
              <Zap size={36} color="#000" />
              <h3>Express <span style={{ color: 'var(--primary)' }}>Delivery</span></h3>
            </div>
            <ul className={styles.list}>
              <li><Check size={20} className={styles.checkIcon} /> 1.5x extra charges</li>
              <li><Check size={20} className={styles.checkIcon} /> Same-day / Next-day delivery</li>
            </ul>
          </motion.div>

          {/* Van Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.imageColumn}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src="/img/van logo image.png" 
                alt="Delivery Van" 
                width={550} 
                height={350} 
                className={styles.vanImg}
                style={{ borderRadius: '15px', objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </div>
        
        <div className={styles.actions}>
          <Link href="https://wa.me/917080803074" className="btn btn-secondary">
            <SiWhatsapp size={20} /> Chat on WhatsApp
          </Link>
          <Link href="/booking" className="btn btn-primary">
            <Calendar size={20} /> Schedule Free Pickup
          </Link>
        </div>
      </div>
    </section>
  );
}
