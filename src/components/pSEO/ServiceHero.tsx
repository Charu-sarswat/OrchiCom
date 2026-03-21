"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, CheckCircle } from 'lucide-react';

interface ServiceHeroProps {
  serviceName: string;
  locationName: string;
  imageUrl: string;
  serviceSlug: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ serviceName, locationName, imageUrl, serviceSlug }) => {
  const splitTitle = (title: string) => {
    if (!title) return null;
    const words = title.split(" ");
    const splitPoint = 1;
    const firstPart = words.slice(0, splitPoint).join(" ");
    const secondPart = words.slice(splitPoint).join(" ");
    return <>{firstPart} <span className="text-gradient">{secondPart}</span></>;
  };

  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#f8fafc]">
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-[0.8rem] uppercase tracking-[3px] mb-6">
              <MapPin size={16} /> Premium Care in {locationName}
            </div>
            <h1 className="text-black mb-6 leading-tight text-[2.2rem] md:text-[3.2rem] font-bold">
              {splitTitle(`${serviceName} in ${locationName}`)}
            </h1>
            <p className="text-[1.2rem] md:text-[1.3rem] font-bold text-black mb-5 leading-snug">The Orchid Laundry brings premium, eco-friendly fabric care to {locationName}.</p>
            <p className="text-[1rem] md:text-[1.1rem] text-[#444] leading-relaxed mb-8 max-w-[600px]">
              Trusted by thousands for consistent quality and doorstep convenience. Our specialized {serviceName.toLowerCase()} process ensures your garments receive the scientific care they deserve in Maharashtra.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link 
                href={`https://wa.me/917080803074?text=Hello, I need ${serviceName} in ${locationName}`}
                className="px-8 py-3.5 text-[1.05rem] font-bold rounded-[14px] flex items-center justify-center gap-[10px] min-w-full md:min-w-[240px] text-white bg-black border-none transition-all duration-300 ease-out hover:-translate-y-[3px] hover:brightness-105"
                target="_blank"
              >
                Book Pickup in {locationName}
              </Link>
              <Link 
                href="/pricing"
                className="px-8 py-3.5 text-[1.05rem] font-bold rounded-[14px] flex items-center justify-center gap-[10px] min-w-full md:min-w-[240px] text-white bg-[#18A1D8] border-none transition-all duration-300 ease-out hover:-translate-y-[3px] hover:brightness-105"
              >
                Check Pricing
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <span className="font-bold text-slate-700">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-primary" size={20} />
                <span className="font-bold text-slate-700">48-Hr Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="font-bold text-slate-700">Expert Care</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden border-8 border-white aspect-[4/3] relative">
              <Image 
                src={imageUrl} 
                alt={`${serviceName} in ${locationName}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
