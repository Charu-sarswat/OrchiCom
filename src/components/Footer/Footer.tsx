import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import AppDownload from "../Home/AppDownload";

export default function Footer() {
  return (
    <footer className="bg-white text-dark p-0 border-t border-[#f0f0f0]">
      <div className="container">
        {/* App Download Strip */}
        <div style={{ position: 'relative', top: '-3rem' }}>
          <AppDownload />
        </div>

        <div className="grid gap-0 md:gap-8 pt-6 md:pt-0 pb-0 md:pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_2fr_1.5fr]">
          {/* Company Info */}
          <div className="pb-5 mb-4 md:pb-0 md:mb-0 border-b border-[#f5f5f5] md:border-b-0 footer-section">
            <Link href="/" className="group">
              <Image src="/logo.png" alt="Logo" width={180} height={60} style={{ width: 'auto', height: '44px' }} className="md:h-[44px] max-[768px]:h-10" />
            </Link>
            <p className="text-[#444] leading-[1.6] my-[0.8rem] text-[0.88rem] md:text-[0.95rem]">
              Premium laundry and dry cleaning services dedicated to providing the highest quality care for your garments.
            </p>
            <div className="flex gap-3 mt-4">
              <Link href="#" className="text-dark bg-black/5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><Facebook size={18} /></Link>
              <Link href="#" className="text-dark bg-black/5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><Instagram size={18} /></Link>
              <Link href="#" className="text-dark bg-black/5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><Linkedin size={18} /></Link>
              <Link href="#" className="text-dark bg-black/5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:text-white hover:bg-primary"><Youtube size={18} /></Link>
            </div>
          </div>

          {/* Quick Links + Legal — side by side */}
          <div className="flex md:grid md:grid-cols-2 gap-8">
            <div className="flex-1 footer-section">
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-bold mb-6 text-black relative footer-heading">Quick Links</h3>
              <ul className="list-none p-0 m-0">
                <li className="mb-3"><Link href="/" className="text-[#444] no-underline transition-all duration-300 ease-in-out text-[0.95rem] hover:text-primary hover:pl-1">Home</Link></li>
                <li className="mb-3"><Link href="/about" className="text-[#444] no-underline transition-all duration-300 ease-in-out text-[0.95rem] hover:text-primary hover:pl-1">About Us</Link></li>
                <li className="mb-3"><Link href="/services" className="text-[#444] no-underline transition-all duration-300 ease-in-out text-[0.95rem] hover:text-primary hover:pl-1">Our Services</Link></li>
                <li className="mb-3"><Link href="/pricing" className="text-[#444] no-underline transition-all duration-300 ease-in-out text-[0.95rem] hover:text-primary hover:pl-1">Pricing Plans</Link></li>
                <li className="mb-3"><Link href="/blog" className="text-[#444] no-underline transition-all duration-300 ease-in-out text-[0.95rem] hover:text-primary hover:pl-1">Laundry Blog</Link></li>
                <li className="mb-3"><Link href="/contact" className="text-[#444] no-underline transition-all duration-300 ease-in-out text-[0.95rem] hover:text-primary hover:pl-1">Contact Us</Link></li>
              </ul>
            </div>

            <div className="flex-1 footer-section">
              <h3 className="text-[1.1rem] md:text-[1.2rem] font-bold mb-6 text-black relative footer-heading">Legal &amp; Support</h3>
              <ul className="list-none p-0 m-0">
                <li className="mb-3"><Link href="/terms" className="text-[#444] no-underline transition-all duration-300 ease-in-out text-[0.95rem] hover:text-primary hover:pl-1">Terms &amp; Conditions</Link></li>
                <li className="mb-3"><Link href="/privacy" className="text-[#444] no-underline transition-all duration-300 ease-in-out text-[0.95rem] hover:text-primary hover:pl-1">Privacy Policy</Link></li>
                <li className="mb-3"><Link href="/faq" className="text-[#444] no-underline transition-all duration-300 ease-in-out text-[0.95rem] hover:text-primary hover:pl-1">FAQs</Link></li>
                <li className="mb-3"><Link href="/booking" className="text-[#444] no-underline transition-all duration-300 ease-in-out text-[0.95rem] hover:text-primary hover:pl-1">Book a Pickup</Link></li>
                <li className="mb-3"><Link href="/contact" className="text-[#444] no-underline transition-all duration-300 ease-in-out text-[0.95rem] hover:text-primary hover:pl-1">Support Center</Link></li>
              </ul>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="footer-section pb-5 max-[768px]:border-b max-[768px]:border-[#f5f5f5]">
            <h3 className="text-[1.1rem] md:text-[1.2rem] font-bold mb-6 text-black relative footer-heading">Get In Touch</h3>
            <ul className="list-none p-0 m-0">
              <li className="flex gap-[0.7rem] mb-5 text-[#444] text-[0.95rem] items-center">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>Shop No. 3, Priyanka Compound, Near MHADA Colony, Badlapur Pipeline Road, Khoni, Dombivli East – 421204</span>
              </li>
              <li className="flex gap-[0.7rem] mb-5 text-[#444] text-[0.95rem] items-center">
                <Phone size={20} className="text-primary shrink-0" />
                <div>
                  <a href="tel:7080803074" className="text-[#444] no-underline block mb-2 text-[0.95rem] transition-colors duration-300 ease hover:text-primary">Enquiry: 7080803074</a>
                  <a href="tel:7080804074" className="text-[#444] no-underline block mb-1 text-[0.95rem] transition-colors duration-300 ease hover:text-primary">Support: 7080804074</a>
                </div>
              </li>
              <li className="flex gap-[0.7rem] mb-5 text-[#444] text-[0.95rem] items-center">
                <Mail size={20} className="text-primary shrink-0" />
                <div>
                  <a href="mailto:info@theorchidlaundry.com" className="text-[#444] no-underline block mb-2 text-[0.95rem] transition-colors duration-300 ease hover:text-primary">info@theorchidlaundry.com</a>
                  <a href="mailto:care@theorchidlaundry.com" className="text-[#444] no-underline block mb-1 text-[0.95rem] transition-colors duration-300 ease hover:text-primary">care@theorchidlaundry.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#f0f0f0] py-[0.7rem] md:py-6 flex flex-col min-[480px]:row justify-between items-center text-[#666] text-[0.8rem] md:text-[0.9rem] gap-[0.3rem] min-[480px]:gap-0 text-center min-[480px]:text-left">
          <p>&copy; {new Date().getFullYear()} The Orchid Laundry LLP. All Rights Reserved.</p>
          <p className="italic text-[#888] hidden max-[768px]:hidden min-[480px]:block max-[480px]:block max-[480px]:text-[0.8rem]">Designed with care for premium garments.</p>
        </div>
      </div>
    </footer>
  );
}
