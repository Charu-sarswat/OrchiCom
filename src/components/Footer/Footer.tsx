import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import AppDownload from "../Home/AppDownload";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* App Download Strip */}
        <div style={{ position: 'relative', top: '-3rem' }}>
          <AppDownload />
        </div>

        <div className={styles.grid}>
          {/* Company Info — always full width on mobile (first child) */}
          <div className={styles.section}>
            <Link href="/" className={styles.logo}>
              <Image src="/img/orhidlogo.png" alt="Logo" width={180} height={60} style={{ width: 'auto', height: '44px' }} />
            </Link>
            <p className={styles.bio}>
              Premium laundry and dry cleaning services dedicated to providing the highest quality care for your garments.
            </p>
            <div className={styles.social}>
              <Link href="#"><Facebook size={18} /></Link>
              <Link href="#"><Instagram size={18} /></Link>
              <Link href="#"><Linkedin size={18} /></Link>
              <Link href="#"><Youtube size={18} /></Link>
            </div>
          </div>

          {/* Quick Links + Legal — side by side on mobile via linksRow */}
          <div className={styles.linksRow}>
            <div className={styles.section}>
              <h3>Quick links</h3>
              <ul className={styles.links}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/services">Our services</Link></li>
                <li><Link href="/pricing">Pricing plans</Link></li>
                <li><Link href="/blog">Laundry blog</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
              </ul>
            </div>

            <div className={styles.section}>
              <h3>Legal & support</h3>
              <ul className={styles.links}>
                <li><Link href="/terms">Terms & conditions</Link></li>
                <li><Link href="/privacy">Privacy policy</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
                <li><Link href="/booking">Book a pickup</Link></li>
                <li><Link href="/contact">Support center</Link></li>
              </ul>
            </div>
          </div>

          {/* Get In Touch */}
          <div className={`${styles.section} ${styles.contactSection}`}>
            <h3>Get in touch</h3>
            <ul className={styles.contact}>
              <li>
                <MapPin size={18} />
                <span>Shop No. 3, Priyanka Compound, Near MHADA Colony, Badlapur Pipeline Road, Khoni, Dombivli East – 421204</span>
              </li>
              <li>
                <Phone size={18} />
                <div>
                  <a href="tel:7080803074">Enquiry: 7080803074</a>
                  <a href="tel:7080804074">Support: 7080804074</a>
                </div>
              </li>
              <li>
                <Mail size={18} />
                <div>
                  <a href="mailto:info@theorchidlaundry.com">info@theorchidlaundry.com</a>
                  <a href="mailto:care@theorchidlaundry.com">care@theorchidlaundry.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} The Orchid Laundry LLP. All Rights Reserved.</p>
          <p className={styles.credit}>Designed with care for premium garments.</p>
        </div>
      </div>
    </footer>
  );
}
