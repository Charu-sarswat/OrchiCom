"use client";

import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

const faqs = [
  { 
    question: "Do you offer free pickup and delivery?", 
    answer: "Yes, we offer free doorstep pickup and delivery for all orders that meet our minimum order value in the Dombivli and surrounding regions." 
  },
  { 
    question: "How long does it take for my clothes to be ready?", 
    answer: "Standard turnaround for Wash & Iron is 48-72 hours. Dry cleaning typically takes 3-5 days. We always aim for the fastest delivery without compromising quality." 
  },
  { 
    question: "What items can be dry cleaned at your facility?", 
    answer: "We handle a vast range of items including suits, silk sarees, heavy woolens, wedding gowns, curtains, designer wear, and even leather jackets." 
  },
  { 
    question: "How do you handle delicate fabrics and luxury couture?", 
    answer: "Every delicate item undergoes a manual pre-inspection. We use gentle, fabric-specific European solvents and low-heat drying to ensure fibers remain intact." 
  },
  { 
    question: "Do you offer professional stain removal services?", 
    answer: "Yes, we use advanced enzyme-based cleaners to target specific stains. While we have a near-perfect success rate, some old or oxidized stains may require multiple treatments." 
  },
  { 
    question: "What is the minimum order value for free delivery?", 
    answer: "To keep our logistics efficient and free for you, we have a nominal minimum order value of ₹499. Orders below this are subject to a small flat delivery fee." 
  },
  { 
    question: "How can I pay for my laundry and dry cleaning?", 
    answer: "We accept all major UPI apps, Credit/Debit cards, and Cash on Delivery. You can also buy prepaid credits in bulk for even more convenience and savings." 
  },
  { 
    question: "What if I miss my scheduled pickup or delivery slot?", 
    answer: "No problem! If you miss a slot, simply message us on WhatsApp to reschedule. Our agent will try to accommodate you in the next available timing that works for you." 
  },
  { 
    question: "Do you provide express services for urgent requirements?", 
    answer: "Yes, we offer 'Express Delivery' (24-hour turnaround) for an additional surcharge, prioritizing your garments through our facility queue." 
  },
  { 
    question: "Are your cleaning agents safe for baby clothes and sensitive skin?", 
    answer: "Absolutely. We avoid harsh bleaches and strong synthetic fragrances. Our detergents are pH-balanced and eco-friendly, making them perfectly safe for infants." 
  },
  { 
    question: "How do you prevent color bleeding when washing clothes?", 
    answer: "We sort every load strictly by color and fabric type. We also use color-catcher technology and cold-water washes for garments prone to bleeding." 
  },
  { 
    question: "Can I schedule a recurring weekly pickup for my family?", 
    answer: "Yes! Many of our regular customers have set 'Recurring Bookings' where our agent visits at the same time every week. Contact support to set yours up." 
  }
];

export default function FAQPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-[2.5rem] min-[576px]:text-[3.5rem] mb-4">Frequently Asked <span className="text-gradient">Questions</span></h1>
          <p>Everything you need to know about our services. Can&apos;t find what you&apos;re looking for? Contact us.</p>
        </div>

        <GlobalFAQ faqs={faqs} />
      </div>
    </div>
  );
}
