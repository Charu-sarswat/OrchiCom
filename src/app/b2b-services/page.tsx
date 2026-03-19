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
          <div className="max-w-[700px] mx-auto px-4">
            <h1 className="mb-2 leading-[1.15] text-[clamp(1.8rem,5vw,3.5rem)] text-white">B2B <span className="text-white">Services</span></h1>
            <p className="text-[1.05rem] opacity-[0.85] tracking-[0.05em]">Pharmaceutical Uniform Processing</p>
          </div>
        </div>
      </section>

      <div 
        className="section-padding bg-cover bg-center bg-fixed bg-no-repeat relative"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/b.png')" }}
      >
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Main Introduction */}
          <div className="text-center mb-12 max-w-[800px] mx-auto text-white">
            <h2 className="mb-4 text-[1.8rem] md:text-[2.4rem] text-white">Standard Operating <span className="text-[#18a1d8]">Procedure</span></h2>
            <p className="text-white/80 text-[1.05rem] leading-[1.7] font-medium">
              Every batch of pharmaceutical uniforms follows the rigorous process outlined below, from pickup to return delivery.
            </p>
          </div>

          {/* SOP Steps */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 mt-10">
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
                title: "Multi-Point Quality Check & Return Delivery",
                points: [
                  "Every garment goes through a structured three-stage quality inspection before packaging.",
                  "Any garment that fails QC at any stage is returned for re-processing before dispatch.",
                  "Passed garments are packaged in hygienic, sealed packaging and returned to the client on the agreed schedule.",
                  "A delivery confirmation is signed by the client representative upon receipt."
                ]
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-[#eee] rounded-[20px] relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(24,161,216,0.1)] hover:border-primary/30 flex flex-col mt-4">
                <div className="absolute -top-[20px] left-[24px] z-10 w-[50px] h-[50px] bg-[#18a1d8] rounded-[14px] flex items-center justify-center font-black text-[1.8rem] text-white shadow-md">
                  {step.number}
                </div>
                
                <div className="w-full h-[190px] bg-[#f0f9ff] relative rounded-t-[20px] overflow-hidden">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="p-6 pt-5">
                  <h3 className="text-[1.2rem] font-extrabold text-black mb-3 leading-[1.3]">{step.title}</h3>
                  <div className="flex flex-col gap-2">
                    {step.points.map((point, i) => (
                      <p key={i} className="m-0 text-[#666] text-[0.95rem] leading-[1.6]">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="bg-white py-16 md:py-20 px-4 md:px-0">
        <div className="container">
          <div className="text-center mb-10 max-w-[800px] mx-auto">
            <h2 className="mb-4 text-[1.8rem] md:text-[2.4rem]">Our <span className="text-gradient">Commitment</span></h2>
          </div>

            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto mb-16">
              {[
                { icon: <ShieldCheck size={26} />, title: "Dedicated Wash Streams", desc: "Pharmaceutical uniforms are never mixed with general laundry." },
                { icon: <CheckCircle2 size={26} />, title: "Full Traceability", desc: "Every garment is tracked from collection to delivery." },
                { icon: <Package size={26} />, title: "Hygienic Packaging", desc: "Garments arrive back clean, sealed, and protected." },
                { icon: <Clock size={26} />, title: "Reliable Turnaround", desc: "Consistent collection and delivery on agreed schedules." },
                { icon: <MessageSquare size={26} />, title: "Transparent Communication", desc: "Any damage or issue is reported to the client before processing." },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-[rgba(24,161,216,0.2)] rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#f0f9ff] text-primary flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-[1.1rem] font-bold text-black mb-2">{item.title}</h4>
                  <p className="text-[#666] text-[0.9rem] leading-[1.6] m-0">{item.desc}</p>
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
