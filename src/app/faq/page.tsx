"use client";

import { useState } from "react";
import { Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqCategories = [
  {
    id: "home",
    title: "Home Page",
    subtitle: "- General & Quick Help",
    items: [
      { question: "What type of cleaning services does The Orchid Laundry offer?", answer: "We offer a comprehensive range including Dry Cleaning, Premium Laundry, Wash & Iron, Wash & Fold, Steam Ironing, Shoe Cleaning, Sofa Cleaning, Carpet Cleaning, and delicate Bridal Wear care." },
      { question: "Apart from laundry and dry cleaning, what other services does The Orchid Laundry offer?", answer: "In addition to garments, we specialize in home upholstery care (sofas, carpets, and curtains), heavy woolens, leather jacket treatments, and specialized shoe refurbishment." },
      { question: "Do you offer any discounts for first-time customers?", answer: "Yes! New customers often enjoy a welcome discount on their first order. Please check our booking page or contact our support team for the latest introductory offers." },
      { question: "Does The Orchid Laundry have a minimum order amount for pickup and delivery services?", answer: "Yes, we have a nominal minimum order value to qualify for our free doorstep pickup and delivery service (typically above ₹499)." },
      { question: "How can I avail discounts and offers at The Orchid Laundry?", answer: "You can avail offers by checking our website's banner announcements, subscribing to our WhatsApp alerts, or choosing one of our highly discounted prepaid bulk plans." },
      { question: "Is it possible to schedule a pickup and delivery online at The Orchid Laundry?", answer: "Absolutely. You can schedule a pickup in under 60 seconds directly through our website booking portal or by messaging us on WhatsApp." }
    ]
  },
  {
    id: "about",
    title: "About Page",
    subtitle: "- Our Story, Mission & Values",
    items: [
      { question: "When was The Orchid Laundry founded?", answer: "The Orchid Laundry was founded to bridge the gap between expensive premium service and affordable daily care. We started as a small idea in Dombivli and have scaled into a full-service enterprise." },
      { question: "Why should I trust The Orchid Laundry with my expensive garments?", answer: "We employ highly trained textile experts, utilize gentle European solvents, and track every single garment through our rigid 8-step barcode scanning process." },
      { question: "Are your cleaning processes eco-friendly?", answer: "Yes. Sustainability is a core pillar. We utilize low-water consumption technology and eco-friendly cleaning agents that are tough on stains but safe for the planet." },
      { question: "Where are your processing centers located?", answer: "Our primary state-of-the-art facility is located in Dombivli East to efficiently serve the entire region and surrounding urban areas." },
      { question: "How much experience do your textile experts have?", answer: "Our lead technicians bring over 15+ years of experience from the hospitality and professional dry-cleaning industries, ensuring master-grade proficiency." },
      { question: "Is The Orchid Laundry a locally owned business?", answer: "Yes, we are a proudly homegrown brand from Dombivli East. We are committed to serving our local community with international-standard cleaning technology." }
    ]
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    subtitle: "- Premium Care & Specialized Solvents",
    items: [
      { question: "What is the process for dry cleaning at your facility?", answer: "Our process includes Tagging, individual Garment Inspection, specialized Stain Pre-treatment, Fabric-specific machine processing, precision Steam Pressing, and a final Quality Check before packaging." },
      { question: "Do you offer dry cleaning for delicate fabrics like silk or sequence work?", answer: "Yes, we specialize in high-end care. Delicate fabrics undergo special inspection and use fabric-safe solvents to ensure texture and embellishments remain intact." },
      { question: "What items can be dry cleaned at your facility?", answer: "We handle a vast range including suits, silk sarees, heavy woolens, wedding gowns, curtains, leather jackets, and luxury designer couture." },
      { question: "How long does professional dry cleaning take?", answer: "Premium Dry Cleaning typically takes around 3-5 days. We offer Express Next-Day delivery for a nominal extra charge." },
      { question: "Are your dry cleaning solvents safe for the environment?", answer: "Yes, we use odorless, eco-friendly solvents that are gentle on fabrics and safe for the environment, unlike traditional harsh chemicals." },
      { question: "Do you handle luxury designer brands?", answer: "Absolutely. We provide master-grade care for luxury and designer labels, ensuring their original shape and color are preserved." }
    ]
  },
  {
    id: "steam-iron",
    title: "Steam Iron Service",
    subtitle: "- Crisp Finishing & Fabric Safety",
    items: [
      { question: "Is steam ironing different from regular ironing?", answer: "Yes, steam ironing uses high-pressure steam to remove wrinkles without direct high heat, which is much safer and more effective for premium garments." },
      { question: "How do you protect delicate fabrics during steam pressing?", answer: "We use Teflon-coated plates and digital temperature controls calibrated exactly for each fabric type (polyester, silk, wool, etc.) to prevent shine or burn marks." },
      { question: "Is precision steam ironing included in the dry cleaning service?", answer: "Yes, every dry-cleaned item is expertly steam-ironed on pneumatic machines to ensure a crisp finish that preserves the garment's original drape." },
      { question: "Can I book only a steam iron service without washing?", answer: "Yes! We offer a standalone Steam Iron Service for garments that just need a professional, wrinkle-free refresh." },
      { question: "What are the benefits of your professional steam iron service?", answer: "Benefits include high-pressure wrinkle removal, hygienic sanitization via steam, material-safe Teflon protection, and expert handling for sharp collars and pleats." },
      { question: "Do you provide hangers or fold-packing for ironed clothes?", answer: "We provide both options. You can choose either neat wardrobe folding or hanger packing based on your storage needs." }
    ]
  },
  {
    id: "wash-iron",
    title: "Wash & Iron",
    subtitle: "- Daily Wear & Office Attire",
    items: [
      { question: "What is included in the Wash & Iron service?", answer: "This service includes individual machine washing with premium detergents, hygienic drying, and high-pressure steam ironing for a wardrobe-ready finish." },
      { question: "How do you handle color bleeding in bulk loads?", answer: "We sort all garments strictly by color and fabric type. We also use color-catcher technology for items prone to bleeding to ensure no cross-contamination." },
      { question: "Is it suitable for office wear and formal shirts?", answer: "Yes, this is our most popular service for office wear. It keeps your shirts clean, fresh, and perfectly crisp for a professional look." },
      { question: "Do you provide antibacterial treatment?", answer: "Yes, every wash cycle can include an optional antibacterial rinse to ensure peak hygiene, especially for activewear and daily office clothes." },
      { question: "What detergents do you use for standard wash & iron?", answer: "We use high-quality, pH-balanced detergents that are tough on grime but gentle on fabric fibers, ensuring your clothes last longer." },
      { question: "Is there a weight limit for Wash & Iron?", answer: "No, we can handle any volume. We charge either per piece for specific items or per KG for bulk loads based on your preference." }
    ]
  },
  {
    id: "wash-fold",
    title: "Wash & Fold",
    subtitle: "- Economical Daily Laundry",
    items: [
      { question: "What is the difference between Wash & Fold and Wash & Iron?", answer: "Wash & Fold is a more economical service where clothes are washed, dried, and neatly folded, but not ironed. It's perfect for casual wear undies, socks, and towels." },
      { question: "Which items are best suited for Wash & Fold?", answer: "T-shirts, shorts, innerwear, bedsheets, and towels are ideal for this budget-friendly bulk service." },
      { question: "How do you ensure my socks and smaller items aren't lost?", answer: "We use individual mesh bags for small items and scan every load at 8 different stages to ensure 100% order accuracy." },
      { question: "Do you offer a scent-free option for Wash & Fold?", answer: "Yes, we can use unscented, hypoallergenic detergents upon request for customers with fragrance sensitivities." },
      { question: "Is the drying process safe for cotton garments?", answer: "Yes, we use temperature-controlled dryers that prevent over-drying and shrinkage, which is a common issue with home drying or sun-drying." },
      { question: "How are the clothes packed after folding?", answer: "Clothes are neatly stacked category-wise (e.g., all T-shirts together) and sealed in hygienic, transparent packaging ready for your wardrobe." }
    ]
  },
  {
    id: "premium-laundry",
    title: "Premium Laundry",
    subtitle: "- Luxury Fabric & Couture Care",
    items: [
      { question: "What makes the Premium Laundry service different?", answer: "Premium Laundry uses specialized fabric-wise programs, hand-finishing for delicate areas, and extra-gentle agitation to preserve high-end designer labels and delicate textures." },
      { question: "Do you specialize in wedding wear or bridal outfit cleaning?", answer: "Yes, we are the region's top choice for bridal wear. We clean and preserve heavy lehengas, gowns, and sherwanis with manual attention to detail." },
      { question: "How do you handle embroidery and sequence work?", answer: "Our master cleaners manually inspect and treat every embellished item. We use protective padding and specialized solvents to ensure no stones or sequins are loosened." },
      { question: "Is acidity-free packaging provided for bridal wear?", answer: "Yes, for long-term preservation of wedding wear, we offer acid-free tissue and box packing to prevent yellowing or material degradation over years." },
      { question: "Do you provide specialized manual hand-washing?", answer: "For ultra-fragile items that cannot withstand machine cycles, we offer professional hand-washing by our textile experts." },
      { question: "Who handles the premium laundry orders?", answer: "Premium orders are handled only by our senior-most technicians with over 15+ years of experience in handling luxury textiles." }
    ]
  },
  {
    id: "household-laundry",
    title: "Household Laundry",
    subtitle: "- Bedding, Linens & Balcony Essentials",
    items: [
      { question: "Do you handle large home items like curtains and carpets?", answer: "Yes, we offer professional curtain laundry (with removal/hanging help) and deep carpet cleaning using extraction technology." },
      { question: "How do you clean heavy comforters and quilts?", answer: "We use high-capacity industrial washers that allow heavy items to tumble freely for a deep clean, followed by thorough sanitized drying to eliminate dust mites." },
      { question: "Is the sofa cleaning done on-site or off-site?", answer: "We offer both. We can perform deep-extraction sofa cleaning directly at your home using our portable professional equipment." },
      { question: "Can you clean rugs of all materials?", answer: "Yes, whether it's wool, silk, polyester, or synthetic, we have specific cleaning shampoos and drying methods for each rug type." },
      { question: "Do you offer removal and re-installation for curtains?", answer: "Yes, our team can assist in taking down heavy drapes and re-hanging them once they are fresh, clean, and expertly ironed." },
      { question: "Are your cleaning agents safe for kids and pets in the home?", answer: "Absolutely. For household items, we prioritize non-toxic, eco-friendly cleaners that leave no harmful residues on your sofa or carpets." }
    ]
  },
  {
    id: "shoe-cleaning",
    title: "Shoe Cleaning",
    subtitle: "- Sneakers, Suede & Leather Care",
    items: [
      { question: "Is specialized shoe cleaning part of your regular service list?", answer: "Definitely. We offer professional shoe refurbishment for sneakers, suedes, and leathers. We deep clean, deodorize, and restore the material's texture." },
      { question: "Can you clean white mesh sneakers?", answer: "Yes, we use specialized whitening agents and delicate brushes to remove deep-set dirt from mesh without fraying the material." },
      { question: "How do you handle suede and nubuck shoes?", answer: "Suede requires waterless cleaning and material revival. We use specialized suede brushes and revivers to restore the 'nappy' feel and color." },
      { question: "Do you clean the inner soles and laces too?", answer: "Yes, every shoe cleaning order includes a deep clean of the laces, tongue, inner sole, and thorough disinfection of the interior." },
      { question: "How long does the shoe restoration process take?", answer: "Shoe cleaning usually takes 3-5 days to allow for natural air-drying in controlled conditions (we never use direct heat which can crack leather)." },
      { question: "Do you provide shoe polish and conditioning?", answer: "Yes, for leather shoes, we apply premium conditioning creams and hand-buff them for a high-gloss finish." }
    ]
  },
  {
    id: "b2b",
    title: "B2B Service",
    subtitle: "- Corporate & Pharma Solutions",
    items: [
      { question: "Do you process pharmaceutical uniforms in the same machines as general laundry?", answer: "No. We utilize completely dedicated wash streams for pharmaceutical uniforms. They are never mixed with non-pharmaceutical laundry to prevent cross-contamination." },
      { question: "How do you handle garments that arrive with pre-existing damage?", answer: "Every garment is individually inspected upon arrival. If we find tears or broken fastenings, we flag it immediately and issue a notification before processing." },
      { question: "What kind of detergents are used for B2B pharmaceutical laundry?", answer: "We use pharmaceutical-grade, skin-safe, and pH-balanced commercial detergents that comply with strict industry standards for hygiene and fabric integrity." },
      { question: "Do you offer customizable delivery schedules for enterprises?", answer: "Yes, collection and return deliveries happen according to a pre-agreed schedule that is customizable to match your shift changes and operational needs." },
      { question: "How do you ensure traceability for B2B orders?", answer: "We provide detailed manifest reports for every batch, detailing garment counts and status to ensure 100% accountability for your corporate asset." },
      { question: "Is temperature-controlled drying used?", answer: "Yes, all pharmaceutical and corporate uniforms are dried in dedicated chambers to avoid any environmental contamination." }
    ]
  },
  {
    id: "pricing",
    title: "Pricing & Billing",
    subtitle: "- Transparency & Wallet Plans",
    items: [
      { question: "Why does pricing vary for premium fabrics?", answer: "Premium fabrics require specialized solvents and longer processing times to ensure the fibers are not degraded, creating a slight gap in pricing." },
      { question: "Do you have any hidden pickup or delivery charges?", answer: "Nothing is hidden! Orders above ₹499 get free delivery. For smaller orders, a flat fee of ₹49 or ₹99 applies based on the order value." },
      { question: "Are your listed prices inclusive of all taxes?", answer: "Yes, all our prices on the website and app are fully inclusive of GST. The price you see is exactly what you pay in your final invoice." },
      { question: "Do you offer any special discounts for loyal customers?", answer: "Yes, recurring customers earn points. We also offer seasonal discounts announced via our WhatsApp newsletter." },
      { question: "How do you calculate weight for 'Wash per KG'?", answer: "We use high-precision digital scales to weigh your clothes (dry weight) at our facility for accurate billing." },
      { question: "Are your subscription wallet plans refundable?", answer: "Plans have high validity and are usually non-refundable, but credits can often be transferred or carried forward." }
    ]
  },
  {
    id: "contact",
    title: "Contact & Support",
    subtitle: "- Assistance & Feedback",
    items: [
      { question: "How fast do you respond to WhatsApp inquiries?", answer: "During business hours (8 AM - 9 PM), you can expect a reply within 5 to 10 minutes regarding any order inquiry." },
      { question: "Who can I contact if there is an issue with my delivery?", answer: "You can reach our customer care via the 'Support' hotline (7080804074) or message us on WhatsApp for immediate resolution." },
      { question: "Can I drop off my clothes physically at your facility?", answer: "Yes! While we encourage doorstep pickup, you are welcome to drop off garments at our Dombivli East facility during working hours." },
      { question: "What are your customer support operational hours?", answer: "Our phone lines and WhatsApp support are active from 8:00 AM to 9:00 PM every day." },
      { question: "How can I provide feedback or file a complaint?", answer: "Email care@theorchidlaundry.com or fill out the contact form on our page. We take every feedback seriously." },
      { question: "Is there a dedicated line for reporting urgent matters?", answer: "Yes, call our Support line (7080804074) immediately and specify your urgent request for prioritized tracking." }
    ]
  },
  {
    id: "legal",
    title: "Privacy & Legal",
    subtitle: "- Terms & Data Safety",
    items: [
      { question: "How do you protect my personal data?", answer: "We use secure cloud storage and encryption to ensure your name, number, and address always remain confidential." },
      { question: "Do you sell my information to third-party marketers?", answer: "Absolutely not. We never sell or rent your data; it is only shared with trusted partners essential for service delivery." },
      { question: "What is your compensation policy for damaged items?", answer: "Compensation is capped at 5x the service charge of the item or ₹1000, whichever is lower, as per our Terms." },
      { question: "What is your refund and cancellation policy?", answer: "Orders can be cancelled before pickup. Refunds for damaged items are processed within 7-10 working days." },
      { question: "What happens to unclaimed garments?", answer: "Items not collected within 15 days of delivery may be donated or recycled." },
      { question: "Is my payment information stored on your servers?", answer: "No. All transactions are handled by PCI-compliant third-party gateways for maximum security." }
    ]
  }
];

function FAQSection({ category }: { category: typeof faqCategories[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleItems = isExpanded ? category.items : category.items.slice(0, 2);

  const splitTitle = (text: string) => {
    const words = text.split(" ");
    return (
      <>
        {words[0]} <span className="text-primary">{words.slice(1).join(" ")}</span>
      </>
    );
  };

  return (
    <div className="mb-20 last:mb-0">
      <div className="text-left mb-8 px-4">
        <h2 className="text-[1.8rem] md:text-[2.5rem] font-bold text-black mb-2 leading-tight">
          {splitTitle(category.title)}
        </h2>
        <p className="text-primary font-bold uppercase tracking-wider text-sm">{category.subtitle}</p>
      </div>

      <div className="flex flex-col gap-4">
        {visibleItems.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden transition-all duration-300 hover:border-primary/30 shadow-sm"
          >
            <button
              className="w-full px-6 py-5 flex justify-between items-center text-left bg-transparent border-none cursor-pointer focus:outline-none group"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              <span className="text-[0.95rem] md:text-[1.1rem] font-semibold text-black pr-4 group-hover:text-primary transition-colors">
                {item.question}
              </span>
              <span className="shrink-0 text-primary flex items-center justify-center bg-primary/5 w-8 h-8 rounded-lg transition-transform duration-300">
                {activeIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            
            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden bg-gray-50/30"
                >
                  <div className="px-6 pb-6 pt-0 text-[#555] text-[1rem] leading-[1.7]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {category.items.length > 2 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 py-3 px-8 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp size={18} className="transition-transform group-hover:-translate-y-1" /></>
            ) : (
              <>Read More Questions <ChevronDown size={18} className="transition-transform group-hover:translate-y-1" /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-[#f8fafc] py-24 md:py-32">
      <div className="container max-w-[1000px] mx-auto">
        <div className="text-center mb-24 px-4">
          <h1 className="text-[2.5rem] md:text-[4rem] font-black text-black mb-6 tracking-tight">
            Help <span className="text-primary">Center</span>
          </h1>
          <p className="text-[1.1rem] text-[#444] max-w-[700px] mx-auto leading-relaxed">
            Welcome to the ultimate FAQ resource. We have meticulously organized every detail from every service and page on our website to ensure you get the answers you need in seconds.
          </p>
        </div>

        <div className="flex flex-col">
          {faqCategories.map((category) => (
            <FAQSection key={category.id} category={category} />
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-32 bg-white p-10 md:p-16 rounded-[50px] border border-gray-100 text-center shadow-xl shadow-gray-200/50">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Still Have Questions?</h2>
          <p className="text-[#64748b] mb-10 max-w-[600px] mx-auto text-[1.1rem]">
            If you can&apos;t find what you&apos;re looking for, our friendly support team is ready to assist you via WhatsApp or Email.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:7080804074" className="bg-primary text-white py-4 px-10 rounded-2xl font-bold text-[1.1rem] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">Call Support</a>
            <a href="https://wa.me/917080804074" className="bg-[#25D366] text-white py-4 px-10 rounded-2xl font-bold text-[1.1rem] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}
