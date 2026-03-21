import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Truck, 
  ArrowLeft,
  Calendar,
  Phone
} from "lucide-react";
import { b2bIndustries } from "@/services/b2bData";
import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = b2bIndustries.find((ind) => ind.slug === slug);
  if (!industry) return {};
  
  return {
    title: `${industry.title} Services | B2B Commercial Laundry`,
    description: `Standard Operating Procedure (SOP) and professional laundering for ${industry.title} in Navi Mumbai and Dombivli.`,
  };
}

export async function generateStaticParams() {
  return b2bIndustries.map((ind) => ({
    slug: ind.slug,
  }));
}

export default async function B2BIndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = b2bIndustries.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  const industryIcon = <industry.icon className="w-8 h-8" />;
  const stepLabels = ["First Step", "Second Step", "Third Step", "Fourth Step", "Fifth Step", "Sixth Step", "Seventh Step", "Eighth Step"];

  return (
    <div className="bg-white">
      {/* Detail Hero - Sync with About Page */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center bg-black overflow-hidden px-4 md:px-0">
        <Image src={industry.image} alt={industry.title} fill className="object-cover opacity-50" priority />
        <div className="container relative z-10 text-left text-white">
           <Link href="/b2b-services" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors mb-8 font-bold uppercase tracking-widest text-xs no-underline">
              <ArrowLeft size={16} />
              Return to B2B Services
           </Link>
           <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
              <h1 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.1] text-white m-0 uppercase tracking-normal">
                  {industry.title}
              </h1>
           </div>
           <p className="text-[1.1rem] md:text-[1.3rem] font-medium tracking-[0.05em] text-white opacity-90 max-w-[700px]">
             {industry.tagline}
           </p>
        </div>
      </section>

      {/* Overview Block - SYNC ABOUT STYLE */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
               <div className="flex-1 text-left">
                  <h2 className="text-[1.8rem] md:text-[2.6rem] font-bold text-black mb-8 leading-tight">
                    Professional <span className="text-gradient">Linen Management</span>
                  </h2>
                  <p className="text-[1.1rem] md:text-[1.15rem] leading-[1.75] text-[#444] mb-8 font-medium">
                    {industry.fullAbout || industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {industry.clients.map(client => (
                      <span key={client} className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-bold text-[0.75rem] uppercase tracking-widest">
                        {client}
                      </span>
                    ))}
                  </div>
               </div>

               <div className="w-full md:w-[320px] bg-white p-8 rounded-[30px] border border-slate-100 flex flex-col gap-6 sticky top-24">
                  <h4 className="text-black font-bold uppercase tracking-widest text-[0.7rem] mb-2">Our B2B Standards</h4>
                  {[
                    { title: "SOP Driven", icon: <CheckCircle2 size={16} /> },
                    { title: "Dedicated Facility", icon: <ShieldCheck size={16} /> },
                    { title: "Daily Pickup", icon: <Truck size={16} /> },
                    { title: "Batch Records", icon: <Clock size={16} /> },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-700 font-bold text-[0.95rem]">
                      <div className="text-primary">{item.icon}</div>
                      {item.title}
                    </div>
                  ))}
                  <Link href="/contact" className="bg-primary text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-transform hover:-translate-y-1 mt-4 no-underline">Enquire Now</Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wash Protocol Table Section - SYNC ABOUT CHAMPAGNE */}
      {industry.washTable && (
        <section className="py-24 border-t border-slate-100 bg-[#fdfcf6]">
          <div className="container text-left overflow-x-auto text-black">
             <h3 className="text-[1.6rem] md:text-[2rem] font-bold mb-10 text-black">
                Chemistry & <span className="text-gradient">Temperature</span> Protocol
             </h3>
             <table className="w-full border-collapse border border-slate-200 bg-white rounded-2xl overflow-hidden">
                <thead>
                   <tr className="bg-slate-50">
                      <th className="border-b border-slate-200 p-5 text-left font-bold uppercase text-[0.65rem] tracking-widest text-slate-400">Inventory Type</th>
                      <th className="border-b border-slate-200 p-5 text-left font-bold uppercase text-[0.65rem] tracking-widest text-slate-400">Wash Temp</th>
                      <th className="border-b border-slate-200 p-5 text-left font-bold uppercase text-[0.65rem] tracking-widest text-slate-400">Detergent Used</th>
                      <th className="border-b border-slate-200 p-5 text-left font-bold uppercase text-[0.65rem] tracking-widest text-slate-400">Cycle Specification</th>
                   </tr>
                </thead>
                <tbody>
                   {industry.washTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                         <td className="border-b border-slate-200 p-5 font-bold text-[0.9rem] text-black uppercase tracking-tight">{row.type}</td>
                         <td className="border-b border-slate-200 p-5 text-[#555] font-medium text-[0.9rem]">{row.temp}</td>
                         <td className="border-b border-slate-200 p-5 text-[#555] font-medium text-[0.9rem]">{row.detergent}</td>
                         <td className="border-b border-slate-200 p-5">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest rounded-md">{row.cycle}</span>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </section>
      )}

      {/* Timeline SOP Section */}
      <section className="py-32 bg-white overflow-hidden border-t border-slate-100">
        <div className="container">
           <div className="text-center mb-24 max-w-[800px] mx-auto px-4 md:px-0">
               <h2 className="text-[2rem] md:text-[3.2rem] font-bold text-primary mb-4 leading-tight uppercase tracking-tight">
                  Standard Operating Procedure
               </h2>
               <p className="text-[1.1rem] md:text-[1.15rem] leading-[1.8] text-[#444] font-medium">
                 Professional commerical laundry workflow for {industry.title}.
               </p>
           </div>

           <div className="relative max-w-[1200px] mx-auto px-4 lg:px-0">
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/15 -translate-x-1/2 hidden lg:block"></div>
              <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-primary/15 lg:hidden"></div>

              <div className="space-y-16 lg:space-y-0">
                {industry.sop.map((step, idx) => {
                  const isEven = idx % 2 !== 0;
                  return (
                    <div key={idx} className={`relative flex flex-col lg:flex-row items-center justify-between lg:h-[220px] ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      
                      <div className={`w-full lg:w-[45%] flex ${isEven ? 'lg:justify-start' : 'lg:justify-end'} pl-16 lg:pl-0 mb-4 lg:mb-0`}>
                        <span className="text-primary font-bold uppercase tracking-[2px] text-xs lg:text-sm">
                          {stepLabels[idx] || `Step ${step.step}`}
                        </span>
                      </div>

                      <div className="absolute left-8 lg:left-1/2 top-0 lg:top-1/2 lg:-translate-y-1/2 -translate-x-1/2 z-10">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white border-4 border-white">
                          <Clock size={16} />
                        </div>
                      </div>

                      <div className={`w-full lg:w-[45%] flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'} pl-16 lg:pl-0`}>
                        <div className="bg-[#f0f9ff]/30 p-8 lg:p-10 rounded-[30px] border border-primary/10 w-full transition-all duration-300 relative group hover:border-primary">
                          <h3 className="text-[1.3rem] lg:text-[1.5rem] font-bold text-black mb-4 leading-tight group-hover:text-primary transition-colors uppercase tracking-tight">
                            {step.title}
                          </h3>
                          <ul className="list-none p-0 m-0 space-y-3">
                             {step.points.map((p, i) => (
                               <li key={i} className="text-[#555] text-[0.9rem] leading-relaxed flex gap-2">
                                  <span className="w-1.5 h-1.5 bg-primary/30 rounded-full mt-2 shrink-0"></span>
                                  {p}
                               </li>
                             ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section - SYNC ABOUT PROMISE */}
      <section className="py-24 md:py-32 bg-white flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-[1000px] border border-primary rounded-[40px] bg-[#f0f9ff] py-16 px-12 md:px-20 mx-4">
             <h2 className="text-[2rem] md:text-[2.8rem] text-black font-bold mb-8">
                Partner With <span className="text-gradient">The Orchid Professionals</span>
             </h2>
             <p className="text-[1.1rem] md:text-[1.25rem] leading-[1.8] text-[#444] mb-12 max-w-[700px] mx-auto">
                Ready to elevate your {industry.title.toLowerCase()} experience? We offer a free site audit and trial wash for all new commercial partners.
             </p>
             <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link href="/booking" className="bg-primary text-white py-5 px-12 rounded-full font-bold uppercase tracking-widest text-sm transition-transform hover:-translate-y-1 no-underline">
                   Book Free Audit
                </Link>
                <a href="tel:+917080803074" className="bg-black text-white py-5 px-12 rounded-full font-bold uppercase tracking-widest text-sm transition-transform hover:-translate-y-1 no-underline">
                   Call Our B2B Team
                </a>
             </div>
          </div>
      </section>

      <GlobalFAQ faqs={industryFaqs} subtitle="Commercial Support Desk" />
    </div>
  );
}

const industryFaqs = [
  {
    question: "Do you offer customizable wash chemistry for specific stains?",
    answer: "Absolutely. We conduct a fabric audit and stain analysis for every new B2B client to determine the optimal chemical balance and wash temperature for your specific inventory."
  },
  {
    question: "What is your typical turnaround time for commercial linen?",
    answer: "Our standard B2B cycle is 24 to 48 hours. However, we offer an express 12-hour turnaround for critical hospitality and hospital linen requirements."
  },
  {
    question: "How do you handle inventory loss prevention?",
    answer: "Every order is counted at pickup and delivery against a digital manifest. We maintain 100% batch traceability and provide month-end reports on linen condition and counts."
  }
];
