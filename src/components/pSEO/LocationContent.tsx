import React from 'react';
import { Shield, Droplets, Zap, CheckCircle, Package } from 'lucide-react';

interface LocationContentProps {
  serviceName: string;
  locationName: string;
  areas: string[];
  description: string;
  serviceKey: string;
}

const LocationContent: React.FC<LocationContentProps> = ({ serviceName, locationName, areas, description, serviceKey }) => {
  const splitTitle = (title: string) => {
    if (!title) return null;
    const words = title.split(" ");
    const splitPoint = 1;
    const firstPart = words.slice(0, splitPoint).join(" ");
    const secondPart = words.slice(splitPoint).join(" ");
    return <>{firstPart} <span className="text-gradient">{secondPart}</span></>;
  };

  return (
    <div className="section-padding py-24 bg-white">
      <div className="container max-w-[1240px] mx-auto px-4">
        
        {/* Intro Block */}
        <div className="text-left mb-20 px-4 border-l-4 border-primary pl-8">
           <h2 className="text-[2.2rem] md:text-[2.8rem] text-black font-bold mb-6 leading-tight">
             Looking for the Best <span className="text-gradient">{serviceName}</span> in {locationName}?
           </h2>
           <p className="text-[1.2rem] md:text-[1.3rem] font-bold text-black mb-5 leading-snug">
              {serviceName} in {locationName} by <span className="text-primary">The Orchid Laundry</span>.
           </p>
           <p className="text-[1rem] md:text-[1.1rem] text-[#444] leading-relaxed mb-6 font-medium">
             {description} The Orchid Laundry specializes in premium fabric care for {locationName} residents, ensuring that your clothes receive the scientific cleaning they deserve.
           </p>
           <p className="text-[1rem] md:text-[1.1rem] text-[#444] leading-relaxed font-medium">
             Whether you reside in {areas.join(", ")} or the surrounding residential sectors of {locationName}, our free doorstep pickup and delivery service makes laundry a breeze.
           </p>
        </div>

        {/* Areas Covered Grid */}
        <section className="mb-16 px-4 bg-white p-8 md:p-10 rounded-[30px] border border-slate-200 shadow-none transition-all duration-300 text-left">
           <h3 className="text-[2.2rem] md:text-[2.8rem] font-bold text-black mb-8 leading-tight">
             {splitTitle(`Service Areas in ${locationName}`)}
           </h3>
           <p className="text-[#444] mb-8 text-[1.05rem] font-bold leading-relaxed max-w-[800px]">
             We cover all major residential complexes, corporate hubs, and independent households across {locationName}, including:
           </p>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
             {areas.map((area, idx) => (
               <div key={idx} className="flex items-center gap-4 bg-slate-50/50 p-4 rounded-xl border border-slate-100 hover:border-primary/20 transition-all shadow-none">
                 <CheckCircle className="text-green-500 shrink-0" size={18} />
                 <span className="font-bold text-[#444] text-[0.95rem]">{area}</span>
               </div>
             ))}
           </div>
        </section>

        {/* Additional Robust SEO Block: Process for this location */}
        <section className="mb-16 px-4 bg-white text-black p-10 md:p-14 rounded-[30px] border border-slate-200 relative overflow-hidden shadow-none">
          <div className="relative z-10 text-left">
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold mb-10 leading-tight">
              {splitTitle(`Professional Care Process In ${locationName}`)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-2xl shadow-none">1</div>
                 <h4 className="text-[1.3rem] font-bold uppercase tracking-tight">Pickup & Tagging</h4>
                 <p className="text-[#444] text-[1.05rem] leading-relaxed font-bold">Once you schedule your pickup in {locationName}, our local executive collects and tags each garment.</p>
              </div>
              <div className="flex flex-col gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white text-slate-900 border border-slate-200 flex items-center justify-center font-bold text-2xl">2</div>
                 <h4 className="text-[1.3rem] font-bold uppercase tracking-tight">Eco-Cleaning</h4>
                 <p className="text-[#444] text-[1.05rem] leading-relaxed font-bold">Your clothes go through industrial laundry cycles using hypoallergenic detergents.</p>
              </div>
              <div className="flex flex-col gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-2xl shadow-none">3</div>
                 <h4 className="text-[1.3rem] font-bold uppercase tracking-tight">Quality & Delivery</h4>
                 <p className="text-[#444] text-[1.05rem] leading-relaxed font-bold">Final check in our central facility, then dispatched back to you within 48-72 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Multi-block Content (reaching word count) */}
        <section className="mb-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
             <div className="flex flex-col gap-8">
               <h3 className="text-[1.8rem] md:text-[2rem] font-bold text-black border-b-2 border-slate-50 pb-6">
                 {splitTitle(`Why Choose Us?`)}
               </h3>
               <p className="text-[#444] text-[1.05rem] leading-relaxed font-bold">
                 {locationName} is a vibrant and growing community that values quality and transparency. Unlike local dhobi shops, The Orchid Laundry uses state-of-the-art technology.
               </p>
               <div className="flex flex-col gap-6">
                 <div className="flex gap-5 items-start">
                   <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                     <Zap size={20} />
                   </div>
                   <div>
                     <h4 className="text-[1.2rem] font-bold text-black mb-1">Scientific Precision</h4>
                     <p className="text-[#444] text-[0.95rem] font-bold">Optimized cycles to preserve fabric integrity and color longevity.</p>
                   </div>
                 </div>
                 <div className="flex gap-5 items-start">
                   <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                     <Droplets size={20} />
                   </div>
                   <div>
                     <h4 className="text-[1.2rem] font-bold text-black mb-1">Hygienic Batches</h4>
                     <p className="text-[#444] text-[0.95rem] font-bold">Strictly individual wash batches for peak hygiene and peace of mind.</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="flex flex-col gap-8">
               <h3 className="text-[1.8rem] md:text-[2rem] font-bold text-black border-b-2 border-slate-50 pb-6">
                {splitTitle(`Premium Care In ${locationName}`)}
               </h3>
               <p className="text-[#444] text-[1.05rem] leading-relaxed font-bold">
                 Our expertise in {serviceName} has made us a household name for handling expensive ethnic wear and designer labels with absolute care.
               </p>
               <div className="bg-white border-2 border-slate-100 p-8 rounded-[30px] flex flex-col items-center justify-center text-center shadow-none">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-none">
                    <Package size={26} />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3 tracking-tight uppercase">Doorstep Pickup in {locationName}</h4>
                  <p className="text-[#444] text-[0.95rem] leading-relaxed font-bold m-0">Schedule your pickup today and join thousand of families who trust us.</p>
               </div>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default LocationContent;
