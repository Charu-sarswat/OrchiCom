import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

export default function TermsPage() {
  return (
    <div className="section-padding bg-white pt-24 md:pt-32">
      <div className="container">
        <div className="max-w-[900px] mx-auto legal-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Terms <span className="text-primary">& Conditions</span>
          </h1>
          <p className="text-[#888] text-sm mb-16">Last Updated: January 2024</p>
          
          <div className="flex flex-col gap-12 text-[#444] leading-[1.8] text-[1.05rem]">
            <section>
              <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using The Orchid Laundry website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to modify the Terms and Conditions at any time without notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">2. Service Description</h2>
              <p>The Orchid Laundry provides professional laundry and dry cleaning services. Our services include but are not limited to dry cleaning, wash and fold, curtain cleaning, suit cleaning, bridal wear cleaning, and specialty fabric care. Service details, pricing, and availability are subject to change without notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">3. User Responsibilities</h2>
              <p className="mb-4">Users are responsible for:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Providing accurate information when placing orders</li>
                <li>Informing us of any special care instructions or fabric sensitivities</li>
                <li>Inspecting garments before submitting them for cleaning</li>
                <li>Reporting any issues immediately upon delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">4. Payment Terms</h2>
              <p>All prices are stated in Indian Rupees (₹). Payment must be made in full upon service delivery unless a subscription plan has been agreed upon. We accept cash, digital payments, and card payments. Prices are subject to change without notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">5. Pickup and Delivery</h2>
              <p>Free pickup and delivery is available within our service area. Delivery timelines vary based on service type and current order volume. Express services may have additional charges. We are not responsible for scheduling conflicts or delays caused by customer unavailability.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">6. Liability and Damage</h2>
              <p className="mb-4">The Orchid Laundry takes utmost care in handling all garments. However, we are not responsible for damage caused by:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Pre-existing damage or defects in the garment</li>
                <li>Manufacturer&apos;s defects in fabric or dye</li>
                <li>Hidden damage not visible during inspection</li>
                <li>Following customer-provided care instructions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">7. Claims and Disputes</h2>
              <p>Any claims for damaged or lost garments must be reported within 24 hours of delivery. Claims reported after this period will not be entertained. The maximum liability is limited to the service charge paid for the affected garment(s). Compensation is at the sole discretion of The Orchid Laundry management.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">8. Subscription Plans</h2>
              <p>Subscription plans offer discounted rates for regular customers. Plans renew automatically unless cancelled. Cancellation must be requested in writing at least 7 days before renewal. Unused services within a subscription period do not carry forward to the next period.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">9. Cancellation Policy</h2>
              <p>Orders can be cancelled up to 24 hours before scheduled pickup. Cancellation requests received after this period will incur a 20% cancellation charge. Subscription plan cancellations must be requested in writing with 7 days notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">10. Privacy and Data Protection</h2>
              <p>Your personal information is used solely for providing services and improving customer experience. We do not share your information with third parties without consent. Please refer to our Privacy Policy for detailed information on data handling.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">11. Limitation of Liability</h2>
              <p>The Orchid Laundry shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid for the service in question.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">12. Indemnification</h2>
              <p>You agree to indemnify and hold harmless The Orchid Laundry, its owners, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4">13. Contact Information</h2>
              <p className="mb-4">For questions regarding these Terms and Conditions, please contact us at:</p>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <p className="font-bold text-black mb-2">The Orchid Laundry</p>
                <p>Email: support@theorchidlaundry.com</p>
                <p>Phone: +91 XXXX-XXXX-XX</p>
                <p>Hours: 9 AM - 9 PM, 7 Days a Week</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* Global FAQ Section */}
      <GlobalFAQ faqs={termsFaqs} subtitle="- Legal & Support Agreement" />
    </div>
  );
}

const termsFaqs = [
  {
    question: "What if my garment is damaged through your professional service?",
    answer: "Our liability for any damage is limited to the service charge paid for the affected garment(s), as per our standard service agreement. Claims must be reported within 24 hours."
  },
  {
    question: "How do I cancel or reschedule a confirmed pickup order?",
    answer: "You can cancel or reschedule any order at least 24 hours before your chosen slot via WhatsApp or our website portal."
  },
  {
    question: "Are there any specific items you do not accept for cleaning?",
    answer: "We reserve the right to decline items that are excessively torn, heavily soiled with hazardous materials, or those that may pose a risk to our facility machinery."
  },
  {
    question: "What happens if I miss my scheduled pickup or delivery window?",
    answer: "If you're not available, our agent will wait for a short period and then attempt to contact you. We are not responsible for delays caused by customer unavailability."
  }
];
