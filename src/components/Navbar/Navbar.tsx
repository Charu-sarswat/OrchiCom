"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Calendar, ShieldCheck, Clock, MapPin, Building2, Pill, Hospital, Utensils, Sparkles } from "lucide-react";

import { serviceCategories } from "@/services/servicesData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showB2BDropdown, setShowB2BDropdown] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showB2BServices, setShowB2BServices] = useState(false);
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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
    setShowB2BDropdown(false);
    setShowServices(false);
    setShowB2BServices(false);
  }, [pathname]);

  const b2bLinks = [
    { name: "Hotel Linen", href: "/b2b-services/hotel-linen" },
    { name: "Pharma Uniforms", href: "/b2b-services/pharma-uniform" },
    { name: "Hospital Laundry", href: "/b2b-services/hospital-linen" },
    { name: "Restaurant Uniforms", href: "/b2b-services/restaurant-uniform" },
    { name: "Spa & Salon", href: "/b2b-services/spa-towel" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 flex items-center z-[1100] transition-all duration-400 ease ${
        isScrolled 
          ? "bg-white/95 h-[70px] backdrop-blur-[10px] border-b border-[#f0f0f0]" 
          : "bg-white h-[var(--nav-height)] max-[1100px]:h-[var(--nav-height-mobile)] border-b border-[#f0f0f0]"
      }`}>
        <div className="container">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <Link href="/" className="group">
              <Image src="/logo.png" alt="The Orchid Laundry" width={200} height={70} priority className="h-[50px] w-auto transition-transform duration-300 ease group-hover:scale-105" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden min-[1100px]:flex items-center gap-2">
              <Link href="/" className={`text-black no-underline font-bold text-[0.9rem] xl:text-[0.95rem] py-2 px-[0.8rem] xl:px-4 rounded-xl flex items-center gap-[0.4rem] transition-all duration-300 ease hover:text-primary hover:bg-[rgba(24,161,216,0.05)] ${pathname === "/" ? "!text-primary !bg-[rgba(24,161,216,0.05)]" : ""}`}>Home</Link>
              <Link href="/about" className={`text-black no-underline font-bold text-[0.9rem] xl:text-[0.95rem] py-2 px-[0.8rem] xl:px-4 rounded-xl flex items-center gap-[0.4rem] transition-all duration-300 ease hover:text-primary hover:bg-[rgba(24,161,216,0.05)] ${pathname === "/about" ? "!text-primary !bg-[rgba(24,161,216,0.05)]" : ""}`}>About</Link>

              {/* Services Dropdown */}
              <div
                className="relative flex items-center group"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Link href="/services" className={`text-black no-underline font-bold text-[0.9rem] xl:text-[0.95rem] py-2 px-[0.8rem] xl:px-4 rounded-xl flex items-center gap-[0.4rem] transition-all duration-300 ease hover:text-primary hover:bg-[rgba(24,161,216,0.05)] ${pathname.startsWith("/services") ? "!text-primary !bg-[rgba(24,161,216,0.05)]" : ""}`}>
                  Services
                  <ChevronDown size={14} className="transition-transform duration-300 ease group-hover:rotate-180 flex-shrink-0" />
                </Link>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      className="absolute top-full bg-white min-w-[750px] p-10 rounded-[30px] border border-black/5 z-[1001] overflow-hidden left-1/2 -ml-[375px] mt-[10px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex gap-12 relative w-full">
                        {serviceCategories.map((category, idx) => (
                          <div key={category.title} className="flex-1">
                            <h5 className="text-[0.8rem] uppercase text-primary tracking-[0.1em] font-extrabold mb-6 flex items-center gap-[0.8rem]">
                              {idx === 0 && <ShieldCheck size={16} />}
                              {idx === 1 && <Clock size={16} />}
                              {idx === 2 && <MapPin size={16} />}
                              {category.title}
                            </h5>
                            <div className="flex flex-col gap-[0.15rem]">
                              {category.links.map((s) => (
                                <Link key={s.href} href={s.href} className="py-[0.8rem] px-5 text-[#444] no-underline font-semibold text-[0.92rem] rounded-2xl transition-all duration-200 ease hover:bg-[rgba(24,161,216,0.06)] hover:text-primary hover:translate-x-[5px] block">{s.name}</Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* B2B Services Dropdown */}
              <div
                className="relative flex items-center group"
                onMouseEnter={() => setShowB2BDropdown(true)}
                onMouseLeave={() => setShowB2BDropdown(false)}
              >
                <Link href="/b2b-services" className={`text-black no-underline font-bold text-[0.9rem] xl:text-[0.95rem] py-2 px-[0.8rem] xl:px-4 rounded-xl flex items-center gap-[0.4rem] transition-all duration-300 ease hover:text-primary hover:bg-[rgba(24,161,216,0.05)] ${pathname.startsWith("/b2b-services") ? "!text-primary !bg-[rgba(24,161,216,0.05)]" : ""}`}>
                  B2B Services
                  <ChevronDown size={14} className="transition-transform duration-300 ease group-hover:rotate-180 flex-shrink-0" />
                </Link>

                <AnimatePresence>
                  {showB2BDropdown && (
                    <motion.div
                      className="absolute top-full bg-white min-w-[320px] p-6 rounded-[30px] border border-black/5 z-[1001] overflow-hidden left-0 mt-[10px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex flex-col gap-[0.15rem]">
                        <h5 className="text-[0.7rem] uppercase text-primary tracking-[0.1em] font-extrabold mb-4 pl-4 block">Commercial Hub</h5>
                        {b2bLinks.map((link) => (
                          <Link key={link.href} href={link.href} className="flex items-center gap-4 py-[0.8rem] px-5 text-[#444] no-underline font-semibold text-[0.92rem] rounded-2xl transition-all duration-200 ease hover:bg-[rgba(24,161,216,0.06)] hover:text-primary hover:translate-x-[5px]">
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/pricing" className={`text-black no-underline font-bold text-[0.9rem] xl:text-[0.95rem] py-2 px-[0.8rem] xl:px-4 rounded-xl flex items-center gap-[0.4rem] transition-all duration-300 ease hover:text-primary hover:bg-[rgba(24,161,216,0.05)] ${pathname === "/pricing" ? "!text-primary !bg-[rgba(24,161,216,0.05)]" : ""}`}>Pricing</Link>
              <Link href="/blog" className={`text-black no-underline font-bold text-[0.9rem] xl:text-[0.95rem] py-2 px-[0.8rem] xl:px-4 rounded-xl flex items-center gap-[0.4rem] transition-all duration-300 ease hover:text-primary hover:bg-[rgba(24,161,216,0.05)] ${pathname === "/blog" ? "!text-primary !bg-[rgba(24,161,216,0.05)]" : ""}`}>Blog</Link>
              <Link href="/contact" className={`text-black no-underline font-bold text-[0.9rem] xl:text-[0.95rem] py-2 px-[0.8rem] xl:px-4 rounded-xl flex items-center gap-[0.4rem] transition-all duration-300 ease hover:text-primary hover:bg-[rgba(24,161,216,0.05)] ${pathname === "/contact" ? "!text-primary !bg-[rgba(24,161,216,0.05)]" : ""}`}>Contact</Link>

              <div className="flex items-center gap-6 ml-4 pl-6 border-l border-[#eee]">
                <Link href="/booking" className="bg-primary text-white py-[0.8rem] px-[1.8rem] rounded-2xl no-underline font-bold text-[0.95rem] flex items-center gap-[0.8rem] transition-all duration-300 ease hover:-translate-y-[2px]">
                  <Calendar size={18} />
                  Schedule Pickup
                </Link>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="flex min-[1100px]:hidden items-center gap-[0.6rem]">
              <Link href="/contact" className="bg-primary text-white py-[0.5rem] px-[0.75rem] rounded-[10px] text-[0.75rem] font-bold no-underline whitespace-nowrap transition-all duration-300 ease hover:bg-[#37B9EC] hover:-translate-y-[1px] relative z-10">Contact Us</Link>
              <button className="bg-transparent border-none text-black cursor-pointer flex items-center p-2 rounded-lg transition-colors hover:bg-black/5 relative z-[1101]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                className="fixed inset-0 z-[1999] bg-[rgba(0,0,0,0.25)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                className="fixed inset-y-0 right-0 bg-white z-[2000] overflow-y-auto border-l border-[#f0f0f0] w-[min(82vw,300px)] max-[380px]:w-[88vw] flex flex-col scroll-smooth overscroll-contain"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 220 }}
              >
                {/* Mobile Sidebar Header */}
                <div className="sticky top-0 py-[0.85rem] px-4 flex justify-between items-center border-b border-[#f0f0f0] bg-white z-20 shrink-0">
                  <Image src="/logo.png" alt="Logo" width={110} height={38} />
                  <button className="bg-[#f5f5f5] border-none w-9 h-9 rounded-full flex items-center justify-center cursor-pointer text-[#333] transition-all duration-250 ease hover:bg-[#eee]" onClick={() => setIsOpen(false)} aria-label="Close menu">
                    <X size={22} />
                  </button>
                </div>

                {/* Mobile Sidebar Content */}
                <div className="flex-1 py-2 px-3 flex flex-col gap-[0.15rem]">
                  <Link href="/" className={`text-[0.95rem] font-semibold text-[#1a1a1a] no-underline py-2 px-3 rounded-lg transition-all duration-200 ease hover:text-primary hover:bg-[rgba(24,161,216,0.06)] block ${pathname === "/" ? "!text-primary !bg-[rgba(24,161,216,0.08)]" : ""}`}>Home</Link>
                  <Link href="/about" className={`text-[0.95rem] font-semibold text-[#1a1a1a] no-underline py-2 px-3 rounded-lg transition-all duration-200 ease hover:text-primary hover:bg-[rgba(24,161,216,0.06)] block ${pathname === "/about" ? "!text-primary !bg-[rgba(24,161,216,0.08)]" : ""}`}>About</Link>

                  {/* Collapsible Services Section */}
                  <div className="rounded-[10px] overflow-hidden border border-black/[0.06] bg-[#fafafa] my-[0.1rem]">
                    <button
                      className="flex items-center justify-between w-full py-[0.55rem] px-3 bg-transparent border-none cursor-pointer transition-background duration-200 ease hover:bg-[rgba(24,161,216,0.05)]"
                      onClick={() => setShowServices(!showServices)}
                      aria-expanded={showServices}
                    >
                      <span className="flex items-center gap-2 font-bold text-[0.9rem] text-primary">
                        <ShieldCheck size={15} />
                        Services
                      </span>
                      <ChevronDown
                        size={15}
                        className={`text-[#888] flex-shrink-0 transition-transform duration-[0.22s] ease ${showServices ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {showServices && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="py-2 px-3 pb-[0.6rem] flex flex-col gap-[0.8rem]">
                            {serviceCategories.map((category) => (
                              <div key={category.title} className="flex flex-col">
                                <p className="text-[0.62rem] uppercase font-bold text-[#a0a0a0] tracking-[0.1em] mb-[0.3rem] pl-[0.1rem] m-0">{category.title}</p>
                                <div className="flex flex-col gap-[0.05rem]">
                                  {category.links.map((link) => (
                                    <Link key={link.href} href={link.href} className="no-underline text-[#444] font-semibold text-[0.82rem] py-[0.35rem] px-[0.7rem] rounded-md transition-all duration-200 ease hover:bg-white hover:text-primary block">{link.name}</Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Collapsible B2B Services Section */}
                  <div className="rounded-[10px] overflow-hidden border border-black/[0.06] bg-[#fafafa] my-[0.1rem]">
                    <button
                      className="flex items-center justify-between w-full py-[0.55rem] px-3 bg-transparent border-none cursor-pointer transition-background duration-200 ease hover:bg-[rgba(24,161,216,0.05)]"
                      onClick={() => setShowB2BServices(!showB2BServices)}
                      aria-expanded={showB2BServices}
                    >
                      <span className="flex items-center gap-2 font-bold text-[0.9rem] text-primary">
                        <Building2 size={15} />
                        B2B Services
                      </span>
                      <ChevronDown
                        size={15}
                        className={`text-[#888] flex-shrink-0 transition-transform duration-[0.22s] ease ${showB2BServices ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {showB2BServices && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="py-2 px-3 pb-[0.6rem] flex flex-col gap-[0.05rem]">
                            <Link href="/b2b-services" className="no-underline text-primary font-bold text-[0.82rem] py-[0.35rem] px-[0.7rem] rounded-md hover:bg-white block mb-1 underline">B2B Overview Page</Link>
                            {b2bLinks.map((link) => (
                              <Link key={link.href} href={link.href} className="no-underline text-[#444] font-semibold text-[0.82rem] py-[0.35rem] px-[0.7rem] rounded-md transition-all duration-200 ease hover:bg-white hover:text-primary block">{link.name}</Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Link href="/pricing" className={`text-[0.95rem] font-semibold text-[#1a1a1a] no-underline py-2 px-3 rounded-lg transition-all duration-200 ease hover:text-primary hover:bg-[rgba(24,161,216,0.06)] block ${pathname === "/pricing" ? "!text-primary !bg-[rgba(24,161,216,0.08)]" : ""}`}>Pricing</Link>
                  <Link href="/blog" className={`text-[0.95rem] font-semibold text-[#1a1a1a] no-underline py-2 px-3 rounded-lg transition-all duration-200 ease hover:text-primary hover:bg-[rgba(24,161,216,0.06)] block ${pathname === "/blog" ? "!text-primary !bg-[rgba(24,161,216,0.08)]" : ""}`}>Blog</Link>
                  <Link href="/contact" className={`text-[0.95rem] font-semibold text-[#1a1a1a] no-underline py-2 px-3 rounded-lg transition-all duration-200 ease hover:text-primary hover:bg-[rgba(24,161,216,0.06)] block ${pathname === "/contact" ? "!text-primary !bg-[rgba(24,161,216,0.08)]" : ""}`}>Contact</Link>
                </div>

                {/* Mobile Sidebar Footer */}
                <div className="sticky bottom-0 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] px-3 flex flex-col gap-2 bg-white border-t border-[#f0f0f0] shrink-0 z-20">
                  <a href="tel:+917080803074" className="bg-[#f0f9ff] text-primary flex items-center justify-center gap-2 py-[0.6rem] px-4 rounded-[10px] no-underline font-semibold text-[0.88rem] transition-all duration-300 ease hover:bg-primary hover:text-white">
                    <Phone size={17} />
                    +91 70808 03074
                  </a>
                  <Link href="/booking" className="bg-primary text-white text-center py-[0.6rem] px-4 rounded-[10px] no-underline font-semibold text-[0.88rem] block">Book free pickup</Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
