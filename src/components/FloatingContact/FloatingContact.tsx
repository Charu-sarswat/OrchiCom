"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar, Download, X } from "lucide-react";
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
        <MessageCircle size={22} fill="currentColor" />
        <span className={styles.label}>WhatsApp</span>
      </Link>
      
      <Link href="/booking" className={`${styles.btn} ${styles.schedule}`}>
        <Calendar size={22} fill="currentColor" />
        <span className={styles.label}>Schedule</span>
      </Link>
      
      <Link href="#" className={`${styles.btn} ${styles.app}`}>
        <Download size={22} />
        <span className={styles.label}>Get App</span>
      </Link>
    </div>
  );
}
