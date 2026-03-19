"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import { Calendar } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sorting & Inspection",
    desc: "Segregation based on care label, fabric type & color to ensure optimal treatment.",
  },
  {
    number: "02",
    title: "Stain Treatment",
    desc: "Advanced spotting machines & safe stain removal solutions for stubborn marks.",
  },
  {
    number: "03",
    title: "Processing",
    desc: "Modern washing & dry cleaning with eco-friendly chemicals and premium care.",
  },
  {
    number: "04",
    title: "Finishing",
    desc: "Steam ironing & fabric-specific finishing techniques for a crisp, fresh look.",
  },
  {
    number: "05",
    title: "Quality Check",
    desc: "Every single garment is inspected meticulously by our trained professionals.",
  },
  {
    number: "06",
    title: "Packing",
    desc: "Folded, hanger or vacuum packing delivered as per your personal preference.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-12 lg:py-16 xl:py-20 section-padding" style={{ "--step-clr-1":"#13A5D9","--step-clr-2":"#1a1a1a","--step-clr-3":"#13A5D9","--step-clr-4":"#1a1a1a","--step-clr-5":"#13A5D9","--step-clr-6":"#1a1a1a"} as React.CSSProperties}>
      <style>{`
        @media (min-width: 1024px) {
          .process-step-outer {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            margin-top: -80px; /* half of 160px width */
            margin-left: -80px; 
            transform: rotate(calc(var(--i) * 60deg)) translateY(-160px) !important;
          }
          .process-step-inner {
            transform: rotate(calc(var(--i) * -60deg + 45deg)) scale(1) !important;
            border-radius: 25px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05) !important;
            transition: all 0.4s cubic-bezier(0.175,0.885,0.32,1.275) !important;
          }
          .process-step-outer:hover .process-step-inner {
            transform: rotate(calc(var(--i) * -60deg + 45deg)) scale(1.05) !important;
            box-shadow: 0 15px 35px rgba(0,0,0,0.25) !important;
            z-index: 250 !important;
          }
          .process-step-content {
            transform: rotate(-45deg) !important;
          }
        }
        @media (min-width: 1280px) {
          .process-step-outer {
            margin-top: -100px; /* half of 200px */
            margin-left: -100px;
            transform: rotate(calc(var(--i) * 60deg)) translateY(-200px) !important;
          }
          .process-step-inner {
            border-radius: 30px !important;
          }
        }
        @media (min-width: 1536px) {
          .process-step-outer {
            margin-top: -120px; /* half of 240px */
            margin-left: -120px;
            transform: rotate(calc(var(--i) * 60deg)) translateY(-240px) !important;
          }
          .process-step-inner {
            border-radius: 35px !important;
          }
        }
      `}</style>
      <div className="container max-w-full px-5 lg:px-8 xl:max-w-[1240px] 2xl:max-w-[1400px]">
        <div className="grid gap-8 lg:gap-8 xl:gap-4 items-center grid-cols-1 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.3fr]">
          <div className="static lg:sticky lg:top-[120px] text-center lg:text-left z-20 max-w-[550px] mx-auto lg:mx-0">
            <span className="block text-[2rem] lg:text-[2.6rem] xl:text-[3rem] font-bold text-[#13A5D9] mb-2 lg:mb-4 leading-[1.2]">The Orchid Laundry</span>
            <h2 className="text-2xl lg:text-[clamp(1.8rem,3vw,2.4rem)] font-black text-black mb-4 lg:mb-6 leading-[1.2]">Six Stage Process for <br/>Unmatched Garment Care</h2>
            <p className="text-base lg:text-[1.05rem] xl:text-[1.1rem] text-[#333] mb-8 leading-[1.6]">
              Specialized machinery & skilled experts for each stage makes <strong>The Orchid Laundry</strong> the best laundry & dry cleaner near you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-3 mt-8 lg:mb-12">
              <Link href="https://wa.me/917080803074" className="flex items-center gap-2 text-white py-3 lg:py-[1rem] px-6 lg:px-6 rounded-[12px] font-bold text-base lg:text-[0.95rem] xl:text-[1rem] bg-black transition-all duration-300 hover:bg-[#333] w-full sm:w-auto justify-center">
                <SiWhatsapp size={20} />
                Chat on WhatsApp
              </Link>
              <Link href="/booking" className="flex items-center gap-2 text-white py-3 lg:py-[1rem] px-6 lg:px-6 rounded-[12px] font-bold text-base lg:text-[0.95rem] xl:text-[1rem] bg-[#13A5D9] transition-all duration-300 hover:bg-[#108bb8] w-full sm:w-auto justify-center">
                <Calendar size={20} />
                Schedule Free Pickup
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center relative min-h-auto lg:min-h-[450px] xl:min-h-[550px] 2xl:min-h-[650px] lg:overflow-visible">
            <div className="relative w-full lg:w-[480px] xl:w-[500px] 2xl:w-[600px] h-auto lg:h-[480px] xl:h-[500px] 2xl:h-[600px] flex flex-col lg:block items-center justify-center mx-auto my-10 lg:my-0 gap-4 lg:gap-0 pl-2 lg:pl-0">
              
              {/* Central Box */}
              <div className="hidden lg:flex w-[90px] h-[90px] xl:w-[110px] xl:h-[110px] bg-white z-[100] flex-col items-center justify-center text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-[2.2rem] xl:text-[2.8rem] font-black text-[#13A5D9] m-0 leading-none">6</h3>
                <span className="text-[0.6rem] xl:text-[0.7rem] font-extrabold text-[#333] mt-[2px] tracking-[1.5px]">STAGES</span>
              </div>

              {/* Steps */}
              {steps.map((step, idx) => (
                <div 
                  key={step.number}
                  className="static w-full h-auto lg:w-[160px] xl:w-[200px] 2xl:w-[240px] lg:h-[160px] xl:h-[200px] 2xl:h-[240px] hover:z-[200] group process-step-outer"
                  style={{ "--i": idx, zIndex: 10 + idx } as React.CSSProperties}
                >
                  <div 
                     className="w-full h-auto lg:h-full flex items-center justify-center p-6 lg:p-[0.5rem] relative rounded-2xl transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] process-step-inner overflow-visible"
                     style={{ background: `var(--step-clr-${idx + 1})` }}
                  >
                    <div className="w-full text-left lg:text-center text-white lg:w-[150px] xl:w-[170px] flex flex-col items-start lg:items-center justify-start lg:justify-center process-step-content relative z-10 px-2 lg:px-0">
                      <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-[0.3rem] mb-[0.4rem] w-full">
                        <div className="w-10 h-10 lg:w-7 lg:h-7 xl:w-8 xl:h-8 flex-shrink-0 text-[1rem] lg:text-[0.8rem] xl:text-[0.85rem] bg-white rounded-full flex items-center justify-center font-black transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md" style={{ color: `var(--step-clr-${idx + 1})` }}>{step.number}</div>
                        <h4 className={`text-[1.05rem] md:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem] font-black m-0 uppercase text-left lg:text-center tracking-normal lg:px-1 transition-transform duration-300 ${(idx + 1) % 2 === 0 ? 'lg:text-[#18A1D8]' : 'text-white'}`}>{step.title}</h4>
                      </div>
                      <p className="text-[0.95rem] md:text-[0.85rem] lg:text-[0.6rem] xl:text-[0.65rem] 2xl:text-[0.75rem] leading-[1.3] text-white m-0 font-medium max-w-full lg:max-w-auto lg:w-[120px] xl:w-[140px] mx-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300 px-1">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
