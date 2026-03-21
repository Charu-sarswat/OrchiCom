"use client";

import React, { useState } from 'react';
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQSectionProps {
  serviceName: string;
  locationName: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ serviceName, locationName }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: `Does The Orchid Laundry offer free pickup and delivery for ${serviceName} in ${locationName}?`,
      answer: `Yes, we offer free doorstep pickup and delivery for all ${serviceName} orders above ₹499 in ${locationName}. For smaller orders, a small convenience fee may apply based on your specific area.`
    },
    {
      question: `How long does professional ${serviceName} take in ${locationName}?`,
      answer: `Our standard turnaround for ${serviceName} in ${locationName} is 48-72 hours. We also offer an express service for urgent requirements, ensuring delivery within 24 hours.`
    },
    {
      question: `Are my clothes mixed with other customers' garments during processing?`,
      answer: `No. We strictly process each customer's order individually in separate wash streams and batches. This is part of our commitment to peak hygiene for our ${locationName} customers.`
    },
    {
      question: `What areas within ${locationName} do you serve?`,
      answer: `We serve almost every part of ${locationName}, including all major residential complexes and housing societies. Our pickup team handles scheduled slots throughout the day.`
    },
    {
      question: `Is the dry cleaning process safe for expensive ethnic wear from ${locationName}?`,
      answer: `Absolutely. We use fabric-safe solvents and European cleaning technology specifically designed for delicate embroidery, silk, and luxury ethnic wear popular among the ${locationName} community.`
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-4 overflow-hidden">
      <div className="container max-w-[1000px] mx-auto px-4">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Common Questions About Our <span className="text-gradient">{serviceName}</span> in <span className="text-gradient">{locationName}</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-[700px] mx-auto font-medium">
             Finding the right {serviceName} in {locationName} shouldn&apos;t be a task. Here are some of the most common questions our local clients ask.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[25px] border border-slate-200 overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              <button
                className="w-full px-8 py-6 flex justify-between items-center text-left bg-transparent border-none cursor-pointer focus:outline-none group"
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              >
                <span className="text-lg md:text-xl font-bold text-slate-900 pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <span className="shrink-0 text-primary flex items-center justify-center bg-primary/5 w-10 h-10 rounded-xl transition-transform duration-300">
                  {activeIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden bg-slate-50/10"
                  >
                    <div className="px-8 pb-8 pt-0 text-slate-600 text-lg leading-relaxed font-medium">
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
};

export default FAQSection;
