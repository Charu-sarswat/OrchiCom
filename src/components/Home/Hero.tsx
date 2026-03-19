'use client';
import Link from 'next/link';
import { SiWhatsapp } from "react-icons/si";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-12 pb-16 bg-[#f8f9fa] overflow-hidden min-h-[calc(100vh-var(--nav-height))] flex items-center max-[1100px]:min-h-[calc(100vh-var(--nav-height-mobile))] max-[1100px]:pt-[1.5rem] max-[1100px]:pb-10">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white/20 after:z-[1]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/WhatsApp Video 2026-03-18 at 10.10.48 PM.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-[2] flex flex-col items-center justify-center text-center w-full max-w-[1000px] mx-auto pt-8 md:pt-12">
        <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] text-black w-full mb-6">
          Best <span className="text-gradient">Dry Clean & Laundry Service,</span>
          <br />
          Now In India
        </h1>
        
        <p className="max-w-[800px] mx-auto text-[1.1rem] md:text-[1.25rem] text-[#fff] mb-2">
          Where Every Fabric Gets Premium Care.
        </p>

        <hr className="w-[120px] mx-auto border-none border-t border-t-black/20 border-t-[1.5px] my-2" />
        
        <div className="my-1">
          <h2 className="text-[1.8rem] md:text-[2.4rem] text-gradient font-bold">
            Flat 20% Off On 1st Order
          </h2>
        </div>

        <hr className="w-[120px] mx-auto border-none border-t border-t-black/20 border-t-[1.5px] my-2" />

        <div className="mt-4 text-center w-full flex flex-col items-center">
          <h3 className="text-[1.2rem] md:text-[1.4rem] text-black font-bold mb-4">To Place Your Order</h3>
          <div className="flex justify-center flex-col md:flex-row items-center gap-4 md:gap-5 flex-wrap">
            <Link href="https://wa.me/917080803074" className="px-8 py-3.5 text-[1.05rem] font-bold rounded-[14px] flex items-center justify-center gap-[10px] min-w-full md:min-w-[240px] !text-white !border-none transition-all duration-300 ease-out shadow-[0_4px_12px_rgba(24,161,216,0.2)] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(24,161,216,0.3)] hover:brightness-105 !bg-black">
              <SiWhatsapp size={22} />
              Chat On WhatsApp
            </Link>
            <Link href="/booking" className="px-8 py-3.5 text-[1.05rem] font-bold rounded-[14px] flex items-center justify-center gap-[10px] min-w-full md:min-w-[240px] !text-white !border-none transition-all duration-300 ease-out shadow-[0_4px_12px_rgba(24,161,216,0.2)] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(24,161,216,0.3)] hover:brightness-105 !bg-[#18A1D8]">
              <Calendar size={22} />
              Schedule Pickup
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
