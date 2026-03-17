"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MessageSquare, Calendar, ShieldCheck, Clock, MapPin } from "lucide-react";
import styles from "./Navbar.module.css";

import { serviceCategories } from "@/services/servicesData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
  }, [pathname]);

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
        <div className="container">
          <div className={styles.navInner}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image 
                src="/img/orhidlogo.png" 
                alt="The Orchid Laundry" 
                width={200} 
                height={80} 
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className={styles.desktopMenu}>
              <Link href="/" className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}>Home</Link>
              <Link href="/about" className={`${styles.navLink} ${pathname === "/about" ? styles.active : ""}`}>About</Link>
              
              <div 
                className={styles.dropdownWrap}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link href="/services" className={`${styles.navLink} ${pathname.startsWith("/services") ? styles.active : ""}`}>
                  Services
                </Link>
                
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div 
                      className={styles.dropdown}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <div className={styles.dropdownContent}>
                        {serviceCategories.map((category) => (
                          <div key={category.title} className={styles.categorySection}>
                            <h5 className={styles.categoryTitle}>
                              {category.title}
                            </h5>
                            <div className={styles.categoryLinks}>
                              {category.links.map((s) => (
                                <Link key={s.href} href={s.href} className={styles.dropdownItem}>
                                  {s.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/pricing" className={`${styles.navLink} ${pathname === "/pricing" ? styles.active : ""}`}>Pricing</Link>
              <Link href="/blog" className={`${styles.navLink} ${pathname === "/blog" ? styles.active : ""}`}>Blog</Link>
              <Link href="/contact" className={`${styles.navLink} ${pathname === "/contact" ? styles.active : ""}`}>Contact</Link>
              
              <Link href="/booking" className={styles.cta}>
                <Calendar size={18} />
                Book Pickup
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className={styles.mobileLinks}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                
                <div className={styles.mobileSubmenu}>
                  <p>Our Services</p>
                  <div className={styles.mobileSubGrid}>
                    {serviceCategories.map((category) => (
                      <div key={category.title} className={styles.mobileCategory}>
                        <p className={styles.mobileCategoryTitle}>
                          {category.title}
                        </p>
                        <div className={styles.mobileSubGrid}>
                          {category.links.map((s) => (
                            <Link key={s.href} href={s.href} className={styles.mobileSubLink}>
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                  </div>
                </div>

                <Link href="/pricing">Pricing</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                
                <Link href="/booking" className={styles.mobileCta}>Book Free Pickup</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
