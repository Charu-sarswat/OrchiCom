import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

export default function TermsPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container">
        <div className="max-w-[900px] mx-auto legal-content">
          <h1 className="text-5xl mb-2">Terms & <span className="text-gradient">Conditions</span></h1>
          <p className="text-[#888] text-sm mb-16">Last Updated: March 2026</p>
          
          <section className="mb-12">
            <h2 className="text-2xl text-primary mb-4">1. Service Terms</h2>
            <p className="text-[#555] leading-[1.8] text-lg">By using The Orchid Laundry services, you agree to these terms. We provide professional laundry and dry cleaning services. Every effort is made to provide the best garment care, however, we are not responsible for natural wear and tear or damage from existing defects.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-primary mb-4">2. Pickup & Delivery</h2>
            <p className="text-[#555] leading-[1.8] text-lg">Pickup and delivery times are estimates. While we strive for punctuality, factors like traffic or weather may cause delays. Minimum order values apply for free pickup and delivery services.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-primary mb-4">3. Liability</h2>
            <p className="text-[#555] leading-[1.8] text-lg">In the rare event of loss or damage caused by our process, our liability is limited to 5 times the cleaning cost of the item or a maximum of ₹2,000, whichever is lower, unless otherwise specified.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-primary mb-4">4. Cancellations</h2>
            <p className="text-[#555] leading-[1.8] text-lg">Orders can be cancelled up to 4 hours before the scheduled pickup time without any charges.</p>
          </section>
        </div>
      </div>
      
      {/* Global FAQ Section */}
      <GlobalFAQ faqs={termsFaqs} />
    </div>
  );
}

const termsFaqs = [
  {
    question: "What if my garment is damaged through your professional service?",
    answer: "Our liability for any damage is limited to 5 times the cleaning cost of the specific item or ₹2,000, whichever is lower, as per our standard service agreement."
  },
  {
    question: "How do I cancel or reschedule a confirmed pickup order?",
    answer: "You can cancel or reschedule any order at least 4 hours before your chosen slot via WhatsApp or our website portal without incurring any cancellation fees."
  },
  {
    question: "Are there any specific items you do not accept for cleaning?",
    answer: "We reserve the right to decline items that are excessively torn, heavily soiled with hazardous materials, or those that may pose a risk to our facility machinery."
  },
  {
    question: "What happens if I miss my scheduled pickup or delivery window?",
    answer: "If you're not available, our agent will wait for 10 minutes and then attempt to contact you. If missed, you can reschedule for the next available slot."
  },
  {
    question: "What is your limit of liability for lost garments?",
    answer: "In the rare event of a lost item, our liability is capped at 5 times the service charge of that item. We recommend declaring high-value items during pickup."
  },
  {
    question: "How do you handle pre-existing damages found during inspection?",
    answer: "Our technicians inspect every item upon arrival. If pre-existing damage is found, we will notify you via WhatsApp and proceed only after your explicit 'Owner's Risk' approval."
  },
  {
    question: "What is your policy on natural color bleeding or fabric shrinkage?",
    answer: "We follow garment care labels strictly. We are not liable for shrinkage or bleeding if we followed the manufacturer's instructions or if the label was missing/incorrect."
  },
  {
    question: "Which items are processed strictly at the 'Owner's Risk'?",
    answer: "Items with very old stains, weak fibers, or missing care labels are processed at owner's risk. We will always inform you before starting the treatment on such items."
  },
  {
    question: "How long do I have to report a discrepancy in my delivered order?",
    answer: "Any issues regarding quantity, cleaning quality, or damage must be reported within 24 hours of delivery for us to initiate a formal investigation."
  },
  {
    question: "What are the specific terms for using promotional discount codes?",
    answer: "Promo codes are usually valid for one-time use per customer and cannot be combined with other offers or applied to already discounted prepaid bulk plans."
  },
  {
    question: "Can The Orchid Laundry refuse service to a specific customer?",
    answer: "Yes, we reserve the right to refuse service to anyone for reasons including but not limited to abusive behavior toward staff or repeated delivery failures."
  },
  {
    question: "How are legal disputes or disagreements formally resolved?",
    answer: "All disputes are subject to the exclusive jurisdiction of the courts in Kalyan/Dombivli. We always aim for a friendly resolution through our customer support first."
  }
];
