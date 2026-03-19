"use client";

import { motion } from "framer-motion";
import { Search, Droplets, Wind, Zap, Shield, Package, ArrowRight } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/services/servicesData";
import Image from "next/image";

const steps = [
  { icon: Search, title: "Tagging & Sorting", desc: "Each garment is tagged and sorted based on color, fabric type, and soiling level." },
  { icon: Droplets, title: "Garment Inspection", desc: "Checking for stains, tears, and identifying specific cleaning requirements." },
  { icon: Zap, title: "Stain Treatment", desc: "Cuffs, collars, and spots are pre-treated with enzyme-based solutions." },
  { icon: Droplets, title: "Pre-Wash Soak", desc: "Gentle soaking for tough stains using skin-friendly solutions." },
  { icon: Wind, title: "Professional Washing", desc: "High-efficiency machines ensure optimal temperature and cycle for each fabric." },
  { icon: Shield, title: "Softening & Drying", desc: "Air-dried in temperature-controlled environments to prevent shrinkage." },
  { icon: Zap, title: "Precision Steam Ironing", desc: "Finished with industrial steam presses for a crisp, wrinkle-free look." },
  { icon: Package, title: "Quality Check & Packing", desc: "Multiple inspections followed by hygienic, UV-safe packaging." }
];

const allServices = [
  { slug: "dry-cleaning", title: "Dry Cleaning" },
  { slug: "wash-iron", title: "Wash & Iron" },
  { slug: "wash-fold", title: "Wash & Fold" },
  { slug: "wash-kg", title: "Wash Per KG" },
  { slug: "premium-laundry", title: "Premium Laundry" },
  { slug: "household-laundry", title: "Household Laundry" },
  { slug: "steam-iron", title: "Steam Iron" },
  { slug: "shoe-cleaning", title: "Shoe Cleaning" },
  { slug: "sofa-cleaning", title: "Sofa Cleaning" },
  { slug: "carpet-cleaning", title: "Carpet Cleaning" },
  { slug: "curtain-cleaning", title: "Curtain Cleaning" },
  { slug: "bridal-wear", title: "Bridal Wear" },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-light py-14 pb-10 text-center">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-[0.8rem] text-[2.2rem] max-[480px]:text-[2.2rem] md:text-[clamp(2rem,5vw,3.5rem)]">Our Expert <span className="text-gradient">Laundry Care</span></h1>
            <p className="text-[1.1rem] text-[#666] max-w-[650px] mx-auto leading-[1.65]">From everyday wear to delicate bridal gowns, we treat every garment with scientific precision and professional care.</p>
          </motion.div>
        </div>
      </section>

      {/* 8-Step Process Section */}
      <section className="section-padding bg-white py-8 overflow-hidden">
        <div className="container relative">
          <div className="section-title text-center mb-6">
            <h2 className="mb-[0.8rem]">Our 8-step <span className="text-gradient">premium process</span></h2>
            <p>Scientifically designed to make your clothes feel &apos;As Good As New&apos;.</p>
          </div>

          {/* Desktop Circular Infographic Layout */}
          <div className="hidden xl:block relative w-full max-w-[1400px] h-[650px] mx-auto mt-4 mb-6">
            
            {/* Background Colored Doughnut Ring (Octagon) */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] z-[1] drop-shadow-md"
              style={{ 
                background: `conic-gradient(#18a1d8 0deg 45deg, #1a1a1a 45deg 90deg, #18a1d8 90deg 135deg, #1a1a1a 135deg 180deg, #18a1d8 180deg 225deg, #1a1a1a 225deg 270deg, #18a1d8 270deg 315deg, #1a1a1a 315deg 360deg)`,
                clipPath: 'polygon(29.289% 0%, 70.71% 0%, 100% 29.289%, 100% 70.71%, 70.71% 100%, 29.289% 100%, 0% 70.71%, 0% 29.289%)'
              }}
            >
            </div>

            {/* Inner White Center (Circle) */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-white z-[10] rounded-full flex flex-col items-center justify-center p-8 text-center shadow-md"
            >
              <h3 className="text-[2.8rem] text-black m-0 font-black leading-[1.1]">8-STEP</h3>
              <span className="text-[0.85rem] text-[#18a1d8] font-bold uppercase mt-[8px] tracking-widest">LAUNDRY PROCESS</span>
            </div>

            {/* Render 8 Steps onto the ring */}
            {steps.map((step, index) => {
              const nodeColors = ["#1a1a1a", "#18a1d8", "#1a1a1a", "#18a1d8", "#1a1a1a", "#18a1d8", "#1a1a1a", "#18a1d8"];
              
              // Equal vertical spacing: 4 cards per side with y: -202, -67, +67, +202 (evenly spaced at ~134px gaps)
              const offsets = [
                { x: 202, y: -202 },  // 01 - right top
                { x: 202, y: -67 },   // 02 - right upper-mid
                { x: 202, y: 67 },    // 03 - right lower-mid
                { x: 202, y: 202 },   // 04 - right bottom
                { x: -202, y: 202 },  // 05 - left bottom
                { x: -202, y: 67 },   // 06 - left lower-mid
                { x: -202, y: -67 },  // 07 - left upper-mid
                { x: -202, y: -202 }, // 08 - left top
              ];
              
              const cColor = "#18a1d8"; // Force all card borders and icons to be strictly Blue
              const nColor = nodeColors[index];
              const isRight = index < 4;
              const pos = offsets[index];

              return (
                <div 
                  key={index}
                  className="absolute top-1/2 left-1/2 transition-all z-[20] hover:z-[60] group"
                  style={{ transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }}
                >
                  {/* Outer Number Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center font-black text-[1.15rem] z-[40]" style={{ color: '#000', border: `4px solid ${nColor}` }}>
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </div>

                  {/* Horizontal Card */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full flex items-center p-[10px] py-[16px] w-[410px] border-[2px] z-[30]"
                    style={{
                      borderColor: cColor,
                      [isRight ? 'left' : 'right']: '32px' // Spaced out to leave a clean visible white gap between card and node
                    }}
                  >
                    {/* Card Content based on direction */}
                    {isRight ? (
                      <>
                        {/* Icon Left for Right Cards (hugging center node) */}
                        <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: cColor }}>
                          <step.icon size={26} color="#fff" />
                        </div>
                        <div className="flex-1 text-left pl-3 pr-5 pt-1">
                          <h4 className="m-0 text-[1.05rem] font-bold text-black leading-[1.2] mb-[5px]">{step.title}</h4>
                          <p className="m-0 text-[0.8rem] text-[#666] leading-[1.35] pb-1">{step.desc}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Icon Right for Left Cards (hugging center node) */}
                        <div className="flex-1 text-right pr-3 pl-5 pt-1">
                          <h4 className="m-0 text-[1.05rem] font-bold text-black leading-[1.2] mb-[5px]">{step.title}</h4>
                          <p className="m-0 text-[0.8rem] text-[#666] leading-[1.35] pb-1">{step.desc}</p>
                        </div>
                        <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: cColor }}>
                          <step.icon size={26} color="#fff" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet Layout (Stacked) */}
          <div className="flex xl:hidden flex-col gap-6 w-full max-w-[550px] mx-auto mt-10">
            {steps.map((step, index) => {
              const color = "#18a1d8"; // Force mobile cards to also only be blue
              return (
                <motion.div 
                  key={step.title}
                  className="bg-white rounded-[40px] py-[1.2rem] px-[1.5rem] flex items-center gap-5 relative border-[3px]"
                  style={{ borderColor: color }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center font-black text-[1rem] shrink-0 border-[3px]" style={{ color: color, borderColor: color }}>
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="m-0 mb-[3px] text-[0.9rem] font-bold text-black uppercase leading-[1.2]">{step.title}</h4>
                    <p className="m-0 text-[0.75rem] text-[#666] leading-[1.4]">{step.desc}</p>
                  </div>
                  <step.icon size={24} color={color} className="shrink-0 hidden sm:block opacity-90" />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="mb-12 relative">
            <h2 className="text-[1.4rem] min-[600px]:text-[1.8rem] text-black mb-[0.6rem]">Explore All <span className="text-gradient">Our Services</span></h2>
            <div className="w-[50px] h-[3px] bg-primary rounded-sm"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[0.8rem] min-[600px]:gap-[1.2rem]">
            {allServices.map((item) => {
              const service = (servicesData as any)[item.slug];
              if (!service) return null;

              return (
                <Link key={item.slug} href={`/services/${item.slug}`} className="bg-white rounded-[20px] overflow-hidden no-underline transition-transform duration-300 ease hover:-translate-y-[6px]">
                  <div className="h-[130px] min-[600px]:h-[180px] relative">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <div className="p-4 min-[600px]:p-6">
                    <h3 className="text-[0.95rem] min-[600px]:text-[1.1rem] mb-[0.4rem] text-primary font-bold">{service.title.includes("Best") ? service.title.replace("Best ", "") : service.title}</h3>
                    <p className="text-[#666] text-[0.88rem] mb-4 leading-[1.5] hidden min-[600px]:block">{service.subtitle}</p>
                    <span className="flex items-center gap-[0.4rem] text-primary font-bold text-[0.88rem]">Explore Service <ArrowRight size={16} /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
