"use client";

import { useParams, notFound } from "next/navigation";
import { servicesData } from "@/services/servicesData";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle, ArrowRight, Calendar, XCircle, AlertCircle, Sparkles,
  Shirt, User, User2, Briefcase, Bed, Luggage, IndianRupee, Info
} from "lucide-react";
import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

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
    const splitPoint = 1;
    const firstPart = words.slice(0, splitPoint).join(" ");
    const secondPart = words.slice(splitPoint).join(" ");
    return <>{firstPart} <span className="text-gradient">{secondPart}</span></>;
  };

  return (
    <>
    <div className="section-padding bg-[#f8fafc] py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24 px-4">
          <div className="order-2 lg:order-1">
            <span className="block text-[0.85rem] font-bold uppercase text-primary tracking-[3px] mb-4">Premium Care Service</span>
            <h1 className="text-black mb-6 leading-tight text-[2.2rem] md:text-[3.2rem] font-bold">{splitTitle(service.title)}</h1>

            <p className="text-[1.2rem] md:text-[1.3rem] font-bold text-black mb-5 leading-snug">{service.subtitle}</p>
            <p className="text-[1rem] md:text-[1.1rem] text-[#444] leading-relaxed mb-8">{service.description}</p>
            
            <ul className="list-none p-0 flex flex-col gap-4">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-center gap-4 font-bold text-[1rem] text-[#444]">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle size={16} className="text-primary" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-[40px] overflow-hidden border-8 border-white shadow-none">
              <Image src={service.image} alt={service.title} width={700} height={600} className="w-full h-auto block transform hover:scale-105 transition-transform duration-700" priority />
            </div>
          </div>
        </div>

        {/* Long Description Section */}
        {'longDescription' in service && (
          <section className="mb-20 px-4">
            <div className="text-center mb-10">
              <h2 className="text-[2.2rem] md:text-[2.8rem] text-black font-bold mb-6">
                {splitTitle(service.longDescTitle)}
              </h2>
            </div>

            <div className="max-w-[1180px] mx-auto p-6 md:p-10 bg-white rounded-[40px] border-2 border-[#18a1d8]/30 shadow-none">
              <div className="w-full mx-auto flex flex-col gap-6">
                {service.longDescription.map((para: string, i: number) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={22} className="text-primary" />
                    </div>
                    <p className="text-[1.05rem] md:text-[1.15rem] text-[#444] leading-relaxed m-0 font-medium pt-1">
                      {para}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Comparisons Section */}
        {'comparisons' in service && (
          <section className="mb-20 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {service.comparisons.map((comp: any, idx: number) => (
                <div key={idx} className={`p-10 rounded-[40px] border transition-all duration-400 ${comp.isNegative ? 'bg-[#FFF5F5] border-red-100' : 'bg-[#F5FFF8] border-green-100'} shadow-none`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${comp.isNegative ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'}`}>
                      {comp.isNegative ? <XCircle size={26} /> : <CheckCircle size={26} />}
                    </div>
                    <h3 className="text-[1.4rem] font-bold text-black m-0">{comp.title}</h3>
                  </div>
                  <ul className="list-none p-0 flex flex-col gap-5">
                    {comp.points.map((point: string, pIdx: number) => (
                      <li key={pIdx} className="flex items-start gap-4 text-[1rem] leading-relaxed text-[#444] font-medium">
                        <div className={`mt-1.5 shrink-0 ${comp.isNegative ? 'text-red-400' : 'text-green-500'}`}>
                          {comp.isNegative ? <XCircle size={18} /> : <CheckCircle size={18} />}
                        </div>
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
          <section className="mb-24 px-4">
            <div className="text-center mb-16">
              <h2 className="text-[2.2rem] md:text-[2.8rem] text-black font-bold mb-4">{splitTitle(service.processTitle)}</h2>
              <p className="text-[1.1rem] text-[#444] max-w-[700px] mx-auto">
                {slug === 'steam-iron' ? 'Each garment goes through a careful process to ensure exceptional results every time.' : 'Every garment is processed through a carefully designed procedure to guarantee a fresh, crisp, and spotless finish.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-[1200px] mx-auto mt-16">
              {service.process.map((p: any) => (
                <div key={p.step} className="bg-white rounded-[35px] border border-black/5 p-10 relative transition-all duration-400 hover:-translate-y-2 shadow-none group">
                  <div className="absolute -top-6 left-10 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-[1.6rem] font-bold shadow-none group-hover:scale-110 transition-transform">
                    {p.step}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-[1.3rem] text-black mb-3 font-bold">{p.title}</h4>
                    <p className="m-0 text-[#444] leading-relaxed text-[0.95rem]">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Features Section */}
        {(service.keyFeatures || service.extraSections) && (
          <div className="flex flex-col gap-10 lg:gap-12 px-4 mb-20">
            {service.keyFeatures && (
              <section className="max-w-[1100px] mx-auto w-full p-10 md:p-14 bg-white border border-black/5 rounded-[40px] shadow-none">
                <h3 className="text-[1.6rem] text-black mb-10 font-bold flex items-center gap-4">
                   <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                    <Sparkles size={24} />
                   </div>
                   {splitTitle(service.featuresTitle || "Service Advantages")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-6">
                  {service.keyFeatures.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-4 text-[1.05rem] text-[#444] font-bold">
                      <CheckCircle size={22} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {service.extraSections && service.extraSections.map((section: any, idx: number) => (
              <section key={idx} className="max-w-[1100px] mx-auto w-full p-10 md:p-14 bg-white border border-black/5 rounded-[40px] shadow-none">
                <h3 className="text-[1.6rem] text-black mb-10 font-bold flex items-center gap-4">
                   <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                    <Info size={24} />
                   </div>
                   {splitTitle(section.title)}
                </h3>
                <div className={`grid gap-6 md:gap-y-6 md:gap-x-12 ${section.items.length > 6 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {section.items.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-4 text-[1.05rem] text-[#444] font-bold">
                      <CheckCircle size={22} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {'closingStatement' in service && (
          <div className="max-w-[900px] mx-auto mt-10 p-10 bg-[#EBF8FF] border border-primary/20 rounded-[30px] flex flex-col items-center justify-center text-center mx-4">
            <p className="m-0 text-[1.1rem] md:text-[1.2rem] text-black/80 leading-relaxed font-bold">{service.closingStatement}</p>
          </div>
        )}

        <div className="flex flex-col items-center gap-10 mt-20 px-4">
          <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto justify-center">
            <Link 
              href={`https://wa.me/917006823074?text=I%20want%20to%20schedule%20a%20pickup%20for%20${service.title}`}
              className="bg-primary text-white py-5 px-10 rounded-2xl font-bold text-[1.1rem] no-underline flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] shadow-none"
              target="_blank"
            >
              <Calendar size={20} /> {service.pickupBtnText || "Schedule Pickup"}
            </Link>
            {service.pricingBtnText && (
              <Link href={`/pricing?service=${encodeURIComponent(pricingService)}`} className="bg-black text-white py-5 px-10 rounded-2xl font-bold text-[1.1rem] no-underline flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:bg-black/90">
                <IndianRupee size={18} /> {service.pricingBtnText}
              </Link>
            )}
          </div>
          <Link href="/services" className="flex items-center gap-3 text-[#555] font-bold text-[1rem] no-underline py-4 px-8 border border-black/10 rounded-2xl transition-all hover:bg-white hover:text-primary hover:border-primary/30">
            <ArrowRight size={20} className="rotate-180" /> {service.backBtnText || "Back to All Services"}
          </Link>
        </div>

        </div>
      </div>

      {/* Global FAQ Section */}
      <GlobalFAQ 
        faqs={serviceFaqsMap[slug] || serviceFaqsMap["dry-cleaning"]} 
        subtitle={
          slug === 'dry-cleaning' ? '- Professional Dry Cleaning Services' :
          slug === 'steam-iron' ? '- Precision Steam Ironing Services' :
          slug === 'wash-iron' ? '- Quality Wash & Iron Services' :
          slug === 'wash-fold' ? '- Convenient Wash & Fold Services' :
          slug === 'wash-kg' ? '- Economical Laundry by the Kg' :
          slug === 'premium-laundry' ? '- Premium Laundry & Care Services' :
          slug === 'household-laundry' ? '- Expert Household Laundry Services' :
          slug === 'shoe-cleaning' ? '- Specialized Shoe Cleaning Services' :
          slug === 'sofa-cleaning' ? '- Premium Sofa & Upholstery cleaning' :
          slug === 'carpet-cleaning' ? '- Professional Carpet & Rug Cleaning' :
          slug === 'curtain-cleaning' ? '- Expert Curtain & Drape Cleaning' :
          slug === 'bridal-wear' ? '- Delicate Bridal & Wedding Wear Care' :
          '- Premium Laundry & Dry cleaning Services'
        }
      />
    </>
  );
}

const serviceFaqsMap: Record<string, { question: string; answer: string }[]> = {
  "dry-cleaning": [
    { question: "What fabrics are best suited for dry cleaning?", answer: "Silk, wool, cashmere, linen, and heavily embellished garments benefit most from dry cleaning. These fabrics can shrink, bleed, or lose shape in water-based washes." },
    { question: "How long does professional dry cleaning take?", answer: "Standard dry cleaning takes 3-5 business days. For urgent needs, our Express service delivers within 24-48 hours with a small surcharge." },
    { question: "Is dry cleaning safe for embroidered or sequined outfits?", answer: "Yes, we use solvent-based processes that are gentle on embellishments. Each embroidered piece is hand-inspected and often placed in protective mesh before cleaning." },
    { question: "Do you remove tough stains during dry cleaning?", answer: "We pre-treat all visible stains with specialized spotting agents before the main dry clean cycle. Our success rate for stain removal is extremely high." },
    { question: "Will dry cleaning cause my clothes to lose color?", answer: "Our European-grade solvents are color-safe and designed to preserve dye integrity. We also perform a colorfastness test on delicate items before processing." },
    { question: "How do you package dry-cleaned garments?", answer: "All dry-cleaned items are steam-pressed and delivered on hangers with breathable garment covers to maintain their crisp, wrinkle-free finish." },
    { question: "Can you dry clean wedding lehengas and sherwanis?", answer: "Absolutely. We are specialists in bridal and occasion wear. Heavy lehengas and sherwanis undergo a multi-stage cleaning process to preserve their original beauty." },
    { question: "Is the dry cleaning solvent harmful to skin?", answer: "No. We use eco-friendly, non-toxic solvents that leave no residue on your garments. They are completely safe for sensitive skin and children's wear." },
    { question: "Do you offer pickup and delivery for dry cleaning?", answer: "Yes, we offer free pickup and delivery for orders above ₹499. You can schedule a slot through our website, app, or WhatsApp." },
    { question: "What if I'm not satisfied with the dry cleaning result?", answer: "We offer a free re-clean guarantee. If you're not satisfied, just inform us within 24 hours of delivery and we'll re-process your garment at no extra cost." },
    { question: "How often should I dry clean my suits and blazers?", answer: "For regular office wear, every 3-4 wears is ideal. For occasional wear like suits, cleaning after every event helps maintain fabric quality and freshness." },
    { question: "Is there a minimum order value for dry cleaning?", answer: "There's no minimum order. However, orders above ₹499 qualify for free pickup and delivery, making it more economical for bundled orders." }
  ],
  "wash-iron": [
    { question: "What does the Wash & Iron service include?", answer: "Your clothes are professionally washed in individual batches, tumble-dried at controlled temperatures, and then precision steam-ironed for a crisp, ready-to-wear finish." },
    { question: "How long does Wash & Iron take?", answer: "Standard turnaround is 48-72 hours from pickup. Express 24-hour service is also available for an additional charge." },
    { question: "Are my clothes washed separately or mixed with others?", answer: "Every customer's order is washed in a completely separate batch. We never mix clothes between customers to ensure hygiene and prevent color contamination." },
    { question: "What type of detergent do you use?", answer: "We use premium, skin-friendly, pH-balanced detergents that are tough on stains but gentle on fabrics and safe for sensitive skin." },
    { question: "Can I request specific ironing preferences like light or heavy press?", answer: "Yes! You can mention special instructions during booking or tell our pickup agent. We'll tag your preference directly to your order." },
    { question: "Is Wash & Iron suitable for formal office shirts?", answer: "Absolutely. This is our most popular service for daily office wear. Your shirts come back crisp, wrinkle-free, and perfectly pressed on hangers." },
    { question: "Do you handle stain pre-treatment in this service?", answer: "Yes, our technicians inspect each garment and pre-treat visible stains on collars, cuffs, and other areas before the main wash cycle." },
    { question: "Will my clothes shrink during washing?", answer: "We follow care label instructions precisely and use temperature-controlled washing and drying to prevent any shrinkage or fabric damage." },
    { question: "How are the ironed clothes delivered?", answer: "Shirts and formal wear are delivered on hangers with protective covers. Casual items are neatly folded in hygienic packaging." },
    { question: "Is there a discount for regular weekly Wash & Iron orders?", answer: "Yes, our prepaid subscription plans offer significant savings for customers who use this service regularly. Check our Pricing page for details." },
    { question: "Can I include both light and heavy garments in one order?", answer: "Yes, you can mix t-shirts, shirts, trousers, and other items. Each garment is sorted and processed according to its specific fabric requirements." },
    { question: "Do you offer same-day Wash & Iron service?", answer: "Yes, same-day service is available for orders placed before 10 AM. A small express surcharge applies to prioritize your order." }
  ],
  "wash-fold": [
    { question: "What is the Wash & Fold service?", answer: "Your clothes are professionally washed in individual loads, tumble-dried, and then neatly folded and packed—ready to be put away directly into your wardrobe." },
    { question: "How is Wash & Fold different from Wash & Iron?", answer: "Wash & Fold does not include ironing. It's a more economical option perfect for everyday casual wear, undergarments, gym clothes, and home textiles." },
    { question: "What is the turnaround time for Wash & Fold?", answer: "Standard turnaround is 48-72 hours. Express service with 24-hour delivery is available for a nominal surcharge." },
    { question: "Is Wash & Fold priced per piece or per kg?", answer: "Wash & Fold is typically priced per piece for itemized orders. For bulk daily wear, our Wash Per KG service may be more economical." },
    { question: "Do you sort clothes by color before washing?", answer: "Yes, we sort every order by color (whites, darks, colors) and fabric type to prevent any color bleeding or fabric damage during the wash cycle." },
    { question: "Can I include bed sheets and towels in Wash & Fold?", answer: "Absolutely. Bed sheets, towels, pillow covers, and other home textiles are perfectly suited for this service and are returned freshly folded." },
    { question: "How are the folded clothes packaged?", answer: "All items are neatly folded and sealed in hygienic, eco-friendly packaging to keep them fresh and clean until you're ready to use them." },
    { question: "Is this service safe for baby clothes?", answer: "Yes, we use mild, hypoallergenic detergents that are safe for baby clothes and sensitive skin. You can also request our antiseptic wash add-on." },
    { question: "Do you offer free pickup and delivery?", answer: "Yes, orders above ₹499 get free doorstep pickup and delivery. For smaller orders, a nominal delivery charge applies." },
    { question: "Can I add fabric softener or fragrance to my order?", answer: "Yes, we offer fragrance and fabric softener as add-on services at ₹10 per piece for a premium fresh feel." },
    { question: "Is there a subscription plan for regular Wash & Fold?", answer: "Yes, our prepaid bulk plans are perfect for families. You get discounted rates and the convenience of regular scheduled pickups." },
    { question: "What happens if an item is damaged during washing?", answer: "We have strict quality control, but in the rare event of damage, our liability policy covers up to 5x the cleaning cost of the item." }
  ],
  "wash-kg": [
    { question: "How does the Wash Per KG service work?", answer: "You hand us your everyday clothes in a bag, we weigh them at our facility, wash them in individual batches, dry and fold them, and deliver them back fresh and clean." },
    { question: "What is the minimum weight for a Wash Per KG order?", answer: "The minimum order is typically 3 KG. This usually equals about 15-20 everyday garments like t-shirts, shorts, and innerwear." },
    { question: "How do you measure the weight of my clothes?", answer: "We use high-precision digital scales at our facility. The 'dry weight' before washing is used to calculate your bill accurately." },
    { question: "What type of clothes are ideal for Wash Per KG?", answer: "Daily wear like t-shirts, pajamas, innerwear, shorts, towels, and bed sheets are perfect. Delicate or formal items should use our Wash & Iron or Dry Clean services." },
    { question: "Are clothes ironed in the Wash Per KG service?", answer: "Standard Wash Per KG includes washing and folding only. If you need ironing, you can upgrade to our Wash & Iron service or add steam ironing as an add-on." },
    { question: "Is this the most economical laundry option?", answer: "Yes, Wash Per KG is our most budget-friendly service, designed for families and individuals who need regular, reliable laundry at the lowest per-garment cost." },
    { question: "Do you separate whites and colors?", answer: "Absolutely. We sort every batch by color and fabric type before washing to prevent any color transfer or damage." },
    { question: "What detergents are used for Wash Per KG?", answer: "We use premium, skin-safe detergents with a pleasant fragrance. Antiseptic wash and extra fragrance are available as affordable add-ons." },
    { question: "How long does Wash Per KG take?", answer: "Standard delivery is within 48-72 hours. Express 24-hour service is available with a 20% surcharge." },
    { question: "Can I include heavy items like blankets or comforters?", answer: "Yes, heavy items like blankets, comforters, and quilts can be included. They are weighed and charged at the same per-KG rate." },
    { question: "Is there a subscription plan for Wash Per KG?", answer: "Yes, our monthly prepaid plans offer up to 25% savings. Perfect for families that need weekly laundry pickups." },
    { question: "Do you offer free pickup and delivery for this service?", answer: "Orders above ₹499 qualify for free pickup and delivery. Below that, a small delivery fee applies based on your order value." }
  ],
  "premium-laundry": [
    { question: "What makes Premium Laundry different from regular laundry?", answer: "Premium Laundry uses designer-grade solvents, individual garment attention, hand-finishing, and luxury packaging—ideal for high-end branded clothing." },
    { question: "Which brands or garments are best suited for Premium Laundry?", answer: "Designer wear, imported fabrics, luxury cashmere, fine silk, and high-end branded clothing all benefit from our Premium Laundry's specialized care." },
    { question: "How do you ensure the safety of luxury garments?", answer: "Each piece undergoes a 5-point inspection: fabric type, colorfastness, embellishment check, stain mapping, and care label verification before any processing." },
    { question: "Is Premium Laundry more expensive than standard services?", answer: "Yes, it carries a premium due to the specialized solvents, individual attention, and hand-finishing involved. However, it's essential for preserving expensive garments." },
    { question: "What is the turnaround time?", answer: "Premium Laundry takes 3-5 business days to ensure meticulous attention. Express service is available for urgent requirements." },
    { question: "Do you offer garment insurance for Premium Laundry?", answer: "Our enhanced liability policy for premium items covers up to 10x the service cost. We recommend declaring the garment's value at pickup." },
    { question: "How are premium items packaged for delivery?", answer: "All items are delivered on padded hangers inside breathable garment bags with tissue paper lining to prevent creasing and maintain freshness." },
    { question: "Can I request specific cleaning preferences?", answer: "Absolutely. You can specify preferences like low-heat drying, hand-wash only, or specific ironing temperatures during the booking process." },
    { question: "Do you handle imported or vintage clothing?", answer: "Yes, our experts are trained in handling vintage and imported fabrics. We assess each piece individually and choose the safest cleaning method." },
    { question: "Is stain removal included in Premium Laundry?", answer: "Yes, advanced stain treatment is included. We use premium spotting agents and techniques that are safe for delicate and expensive fabrics." },
    { question: "Do you offer pickup and delivery for premium items?", answer: "Yes, free doorstep pickup and delivery is included for all Premium Laundry orders regardless of order value." },
    { question: "Can I track my premium garment's cleaning progress?", answer: "Yes, you'll receive real-time status updates via WhatsApp showing each stage from inspection to quality check to delivery." }
  ],
  "household-laundry": [
    { question: "What items are covered under Household Laundry?", answer: "Bed sheets, pillow covers, curtains, towels, table cloths, sofa covers, blankets, and other home textiles are all handled in this service." },
    { question: "How do you wash large items like bed sheets and comforters?", answer: "We use industrial-capacity machines designed for large items. Each piece gets its own wash cycle with appropriate temperature and detergent settings." },
    { question: "Is Household Laundry priced per item or per KG?", answer: "Household items are typically priced per piece to ensure accurate billing. Check our pricing page for detailed rates." },
    { question: "Can you remove tough stains from bed sheets and tablecloths?", answer: "Yes, we pre-treat all stains with enzyme-based solutions before the main wash. Our success rate is very high for food, ink, and general household stains." },
    { question: "How long does Household Laundry take?", answer: "Standard turnaround is 48-72 hours. Larger items like heavy blankets or quilts may take 3-5 days depending on drying requirements." },
    { question: "Do you offer curtain removal and re-hanging?", answer: "Yes, we offer an optional curtain removal and re-installation service for an additional charge. Our team handles the entire process." },
    { question: "Are your detergents safe for allergy-prone households?", answer: "Yes, we use hypoallergenic detergents by default. For extra protection, you can add our antiseptic wash add-on which eliminates dust mites and allergens." },
    { question: "Do you wash and iron tablecloths and napkins for events?", answer: "Absolutely. We provide bulk event linen cleaning with starch and crisp ironing. Contact us for special event-quantity pricing." },
    { question: "Can I schedule regular weekly pickups for household items?", answer: "Yes, our subscription plans support scheduled weekly or bi-weekly pickups. This is popular with families for fresh bed linen every week." },
    { question: "How are large items packaged for delivery?", answer: "Large items are neatly folded and sealed in oversized hygienic bags. Delicate items like silk cushion covers get separate protective packaging." },
    { question: "Is there free pickup and delivery for household orders?", answer: "Orders above ₹499 qualify for free pickup and delivery. We serve the entire Dombivli, Kalyan, and surrounding areas." },
    { question: "Do you clean mattress protectors and pillow protectors?", answer: "Yes, mattress and pillow protectors are washed at controlled temperatures with antibacterial solutions to eliminate germs and odors." }
  ],
  "steam-iron": [
    { question: "What is the Steam Iron service?", answer: "We professionally press your garments using industrial steam irons that deliver a crisp, wrinkle-free finish far superior to home ironing." },
    { question: "How is steam ironing different from regular ironing?", answer: "Steam ironing uses high-pressure steam that penetrates fabric fibers deeply, removing wrinkles without the direct heat contact that can damage delicate fabrics." },
    { question: "What garments are best suited for steam ironing?", answer: "Formal shirts, trousers, sarees, suits, blazers, and silk garments all benefit greatly from professional steam pressing." },
    { question: "Does steam ironing include washing?", answer: "No, this is an ironing-only service for already-clean garments. If you need washing and ironing, choose our Wash & Iron service instead." },
    { question: "How long does the Steam Iron service take?", answer: "Standard turnaround is 24-48 hours. Same-day express service is available for orders placed before 10 AM." },
    { question: "Is steam ironing safe for silk sarees?", answer: "Yes, our technicians adjust steam pressure and temperature for each fabric type. Silk sarees receive gentle low-pressure steaming to preserve their sheen." },
    { question: "Will steam ironing cause shine marks on dark fabrics?", answer: "No, professional steam ironing avoids direct plate contact with fabrics, eliminating the shine marks that are common with home dry irons." },
    { question: "How are steam-ironed clothes delivered?", answer: "Formal garments are delivered on hangers with protective covers. Other items are carefully folded to maintain their pressed appearance." },
    { question: "Can I get bulk steam ironing for event wear?", answer: "Yes, we handle bulk orders for weddings and events. Contact us for special volume pricing and priority turnaround." },
    { question: "Is there a minimum order for steam ironing?", answer: "No minimum order is required. You can send even a single garment. However, orders above ₹499 get free pickup and delivery." },
    { question: "Do you offer starch with steam ironing?", answer: "Yes, starch is available as a ₹10 per piece add-on for those who prefer extra crispness in their formal shirts and cotton garments." },
    { question: "Can I schedule regular steam ironing pickups?", answer: "Yes, our subscription plans support regular weekly pickups. Many working professionals use this for their weekly office wardrobe." }
  ],
  "shoe-cleaning": [
    { question: "What types of shoes do you clean?", answer: "We clean sneakers, leather shoes, suede boots, canvas shoes, sports shoes, and designer footwear using specialized techniques for each material." },
    { question: "How do you clean white sneakers without damaging them?", answer: "We use specialized sneaker-safe cleaning solutions and soft brushes to deep clean white sneakers, followed by UV treatment to restore brightness." },
    { question: "Is shoe cleaning safe for leather shoes?", answer: "Yes, we use pH-neutral leather cleaners and conditioners that clean effectively without drying out or cracking the leather." },
    { question: "Do you clean suede and nubuck shoes?", answer: "Yes, suede requires specialized dry-cleaning techniques. We use dedicated suede brushes and erasers to lift dirt without damaging the soft texture." },
    { question: "How long does shoe cleaning take?", answer: "Standard shoe cleaning takes 3-5 business days depending on the material and level of soiling. Express service is available for sneakers." },
    { question: "Do you also deodorize shoes?", answer: "Yes, every shoe cleaning includes antibacterial deodorizing treatment to eliminate odor-causing bacteria from the interior." },
    { question: "Can you restore faded shoe color?", answer: "For leather shoes, we offer color restoration and polishing services. For fabric shoes, we can brighten and revive the original color in most cases." },
    { question: "Is there a separate charge for sole cleaning?", answer: "No, sole cleaning is included in our standard shoe cleaning package. We scrub and whiten soles as part of the process." },
    { question: "Do you repair shoes as well?", answer: "Currently, we focus on professional cleaning and restoration. For structural repairs, we can recommend trusted cobblers in the area." },
    { question: "How are cleaned shoes packaged?", answer: "Shoes are stuffed with tissue paper to maintain shape and delivered in protective shoe bags or boxes." },
    { question: "Is pickup and delivery available for shoe cleaning?", answer: "Yes, you can add shoe cleaning to any laundry pickup order. Free delivery applies for combined orders above ₹499." },
    { question: "How often should I get my shoes professionally cleaned?", answer: "For daily-wear sneakers, every 2-3 weeks is ideal. Formal leather shoes benefit from professional cleaning once a month." }
  ],
  "sofa-cleaning": [
    { question: "How does your professional sofa cleaning work?", answer: "We use hot water extraction and specialized upholstery cleaners to deep clean your sofa on-site, removing embedded dirt, allergens, and stains." },
    { question: "Do you clean sofas at my home or at your facility?", answer: "Sofa cleaning is done on-site at your home. Our technicians bring all necessary equipment and complete the process in 2-4 hours." },
    { question: "Is sofa cleaning safe for leather sofas?", answer: "Yes, we use pH-balanced leather-specific cleaners and conditioners. Our technicians are trained to handle both genuine and faux leather upholstery." },
    { question: "How long does a sofa take to dry after cleaning?", answer: "Fabric sofas typically dry within 4-6 hours depending on ventilation. We use minimal moisture techniques to speed up drying." },
    { question: "Can you remove pet hair and odors from sofas?", answer: "Yes, we use specialized tools to extract pet hair and antibacterial solutions to neutralize pet odors embedded in the upholstery fabric." },
    { question: "Do you clean dining chairs and office chairs too?", answer: "Yes, we clean all types of upholstered furniture including dining chairs, recliners, office chairs, and car seats." },
    { question: "How often should sofas be professionally cleaned?", answer: "We recommend professional deep cleaning every 6-12 months. Homes with pets, children, or allergy-prone members may benefit from quarterly cleaning." },
    { question: "Is there a minimum charge for sofa cleaning?", answer: "Pricing is based on the sofa size (seater count). A single-seater starts at an affordable rate, with per-seat pricing for larger sets." },
    { question: "Can you remove tough stains like coffee or ink from sofas?", answer: "Yes, our technicians pre-treat tough stains with specialized spotting agents before the main cleaning. Success rate is very high for most stains." },
    { question: "Do you use eco-friendly cleaning products for sofas?", answer: "Yes, all our upholstery cleaning solutions are non-toxic, biodegradable, and safe for homes with children and pets." },
    { question: "Will the sofa colors fade after cleaning?", answer: "No, we perform a colorfastness test on a hidden area before proceeding. Our solutions are designed to be color-safe for all fabric types." },
    { question: "How do I book a sofa cleaning appointment?", answer: "Simply book through our website, app, or WhatsApp. Our team will schedule a convenient time slot for the on-site service." }
  ],
  "carpet-cleaning": [
    { question: "How do you clean carpets professionally?", answer: "We use hot water extraction (steam cleaning) combined with specialized carpet shampoos to deep clean fibers and remove embedded dirt, dust mites, and allergens." },
    { question: "Do you clean carpets at home or at your facility?", answer: "Small rugs can be picked up and cleaned at our facility. Large wall-to-wall carpets and area rugs are cleaned on-site at your location." },
    { question: "Can you remove old, set-in stains from carpets?", answer: "We have a high success rate with tough stains like wine, coffee, and food. We pre-treat stains with enzyme-based solutions before the main cleaning." },
    { question: "How long does a carpet take to dry after cleaning?", answer: "Carpets typically dry within 6-12 hours. We use high-powered extraction that removes most moisture, and proper ventilation speeds up drying." },
    { question: "Is carpet cleaning safe for wool or silk carpets?", answer: "Yes, we identify the carpet material first and use appropriate cleaning methods. Wool and silk carpets receive gentle, hand-safe treatment." },
    { question: "Do you clean Persian and handmade rugs?", answer: "Yes, we specialize in delicate handmade and Persian rugs. These are cleaned using gentle hand-wash techniques to preserve their intricate weaving." },
    { question: "How often should carpets be professionally cleaned?", answer: "Every 6-12 months for most homes. High-traffic areas, homes with pets, or allergy sufferers may benefit from more frequent cleaning." },
    { question: "Do you also deodorize carpets?", answer: "Yes, antibacterial deodorizing is included in our standard carpet cleaning. We neutralize odors caused by pets, food spills, and general use." },
    { question: "Can you clean car carpets and floor mats?", answer: "Yes, we clean automotive floor mats and carpets. You can drop them off or include them with your regular pickup order." },
    { question: "Is there a minimum size requirement for carpet cleaning?", answer: "No minimum size. We clean everything from small bathroom rugs to large living room area carpets." },
    { question: "Do you offer carpet protection treatment after cleaning?", answer: "Yes, we offer optional stain-guard protection treatment that creates an invisible barrier on carpet fibers to resist future spills and stains." },
    { question: "How is pricing calculated for carpet cleaning?", answer: "Pricing is based on carpet size (per square foot) and material type. Contact us for a free quote based on your specific carpet." }
  ],
  "curtain-cleaning": [
    { question: "Do you remove and reinstall curtains?", answer: "Yes, we offer a full-service option where our team removes your curtains, cleans them at our facility, and reinstalls them after cleaning." },
    { question: "What types of curtains can you clean?", answer: "We clean all types including cotton, polyester, silk, velvet, sheer, blackout, and lined curtains using appropriate methods for each fabric." },
    { question: "How long does curtain cleaning take?", answer: "Standard turnaround is 3-5 business days including pickup and re-installation. This allows proper cleaning, drying, and pressing." },
    { question: "Will my curtains shrink during cleaning?", answer: "We follow care label instructions and use temperature-controlled processes specifically to prevent shrinkage. Delicate fabrics receive gentle hand treatment." },
    { question: "Can you remove mold or mildew stains from curtains?", answer: "Yes, we use specialized mold-removal treatments that effectively eliminate mildew stains and odors without damaging the curtain fabric." },
    { question: "Do you press and iron curtains after cleaning?", answer: "Yes, all curtains are steam-pressed so they hang perfectly straight and wrinkle-free when reinstalled." },
    { question: "Is curtain cleaning safe for velvet and silk curtains?", answer: "Absolutely. Velvet and silk curtains receive specialized dry cleaning treatment that preserves their texture, sheen, and drape." },
    { question: "How often should curtains be professionally cleaned?", answer: "Every 6-12 months is recommended. Curtains near kitchens or in dusty areas may need more frequent cleaning." },
    { question: "Can you handle very large or heavy curtains?", answer: "Yes, we handle floor-to-ceiling and multi-layered curtains. Our equipment and vehicles are designed for large, heavy furnishing items." },
    { question: "Do you clean curtain hooks and rods as well?", answer: "Our team wipes down rods and cleans hooks during the reinstallation process as part of our comprehensive service." },
    { question: "Is there a per-panel or per-pair pricing?", answer: "Pricing is typically per panel based on size and fabric type. Contact us for a detailed quote based on your specific curtains." },
    { question: "Can I pack and send curtains myself for cleaning?", answer: "Yes, you can pack your curtains and schedule a regular pickup. We'll clean, press, and deliver them back neatly folded or on hangers." }
  ],
  "bridal-wear": [
    { question: "How do you clean heavy bridal lehengas?", answer: "Bridal lehengas undergo a multi-stage process: pre-inspection, hand spot-cleaning of stains, gentle solvent-based cleaning, careful steam pressing, and luxury packaging." },
    { question: "Is it safe to clean heavily embellished wedding outfits?", answer: "Yes, we specialize in embellished garments. All zardozi, stone work, and sequin areas are manually protected before processing to prevent any damage." },
    { question: "How long does bridal wear cleaning take?", answer: "Bridal wear requires 5-7 business days for thorough, meticulous cleaning. We never rush this process to ensure the best possible result." },
    { question: "Can you remove food and makeup stains from wedding outfits?", answer: "Yes, haldi, mehendi, wine, and makeup stains are our specialty. We pre-treat each stain individually with fabric-safe spotting agents." },
    { question: "Do you offer pre-wedding cleaning for new bridal outfits?", answer: "Yes, many brides bring new outfits for a fresh-up steam and pressing before the wedding to ensure they look absolutely perfect on the big day." },
    { question: "How do you package bridal wear after cleaning?", answer: "Bridal outfits are placed on padded hangers with acid-free tissue paper and stored in breathable garment bags to prevent yellowing and creasing." },
    { question: "Can you preserve my bridal outfit for long-term storage?", answer: "Yes, we offer a bridal preservation service that includes deep cleaning, acid-free tissue wrapping, and a sealed preservation box for years of safekeeping." },
    { question: "Do you clean the groom's sherwani and accessories too?", answer: "Yes, we handle sherwanis, turbans, stoles, and other groom accessories with the same premium care as bridal wear." },
    { question: "Is there insurance for high-value bridal garments?", answer: "Our enhanced liability policy for bridal items covers up to 10x the service cost. We recommend declaring the outfit's value at the time of pickup." },
    { question: "Do you offer bulk cleaning for wedding party outfits?", answer: "Yes, we offer special event packages for cleaning multiple family outfits after weddings. Contact us for group pricing." },
    { question: "Can you remove sweat stains from silk wedding outfits?", answer: "Yes, perspiration stains on silk are carefully treated with pH-balanced solutions that remove the stain without affecting the silk's natural luster." },
    { question: "Do you provide pickup and delivery for bridal wear?", answer: "Yes, we offer special insured pickup and delivery for bridal wear. Our delivery agents handle these garments with extra care." }
  ]
};

