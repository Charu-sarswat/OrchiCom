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
    </div>
  );
}
