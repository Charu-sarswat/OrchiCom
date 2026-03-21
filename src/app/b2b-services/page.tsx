import { 
  ShieldCheck, 
  CheckCircle2, 
  Truck, 
  ArrowRight,
  ClipboardList,
  Target,
  Users,
  Award,
  Zap,
  Leaf,
  BarChart3,
  UserCheck,
  MapPin
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GlobalFAQ from "@/components/FAQ/GlobalFAQ";
import { b2bIndustries } from "@/services/b2bData";

export const metadata = {
  title: "B2B Commercial Laundry Services | The Orchid Laundry",
  description: "Professional SOP-driven commercial laundry solutions for Hotels, Pharma, Hospitals, Restaurants, and Spas in Navi Mumbai & Dombivli.",
};

const B2BPage = () => {
    
  const b2bFaqs = [
    {
      question: "Do you offer a trial wash for B2B clients?",
      answer: "Yes, we offer a free consultation and a trial wash for all new commercial clients to demonstrate our quality and SOP compliance."
    },
    {
      question: "How do you handle hygiene in hospital/pharma laundry?",
      answer: "We maintain 100% segregation between hospital/pharma streams and other categories. We use dedicated vehicles, separate wash lines, and thermal disinfection protocols."
    },
    {
      question: "What is your coverage area for commercial services?",
      answer: "We serve the entire Navi Mumbai corridor (Airoli to Panvel) and the Kalyan-Dombivli region, with daily pickups for our contracted partners."
    },
    {
      question: "Can we track our linen orders digitally?",
      answer: "Yes, we provide digital documentation for every transaction, including pickup receipts, delivery manifests, and wash batch records upon request."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] flex items-center justify-center bg-black overflow-hidden px-4 md:px-0">
         <Image 
            src="/B2c.png" 
            alt="B2B Commercial Laundry" 
            fill 
            className="object-cover opacity-60"
            priority
         />
         <div className="container relative z-10 text-center text-white">
            <span className="inline-block px-5 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary font-black uppercase tracking-[3px] text-xs mb-8 border border-primary/30">
                Official SOP Document v1.0
            </span>
            <h1 className="text-[2.2rem] md:text-[3.8rem] lg:text-[4.5rem] font-bold leading-[1.1] mb-6 m-0 uppercase tracking-normal text-white">
               B2B Commercial Laundry Services
            </h1>
            <p className="text-[1.1rem] md:text-[1.3rem] font-medium tracking-[0.05em] text-white opacity-90">
                Hygiene. Precision. Reliability. — For Every Industry.
            </p>
         </div>
      </section>

      {/* About The Orchid Section - Sync with About Page Intro */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                <div className="text-left">
                   <h2 className="text-[2rem] md:text-[3.2rem] text-black font-bold mb-10 leading-tight">
                        About The <span className="text-gradient">Orchid Laundry</span>
                   </h2>
                   <div className="space-y-8 text-[#444] text-[1.1rem] md:text-[1.15rem] leading-[1.75] font-medium">
                        <p>
                            Headquartered in Dombivli, Maharashtra, we are a professional commercial laundry company serving both B2C and B2B commercial clients across Kalyan-Dombivli and the entire Navi Mumbai corridor — from Airoli to Panvel.
                        </p>
                        <p>
                            Our B2B division is a dedicated, purpose-built operation designed to serve the unique laundering needs of the healthcare, hospitality, wellness, food service, and pharmaceutical industries.
                        </p>
                   </div>
                   
                   <div className="mt-12 p-10 bg-[#fdfcf6] border border-primary/15 rounded-[30px] flex items-start gap-6">
                        <MapPin className="text-primary mt-1 shrink-0" size={28} />
                        <div>
                            <h4 className="text-black font-bold uppercase text-xs tracking-widest mb-3">Service Hubs</h4>
                            <p className="text-slate-600 m-0 font-bold leading-relaxed text-[0.95rem]">
                                Airoli | Ghansoli | Kopar Khairane | Vashi | Sanpada | Nerul | Seawoods | CBD Belapur | Kharghar | Panvel | Kalyan | Dombivli
                            </p>
                        </div>
                   </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: "Industry SOPs", desc: "Custom wash protocols for each B2B client category.", icon: <ClipboardList className="text-primary" /> },
                        { title: "Trained Experts", desc: "Uniformed experts with category-specific training.", icon: <UserCheck className="text-primary" /> },
                        { title: "On-time Delivery", desc: "Never miss a linen cycle with our scheduled fleet.", icon: <Zap className="text-primary" /> },
                        { title: "Digital records", desc: "Pickup receipts, manifests, and batch records.", icon: <BarChart3 className="text-primary" /> },
                        { title: "Scalable", desc: "From small clinics to multi-property hotel chains.", icon: <Target className="text-primary" /> },
                        { title: "Eco-Friendly", desc: "Biodegradable detergents and water-efficiency.", icon: <Leaf className="text-primary" /> },
                        { title: "Fair Pricing", desc: "Volume discounts for our contracted partners.", icon: <ShieldCheck className="text-primary" /> },
                        { title: "Account Manager", desc: "A single point of contact for every B2B client.", icon: <Users className="text-primary" /> },
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[30px] border border-slate-100 bg-white flex flex-col gap-4 text-left transition-all hover:bg-[#f0f9ff] group">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-black/5 group-hover:scale-110 transition-all">{item.icon}</div>
                            <h4 className="font-bold text-[1.1rem] text-black m-0">{item.title}</h4>
                            <p className="text-slate-500 text-[0.88rem] md:text-[0.95rem] m-0 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Service Category Summary */}
      <section className="py-24 bg-white">
        <div className="container overflow-x-auto text-black">
            <h2 className="text-[1.8rem] md:text-[2.6rem] font-bold text-black mb-12 text-left uppercase tracking-tight">
               Service <span className="text-gradient">Coverage</span> Summary
            </h2>
            <table className="w-full border-collapse rounded-[30px] overflow-hidden border border-slate-100 min-w-[600px]">
                <thead>
                    <tr className="bg-slate-900 text-white">
                        <th className="p-6 text-left font-bold uppercase text-[0.75rem] tracking-widest">Service Category</th>
                        <th className="p-6 text-left font-bold uppercase text-[0.75rem] tracking-widest">Clients We Serve</th>
                        <th className="p-6 text-left font-bold uppercase text-[0.75rem] tracking-widest">Key Focus Area</th>
                    </tr>
                </thead>
                <tbody>
                    {b2bIndustries.map((ind, i) => (
                        <tr key={ind.id} className={`${i % 2 !== 0 ? 'bg-slate-50/50' : 'bg-white'} hover:bg-slate-50 transition-colors`}>
                               {ind.title.replace(" Laundry", "")}
                            <td className="p-6 border-b border-slate-100 font-medium text-slate-700 text-[0.95rem]">
                                {ind.clients.join(", ")}
                            </td>
                            <td className="p-6 border-b border-slate-100 text-primary font-bold">
                                {ind.tagline}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-24">
        <div className="container">
            {b2bIndustries.map((ind, index) => (
                <div key={ind.id} id={ind.id} className={`mb-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 lg:gap-24 items-center`}>
                    {/* Visual Card */}
                    <div className="w-full lg:w-1/2 relative min-h-[450px] md:min-h-[600px] rounded-[30px] overflow-hidden">
                        <Image src={ind.image} alt={ind.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-12 lg:p-20 text-left">
                            <div className="mb-8">
                            </div>
                            <h3 className="text-[2rem] md:text-[3.2rem] font-bold text-white mb-4 leading-none uppercase tracking-normal">{ind.title}</h3>
                            <p className="text-[1.2rem] text-primary font-bold uppercase tracking-widest">{ind.tagline}</p>
                        </div>
                    </div>

                    {/* Content Card */}
                    <div className="w-full lg:w-1/2 text-left py-8">
                        <div className="mb-12">
                            <h4 className="text-[1.8rem] md:text-[2.6rem] font-bold text-black mb-8 leading-tight">{ind.title} <span className="text-gradient">Industry Scope</span></h4>
                            <p className="text-[1.1rem] md:text-[1.15rem] leading-[1.75] text-[#444] mb-10 font-medium">{ind.description}</p>
                            <div className="flex flex-wrap gap-3">
                                {ind.clients.map(c => (
                                    <span key={c} className="px-6 py-2.5 bg-slate-100 rounded-full text-slate-800 text-[0.8rem] font-bold uppercase tracking-widest border border-slate-200">{c}</span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-black font-bold text-sm uppercase tracking-widest mb-8 flex items-center gap-4">
                                <span className="w-12 h-[2px] bg-primary"></span>
                                Core Protocol Highlights
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {ind.sop.slice(0, 4).map(step => (
                                    <div key={step.step} className="flex gap-4 items-start p-6 bg-white border border-slate-100 rounded-[20px] transition-all hover:border-primary">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                                            {step.step}
                                        </div>
                                        <h5 className="text-[0.95rem] font-bold text-black uppercase tracking-tight leading-tight mt-1.5">{step.title}</h5>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Link href={`/b2b-services/${ind.slug}`} className="mt-16 inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1">
                            Full SOP Document
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-slate-100 text-center">
            <p className="text-slate-400 font-bold uppercase tracking-[4px] text-[0.7rem]">
                The Orchid Laundry Services | B2B Division | Dombivli - Navi Mumbai
            </p>
      </footer>
    </div>
  );
};

export default B2BPage;
