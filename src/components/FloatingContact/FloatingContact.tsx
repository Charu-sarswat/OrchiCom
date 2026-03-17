"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Download, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import styles from "./FloatingContact.module.css";
import Link from "next/link";

export default function FloatingContact() {
  return (
    <div className={styles.wrapper}>
      <a href="tel:7080803074" className={`${styles.btn} ${styles.call}`}>
        <Phone size={22} fill="currentColor" />
        <span className={styles.label}>Call Us</span>
      </a>
      
      <Link href="https://wa.me/917080803074" target="_blank" className={`${styles.btn} ${styles.whatsapp}`}>
        <SiWhatsapp size={22} />
        <span className={styles.label}>WhatsApp</span>
      </Link>
      
      <Link href="/booking" className={`${styles.btn} ${styles.schedule}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span className={styles.label}>Schedule</span>
      </Link>
      
      <Link href="#" className={`${styles.btn} ${styles.app}`}>
        <Download size={22} />
        <span className={styles.label}>Get App</span>
      </Link>
    </div>
  );
}
