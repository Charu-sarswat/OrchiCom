'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiWhatsapp } from "react-icons/si";
import { Calendar } from "lucide-react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const backgroundImages = ['/hero1.jpg', '/hero2.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section className="relative py-12 pb-16 bg-[#f8f9fa] overflow-hidden min-h-[80vh] flex items-center max-[1100px]:-mt-[var(--nav-height-mobile)] max-[1100px]:pt-[calc(var(--nav-height-mobile)+1.5rem)] max-[1100px]:pb-10">
      {/* Dynamic Background Slider */}
      <div className="absolute top-0 left-0 w-full h-full z-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[1]">
        {backgroundImages.map((img, index) => (
          <div
            key={img}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100 animate-zoom-effect' : 'opacity-0'}`}
          >
            <Image
              src={img}
              alt="Hero Background"
              fill
              priority={index === 0}
              quality={90}
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      <div className="container relative z-[2] grid items-center gap-8 md:gap-16 grid-cols-1 md:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center md:text-left">
          <h1 className="mb-[0.8rem] tracking-[-0.5px] leading-[1.1] text-[3rem] md:text-[3.5rem] lg:text-[clamp(38px,3.2vw,52px)]">
            Best <span className="text-[#18A1D8]">Dry Clean & <br /> Laundry Service,</span> <br /> Now In India
          </h1>
          
          <hr className="border-none border-t border-t-black border-t-[1.2px] my-[0.8rem] opacity-100" />
          
          <p className="font-medium text-black my-[0.4rem] font-inter text-[1.4rem] md:text-[clamp(22px,1.7vw,30px)]">
            Where Every Fabric Gets Premium Care.
          </p>
          
          <div className="my-[0.8rem]">
            <span className="font-extrabold text-[#18A1D8] font-outfit text-[2rem] md:text-[2.5rem] lg:text-[clamp(26px,2vw,34px)]">Flat 20% Off On 1st Order</span>
          </div>

          <hr className="border-none border-t border-t-black border-t-[1.2px] my-[0.8rem] opacity-100" />

          <div className="mt-8 text-center w-full">
            <h3 className="italic font-extrabold text-black mb-6 text-center font-inter text-[clamp(18px,1.4vw,22px)]">To Place Your Order</h3>
            <div className="flex justify-center flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-6 flex-wrap">
              <Link href="https://wa.me/917080803074" className="px-7 py-3 text-base font-bold rounded-xl flex items-center justify-center gap-[10px] min-w-full md:min-w-[260px] !text-white !border-none transition-all duration-200 ease-out shadow-[0_4px_12px_rgba(24,161,216,0.2)] hover:-translate-y-[2px] hover:shadow-[0_6px_15px_rgba(24,161,216,0.3)] hover:brightness-105 !bg-black">
                <SiWhatsapp size={22} />
                Chat On WhatsApp
              </Link>
              <Link href="/booking" className="px-7 py-3 text-base font-bold rounded-xl flex items-center justify-center gap-[10px] min-w-full md:min-w-[260px] !text-white !border-none transition-all duration-200 ease-out shadow-[0_4px_12px_rgba(24,161,216,0.2)] hover:-translate-y-[2px] hover:shadow-[0_6px_15px_rgba(24,161,216,0.3)] hover:brightness-105 !bg-[#18A1D8]">
                <Calendar size={22} />
                Schedule Pickup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
