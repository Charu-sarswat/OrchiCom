"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type FAQItem = {
  question: string;
  answer: string;
};

interface GlobalFAQProps {
  faqs: FAQItem[];
}

export default function GlobalFAQ({ faqs }: GlobalFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f8f9fa] py-16 lg:py-24">
      <div className="container max-w-[1000px] mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#18a1d8] text-[0.8rem] font-bold uppercase tracking-widest mb-3">
            GENERAL FAQS
          </p>
          <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold text-black m-0">
            FAQs | The Orchid Laundry <span className="font-normal text-[#18a1d8]">- Best Laundry & Dry Clean Company</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              style={{ boxShadow: 'none' }}
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left bg-transparent border-none cursor-pointer focus:outline-none group"
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              >
                <span className="text-[0.95rem] md:text-[1.05rem] font-medium text-black pr-4 group-hover:text-[#18a1d8] transition-colors">
                  {faq.question}
                </span>
                <span className="shrink-0 text-black flex items-center justify-center">
                  {activeIndex === idx ? <Minus size={20} className="text-[#18a1d8]" /> : <Plus size={20} strokeWidth={2.5} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 text-gray-600 text-[0.95rem] leading-[1.6]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
