"use client";

import { useState, Fragment, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Info, Truck, Clock, CheckCircle, Package, Star, Calendar, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

interface PricingItem { name: string; price: string; }
interface PricingGroup { category: string; items: PricingItem[]; }
interface PricingDataMap { [serviceName: string]: PricingGroup[]; }
interface Plan { name: string; price: string; features: string[]; popular: boolean; }

import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

const pricingFaqs = [
  {
    question: "Why does pricing vary slightly for certain premium fabrics?",
    answer: "Premium fabrics like silk, cashmere, and high-end synthetics require specialized, extra-delicate solvents and longer processing times to ensure the fibers are not degraded, which creates a slight pricing gap compared to standard cottons."
  },
  {
    question: "Do you have any hidden pickup or delivery charges?",
    answer: "Nothing is hidden! Orders above ₹499 unlock absolutely free pickup and delivery. For orders below this threshold, a small flat delivery fee applies based on the order value—all clearly stated before you confirm."
  },
  {
    question: "What are the benefits of your prepaid bulk washing plans?",
    answer: "Our prepaid plans act like a digital wallet where you pay upfront for highly discounted volume credits. They eliminate the hassle of daily payments and offer overall savings of up to 25% for regular households."
  },
  {
    question: "Are your listed prices inclusive of all taxes?",
    answer: "Yes, all our prices on the website and app are fully inclusive of all applicable taxes. The price you see is exactly what you pay in your final invoice."
  },
  {
    question: "Do you offer any special discounts for recurring or loyal customers?",
    answer: "We have a loyalty program where recurring customers earn points on every order. We also offer seasonal and festive discounts which are announced via our WhatsApp newsletter."
  },
  {
    question: "Is there a significant price difference for Men's and Women's garments?",
    answer: "Pricing is primarily based on fabric type and garment complexity. While most standard items like shirts have similar rates, heavily embellished or delicate women's wear may require specialized care pricing."
  },
  {
    question: "How do you calculate the weight for the 'Wash per KG' service?",
    answer: "We weigh your clothes right at our facility using high-precision digital scales. This 'dry weight' is used to calculate your final bill accurately before the washing process begins."
  },
  {
    question: "Do you provide customized pricing for corporate or hotel contracts?",
    answer: "Yes, we offer specialized B2B pricing for high-volume corporate clients, hotels, and clinics. Please reach out to our commercial team via the contact page for a custom quote."
  },
  {
    question: "Are your subscription wallet plans refundable if not fully used?",
    answer: "Our subscription plans are designed for value and have high validity periods. While usually non-refundable, the credits can be transferred to another user or carried forward in most cases."
  },
  {
    question: "Can I use 'Wash per KG' credits for Dry Cleaning services in a subscription?",
    answer: "Most of our plans are specific to service types. However, we do have 'Combo Plans' that allow you to utilize your balance across multiple service categories like Laundry and Steam Ironing."
  },
  {
    question: "Do you have a price match policy with local unorganized laundries?",
    answer: "We provide a professional, tech-enabled service with professional facility hygiene and insurance—standards local shops often don't meet. As such, our pricing reflects our superior quality and reliability."
  },
  {
    question: "Is there a surcharge for garments requiring extra-urgent turnaround?",
    answer: "Yes, our 'Express Service' (24-hour turnaround) carries a 20% surcharge to cover the logistical and operational costs of prioritizing your items through our facility queue."
  }
];

export default function PricingPage() {
  return (
    <Suspense fallback={<div>Loading Pricing...</div>}>
      <PricingContent />
    </Suspense>
  );
}

function PricingContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeService, setActiveService] = useState("Dry Clean");
  const [activeCategory, setActiveCategory] = useState("All");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [pricingData, setPricingData] = useState<PricingDataMap>({});
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) setActiveService(serviceParam);
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const servicesRes = await fetch(`${API_URL}/services/all`);
        const services = await servicesRes.json();

        const formattedPricing: any = {};
        const serviceOrder = ["dry clean", "wash per kg", "steam iron"];

        services.forEach((service: any) => {
          const rawName = service.name || "";
          const normalizedName = rawName.trim().replace(/\s+/g, ' ');
          const lowerName = normalizedName.toLowerCase();

          let displayName = normalizedName;
          if (lowerName.includes("dry") && lowerName.includes("clean")) displayName = "Dry Clean";
          else if (lowerName.includes("steam") && (lowerName.includes("press") || lowerName.includes("iron"))) displayName = "Steam Iron";
          else if (lowerName.includes("wash") && lowerName.includes("kg")) displayName = "Wash Per Kg";

          if (lowerName.includes("wash") && lowerName.includes("kg")) {
            const items = service.LaundryCategory.flatMap((cat: any) => {
              if (cat.LaundryItem && cat.LaundryItem.length > 0) {
                return cat.LaundryItem.map((item: any) => ({
                  name: item.name,
                  price: `₹${item.price}${item.perUnit ? `/${item.perUnit}` : item.unit ? `/${item.unit}` : ""}`
                }));
              } else {
                return [{ name: cat.name, price: `₹${cat.price}${cat.unit ? `/${cat.unit}` : ""}` }];
              }
            });
            formattedPricing[displayName] = [{ category: "Products", items }];
          } else {
            const groups: { [key: string]: any[] } = { "Men": [], "Women": [], "Kids": [], "Others": [] };
            service.LaundryCategory.forEach((cat: any) => {
              const catName = cat.name.toLowerCase();
              let targetGroup = "Others";
              if (catName.includes("men") && !catName.includes("women")) targetGroup = "Men";
              else if (catName.includes("women")) targetGroup = "Women";
              else if (catName.includes("kid") || catName.includes("child")) targetGroup = "Kids";
              const catItems = cat.LaundryItem.map((item: any) => ({
                name: item.name,
                price: `₹${item.price}${item.perUnit ? `/${item.perUnit}` : item.unit ? `/${item.unit}` : ""}`
              }));
              groups[targetGroup].push(...catItems);
            });
            formattedPricing[displayName] = Object.entries(groups)
              .filter(([_, items]) => items.length > 0)
              .map(([name, items]) => ({ category: name, items }));
          }
        });

        const availableServices = Object.keys(formattedPricing).sort((a, b) => {
          const idxA = serviceOrder.indexOf(a.toLowerCase());
          const idxB = serviceOrder.indexOf(b.toLowerCase());
          if (idxA !== -1 && idxB !== -1) return idxA - idxB;
          if (idxA !== -1) return -1;
          if (idxB !== -1) return 1;
          return a.localeCompare(b);
        });

        setPricingData(formattedPricing);
        if (availableServices.length > 0) setActiveService(availableServices[0]);

        const plansRes = await fetch(`${API_URL}/subscriptions`);
        const plansData = await plansRes.json();
        setPlans(plansData.map((p: any) => ({
          name: p.name, price: `₹${p.price}`, features: p.features || [], popular: p.isPopular || false
        })));
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => { setActiveCategory("All"); }, [activeService]);

  const categories = ["All", ...new Set((pricingData[activeService] || []).map((g: PricingGroup) => g.category))];
  const serviceOrder = ["dry clean", "wash per kg", "steam iron"];
  const services = Object.keys(pricingData).sort((a, b) => {
    const idxA = serviceOrder.indexOf(a.toLowerCase());
    const idxB = serviceOrder.indexOf(b.toLowerCase());
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.localeCompare(b);
  });

  const currentServiceData = pricingData[activeService] || [];
  const filteredData = currentServiceData.filter((group: PricingGroup) =>
    activeCategory === "All" || group.category === activeCategory
  ).map((group: PricingGroup) => ({
    ...group,
    items: group.items.filter((item: PricingItem) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter((group: any) => group.items.length > 0);

  const pillBase = "py-[0.6rem] px-[1.8rem] rounded-xl font-bold text-[0.9rem] border-2 border-[#e2e8f0] bg-white text-[#64748b] cursor-pointer transition-all duration-300 ease hover:-translate-y-[3px] hover:border-primary hover:text-primary";
  const pillActive = "!bg-primary !text-white !border-primary -translate-y-[3px] shadow-[0_5px_15px_rgba(24,161,216,0.2)]";

  return (
    <div className="bg-[#f8fafc] py-20 max-[480px]:pt-20 pb-10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-primary text-[1.8rem] md:text-[2.5rem]">Our services & pricing</h1>
        </div>

        {/* Search Bar */}
        <div className="max-w-[600px] mx-auto mb-6">
          <div className="flex bg-white rounded-xl overflow-hidden border border-[#e2e8f0] p-1 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <input
              type="text"
              placeholder="Search items (e.g. shirt, saree, comforter...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 py-[0.8rem] px-[1.8rem] border-none text-base text-[#334155] bg-transparent outline-none"
            />
            <button className="bg-primary text-white border-none w-[50px] h-[50px] rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ease hover:bg-[#37B9EC] hover:scale-105">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-6 mb-8 items-center">
          <div className="flex flex-col items-center gap-[0.8rem]">
            <p className="font-bold text-[#64748b] text-[0.85rem] uppercase tracking-[0.05em]">Services</p>
            <div className="flex flex-wrap gap-[0.8rem] justify-center">
              {services.map(service => (
                <button
                  key={service}
                  className={`${pillBase} ${activeService === service ? pillActive : ""}`}
                  onClick={() => setActiveService(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-[0.8rem]">
            <p className="font-bold text-[#64748b] text-[0.85rem] uppercase tracking-[0.05em]">Category</p>
            <div className="flex flex-wrap gap-[0.8rem] justify-center">
              {!activeService.toLowerCase().includes("kg") && categories.map(cat => (
                <button
                  key={cat}
                  className={`${pillBase} ${activeCategory === cat ? pillActive : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
              {activeService.toLowerCase().includes("kg") && (
                <span className="text-[0.9rem] text-[#666]">All items shown below</span>
              )}
            </div>
          </div>
        </div>

        {/* Current Selection Info */}
        <div className="text-center mb-8 text-[0.9rem] text-[#94a3b8]">
          <p>You are in <span className="text-[#18a1d8] font-bold">{activeService}</span> » <span className="text-[#18a1d8] font-bold">{activeCategory}</span></p>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-2xl overflow-auto mb-8 border border-[#e2e8f0] shadow-none max-h-[500px] relative">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="sticky top-0 z-10 bg-[#18a1d8] text-white py-5 md:py-5 px-[0.8rem] md:px-5 text-left text-[0.85rem] md:text-[0.95rem] font-bold">Service Category</th>
                <th className="sticky top-0 z-10 bg-[#18a1d8] text-white py-5 md:py-5 px-[0.8rem] md:px-5 text-left text-[0.85rem] md:text-[0.95rem] font-bold">Item Description</th>
                <th className="sticky top-0 z-10 bg-[#18a1d8] text-white py-5 md:py-5 px-[0.8rem] md:px-5 text-left text-[0.85rem] md:text-[0.95rem] font-bold">Price (INR)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((group) => (
                  <Fragment key={group.category}>
                    {!activeService.toLowerCase().includes("kg") && (
                      <tr className="bg-[#f8fafc]">
                        <td colSpan={3} className="py-[0.8rem] md:py-5 px-[0.8rem] md:px-5 border-b border-b-[#f1f5f9] text-[0.85rem] md:text-[0.95rem] text-[#334155]">
                          <div className="flex items-center gap-[0.8rem] font-extrabold text-black text-[0.9rem] uppercase">
                            <User size={16} /> {group.category}
                          </div>
                        </td>
                      </tr>
                    )}
                    {group.items.map((item, i) => (
                      <tr key={i}>
                        <td className="py-[0.8rem] md:py-5 px-[0.8rem] md:px-5 border-b border-b-[#f1f5f9] text-[0.85rem] md:text-[0.95rem] text-[#64748b] font-semibold">{activeService.toLowerCase().includes("kg") ? "Laundry" : `${group.category} Service`}</td>
                        <td className="py-[0.8rem] md:py-5 px-[0.8rem] md:px-5 border-b border-b-[#f1f5f9] text-[0.85rem] md:text-[0.95rem] text-[#334155] font-medium">{item.name}</td>
                        <td className="py-[0.8rem] md:py-5 px-[0.8rem] md:px-5 border-b border-b-[#f1f5f9] text-[0.85rem] md:text-[0.95rem] font-extrabold text-black text-center">{item.price}</td>
                      </tr>
                    ))}
                  </Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-16 text-[#94a3b8]">No items found matching your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add-on Services */}
        <div className="mb-10 bg-white py-10 px-10 max-[768px]:px-6 rounded-[20px] border border-[#e2e8f0] border-l-[5px] border-l-[#18a1d8]">
          <h3 className="flex items-center gap-[0.8rem] mb-6 text-[#18a1d8] text-[1.2rem]"><Star size={20} /> Add-on Services</h3>
          <ul className="list-none p-0 flex flex-col gap-4">
            <li className="flex items-center gap-[0.8rem] text-base text-[#334155] font-semibold"><Star className="text-[#fbbf24]" size={16} /> <span>Starch:</span> <strong className="text-[#18a1d8]">₹10/per piece</strong></li>
            <li className="flex items-center gap-[0.8rem] text-base text-[#334155] font-semibold"><Star className="text-[#fbbf24]" size={16} /> <span>Fragrance:</span> <strong className="text-[#18a1d8]">₹10/per piece</strong></li>
            <li className="flex items-center gap-[0.8rem] text-base text-[#334155] font-semibold"><Star className="text-[#fbbf24]" size={16} /> <span>Antiseptic Wash:</span> <strong className="text-[#18a1d8]">₹10/per piece</strong></li>
            <li className="flex items-center gap-[0.8rem] text-base text-[#334155] font-semibold"><Star className="text-[#fbbf24]" size={16} /> <span>Express Service (20% extra):</span> <strong className="text-[#18a1d8]">Min ₹199</strong></li>
          </ul>
        </div>

        {/* Subscription Plans */}
        <div className="mb-10">
          <h2 className="text-center text-primary mb-8">Subscription plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div key={idx} className={`bg-white rounded-3xl py-8 max-[480px]:py-8 md:py-10 px-6 max-[480px]:px-6 md:px-8 border relative flex flex-col transition-transform duration-300 hover:-translate-y-[5px] ${plan.popular ? "border-[#18a1d8]" : "border-[#e2e8f0]"}`}>
                {plan.popular && <span className="absolute -top-[15px] left-1/2 -translate-x-1/2 bg-[#18a1d8] text-white py-[0.4rem] px-5 rounded-full text-[0.75rem] font-bold whitespace-nowrap">Most Popular</span>}
                <div className="text-center mb-8">
                  <h3 className="text-[#18a1d8] text-[1.2rem] mb-4">{plan.name}</h3>
                  <div className="text-[2rem] max-[480px]:text-[2rem] md:text-[2.5rem] font-extrabold text-black">{plan.price}</div>
                </div>
                <ul className="list-none p-0 mb-10 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-[0.8rem] mb-4 text-[0.9rem] text-[#475569] leading-[1.4]">
                      <CheckCircle size={18} className="text-[#10b981] shrink-0 mt-[2px]" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-white rounded-[20px] p-8 mb-10 border border-[#e2e8f0] flex flex-col gap-6">
          <div className="flex items-center gap-4 text-[#18a1d8] border-b border-b-[#f1f5f9] pb-4">
            <Truck size={24} />
            <h4 className="font-extrabold text-[1.2rem]">Pickup & Delivery Charges</h4>
          </div>
          <div className="w-full">
            <div className="flex justify-between flex-wrap gap-6">
              <div className="flex items-center gap-[0.8rem]">
                <span className="w-2 h-2 bg-[#18a1d8] rounded-full shrink-0"></span>
                <p className="text-base font-semibold text-[#475569]">&lt; ₹299: <span className="text-[#18a1d8] font-extrabold">₹60 delivery charge</span></p>
              </div>
              <div className="flex items-center gap-[0.8rem]">
                <span className="w-2 h-2 bg-[#18a1d8] rounded-full shrink-0"></span>
                <p className="text-base font-semibold text-[#475569]">₹299 - ₹499: <span className="text-[#18a1d8] font-extrabold">₹30 delivery charge</span></p>
              </div>
              <div className="flex items-center gap-[0.8rem]">
                <span className="w-2 h-2 bg-[#18a1d8] rounded-full shrink-0"></span>
                <p className="text-base font-semibold text-[#475569]">&gt; ₹499: <span className="text-[#18a1d8] font-extrabold">FREE delivery</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-8 rounded-[20px] border border-[#e2e8f0]">
            <h3 className="flex items-center gap-[0.8rem] mb-6 text-[#18a1d8] text-[1.1rem]"><Clock size={20} /> Pick-up & Delivery Slots</h3>
            <div>
              <p className="text-[0.95rem] text-[#475569] mb-[0.8rem] font-semibold">Slot 1: 9:00 AM - 12:00 PM</p>
              <p className="text-[0.95rem] text-[#475569] mb-[0.8rem] font-semibold">Slot 2: 12:00 PM - 3:00 PM</p>
              <p className="text-[0.95rem] text-[#475569] mb-[0.8rem] font-semibold">Slot 3: 3:00 PM - 6:00 PM</p>
              <p className="text-[0.95rem] text-[#475569] mb-[0.8rem] font-semibold">Slot 4: 6:00 PM - 9:00 PM</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[20px] border border-[#e2e8f0]">
            <h3 className="flex items-center gap-[0.8rem] mb-6 text-[#18a1d8] text-[1.1rem]"><Calendar size={20} /> Cut-off Timings</h3>
            <div>
              <p className="text-[0.95rem] text-[#475569] mb-[0.8rem] font-semibold">Slots 1 & 2: Cut-off 10:00 PM (Previous Day)</p>
              <p className="text-[0.95rem] text-[#475569] mb-[0.8rem] font-semibold">Slots 3 & 4: Cut-off 10:00 AM (Same day)</p>
            </div>
          </div>
        </div>

      </div>
      
      {/* Global FAQ Section */}
      <GlobalFAQ faqs={pricingFaqs} />
    </div>
  );
}
