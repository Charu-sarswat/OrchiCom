import { CheckCircle2, ShieldCheck, Clock, Package, MessageSquare } from "lucide-react";
import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

export const metadata = {
  title: "B2B Services | The Orchid Laundry",
  description: "Standard Operating Procedure and Our Commitment for Pharmaceutical Uniforms.",
};

const B2BPage = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center text-white text-center h-[36vh] min-h-[220px] md:h-[50vh] md:min-h-[340px] bg-cover bg-center bg-fixed max-[768px]:bg-scroll"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.35)), url('/B2B.png')" }}
      >
        <div className="container">
          <div className="max-w-[800px] mx-auto px-4">
            <h1 className="mb-4 leading-[1.1] text-[2.2rem] md:text-[3.5rem] lg:text-[4.2rem] font-bold text-white">
              B2B <span className="text-white">Services</span>
            </h1>
            <p className="text-[1.1rem] md:text-[1.3rem] font-medium tracking-[0.05em] text-white opacity-90 max-w-[800px] mx-auto leading-[1.7]">
              Professional Pharmaceutical Uniform Processing Solutions
            </p>
          </div>
        </div>
      </section>

      <div 
        className="section-padding bg-cover bg-center bg-fixed bg-no-repeat relative py-16 md:py-24"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/b.png')" }}
      >
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Main Introduction */}
          <div className="text-center mb-16 max-w-[900px] mx-auto text-white">
            <h2 className="mb-6 text-[2rem] md:text-[3.2rem] text-white font-bold leading-[1.1]">
              Standard Operating <span className="text-[#18a1d8]">Procedure</span>
            </h2>
            <p className="text-white/80 text-[1.1rem] md:text-[1.15rem] leading-[1.8] font-medium max-w-[800px] mx-auto">
              Every batch of pharmaceutical uniforms follows the rigorous process outlined below, ensuring peak hygiene and full traceability from pickup to return delivery.
            </p>
          </div>

          {/* SOP Steps */}
          <div className="w-full flex flex-col gap-12 md:gap-20 mt-16 max-w-[1240px] mx-auto">
            {[
              {
                number: "1",
                image: "/b2.png",
                title: "Collection from Client Premises",
                points: [
                  "Uniforms are collected from the pharmaceutical facility on a pre-agreed schedule.",
                  "A collection transfer form is signed by both parties noting the garment count and any visible condition issues.",
                  "Garments are transported in sealed, clean laundry bags to prevent cross-contamination in transit."
                ]
              },
              {
                number: "2",
                image: "/b3.png",
                title: "Sorting & Batch Inspection",
                points: [
                  "On arrival at The Orchid Laundry, garments are sorted batch-wise by uniform type, fabric, and colour.",
                  "Each garment is individually inspected for stains, damage (tears, snags, broken fastenings), and colour-bleed risk.",
                  "Pockets are checked and cleared. Any items found are bagged and reported to the client.",
                  "Garments with pre-existing damage are flagged and a damage notification is issued before processing."
                ]
              },
              {
                number: "3",
                image: "/b4.png",
                title: "Spotting & Stain Pre-Treatment",
                points: [
                  "Stained areas — cuffs, collars, and any soiled zones — are individually treated with appropriate spotting solutions.",
                  "Stubborn stains (oil, biological matter, chemical residues, ink) receive targeted pre-treatment using enzyme-based solutions.",
                  "Chemical compatibility is verified against the garment fabric before any agent is applied."
                ]
              },
              {
                number: "4",
                image: "/b5.png",
                title: "Washing",
                points: [
                  "Garments are washed in high-efficiency commercial machines using the correct water temperature, detergent type, and wash cycle for each fabric.",
                  "Pharmaceutical uniforms are washed in dedicated machines, separate from all non-pharmaceutical laundry, to prevent cross-contamination.",
                  "Detergents are pharmaceutical-grade, skin-safe, and pH-balanced."
                ]
              },
              {
                number: "5",
                image: "/img/abcd.jpg",
                title: "Drying",
                points: [
                  "Washed garments are dried in temperature-controlled anti-bacterial drying chambers.",
                  "Drying parameters are set per fabric type to prevent shrinkage, fading, or loss of garment shape.",
                  "No open-air or shared-rack drying is used for pharmaceutical uniforms."
                ]
              },
              {
                number: "6",
                image: "/img/steam-ironing-service.png",
                title: "Ironing & Finishing",
                points: [
                  "Garments are steam-pressed using high-pressure steam irons with Teflon-coated plates for a crisp, wrinkle-free finish.",
                  "Delicate fabrics are finished under precision temperature control to preserve fabric integrity.",
                  "Garments are folded or hung as per the client's specified preference."
                ]
              },
              {
                number: "7",
                image: "/b6.png",
                title: "Multi-Point Quality Check",
                points: [
                  "Every garment goes through a structured three-stage quality inspection before packaging.",
                  "Any garment that fails QC at any stage is returned for re-processing before dispatch.",
                  "Passed garments are packaged in hygienic, sealed packaging and returned to the client on the agreed schedule.",
                  "A delivery confirmation is signed by the client representative upon receipt."
                ]
              }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-0 w-full lg:h-[520px] group rounded-[40px] overflow-hidden border border-white/10 bg-white/5 shadow-none transition-all duration-400 hover:border-primary/50">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-0 lg:h-full relative overflow-hidden shrink-0">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 z-10 w-[55px] h-[55px] bg-[#18a1d8] rounded-[18px] flex items-center justify-center font-black text-[1.8rem] text-white shadow-none">
                    {step.number}
                  </div>
                </div>

                {/* Right Side: Content Card */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 h-full overflow-hidden">
                   <h3 className="text-[1.6rem] md:text-[2.2rem] font-bold text-white mb-6 leading-tight">{step.title}</h3>
                   <div className="flex flex-col gap-4">
                    {step.points.map((point, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        <p className="m-0 text-white/80 text-[1rem] md:text-[1.1rem] leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="bg-white py-20 md:py-28 px-4 md:px-0">
        <div className="container">
          <div className="text-center mb-16 max-w-[900px] mx-auto">
            <h2 className="text-[2rem] md:text-[3.2rem] text-black font-bold mb-6">
              Our <span className="text-gradient">Commitment</span>
            </h2>
            <p className="max-w-[700px] mx-auto text-[1.1rem] text-[#444]">
              Ensuring the highest standards of hygiene and reliability for your commercial uniform needs.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1240px] mx-auto mb-16">
            {[
              { icon: <ShieldCheck size={28} />, title: "Dedicated Wash Streams", desc: "Pharmaceutical uniforms are never mixed with general laundry." },
              { icon: <CheckCircle2 size={28} />, title: "Full Traceability", desc: "Every garment is tracked from collection to delivery." },
              { icon: <Package size={28} />, title: "Hygienic Packaging", desc: "Garments arrive back clean, sealed, and protected." },
              { icon: <Clock size={28} />, title: "Reliable Turnaround", desc: "Consistent collection and delivery on agreed schedules." },
              { icon: <MessageSquare size={28} />, title: "Transparent Communication", desc: "Any damage or issue is reported to the client before processing." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[rgba(24,161,216,0.15)] rounded-[20px] p-4 md:p-6 transition-all duration-400 hover:-translate-y-2 hover:border-primary text-center flex flex-col items-center shadow-none min-h-[180px] justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#f0f9ff] text-primary flex items-center justify-center mb-3 md:mb-4 shadow-none">
                  <div className="[&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-[1rem] md:text-[1.1rem] font-bold text-black mb-1.5 leading-tight">{item.title}</h4>
                <p className="text-[#444] text-[0.85rem] md:text-[0.9rem] leading-relaxed m-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Global FAQ Section */}
      <GlobalFAQ faqs={b2bFaqs} />
    </div>
  );
};

const b2bFaqs = [
  {
    question: "Do you process general garments in the same machines as pharmaceutical uniforms?",
    answer: "No. We utilize completely dedicated wash streams for pharmaceutical uniforms. They are never mixed with non-pharmaceutical laundry to prevent cross-contamination and to meet strict hygiene regulations."
  },
  {
    question: "How do you handle garments that arrive with pre-existing damage?",
    answer: "Every garment is individually inspected upon arrival. If we find tears, snags, broken fastenings, or severe damage, we flag it immediately and issue a digital damage notification to your team before processing."
  },
  {
    question: "What kind of detergents are used for B2B pharmaceutical laundry?",
    answer: "We use exclusively pharmaceutical-grade, skin-safe, and pH-balanced commercial detergents that comply with industry standards to ensure cleanliness without compromising the uniform's integrity."
  },
  {
    question: "Is open-air drying used at any point?",
    answer: "No. All pharmaceutical uniforms are dried inside temperature-controlled, anti-bacterial drying chambers. Open-air or shared-rack drying poses contamination risks and is strictly prohibited in our B2B workflows."
  },
  {
    question: "How do you prevent items left in pockets from causing issues?",
    answer: "During our Step 02 Batch Inspection, every pocket is manually checked and cleared. Any items found (like pens, IDs, or tools) are safely bagged and officially reported and returned to your management."
  },
  {
    question: "Do you offer customizable delivery schedules?",
    answer: "Yes, collection and return deliveries happen strictly according to a pre-agreed schedule that is highly customizable to match your shift changes and operational requirements."
  }
];

export default B2BPage;
