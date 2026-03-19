"use client";

import { motion } from "framer-motion";
import { Search, Droplets, Wind, Zap, Shield, Package, ArrowRight } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/services/servicesData";
import Image from "next/image";
import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

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
      <section 
        className="relative py-24 pb-20 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/exper.png')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4 leading-[1.1] text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] font-bold text-white">
              Our Expert <span className="text-[#18a1d8]">Laundry Care</span>
            </h1>
            <p className="text-[1.1rem] md:text-[1.3rem] font-medium tracking-[0.05em] text-white opacity-90 max-w-[800px] mx-auto leading-[1.7]">
              From everyday wear to delicate bridal gowns, we treat every garment with scientific precision and professional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8-Step Process Section */}
      <section className="section-padding bg-white py-12 md:py-20 overflow-hidden">
        <div className="container relative">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[2rem] md:text-[3.2rem] text-black font-bold mb-4">
              Our 8-Step <span className="text-gradient">Premium Process</span>
            </h2>
            <p className="text-[1.1rem] text-[#444] max-w-[700px] mx-auto">Scientifically designed to make your clothes feel &apos;As Good As New&apos;.</p>
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
              
              // Equal uniform vertical Y-spacing but dynamically adjusted X-radius so outer nodes cleanly dock onto the slanted octagonal edges
              const offsets = [
                { x: 95, y: -202 },   // 01 - right top
                { x: 202, y: -67 },   // 02 - right upper-mid
                { x: 202, y: 67 },    // 03 - right lower-mid
                { x: 95, y: 202 },    // 04 - right bottom
                { x: -95, y: 202 },   // 05 - left bottom
                { x: -202, y: 67 },   // 06 - left lower-mid
                { x: -202, y: -67 },  // 07 - left upper-mid
                { x: -95, y: -202 },  // 08 - left top
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
                      [isRight ? 'left' : 'right']: '25px' // Spaced exactly from the 50px node (25px radius)
                    }}
                  >
                    {/* Tiny Connecting Pointer */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-0 h-0 z-[-1]"
                      style={{
                        [isRight ? 'left' : 'right']: '-6px',
                        borderTop: '6px solid transparent',
                        borderBottom: '6px solid transparent',
                        [isRight ? 'borderRight' : 'borderLeft']: `7px solid ${cColor}`,
                      }}
                    />

                    {/* Card Content based on direction */}
                    {isRight ? (
                      <>
                        {/* Icon Left for Right Cards (hugging center node) */}
                        <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: cColor }}>
                          <step.icon size={26} color="#fff" />
                        </div>
                        <div className="flex-1 text-left px-5 pt-1">
                          <h4 className="m-0 text-[1.05rem] font-bold text-black leading-[1.2] mb-[6px]">{step.title}</h4>
                          <p className="m-0 text-[0.8rem] text-[#666] leading-[1.35] pb-1">{step.desc}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Icon Right for Left Cards (hugging center node) */}
                        <div className="flex-1 text-right px-5 pt-1">
                          <h4 className="m-0 text-[1.05rem] font-bold text-black leading-[1.2] mb-[6px]">{step.title}</h4>
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

      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] md:text-[3.2rem] text-black font-bold mb-4">
              Explore All <span className="text-gradient">Our Services</span>
            </h2>
            <p className="max-w-[700px] mx-auto text-[1.1rem] text-[#444]">
              Comprehensive Care for Every Garment in Your Wardrobe
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {allServices.map((item) => {
              const service = (servicesData as any)[item.slug];
              if (!service) return null;

              return (
                <Link key={item.slug} href={`/services/${item.slug}`} className="bg-white rounded-[30px] overflow-hidden no-underline transition-all duration-400 ease hover:-translate-y-[8px] border border-black/5 shadow-none">
                  <div className="h-[140px] md:h-[220px] relative overflow-hiddenGroup transition-transform duration-500 hover:scale-105">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-[1.1rem] md:text-[1.3rem] mb-3 text-black font-bold leading-tight">{service.title.includes("Best") ? service.title.replace("Best ", "") : service.title}</h3>
                    <p className="text-[#444] text-[0.95rem] mb-6 leading-relaxed hidden min-[600px]:block">{service.subtitle}</p>
                    <span className="flex items-center gap-2 text-primary font-bold text-[0.95rem] group">Explore Service <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global FAQ Section */}
      <GlobalFAQ faqs={servicesFaqs} />
    </div>
  );
}

const servicesFaqs = [
  {
    question: "Do you offer dry cleaning for delicate fabrics like silk or sequence work?",
    answer: "Yes, we specialize in high-end garment care. Delicate fabrics undergo a special inspection, and we use fabric-safe European solvents to ensure the texture, color, and embellishments remain strictly intact."
  },
  {
    question: "What is the turnaround time for standard laundry vs dry cleaning?",
    answer: "Our standard Wash & Iron or Wash & Fold takes 48-72 hours. Premium Dry Cleaning takes around 3-5 days. If you are in a rush, we offer Express Next-Day delivery for a nominal extra charge."
  },
  {
    question: "Can you remove tough stains like red wine, ink, or grease?",
    answer: "We have highly trained stain removal technicians. While we boast an extremely high success rate at lifting tough stains without damaging fabric, total removal depends on how aged or naturally set the stain is."
  },
  {
    question: "How do you wash clothes? Are they mixed with other customers' garments?",
    answer: "Absolutely not. Every single customer's order is processed entirely individually in separate batches to maintain peak hygiene standards and prevent any cross-contamination or color bleeding."
  },
  {
    question: "Do you offer bulk 'Laundry by KG' services?",
    answer: "Yes, our 'Wash Per KG' service is perfect for daily wear t-shirts, pajamas, and towels. It's a highly economical choice for families looking for reliable weekly laundry support."
  },
  {
    question: "Do you specialize in wedding wear or bridal outfit cleaning?",
    answer: "Yes, we are the region's top choice for bridal wear. We use specialized techniques to clean and preserve heavy lehengas, gowns, and sherwanis without losing their original luster."
  },
  {
    question: "Is specialized shoe cleaning part of your regular service list?",
    answer: "Definitely. We offer professional shoe refurbishment for sneakers, suedes, and leathers. We deep clean, deodorize, and restore the texture to make them look almost brand new."
  },
  {
    question: "Do you handle large home items like curtains, carpets, and sofas?",
    answer: "Yes, we offer on-site sofa and carpet cleaning, along with professional curtain laundry that includes removal and re-hanging assistance if needed."
  },
  {
    question: "Is precision steam ironing included in the dry cleaning service?",
    answer: "Yes, every dry-cleaned item is expertly steam-ironed on pneumatic machines to ensure a crisp, wrinkle-free finish that preserves the garment's original drape."
  },
  {
    question: "Do you provide specialized packaging for seasonal clothes like woolens?",
    answer: "We provide high-quality breathable packaging for all items. For woolens and silks, we offer premium packing that helps prevent moth damage during storage."
  },
  {
    question: "Are your cleaning agents safe for expensive leather or suede jackets?",
    answer: "Yes, we use pH-neutral leather conditioners and specialized suede cleaners that restore oils and color without causing the material to crack or stiffen."
  },
  {
    question: "Can I get a specialized antibacterial wash for gym and athletic wear?",
    answer: "Absolutely. We offer an 'Antiseptic Wash' add-on that uses medical-grade, skin-friendly sanitizers to eliminate odor-causing bacteria from synthetic sports fabrics."
  }
];
