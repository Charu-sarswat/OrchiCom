import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { locations } from '@/services/locationData';
import { servicesData } from '@/services/servicesData';

interface InternalLinksProps {
  currentService: string;
  currentLocation: string;
  currentServiceSlug: string;
  currentLocationSlug: string;
}

const InternalLinks: React.FC<InternalLinksProps> = ({ 
  currentService, 
  currentLocation, 
  currentServiceSlug, 
  currentLocationSlug 
}) => {
  // Get other locations for same service (randomized or top ones)
  const otherLocations = locations
    .filter(loc => loc.slug !== currentLocationSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);

  // Get other services for same location
  const otherServices = Object.entries(servicesData)
    .filter(([slug]) => slug !== currentServiceSlug)
    .slice(0, 8);

  return (
    <section className="bg-white py-24 px-4 border-t border-slate-100">
      <div className="container max-w-[1200px] mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Other Locations Column */}
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl md:text-3xl font-black text-black mb-2 flex items-center gap-4 border-b-2 border-slate-100 pb-4">
              <MapPin className="text-primary" size={28} /> {currentService} In Other Areas
            </h3>
            <p className="text-slate-500 font-medium -mt-4">Quality garment care available across Thane and Navi Mumbai.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherLocations.map(loc => (
                <Link 
                  key={loc.slug} 
                  href={`/services/${currentServiceSlug}/${loc.slug}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-primary/30 transition-all hover:bg-primary/5 group"
                >
                  <MapPin size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                  <span className="font-bold text-slate-700 group-hover:text-primary transition-colors">{currentService} in {loc.name}</span>
                  <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-primary" />
                </Link>
              ))}
            </div>
          </div>

          {/* Other Services Column */}
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl md:text-3xl font-black text-black mb-2 flex items-center gap-4 border-b-2 border-slate-100 pb-4">
              Other Services In {currentLocation}
            </h3>
             <p className="text-slate-500 font-medium -mt-4">Comprehensive fabric and home upholstery solutions for local families.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherServices.map(([slug, data]) => (
                <Link 
                  key={slug} 
                  href={`/services/${slug}/${currentLocationSlug}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-primary/30 transition-all hover:bg-primary/5 group"
                >
                  <span className="font-bold text-slate-700 group-hover:text-primary transition-colors">{(data as any).title.replace("Best ", "")} in {currentLocation}</span>
                  <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-primary" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Global Hub CTA */}
        <div className="mt-24 p-10 md:p-16 rounded-[50px] bg-white border-2 border-primary relative overflow-hidden flex flex-col items-center justify-center text-center text-black shadow-none">
           <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight max-w-[800px]">
             Experience The Best <span className="text-gradient">Laundry Standard</span> In {currentLocation}
           </h3>
           <p className="text-[1.2rem] md:text-[1.35rem] text-[#444] mb-10 max-w-[700px] leading-relaxed font-bold capitalize">
             No matter where you are in {currentLocation}, we are just a WhatsApp away.
           </p>
           <Link 
              href="https://wa.me/917080803074" 
              className="px-12 py-5 text-xl font-bold rounded-[14px] bg-black text-white transition-all duration-300 ease-out hover:-translate-y-[3px] hover:brightness-105"
              target="_blank"
            >
              Get Started Now
            </Link>
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
