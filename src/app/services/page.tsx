"use client";

import { motion } from "framer-motion";
import { Search, Droplets, Wind, Zap, Shield, Package, ArrowRight } from "lucide-react";
import styles from "./services.module.css";
import Link from "next/link";
import { servicesData } from "@/services/servicesData";
import Image from "next/image";

const steps = [
  { icon: Search, title: "Tagging & Sorting", desc: "Each garment is tagged and sorted based on color, fabric type, and soiling level." },
  { icon: Droplets, title: "Garment Inspection", desc: "Checking for stains, tears, and identifying specific cleaning requirements." },
  { icon: Zap, title: "Stain Treatment", desc: "Cuffs, collars, and spots are pre-treated with enzyme-based solutions." },
  { icon: Droplets, title: "Pre-Wash Soak", desc: "Gentle soaking for tough stains using skin-friendly solutions." },
  { icon: Wind, title: "Professional Washing", desc: "High-efficiency machines ensure optimal temperature and cycle for each fabric." },
  { icon: Shield, title: "Softening & Drying", desc: "Air-dried in temperature-controlled environments to prevent shrinkage." },
  { icon: Zap, title: "Precision Steam Ironing", desc: "Finished with industrial steam presses for a crisp, wrinkle-free look." },
  { icon: Package, title: "Quality Check & Packing", desc: "Multiple inspections followed by hygienic, UV-safe packaging." }
];

const allServices = [
  { slug: "dry-cleaning", title: "Dry Cleaning" },
  { slug: "wash-iron", title: "Wash & Iron" },
  { slug: "wash-fold", title: "Wash & Fold" },
  { slug: "wash-kg", title: "Wash Per KG" },
  { slug: "premium-laundry", title: "Premium Laundry" },
  { slug: "household-laundry", title: "Household Laundry" },
  { slug: "steam-iron", title: "Steam Iron" },
  { slug: "shoe-cleaning", title: "Shoe Cleaning" },
  { slug: "sofa-cleaning", title: "Sofa Cleaning" },
  { slug: "carpet-cleaning", title: "Carpet Cleaning" },
  { slug: "curtain-cleaning", title: "Curtain Cleaning" },
  { slug: "bridal-wear", title: "Bridal Wear" },
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroContent}
          >
            <h1>Our Expert <span className="text-gradient">Laundry Care</span></h1>
            <p>From everyday wear to delicate bridal gowns, we treat every garment with scientific precision and professional care.</p>
          </motion.div>
        </div>
      </section>

      {/* 8-Step Process Section */}
      <section className={`section-padding ${styles.processSection}`}>
        <div className="container">
          <div className="section-title text-center">
            <h2>Our 8-step <span className="text-gradient">premium process</span></h2>
            <p>Scientifically designed to make your clothes feel &apos;As Good As New&apos;.</p>
          </div>

          <div className={styles.infoContainer}>
            {/* Left Column: Steps 8, 7, 6, 5 */}
            <div className={styles.sideColumn}>
              {[steps[7], steps[6], steps[5], steps[4]].map((step, index) => (
                <motion.div 
                  key={step.title}
                  className={`${styles.infoCard} ${styles.cardLeft}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.cardBadge}>{8 - index}</div>
                  <div className={styles.cardText}>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                  <div className={styles.cardIcon}>
                    <step.icon size={22} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Column: Main Hub */}
            <div className={styles.centerColumn}>
              <div className={styles.hubRing}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={styles.hubSegment} />
                ))}
              </div>
              <motion.div 
                className={styles.mainCircle}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3>8-STEP</h3>
                <span>LAUNDRY PROCESS</span>
              </motion.div>
            </div>

            {/* Right Column: Steps 1, 2, 3, 4 */}
            <div className={styles.sideColumn}>
              {[steps[0], steps[1], steps[2], steps[3]].map((step, index) => (
                <motion.div 
                  key={step.title}
                  className={`${styles.infoCard} ${styles.cardRight}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.cardBadge}>{index + 1}</div>
                  <div className={styles.cardText}>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                  <div className={styles.cardIcon}>
                    <step.icon size={22} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className={`section-padding ${styles.gridSection}`}>
        <div className="container">
          <div className={styles.categoryHeader}>
            <h2 className={styles.categoryTitle}>Explore All <span className="text-gradient">Our Services</span></h2>
            <div className={styles.titleUnderline}></div>
          </div>
          
          <div className={styles.servicesGrid}>
            {allServices.map((item) => {
              const service = (servicesData as any)[item.slug];
              if (!service) return null;

              return (
                <Link key={item.slug} href={`/services/${item.slug}`} className={styles.serviceCard}>
                  <div className={styles.serviceImg}>
                    <Image src={service.image} alt={service.title} fill />
                  </div>
                  <div className={styles.serviceInfo}>
                    <h3>{service.title.includes("Best") ? service.title.replace("Best ", "") : service.title}</h3>
                    <p>{service.subtitle}</p>
                    <span className={styles.learnMore}>Explore Service <ArrowRight size={16} /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
