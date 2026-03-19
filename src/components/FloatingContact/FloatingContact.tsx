"use client";

import { Phone, Download } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";

export default function FloatingContact() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 max-[768px]:top-auto max-[768px]:bottom-[30px] max-[768px]:right-[15px] max-[768px]:translate-y-0 z-[90] flex flex-col items-end gap-2 pointer-events-none">
      <a
        href="tel:7080803074"
        className="group w-[54px] max-[768px]:w-12 h-[54px] max-[768px]:h-12 rounded-xl max-[768px]:rounded-full flex items-center justify-center text-white no-underline font-semibold overflow-hidden whitespace-nowrap shadow-none transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:w-[160px] max-[768px]:hover:w-12 hover:pr-[15px] max-[768px]:hover:pr-0 hover:-translate-x-[5px] max-[768px]:hover:translate-x-0 max-[768px]:hover:-translate-y-[5px] pointer-events-auto"
        style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}
      >
        <Phone size={22} fill="currentColor" />
        <span className="max-w-0 opacity-0 ml-0 text-[0.95rem] transition-all duration-300 ease group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-3 max-[768px]:hidden">Call Us</span>
      </a>
      
      <Link
        href="https://wa.me/917080803074"
        target="_blank"
        className="group w-[54px] max-[768px]:w-12 h-[54px] max-[768px]:h-12 rounded-xl max-[768px]:rounded-full flex items-center justify-center text-white no-underline font-semibold overflow-hidden whitespace-nowrap shadow-none transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:w-[160px] max-[768px]:hover:w-12 hover:pr-[15px] max-[768px]:hover:pr-0 hover:-translate-x-[5px] max-[768px]:hover:translate-x-0 max-[768px]:hover:-translate-y-[5px] pointer-events-auto"
        style={{ background: 'linear-gradient(135deg, #25D366, #159947)' }}
      >
        <SiWhatsapp size={22} />
        <span className="max-w-0 opacity-0 ml-0 text-[0.95rem] transition-all duration-300 ease group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-3 max-[768px]:hidden">WhatsApp</span>
      </Link>
      
      <Link
        href="/booking"
        className="group w-[54px] max-[768px]:w-12 h-[54px] max-[768px]:h-12 rounded-xl max-[768px]:rounded-full flex items-center justify-center text-white no-underline font-semibold overflow-hidden whitespace-nowrap shadow-none transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:w-[160px] max-[768px]:hover:w-12 hover:pr-[15px] max-[768px]:hover:pr-0 hover:-translate-x-[5px] max-[768px]:hover:translate-x-0 max-[768px]:hover:-translate-y-[5px] pointer-events-auto"
        style={{ background: 'linear-gradient(135deg, #18A1D8, #0a7ea4)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span className="max-w-0 opacity-0 ml-0 text-[0.95rem] transition-all duration-300 ease group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-3 max-[768px]:hidden">Schedule</span>
      </Link>
      
      <Link
        href="#"
        className="group w-[54px] max-[768px]:w-12 h-[54px] max-[768px]:h-12 rounded-xl max-[768px]:rounded-full flex items-center justify-center text-white no-underline font-semibold overflow-hidden whitespace-nowrap shadow-none transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:w-[160px] max-[768px]:hover:w-12 hover:pr-[15px] max-[768px]:hover:pr-0 hover:-translate-x-[5px] max-[768px]:hover:translate-x-0 max-[768px]:hover:-translate-y-[5px] pointer-events-auto"
        style={{ background: 'linear-gradient(135deg, #0f74c7, #0a5a9a)' }}
      >
        <Download size={22} />
        <span className="max-w-0 opacity-0 ml-0 text-[0.95rem] transition-all duration-300 ease group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-3 max-[768px]:hidden">Get App</span>
      </Link>
    </div>
  );
}
