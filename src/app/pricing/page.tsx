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
  const pillActive = "!bg-primary !text-white !border-primary -translate-y-[3px]";

  return (
    <div className="bg-[#f8fafc] py-20 md:py-28 pb-10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-[2rem] md:text-[3.2rem] text-black font-bold mb-4">
            Our Services & <span className="text-gradient">Pricing</span>
          </h1>
          <p className="max-w-[700px] mx-auto text-[1.1rem] text-[#444]">
            Transparent Pricing and Flexible Subscription Plans for Complete Wardrobe Care
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-[700px] mx-auto mb-10">
          <div className="flex bg-white rounded-[20px] overflow-hidden border border-[#e2e8f0] p-1.5 focus-within:border-primary transition-all">
            <input
              type="text"
              placeholder="Search items (e.g. shirt, saree, comforter...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 py-[1rem] px-[1.8rem] border-none text-base text-[#444] bg-transparent outline-none"
            />
            <button className="bg-primary text-white border-none w-[55px] h-[55px] rounded-[15px] flex items-center justify-center cursor-pointer transition-all duration-300 ease hover:bg-[#37B9EC] hover:scale-105">
              <Search size={22} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-8 mb-12 items-center">
          <div className="flex flex-col items-center gap-[1rem]">
            <p className="font-bold text-[#444] text-[0.9rem] uppercase tracking-widest">Select Service</p>
            <div className="flex flex-wrap gap-[1rem] justify-center">
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

          <div className="flex flex-col items-center gap-[1rem]">
            <p className="font-bold text-[#444] text-[0.9rem] uppercase tracking-widest">Select Category</p>
            <div className="flex flex-wrap gap-[1rem] justify-center">
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
                <span className="text-[1rem] text-[#444] font-medium italic underline underline-offset-4 decoration-primary">All items shown below</span>
              )}
            </div>
          </div>
        </div>

        {/* Current Selection Info */}
        <div className="text-center mb-10 text-[1rem] text-[#64748b]">
          <p>You are viewing: <span className="text-[#18a1d8] font-bold">{activeService}</span> » <span className="text-[#18a1d8] font-bold">{activeCategory}</span></p>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-[30px] overflow-auto mb-10 border border-[#e2e8f0] shadow-none max-h-[600px] relative">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="sticky top-0 z-20 bg-[#18a1d8] text-white py-6 md:py-6 px-[1.2rem] md:px-8 text-left text-[0.9rem] md:text-[1.05rem] font-bold">Service Category</th>
                <th className="sticky top-0 z-20 bg-[#18a1d8] text-white py-6 md:py-6 px-[1.2rem] md:px-8 text-left text-[0.9rem] md:text-[1.05rem] font-bold">Item Description</th>
                <th className="sticky top-0 z-20 bg-[#18a1d8] text-white py-6 md:py-6 px-[1.2rem] md:px-8 text-center text-[0.9rem] md:text-[1.05rem] font-bold">Price (INR)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((group) => (
                  <Fragment key={group.category}>
                    {!activeService.toLowerCase().includes("kg") && (
                      <tr className="bg-[#f8fafc]/50">
                        <td colSpan={3} className="py-6 px-8 border-b border-[#f1f5f9]">
                          <div className="flex items-center gap-3 font-bold text-black text-[1rem] uppercase tracking-wider">
                            <User size={18} className="text-primary" /> {group.category}
                          </div>
                        </td>
                      </tr>
                    )}
                    {group.items.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-5 px-8 border-b border-[#f1f5f9] text-[1rem] text-[#64748b] font-medium">{activeService.toLowerCase().includes("kg") ? "Laundry" : `${group.category} Service`}</td>
                        <td className="py-5 px-8 border-b border-[#f1f5f9] text-[1rem] text-[#444] font-semibold">{item.name}</td>
                        <td className="py-5 px-8 border-b border-[#f1f5f9] text-[1.1rem] font-bold text-black text-center">{item.price}</td>
                      </tr>
                    ))}
                  </Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-24 text-[#94a3b8] text-[1.1rem]">No items found matching your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add-on Services */}
        <div className="mb-16 bg-white py-12 px-12 rounded-[30px] border border-[#e2e8f0] border-l-[6px] border-l-[#18a1d8] shadow-none">
          <h3 className="flex items-center gap-3 mb-8 text-black font-bold text-[1.4rem]"><Star size={24} className="text-[#18a1d8]" /> Add-on Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="list-none p-0 flex flex-col gap-5">
              <li className="flex items-center gap-4 text-[1.1rem] text-[#444] font-medium">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Starch:</span> <strong className="text-[#18a1d8] ml-auto">₹10/per piece</strong>
              </li>
              <li className="flex items-center gap-4 text-[1.1rem] text-[#444] font-medium">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Fragrance:</span> <strong className="text-[#18a1d8] ml-auto">₹10/per piece</strong>
              </li>
            </ul>
            <ul className="list-none p-0 flex flex-col gap-5">
              <li className="flex items-center gap-4 text-[1.1rem] text-[#444] font-medium">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Antiseptic Wash:</span> <strong className="text-[#18a1d8] ml-auto">₹10/per piece</strong>
              </li>
              <li className="flex items-center gap-4 text-[1.1rem] text-[#444] font-medium">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Express Service (20% extra):</span> <strong className="text-[#18a1d8] ml-auto">Min ₹199</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] md:text-[2.8rem] text-black font-bold mb-4">
              Subscription <span className="text-gradient">Plans</span>
            </h2>
            <p className="max-w-[700px] mx-auto text-[1.1rem] text-[#444]">Choose a plan that fits your regular laundry volume and enjoy bigger savings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {plans.map((plan, idx) => (
              <div key={idx} className={`bg-white rounded-[30px] p-8 md:p-10 border relative flex flex-col transition-all duration-400 hover:-translate-y-2 shadow-none ${plan.popular ? "border-[#18a1d8] ring-2 ring-[#18a1d8]/10" : "border-[#e2e8f0]"}`}>
                {plan.popular && <span className="absolute -top-[16px] left-1/2 -translate-x-1/2 bg-[#18a1d8] text-white py-1.5 px-6 rounded-full text-[0.8rem] font-bold tracking-widest uppercase">Most Popular</span>}
                <div className="text-center mb-10">
                  <h3 className="text-[#18a1d8] text-[1.4rem] font-bold mb-4 uppercase tracking-wider">{plan.name}</h3>
                  <div className="text-[2.8rem] md:text-[3.2rem] font-bold text-black leading-none">{plan.price}</div>
                </div>
                <ul className="list-none p-0 mb-10 flex-1 flex flex-col gap-5">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-4 text-[1rem] text-[#444] leading-relaxed">
                      <CheckCircle size={20} className="text-[#10b981] shrink-0 mt-[2px]" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/booking" className={`w-full py-4 rounded-xl text-center font-bold text-[1rem] transition-all ${plan.popular ? "bg-primary text-white hover:bg-primary/90" : "bg-gray-50 text-[#444] hover:bg-gray-100"}`}>Select Plan</Link>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-white rounded-[30px] p-10 md:p-12 mb-16 border border-[#e2e8f0] flex flex-col gap-10 shadow-none">
          <div className="text-center border-b border-[#f1f5f9] pb-8">
            <h3 className="text-black font-bold text-[1.6rem] md:text-[2rem] flex items-center justify-center gap-4">
              <Truck size={32} className="text-[#18a1d8]" /> Pickup & Delivery Charges
            </h3>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-gray-50/50 py-8 px-6 rounded-[24px]">
              <div className="flex flex-col items-center gap-3">
                <p className="text-[#444] text-[1.15rem] font-semibold">Orders below ₹299</p>
                <span className="text-primary font-bold text-[1.4rem]">₹60 Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-3 border-y md:border-y-0 md:border-x border-[#e2e8f0] py-6 md:py-0">
                <p className="text-[#444] text-[1.15rem] font-semibold">Orders ₹299 - ₹499</p>
                <span className="text-primary font-bold text-[1.4rem]">₹30 Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-[#444] text-[1.15rem] font-semibold">Orders above ₹499</p>
                <span className="text-[#10b981] font-bold text-[1.5rem]">FREE Delivery</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="bg-white p-10 rounded-[30px] border border-[#e2e8f0] shadow-none flex flex-col">
            <h3 className="flex items-center gap-4 mb-8 text-black font-bold text-[1.4rem]"><Clock size={28} className="text-[#18a1d8]" /> Pickup & Delivery Slots</h3>
            <div className="flex flex-col gap-5">
              <p className="text-[1.1rem] text-[#444] flex items-center justify-between border-b border-gray-50 pb-3"><span>Slot 1:</span> <span className="font-bold text-black">9:00 AM - 12:00 PM</span></p>
              <p className="text-[1.1rem] text-[#444] flex items-center justify-between border-b border-gray-50 pb-3"><span>Slot 2:</span> <span className="font-bold text-black">12:00 PM - 3:00 PM</span></p>
              <p className="text-[1.1rem] text-[#444] flex items-center justify-between border-b border-gray-50 pb-3"><span>Slot 3:</span> <span className="font-bold text-black">3:00 PM - 6:00 PM</span></p>
              <p className="text-[1.1rem] text-[#444] flex items-center justify-between"><span>Slot 4:</span> <span className="font-bold text-black">6:00 PM - 9:00 PM</span></p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-[30px] border border-[#e2e8f0] shadow-none flex flex-col">
            <h3 className="flex items-center gap-4 mb-8 text-black font-bold text-[1.4rem]"><Calendar size={28} className="text-[#18a1d8]" /> Booking Cut-off Timings</h3>
            <div className="flex flex-col gap-6">
              <div className="bg-primary/5 p-6 rounded-2xl border-l-[4px] border-l-primary">
                <p className="text-[1.05rem] text-primary font-bold mb-2 uppercase tracking-wide">Morning Slots (1 & 2)</p>
                <p className="text-[1.15rem] text-black font-bold">Cut-off: 10:00 PM <span className="font-medium text-[#444] text-[0.95rem]">(Previous Day)</span></p>
              </div>
              <div className="bg-primary/5 p-6 rounded-2xl border-l-[4px] border-l-primary">
                <p className="text-[1.05rem] text-primary font-bold mb-2 uppercase tracking-wide">Evening Slots (3 & 4)</p>
                <p className="text-[1.15rem] text-black font-bold">Cut-off: 10:00 AM <span className="font-medium text-[#444] text-[0.95rem]">(Same Day)</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Global FAQ Section */}
      <GlobalFAQ faqs={pricingFaqs} />
    </div>
  );
}
