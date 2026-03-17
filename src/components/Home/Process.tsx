"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import { Calendar } from "lucide-react";
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
              <Link href="https://wa.me/917080803074" className="btn btn-secondary">
                <SiWhatsapp size={20} />
                Chat on WhatsApp
              </Link>
              <Link href="/booking" className="btn btn-primary">
                <Calendar size={20} />
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
