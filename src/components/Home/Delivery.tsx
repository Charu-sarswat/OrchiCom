"use client";

import { motion } from "framer-motion";
import { Truck, Zap, Check, Calendar } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function Delivery() {
  return (
    <section className="bg-light section-padding">
      <div className="container">
        <div className="text-center max-w-[900px] mx-auto mb-10">
          <h2 className="text-[2rem] md:text-[3rem] text-black">Free Home Pickup <span className="text-gradient">& Delivery</span></h2>
          <p className="max-w-[800px] mx-auto text-[1.1rem] text-[#444]">
            The Orchid Laundry provides free home pickup and delivery at your convenience. 
            We also offer express delivery services for urgent requirements.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.3fr] items-stretch">
          {/* Regular Delivery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white py-6 px-5 lg:px-6 rounded-[20px] flex flex-col border border-[rgba(24,161,216,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:border-[#18a1d8] hover:shadow-[0_10px_30px_rgba(24,161,216,0.15)] shadow-none min-h-[260px] md:min-h-[0px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <Truck size={30} color="#000" className="shrink-0" />
              <h3 className="text-[1.5rem] lg:text-[1.6rem] m-0 font-bold whitespace-nowrap">Regular <span className="text-primary">Delivery</span></h3>
            </div>
            <ul className="list-none p-0 m-0 flex flex-col gap-[1rem] flex-1">
              <li className="flex items-start gap-[0.6rem] text-black font-medium text-[1.05rem] leading-[1.3]">
                <Check size={20} className="text-black mt-[2px] shrink-0" /> Free (No extra charges)
              </li>
              <li className="flex items-start gap-[0.6rem] text-black font-medium text-[1.05rem] leading-[1.3]">
                <Check size={20} className="text-black mt-[2px] shrink-0" /> Laundry Per KG – 72 Hours
              </li>
              <li className="flex items-start gap-[0.6rem] text-black font-medium text-[1.05rem] leading-[1.3]">
                <Check size={20} className="text-black mt-[2px] shrink-0" /> Dry Clean – 72 Hours
              </li>
              <li className="flex items-start gap-[0.6rem] text-black font-medium text-[1.05rem] leading-[1.3]">
                <Check size={20} className="text-black mt-[2px] shrink-0" /> Shoe Cleaning – 72 Hours
              </li>
            </ul>
          </motion.div>

          {/* Express Delivery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white py-6 px-5 lg:px-6 rounded-[20px] flex flex-col border border-[rgba(24,161,216,0.3)] transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:border-[#18a1d8] hover:shadow-[0_10px_30px_rgba(24,161,216,0.15)] shadow-none min-h-[260px] md:min-h-[0px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap size={30} color="#000" className="shrink-0" />
              <h3 className="text-[1.5rem] lg:text-[1.6rem] m-0 font-bold whitespace-nowrap">Express <span className="text-primary">Delivery</span></h3>
            </div>
            <ul className="list-none p-0 m-0 flex flex-col gap-[1rem] flex-1">
              <li className="flex items-start gap-[0.6rem] text-black font-medium text-[1.05rem] leading-[1.3]">
                <Check size={20} className="text-black mt-[2px] shrink-0" /> With Minimal Additional Charges
              </li>
              <li className="flex items-start gap-[0.6rem] text-black font-medium text-[1.05rem] leading-[1.3]">
                <Check size={20} className="text-black mt-[2px] shrink-0" /> Same-day / Next-day Delivery
              </li>
            </ul>
          </motion.div>

          {/* Van Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center md:col-span-2 lg:col-span-1"
          >
            <div className="w-full relative flex items-center justify-center">
              <Image 
                src="/b2.png" 
                alt="Free Home Pickup & Delivery" 
                width={800} 
                height={600} 
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-12 w-full">
          <Link href="https://wa.me/917080803074" className="btn btn-secondary w-full md:w-auto text-base md:text-[1.1rem] py-[0.8rem] md:py-4 px-6 md:px-8 rounded-xl flex items-center justify-center gap-2 whitespace-nowrap">
            <SiWhatsapp size={20} /> Chat on WhatsApp
          </Link>
          <Link href="/booking" className="btn btn-primary w-full md:w-auto text-base md:text-[1.1rem] py-[0.8rem] md:py-4 px-6 md:px-8 rounded-xl flex items-center justify-center gap-2 whitespace-nowrap">
            <Calendar size={20} /> Schedule Free Pickup
          </Link>
        </div>
      </div>
    </section>
  );
}
