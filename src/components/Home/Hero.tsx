'use client';
import Link from 'next/link';
import { SiWhatsapp } from "react-icons/si";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-12 pb-16 bg-[#f8f9fa] overflow-hidden min-h-[100vh] flex items-center max-[1100px]:-mt-[var(--nav-height-mobile)] max-[1100px]:pt-[calc(var(--nav-height-mobile)+1.5rem)] max-[1100px]:pb-10">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white/60 after:z-[1]">
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

      <div className="container relative z-[2] flex flex-col items-center justify-center text-center w-full max-w-[1000px] mx-auto -mt-[15vh] md:-mt-[20vh]">
        <h1 className="flex flex-col space-y-1 sm:space-y-1.5 md:space-y-3 font-black tracking-tight text-black text-center drop-shadow-sm w-full">
          <span className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.2rem] leading-[1.1] tracking-[-0.04em]">
            Best <span className="text-[#18A1D8]">Dry Clean & Laundry Service,</span>
          </span>
          <span className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] leading-[1.2] font-extrabold opacity-90 tracking-[-0.02em]">
            Now In India
          </span>
        </h1>
        
        <p className="font-medium text-black mt-6 md:mt-8 mb-0 font-inter text-[1.4rem] md:text-[clamp(22px,1.7vw,30px)] opacity-90">
          Where Every Fabric Gets Premium Care.
        </p>

        <hr className="w-[120px] mx-auto border-none border-t border-t-black/30 border-t-[1.5px] my-[0.2rem]" />
        
        <div className="my-0">
          <span className="font-extrabold text-[#18A1D8] font-outfit text-[2rem] md:text-[2.5rem] lg:text-[clamp(26px,2vw,34px)] drop-shadow-sm">
            Flat 20% Off On 1st Order
          </span>
        </div>

        <hr className="w-[120px] mx-auto border-none border-t border-t-black/30 border-t-[1.5px] my-[0.2rem]" />

        <div className="mt-1 text-center w-full flex flex-col items-center">
          <h3 className="italic font-extrabold text-black mb-2 text-center font-inter text-[clamp(18px,1.4vw,22px)] opacity-80">To Place Your Order</h3>
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
