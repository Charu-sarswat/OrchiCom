"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Calendar, ShieldCheck, Clock, MapPin } from "lucide-react";
import styles from "./Navbar.module.css";

import { serviceCategories } from "@/services/servicesData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
    setShowServices(false);
  }, [pathname]);

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
        <div className="container">
          <div className={styles.navInner}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image src="/logo.png" alt="The Orchid Laundry" width={200} height={70} priority />
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
                  <ChevronDown size={14} className={styles.chevron} />
                </Link>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      className={styles.dropdown}
                      initial={{ opacity: 0, y: 15, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, x: "-50%" }}
                      exit={{ opacity: 0, y: 15, x: "-50%" }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={styles.dropdownContent}>
                        {serviceCategories.map((category, idx) => (
                          <div key={category.title} className={styles.categorySection}>
                            <h5 className={styles.categoryTitle}>
                              {idx === 0 && <ShieldCheck size={16} />}
                              {idx === 1 && <Clock size={16} />}
                              {idx === 2 && <MapPin size={16} />}
                              {category.title}
                            </h5>
                            <div className={styles.categoryLinks}>
                              {category.links.map((s) => (
                                <Link key={s.href} href={s.href} className={styles.dropdownItem}>{s.name}</Link>
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

              <div className={styles.desktopActions}>
                <Link href="/booking" className={styles.cta}>
                  <Calendar size={18} />
                  Schedule Pickup
                </Link>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className={styles.mobileRight}>
              <Link href="/contact" className={styles.mobileContactBtn}>Contact Us</Link>
              <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                className={styles.mobileMenu}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 220 }}
              >
                <div className={styles.mobileHeader}>
                  <Image src="/logo.png" alt="Logo" width={110} height={38} />
                  <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                    <X size={22} />
                  </button>
                </div>

                <div className={styles.mobileLinks}>
                  <Link href="/" className={pathname === "/" ? styles.mobileActive : ""}>Home</Link>
                  <Link href="/about" className={pathname === "/about" ? styles.mobileActive : ""}>About</Link>

                  {/* Collapsible Services */}
                  <div className={styles.mobileSubmenu}>
                    <button
                      className={styles.mobileSubmenuHeader}
                      onClick={() => setShowServices(!showServices)}
                      aria-expanded={showServices}
                    >
                      <span className={styles.mobileSubmenuLabel}>
                        <ShieldCheck size={15} />
                        Services
                      </span>
                      <ChevronDown
                        size={15}
                        className={`${styles.submenuChevron} ${showServices ? styles.submenuChevronOpen : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {showServices && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className={styles.mobileSubGrid}>
                            {serviceCategories.map((category) => (
                              <div key={category.title} className={styles.mobileCategory}>
                                <p className={styles.mobileCategoryTitle}>{category.title}</p>
                                <div className={styles.mobileSubLinks}>
                                  {category.links.map((s) => (
                                    <Link key={s.href} href={s.href} className={styles.mobileSubLink}>{s.name}</Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/pricing" className={pathname === "/pricing" ? styles.mobileActive : ""}>Pricing</Link>
                  <Link href="/blog" className={pathname === "/blog" ? styles.mobileActive : ""}>Blog</Link>
                  <Link href="/contact" className={pathname === "/contact" ? styles.mobileActive : ""}>Contact</Link>

                  <div className={styles.mobileActions}>
                    <a href="tel:+917080803074" className={styles.mobilePhoneBtn}>
                      <Phone size={17} />
                      +91 70808 03074
                    </a>
                    <Link href="/booking" className={styles.mobileCta}>Book free pickup</Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
