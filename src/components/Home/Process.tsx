"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Sorting & Inspection",
    desc: "Segregation based on care label, fabric type & color to ensure optimal treatment.",
  },
  {
    number: "02",
    title: "Stain Treatment",
    desc: "Advanced spotting machines & safe stain removal solutions for stubborn marks.",
  },
  {
    number: "03",
    title: "Processing",
    desc: "Modern washing & dry cleaning with eco-friendly chemicals and premium care.",
  },
  {
    number: "04",
    title: "Finishing",
    desc: "Steam ironing & fabric-specific finishing techniques for a crisp, fresh look.",
  },
  {
    number: "05",
    title: "Quality Check",
    desc: "Every single garment is inspected meticulously by our trained professionals.",
  },
  {
    number: "06",
    title: "Packing",
    desc: "Folded, hanger or vacuum packing delivered as per your personal preference.",
  },
];

export default function Process() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contentColumn}>
            <span className={styles.brandName}>THE ORCHID LAUNDRY</span>
            <h2 className={styles.mainTitle}>Six Stage Process for Unmatched Garment Care</h2>
            <p>
              Specialized machinery & skilled experts for each stage makes <strong>The Orchid Laundry</strong> the best laundry & dry cleaner near you.
            </p>
            <div className={styles.actions}>
              <Link href="https://wa.me/917080803074" className={styles.whatsappBtn}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat On WhatsApp
              </Link>
              <Link href="/booking" className={styles.pickupBtn}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Schedule Free Pickup
              </Link>
            </div>
          </div>

          <div className={styles.stepsColumn}>
            <div className={styles.swirlContainer}>
              {/* Central Circle */}
              <div className={styles.centerCircle}>
                <h3>6</h3>
                <span>STAGES</span>
              </div>

              {/* Swirl Steps */}
              {steps.map((step, idx) => (
                <div 
                  key={step.number}
                  className={`${styles.swirlStep} ${(idx + 1) % 2 === 0 ? styles.blackCard : ''}`}
                  style={{ "--i": idx, "--clr": `var(--step-clr-${idx + 1})` } as any}
                >
                  <div className={styles.stepPetal}>
                    <div className={styles.petalDecor}></div>
                    <div className={styles.stepContent}>
                      <div className={styles.stepHeader}>
                        <div className={styles.numberIcon}>{step.number}</div>
                        <h4>{step.title}</h4>
                      </div>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
