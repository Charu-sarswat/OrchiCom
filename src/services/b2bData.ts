import { Building2, Pill, Hospital, Utensils, Sparkles } from "lucide-react";

export interface WashTableRow {
  type: string;
  temp: string;
  detergent: string;
  cycle: string;
}

export interface B2BIndustry {
  id: string;
  slug: string;
  title: string;
  icon: any;
  image: string;
  tagline: string;
  description: string;
  fullAbout: string;
  clients: string[];
  sop: {
    step: number;
    title: string;
    points: string[];
  }[];
  washTable?: WashTableRow[];
  seo: string;
}

export const b2bIndustries: B2BIndustry[] = [
  {
    id: "hotel",
    slug: "hotel-linen",
    title: "Hotel Linen Laundry",
    icon: Building2,
    image: "/hot.png",
    tagline: "First Impressions That Last.",
    description: "Pristine, fresh-smelling linen is the silent power behind guest satisfaction. We deliver professional hotel linen solutions engineered for consistency and hygiene.",
    fullAbout: "Hotels generate high volumes of linen daily — bed sheets, pillow covers, duvet covers, bath towels, hand towels, face towels, and bathrobes. Mishandling or inconsistent laundering leads to premature fabric wear, guest complaints, and operational disruption. Our hotel laundry service in Navi Mumbai and Dombivli is designed to eliminate these pain points with a structured, audited process. We use industrial-grade, eco-friendly detergents, precision temperature-controlled washing, and commercial dryers with lint removal systems — ensuring your linen comes back hygienically clean, perfectly pressed, and folded to hotel standards every single time.",
    clients: ["Hotels", "Guesthouses", "Resorts", "Service Apartments"],
    sop: [
      { step: 1, title: "Linen Collection & Pickup", points: ["Verify linen count against a mutually agreed pickup checklist / manifest", "Segregation by category at point of collection.", "Initial inspection for heavy staining, damage, or items requiring special treatment", "Tag each batch with a unique client code, date, and category for full traceability", "Issue a digital or physical pickup receipt to the hotel housekeeping manager"] },
      { step: 2, title: "Sorting & Pre-Treatment", points: ["Sort by fabric (Cotton, Terry, Microfibre).", "Whites processed separately.", "Enzymatic pre-soak for blood, food, makeup, and body fluid stains."] },
      { step: 3, title: "Washing — Temperature & Chemistry", points: ["70–80°C for white sheets and towels.", "Color-safe detergents for colored linen.", "pH neutralization to prevent fabric degradation."] },
      { step: 4, title: "Rinsing, Softening & Conditioning", points: ["Double rinse cycle to eliminate all detergent residue", "Fabric softener added during final rinse for luxuriously soft towels and sheets", "Optical brighteners applied to whites to maintain a crisp, bright appearance"] },
      { step: 5, title: "Drying", points: ["Commercial rotary dryers set at appropriate temperatures per fabric type", "Terry items tumble-dried for maximum fluffiness", "No over-drying — moisture retention monitored to protect fabric longevity"] },
      { step: 6, title: "Ironing & Pressing", points: ["Flatwork calender press for sheets, pillow covers, and duvet covers", "Steam pressing for bathrobes and garment-type items", "All linen inspected under bright light for remaining stains or tears"] },
      { step: 7, title: "Folding & Packaging", points: ["Bed sheets folded to standard hotel specifications", "Towels folded in tri-fold or hotel-roll format", "Poly-wrapped or covered in breathable packaging to prevent contamination"] },
      { step: 8, title: "Quality Control & Dispatch", points: ["100% count accuracy guaranteed", "Quality control sign-off by shift supervisor", "Digital delivery receipt shared with the housekeeping department"] }
    ],
    washTable: [
      { type: "White Bed Sheets", temp: "70–80°C", detergent: "Alkaline + Bleach", cycle: "Heavy Duty" },
      { type: "Coloured Linen", temp: "40–60°C", detergent: "Colour-Safe Detergent", cycle: "Normal" },
      { type: "Bath Towels", temp: "70–80°C", detergent: "Alkaline Detergent", cycle: "Heavy Duty" },
      { type: "Bathrobes", temp: "40°C", detergent: "Mild Detergent", cycle: "Gentle" },
      { type: "Pillow Covers", temp: "60–70°C", detergent: "Alkaline + Softener", cycle: "Normal" }
    ],
    seo: "hotel linen laundry service Navi Mumbai | hotel laundry Dombivli | commercial hotel linen washing Kalyan | outsource hotel laundry Mumbai | linen management service for hotels"
  },
  {
    id: "pharma",
    slug: "pharma-uniform",
    title: "Pharma Uniform Laundry",
    icon: Pill,
    image: "/pharm.png",
    tagline: "GMP-Compliant Contamination Control.",
    description: "Strict adherence to ISO 14644 and GMP standards. Dedicated wash streams ensure zero cross-contamination for lab coats, coveralls, and ESD garments.",
    fullAbout: "The pharmaceutical manufacturing industry operates under some of the most stringent hygiene, contamination control, and GMP standards. Employee workwear — lab coats, cleanroom garments, aprons, coveralls, and ESD (electrostatic discharge) uniforms — must be laundered to exacting standards to prevent product contamination and maintain compliance.",
    clients: ["Pharma Mfg.", "Biotech", "API Units", "Medical Devices"],
    sop: [
      { step: 1, title: "Collection — Area-Wise Segregation", points: ["Garments collected in color-coded, sealed bags designated per production area", "Cleanroom garments double-bagged and labelled with area code", "Collection staff trained on pharmaceutical facility entry protocols"] },
      { step: 2, title: "Transport & Chain of Custody", points: ["Transported in a dedicated, enclosed vehicle — completely separate", "Chain-of-custody documentation maintained from pickup to delivery", "Vehicle sanitised before each pharma pickup run"] },
      { step: 3, title: "Receiving, Inspection & Logging", points: ["Unique batch number assigned to each client load", "Visual inspection for contamination level and damage", "Digital weight and count logs retained for minimum 2 years"] },
      { step: 4, title: "Pre-Treatment", points: ["Product dust removed using dry pre-treatment in a contained environment", "Solvent-based residues treated with targeted pre-soaks", "Biological residues treated as biohazardous — specific decontamination protocol"] },
      { step: 5, title: "GMP-Compliant Wash Cycle", points: ["Particle-free detergents for cleanroom garments", "Wash cycles logged digitally with temperature and chemistry data", "Compliance with ISO 14644 and GMP Schedule M"] },
      { step: 6, title: "Rinsing — Residue Elimination", points: ["Triple rinse for absolute removal of all detergent", "Final rinse with purified/deionised water for Class 6+", "Conductivity testing optionally available for ESD garments"] },
      { step: 7, title: "Drying — Controlled Environment", points: ["Lint-free dryers with HEPA-filtered exhaust", "Cleanrooms and sterile garments dried separately", "Drying temperature logs maintained per batch"] },
      { step: 8, title: "Inspection, Folding & Cleanroom Packaging", points: ["Post-wash particle inspection under bright light", "Cleanroom garments double-bagged in sterile poly packaging", "Batch processing certificate issued with each load"] }
    ],
    washTable: [
      { type: "General Mfg. Uniforms", temp: "70°C", detergent: "Low-lint Alkaline", cycle: "GMP Schedule M" },
      { type: "Cleanroom Garments", temp: "70–80°C", detergent: "Particle-free", cycle: "ISO 14644" },
      { type: "Lab Coats (QC/QA)", temp: "60°C", detergent: "Enzyme + Low-lint", cycle: "WHO GMP" },
      { type: "ESD Garments", temp: "40°C", detergent: "ESD-safe Mild", cycle: "IEC 61340-5" },
      { type: "Sterile Area Coveralls", temp: "80°C+", detergent: "Sterile-grade", cycle: "ISO 14644 Class 5" }
    ],
    seo: "pharma uniform laundry Navi Mumbai | GMP compliant laundry service | cleanroom garment washing Dombivli | pharmaceutical workwear laundry Mumbai | lab coat cleaning MIDC Dombivli | ESD garment laundering Navi Mumbai"
  },
  {
    id: "hospital",
    slug: "hospital-linen",
    title: "Hospital Linen Laundry",
    icon: Hospital,
    image: "/hospit.png",
    tagline: "Hygiene That Saves Lives.",
    description: "Healthcare-associated infections (HAIs) are a critical concern. We provide biohazard-safe laundering compliant with Ministry of Health standards.",
    fullAbout: "Hospital linen includes bed sheets, pillow covers, blankets, patient gowns, surgical drapes, OT linen, ward curtains, mattress covers, and staff uniforms. These items carry biological hazards including blood, body fluids, and pathogens. Our process ensures complete disinfection, hygiene compliance, and safe handling at every stage — protecting your patients, staff, and reputation. We maintain strict separation between hospital linen and all other commercial laundry streams.",
    clients: ["Hospitals", "Nursing Homes", "Clinics", "Diagnostic Centres"],
    sop: [
      { step: 1, title: "Biohazard-Safe Collection", points: ["Collected in colour-coded, leak-proof, Clearly labelled biohazard bags", "Highly infectious linen double-bagged and labelled separately", "Collection staff wear full PPE (gloves, masks, apron)"] },
      { step: 2, title: "Transport — Dedicated Vehicle", points: ["Transported in a dedicated closed vehicle — never mixed", "Vehicle sanitised after every hospital run", "Linen remains in sealed bags during transit"] },
      { step: 3, title: "Receiving & Sorting", points: ["Received in designated 'dirty zone' physically separated", "Staff wear full PPE at all times", "Sorted by contamination level: general vs high-risk (OT/ICU)"] },
      { step: 4, title: "Thermal Disinfection Wash Cycle", points: ["85°C+ for 10 minutes (OT/ICU linen).", "70°C for 25 minutes (General ward).", "All wash cycles logged digitally for audit purposes"] },
      { step: 5, title: "Rinsing & Neutralisation", points: ["Triple rinse to remove all chemical residue", "pH check of rinsed linen (6.5–7.5)", "Residual disinfectant level testing"] },
      { step: 6, title: "Drying", points: ["Tumble-dried at high temperature for thermal kill", "OT and ICU linen dried separately", "Commercial dryers ensure consistent hygiene"] },
      { step: 7, title: "Finishing, Folding & Segregation", points: ["Linen pressed and folded in the 'clean zone'", "Staff change PPE before entering clean zone", "Ward-wise segregation for easy distribution"] },
      { step: 8, title: "Packaged Delivery", points: ["Covered in sealed, breathable packaging before loading", "Dedicated clean delivery vehicle", "Emergency turnaround service available"] }
    ],
    washTable: [
      { type: "General Ward Linen", temp: "70°C", detergent: "Alkaline + Disinfectant", cycle: "25 min hold" },
      { type: "OT / Surgical Linen", temp: "85°C+", detergent: "Alkaline + Peracetic", cycle: "10 min hold" },
      { type: "Patient Gowns", temp: "70°C", detergent: "Alkaline + Disinfectant", cycle: "25 min hold" },
      { type: "Mattress Covers", temp: "60°C", detergent: "Enzymatic + Disinfectant", cycle: "30 min hold" }
    ],
    seo: "hospital linen laundry service Navi Mumbai | medical linen washing Dombivli | healthcare laundry service Kalyan | OT linen cleaning Navi Mumbai | hospital laundry outsourcing Mumbai"
  },
  {
    id: "restaurant",
    slug: "restaurant-uniform",
    title: "Restaurant Uniform Laundry",
    icon: Utensils,
    image: "/restraun.png",
    tagline: "Hygiene is a Legal Imperative.",
    description: "Tough on grease, spices, and oil. We ensure your kitchen and service staff look sharp and hygienic, reflecting the quality of your establishment.",
    fullAbout: "Restaurant uniforms — chef coats, aprons, trousers, kitchen bandanas, waiter uniforms, barista aprons, and floor staff attire — face a unique laundering challenge. They carry grease, food stains, spices, sauces, and beverage spillage that require targeted stain-fighting chemistry. At the same time, these garments must maintain their shape, colour, and professional appearance wash after wash.",
    clients: ["QSRs", "Fine Dining", "Cloud Kitchens", "Caterers"],
    sop: [
      { step: 1, title: "Collection & Staff Handover", points: ["Coordinated with restaurant management or kitchen supervisor", "Pockets checked and emptied protocol", "Heavy staining flagged at point of collection"] },
      { step: 2, title: "Sorting & Assessment", points: ["Whites separated from coloured uniforms", "Condition assessed for tears or missing buttons", "Digital records maintained for every transaction"] },
      { step: 3, title: "Stain Pre-Treatment", points: ["Alkaline degreasers for grease and oil stains", "Enzyme-based pre-soaks for curry and turmeric", "Cold-water enzyme treatment for blood and protein"] },
      { step: 4, title: "Washing", points: ["Specialized wash for white chef coats at 70°C", "Deodorising agents added for kitchen odours", "Fabric softeners applied for staff comfort"] },
      { step: 5, title: "Rinsing & Deodorising", points: ["Double rinse to remove all chemical residue.", "Specific deodorising for food industry odours."] },
      { step: 6, title: "Drying", points: ["Heat calibrated per garment care label", "Polyester uniforms dried at lower temperatures", "Heavy cotton items fully dried to prevent mildew"] },
      { step: 7, title: "Ironing & Presentation", points: ["Chef coats steam-pressed for crease-free finish", "Waiter uniforms pressed on form finishers for sharp looks", "Final QC for remaining stains before packing"] },
      { step: 8, title: "Delivery by Staff Code", points: ["Uniforms returned labelled by name or code", "24-48 hours standard turnaround available.", "Express 12-hour service for critical needs."] }
    ],
    washTable: [
      { type: "White Chef Coats", temp: "70°C", detergent: "Alkaline + Bleach", cycle: "Heavy Duty" },
      { type: "Coloured Uniforms", temp: "40°C", detergent: "Colour-Safe Enzyme", cycle: "Normal" },
      { type: "Cotton Aprons", temp: "60°C", detergent: "Alkaline Detergent", cycle: "Normal" },
      { type: "Waiter Uniforms", temp: "40°C", detergent: "Colour-Safe Mild", cycle: "Gentle" }
    ],
    seo: "restaurant uniform laundry Navi Mumbai | chef coat washing service Dombivli | F&B uniform cleaning Kalyan | restaurant linen service Mumbai | kitchen apron laundry near me"
  },
  {
    id: "spa",
    slug: "spa-towel",
    title: "Spa & Salon Towel Laundry",
    icon: Sparkles,
    image: "/sp.png",
    tagline: "Irresistibly Fluffy & Clean.",
    description: "Massage oils, body butters, and scrubs require specialized chemistry. We deliver towels that are hygienically clean and perfectly soft for a luxury experience.",
    fullAbout: "Spa towels are subjected to oils, body butters, scrubs, wax residues, aromatherapy products, and body fluids — making them one of the most challenging categories of commercial laundry. Standard washing processes strip towel fibres, reduce fluffiness, and often leave behind oil stains or unpleasant odours. Our specialised spa linen laundry process preserves the quality and longevity of your premium towel inventory.",
    clients: ["Spas", "Wellness Centres", "Luxury Salons", "Resort Spas"],
    sop: [
      { step: 1, title: "Pickup & Initial Assessment", points: ["Categorised: body towels, hand, face, wrap sheets", "Oil-heavy or wax-stained towels tagged for treatment", "Bagged in separate clean bags — no mixing"] },
      { step: 2, title: "Oil & Product Pre-Treatment", points: ["Professional emulsifiers break down massage oils", "Wax residue treated with heat-and-dissolve method", "Turmeric and henna treated with targeted agents"] },
      { step: 3, title: "Washing — Gentle Yet Thorough", points: ["Cotton towels washed with fabric softener at 60-70°C", "Microfibre towels washed WITHOUT softener", "Optimized chemistry for wellness industry residues"] },
      { step: 4, title: "Double Rinse & Softening", points: ["Double rinse to prevent skin irritation", "Premium fabric conditioners added", "Optical brighteners for white towels"] },
      { step: 5, title: "High-Efficiency Tumble Drying", points: ["Maximum fluffiness through tumble drying", "Moisture monitored to preserve softness.", "Fragrance-free drying balls available on request"] },
      { step: 6, title: "Folding & Presentation", points: ["Spa-standard rolling or tri-folding methods", "Neat display formats for face towels", "QC check for residual odors and damage"] },
      { step: 7, title: "Delivery & Inventory Reports", points: ["On-time delivery to hotel/spa linen store", "Monthly linen condition reports provided", "Count verification guaranteed at delivery"] }
    ],
    washTable: [
      { type: "White Cotton Towels", temp: "60–70°C", detergent: "Alkaline + OBA", cycle: "Heavy Duty" },
      { type: "Coloured Towels", temp: "40°C", detergent: "Colour-Safe Enzyme", cycle: "No bleach" },
      { type: "Microfibre Towels", temp: "40°C", detergent: "Mild Detergent", cycle: "No softener" },
      { type: "Hot Towels (Oshibori)", temp: "70°C", detergent: "Alkaline", cycle: "Short cycle" }
    ],
    seo: "spa towel laundry Navi Mumbai | salon linen washing service | spa laundry Kharghar Vashi | massage towel cleaning service Mumbai | luxury spa linen outsourcing"
  }
];
