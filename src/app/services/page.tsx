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
      <section className="section-padding bg-white py-16 overflow-hidden">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="mb-[0.8rem]">Our 8-step <span className="text-gradient">premium process</span></h2>
            <p>Scientifically designed to make your clothes feel &apos;As Good As New&apos;.</p>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-center gap-16 xl:gap-12 mx-auto mt-10 relative max-w-[1400px]">
            {/* Left Column: Steps 8, 7, 6, 5 */}
            <div className="flex flex-col w-full xl:w-auto gap-6 xl:gap-8 flex-1">
              {[steps[7], steps[6], steps[5], steps[4]].map((step, index) => (
                <motion.div 
                  key={step.title}
                  className="bg-white rounded-3xl xl:rounded-[100px] py-[1.2rem] pr-[1.5rem] xl:pr-6 pl-[1.5rem] xl:pl-6 flex flex-row items-center xl:text-right gap-6 relative min-h-[100px] w-full border-2 border-primary transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-[5px] hover:shadow-none shadow-none before:absolute before:top-1/2 before:w-[30px] before:h-[2px] before:bg-[#eee] before:-z-[1] xl:before:right-[-55px] xl:before:w-[55px] after:absolute after:top-1/2 after:-translate-y-1/2 after:z-[2] after:w-0 after:h-0 after:border-t-8 after:border-t-transparent after:border-b-8 after:border-b-transparent xl:after:right-[-8px] xl:after:border-l-8 xl:after:border-l-white max-xl:before:hidden max-xl:after:hidden"
                  style={{
                    color: index === 0 || index === 2 ? '#18a1d8' : '#000',
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center font-black text-[1.1rem] shrink-0 text-[#333] xl:absolute z-[2] border-4 border-current xl:right-[-51px] xl:top-1/2 xl:-translate-y-1/2 order-first xl:order-none">{8 - index}</div>
                  <div className="flex-1 text-left xl:text-right">
                    <h4 className="m-0 mb-1 text-[1.15rem] font-extrabold text-black">{step.title}</h4>
                    <p className="m-0 text-[0.85rem] text-[#666] leading-[1.4]">{step.desc}</p>
                  </div>
                  <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center shrink-0 bg-primary text-white border border-white/10 shadow-none hidden xl:flex">
                    <step.icon size={22} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Column: Main Hub */}
            <div className="flex flex-col items-center justify-center relative flex-[0_0_320px] order-first xl:order-none mb-8 xl:mb-0">
              <div className="absolute rounded-full z-[1] flex items-center justify-center pointer-events-none w-[440px] h-[440px] hidden xl:flex">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`absolute w-full h-full origin-center [clip-path:polygon(50%_50%,50%_0,85%_15%)] ${i % 2 === 0 ? 'bg-primary' : 'bg-black'} ${[
                    'rotate-0', 'rotate-45', 'rotate-90', 'rotate-[135deg]', 
                    'rotate-180', 'rotate-[225deg]', 'rotate-[270deg]', 'rotate-[315deg]'
                  ][i]}`} />
                ))}
              </div>
              <motion.div 
                className="bg-white rounded-full flex flex-col items-center justify-center text-center p-8 z-[5] relative w-[320px] h-[320px] border-4 border-white shadow-none"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[2.22rem] text-black m-0 font-black leading-none">8-STEP</h3>
                <span className="text-[0.85rem] text-primary font-extrabold tracking-[2px] mt-3">LAUNDRY PROCESS</span>
              </motion.div>
            </div>

            {/* Right Column: Steps 1, 2, 3, 4 */}
            <div className="flex flex-col w-full xl:w-auto gap-6 xl:gap-8 flex-1">
              {[steps[0], steps[1], steps[2], steps[3]].map((step, index) => (
                <motion.div 
                  key={step.title}
                  className="bg-white rounded-3xl xl:rounded-[100px] py-[1.2rem] px-[1.5rem] xl:px-[1.8rem] flex flex-row xl:flex-row-reverse items-center text-left gap-6 relative min-h-[100px] w-full border-2 border-primary transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-[5px] hover:shadow-none shadow-none before:absolute before:top-1/2 before:w-[30px] xl:before:w-[55px] before:h-[2px] before:bg-[#eee] before:-z-[1] xl:before:left-[-55px] after:absolute after:top-1/2 after:-translate-y-1/2 after:z-[2] after:w-0 after:h-0 after:border-t-8 after:border-t-transparent after:border-b-8 after:border-b-transparent xl:after:left-[-8px] xl:after:border-r-8 xl:after:border-r-white max-xl:before:hidden max-xl:after:hidden"
                  style={{
                    color: index === 0 || index === 2 ? '#18a1d8' : '#000',
                  }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center font-black text-[1.1rem] shrink-0 text-[#333] xl:absolute z-[2] border-4 border-current xl:left-[-51px] xl:top-1/2 xl:-translate-y-1/2 order-first xl:order-none">{index + 1}</div>
                  <div className="flex-1">
                    <h4 className="m-0 mb-1 text-[1.15rem] font-extrabold text-black">{step.title}</h4>
                    <p className="m-0 text-[0.85rem] text-[#666] leading-[1.4]">{step.desc}</p>
                  </div>
                  <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center shrink-0 bg-primary text-white border border-white/10 shadow-none hidden xl:flex">
                    <step.icon size={22} />
                  </div>
                </motion.div>
              ))}
            </div>
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
