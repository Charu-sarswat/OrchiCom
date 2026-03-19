"use client";

import { useParams, notFound } from "next/navigation";
import { servicesData } from "@/services/servicesData";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle, ArrowRight, Calendar, XCircle, AlertCircle, Sparkles,
  Shirt, User, User2, Briefcase, Bed, Luggage, IndianRupee, Info
} from "lucide-react";

type ServiceKey = keyof typeof servicesData;

const slugToPricingService: Record<string, string> = {
  "dry-cleaning":      "Dry Clean",
  "wash-iron":         "Wash Per Kg",
  "wash-fold":         "Wash Per Kg",
  "wash-kg":           "Wash Per Kg",
  "premium-laundry":   "Dry Clean",
  "household-laundry": "Wash Per Kg",
  "steam-iron":        "Steam Iron",
  "shoe-cleaning":     "Dry Clean",
  "sofa-cleaning":     "Dry Clean",
  "carpet-cleaning":   "Dry Clean",
  "curtain-cleaning":  "Dry Clean",
  "bridal-wear":       "Dry Clean",
  "special-laundry":   "Dry Clean",
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  if (!servicesData[slug as ServiceKey]) return notFound();

  const service = servicesData[slug as ServiceKey] as any;
  const pricingService = slugToPricingService[slug] || "Dry Clean";

  const splitTitle = (title: string) => {
    if (!title) return null;
    const words = title.split(" ");
    const splitPoint = Math.floor(words.length / 2);
    const firstPart = words.slice(0, splitPoint).join(" ");
    const secondPart = words.slice(splitPoint).join(" ");
    return <>{firstPart} <span className="text-gradient">{secondPart}</span></>;
  };

  return (
    <div className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 min-[992px]:grid-cols-2 gap-8 min-[992px]:gap-12 items-center mb-10 min-[992px]:mb-14">
          <div>
            <span className="block text-[0.82rem] font-bold uppercase text-[#888] tracking-[1.5px] mb-2">The Orchid Laundry</span>
            <h1 className="text-black mb-[0.8rem] leading-[1.1] text-[2rem] max-[480px]:text-[1.9rem] lg:text-[clamp(2rem,4vw,3.2rem)]">{splitTitle(service.title)}</h1>

            <p className="text-[1.15rem] font-bold text-[#333] mb-4">{service.subtitle}</p>
            <p className="text-base text-[#555] leading-[1.65] mb-6">{service.description}</p>
            
            <ul className="list-none p-0 flex flex-col gap-[0.7rem]">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-center gap-[0.8rem] font-semibold text-[0.95rem] text-[#444]">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="rounded-[20px] overflow-hidden">
              <Image src={service.image} alt={service.title} width={600} height={500} className="w-full h-auto block" priority />
            </div>
          </div>
        </div>

        {/* Long Description Section */}
        {'longDescription' in service && (
          <section className="mb-14">
            <div className="section-title text-center">
              <h2 className="text-[2rem] mb-6">{splitTitle(service.longDescTitle)}</h2>
            </div>

            <div className="max-w-[900px] mx-auto py-5 max-[768px]:px-5 md:py-8 px-10 bg-[#f8fafc] rounded-2xl md:rounded-[20px] border border-[#e2e8f0]">
              <div className="max-w-[820px] mx-auto text-center flex flex-col gap-4">
                {service.longDescription.map((para: string, i: number) => (
                  <p key={i} className="text-[0.95rem] md:text-[1.05rem] text-[#555] leading-[1.75]">{para}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Comparisons Section */}
        {'comparisons' in service && (
          <section className="mb-14">
            <div className="grid grid-cols-1 min-[992px]:grid-cols-2 gap-8">
              {service.comparisons.map((comp: any, idx: number) => (
                <div key={idx} className={`p-8 rounded-[20px] border border-[#eee] ${comp.isNegative ? 'bg-[#fffcfc]' : 'bg-[#fafff4]'}`}>
                  <div className="flex items-center gap-[0.8rem] mb-6">
                    {comp.isNegative ? <XCircle size={24} color="#f44336" /> : <CheckCircle size={24} color="#4caf50" />}
                    <h3 className="text-[1.15rem] font-extrabold text-[#333] m-0">{comp.title}</h3>
                  </div>
                  <ul className="list-none p-0 flex flex-col gap-[0.9rem]">
                    {comp.points.map((point: string, pIdx: number) => (
                      <li key={pIdx} className="flex items-start gap-[0.8rem] text-[0.95rem] leading-[1.5] text-[#555]">
                        {comp.isNegative ? <XCircle size={18} className="text-[#f44336] shrink-0 mt-[2px]" /> : <CheckCircle size={18} className="text-[#4caf50] shrink-0 mt-[2px]" />}
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process Section */}
        {'process' in service && service.process && (
          <section className="mb-14">
            <div className="section-title text-center">
              <h2 className="text-[2rem] mb-[0.8rem]">{splitTitle(service.processTitle)}</h2>
              <p>{slug === 'steam-iron' ? 'Each garment goes through a careful process to ensure exceptional results every time.' : 'Every garment is processed through a carefully designed procedure to guarantee a fresh, crisp, and spotless finish.'}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-y-10 max-[768px]:gap-y-10 max-w-[1200px] mx-auto mt-8 lg:mt-14 pt-[3rem]">
              {service.process.map((p: any) => (
                <div key={p.step} className="bg-white rounded-2xl border border-[#eee] relative pb-6 px-5 pt-10 transition-transform duration-250 ease hover:-translate-y-1">
                  <div className="absolute -top-6 left-4 w-[52px] h-[52px] bg-primary rounded-xl flex items-center justify-center text-[1.8rem] font-black text-white">{p.step}</div>
                  <div>
                    <h4 className="text-[1.05rem] text-black mb-2 font-extrabold">{p.title}</h4>
                    <p className="m-0 text-[#666] leading-[1.6] text-[0.9rem]">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Features Section */}
        {service.keyFeatures && (
          <section className="mb-12">
            <div className="max-w-[1000px] mx-auto py-6 px-5 lg:py-8 lg:px-10 bg-white border border-[#eef2f6] rounded-3xl">
              <h3 className="text-[1.2rem] text-black mb-6 font-extrabold flex items-center gap-[0.7rem]">
                <Sparkles size={22} /> {splitTitle(service.featuresTitle || "Key Features")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.8rem] md:gap-x-8 md:gap-y-4">
                {service.keyFeatures.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-[0.8rem] text-[0.95rem] text-[#444] font-semibold">
                    <div className="text-[#4caf50] flex items-center shrink-0 mt-[1px]"><CheckCircle size={18} /></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Extra Sections (e.g., Special Features, Additional Services) */}
        {service.extraSections && service.extraSections.map((section: any, idx: number) => (
          <section key={idx} className="mb-12">
            <div className="max-w-[1000px] mx-auto py-6 px-5 lg:py-8 lg:px-10 bg-white border border-[#eef2f6] rounded-3xl">
              <h3 className="text-[1.2rem] text-black mb-6 font-extrabold flex items-center gap-[0.7rem]">
                <Info size={22} /> {splitTitle(section.title)}
              </h3>
              <div className={`grid gap-[0.8rem] md:gap-y-4 md:gap-x-6 ${section.items.length > 6 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                {section.items.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-[0.8rem] text-[0.95rem] text-[#444] font-semibold">
                    <div className="text-[#4caf50] flex items-center shrink-0 mt-[1px]"><CheckCircle size={18} /></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Closing Statement / Note */}
        {'closingStatement' in service && (
          <div className="max-w-[860px] mx-auto mt-10 py-4 px-5 lg:py-[1.2rem] lg:px-[1.8rem] bg-[#f0f9ff] border border-primary rounded-xl lg:rounded-2xl flex items-start gap-4">
            <Info size={20} className="shrink-0 text-primary mt-[2px]" />
            <p className="m-0 text-[0.9rem] lg:text-[0.95rem] text-[#444] leading-[1.65] font-medium">{service.closingStatement}</p>
          </div>
        )}

        <div className="flex flex-col items-center gap-5 mt-12">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
            <Link 
              href={`https://wa.me/917006823074?text=I%20want%20to%20schedule%20a%20pickup%20for%20${service.title}`}
              className="bg-primary text-white py-[0.85rem] px-8 rounded-xl font-bold text-[0.95rem] no-underline flex items-center justify-center gap-[0.6rem] transition-all duration-250 ease hover:-translate-y-[2px] hover:opacity-90"
              target="_blank"
            >
              <Calendar size={18} /> {service.pickupBtnText || "Schedule Pickup"}
            </Link>
            {service.pricingBtnText && (
              <Link href={`/pricing?service=${encodeURIComponent(pricingService)}`} className="bg-black text-white py-[0.85rem] px-8 rounded-xl font-bold text-[0.95rem] no-underline flex items-center justify-center gap-[0.6rem] transition-all duration-250 ease hover:-translate-y-[2px] hover:bg-[#222]">
                <IndianRupee size={16} /> {service.pricingBtnText}
              </Link>
            )}
          </div>
          <Link href="/services" className="flex items-center gap-[0.6rem] text-[#555] font-semibold text-[0.9rem] no-underline py-[0.6rem] px-5 border border-[#ddd] rounded-[10px] transition-all duration-250 ease hover:bg-[#f5f5f5] hover:text-black">
            <ArrowRight size={18} className="rotate-180" /> {service.backBtnText || "Back to All Services"}
          </Link>
        </div>

      </div>
    </div>
  );
}
