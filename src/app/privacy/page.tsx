import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

export default function PrivacyPage() {
  return (
    <div className="section-padding bg-white pt-24 md:pt-32">
      <div className="container px-4">
        <div className="max-w-[1000px] mx-auto legal-content">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black uppercase tracking-tight">
              Terms of <span className="text-primary">Service & Privacy Policy</span>
            </h1>
            <p className="text-[#666] font-bold text-lg mb-2">THE ORCHID LAUNDRY LLP</p>
            <p className="text-[#888] text-sm italic">Last Updated: December 2025</p>
          </div>

          <div className="bg-gray-50/50 p-8 rounded-[30px] border border-gray-100 mb-16">
            <h2 className="text-xl font-bold text-black mb-6 uppercase tracking-wider">Quick Navigation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8 text-primary font-medium">
              <a href="#intro" className="hover:underline">1. Introduction</a>
              <a href="#business" className="hover:underline">2. Business Details</a>
              <a href="#services" className="hover:underline">3. Services Offered</a>
              <a href="#turnaround" className="hover:underline">4. Turnaround Time</a>
              <a href="#pickup" className="hover:underline">5. Pickup & Delivery</a>
              <a href="#addons" className="hover:underline">6. Add-On Services</a>
              <a href="#payment" className="hover:underline">7. Payment & Billing</a>
              <a href="#damage" className="hover:underline">8. Damage & Claim Policy</a>
              <a href="#storage" className="hover:underline">9. Storage Policy</a>
              <a href="#communication" className="hover:underline">10. Communication Policy</a>
              <a href="#privacy" className="hover:underline">11. Privacy Policy</a>
              <a href="#refund" className="hover:underline">12. Refund & Cancellation</a>
              <a href="#liability" className="hover:underline">13. Limitation of Liability</a>
              <a href="#legal" className="hover:underline">14. Legal & Jurisdiction</a>
            </div>
          </div>

          <div className="flex flex-col gap-16 text-[#444] leading-[1.8] text-[1.05rem]">
            <section id="intro">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">01</span>
                INTRODUCTION
              </h2>
              <p className="mb-4">Welcome to The Orchid Laundry LLP (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By accessing or using our services — through our mobile app, website, WhatsApp, or call support — you agree to comply with and be bound by these Terms of Service.</p>
              <p>Our mission is to make laundry easy, eco-friendly, and reliable. Please read these terms carefully before using our services.</p>
            </section>

            <section id="business">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">02</span>
                BUSINESS DETAILS
              </h2>
              <div className="overflow-hidden rounded-2xl border border-gray-100">
                <table className="w-full border-collapse bg-white">
                  <tbody>
                    <tr className="border-b border-gray-50">
                      <td className="py-4 px-6 bg-gray-50/50 font-bold text-black w-1/3">Legal Entity Name</td>
                      <td className="py-4 px-6">The Orchid Laundry LLP</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-4 px-6 bg-gray-50/50 font-bold text-black">Registered Office</td>
                      <td className="py-4 px-6">Dombivli, Maharashtra</td>
                    </tr>
                    <tr className="border-b border-gray-50">
                      <td className="py-4 px-6 bg-gray-50/50 font-bold text-black">Service Area</td>
                      <td className="py-4 px-6">Kalyan–Dombivli & Navi Mumbai</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 bg-gray-50/50 font-bold text-black">Customer Support</td>
                      <td className="py-4 px-6">
                        📞 +91 7080804074<br/>
                        📧 care@theorchidlaundry.com<br/>
                        🌐 www.theorchidlaundry.com
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="services">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">03</span>
                SERVICES OFFERED
              </h2>
              <p>We provide professional laundry, dry cleaning, steam ironing, stain removal, and garment care services. Pickup and delivery are available via our app, website, WhatsApp, and phone in our operational areas.</p>
            </section>

            <section id="turnaround">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">04</span>
                TURNAROUND TIME & EXPRESS DELIVERY
              </h2>
              <div className="overflow-hidden rounded-2xl border border-gray-100">
                <table className="w-full border-collapse bg-white text-center">
                  <thead>
                    <tr className="bg-gray-50/80 text-black font-bold">
                      <th className="py-4 px-6 border-b border-gray-100 text-left">Service Type</th>
                      <th className="py-4 px-6 border-b border-gray-100">Standard Delivery</th>
                      <th className="py-4 px-6 border-b border-gray-100">Express Delivery</th>
                      <th className="py-4 px-6 border-b border-gray-100">Express Charge</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50">
                      <td className="py-4 px-6 text-left font-medium">Laundry</td>
                      <td className="py-4 px-6">72 Hours</td>
                      <td className="py-4 px-6 font-bold text-primary">24–36 Hours</td>
                      <td className="py-4 px-6 text-black/70">+20% (min ₹199)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-left font-medium">Dry Cleaning</td>
                      <td className="py-4 px-6">72 Hours</td>
                      <td className="py-4 px-6 font-bold text-primary">24–36 Hours</td>
                      <td className="py-4 px-6 text-black/70">+20% (min ₹199)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-[#666] italic">* We strive to deliver within these timelines, but external factors (weather, logistics, or operational delays) may occasionally affect delivery.</p>
            </section>

            <section id="pickup">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">05</span>
                PICKUP & DELIVERY POLICY
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">🕒 Time Slots</h3>
                  <div className="overflow-hidden rounded-xl border border-gray-100">
                    <table className="w-full border-collapse bg-white text-sm">
                      <thead className="bg-gray-50 text-black font-bold text-left">
                        <tr>
                          <th className="py-3 px-4 border-b border-gray-100">Slot</th>
                          <th className="py-3 px-4 border-b border-gray-100">Timing</th>
                          <th className="py-3 px-4 border-b border-gray-100">Cut-off</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-50">
                          <td className="py-3 px-4 font-bold">Slot 1</td>
                          <td className="py-3 px-4">9 AM – 12 PM</td>
                          <td className="py-3 px-4 text-[#888]">10:30 PM (prev)</td>
                        </tr>
                        <tr className="border-b border-gray-50">
                          <td className="py-3 px-4 font-bold">Slot 2</td>
                          <td className="py-3 px-4">12 PM – 3 PM</td>
                          <td className="py-3 px-4 text-[#888]">10:30 PM (prev)</td>
                        </tr>
                        <tr className="border-b border-gray-50">
                          <td className="py-3 px-4 font-bold">Slot 3</td>
                          <td className="py-3 px-4">3 PM – 6 PM</td>
                          <td className="py-3 px-4 text-[#888]">12 PM (same)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold">Slot 4</td>
                          <td className="py-3 px-4">6 PM – 9 PM</td>
                          <td className="py-3 px-4 text-[#888]">12 PM (same)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-4">🚚 Delivery Charges</h3>
                  <div className="overflow-hidden rounded-xl border border-gray-100">
                    <table className="w-full border-collapse bg-white text-sm">
                      <thead className="bg-gray-50 text-black font-bold text-left">
                        <tr>
                          <th className="py-3 px-4 border-b border-gray-100">Order Value</th>
                          <th className="py-3 px-4 border-b border-gray-100">Charge</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-50">
                          <td className="py-3 px-4 font-medium">Above ₹499</td>
                          <td className="py-3 px-4 font-bold text-green-600 uppercase">Free</td>
                        </tr>
                        <tr className="border-b border-gray-50">
                          <td className="py-3 px-4 font-medium">₹299 – ₹499</td>
                          <td className="py-3 px-4 font-bold">₹49</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Below ₹299</td>
                          <td className="py-3 px-4 font-bold font-black">₹99</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm font-bold text-black">Minimum order value for free delivery: ₹499</p>
                </div>
              </div>
            </section>

            <section id="addons">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">06</span>
                ADD-ON SERVICES
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                  <p className="font-bold text-black">Starch</p>
                  <p className="text-2xl font-black text-primary">₹10 <span className="text-sm font-medium text-[#666]">/piece</span></p>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                  <p className="font-bold text-black">Fragrance</p>
                  <p className="text-2xl font-black text-primary">₹10 <span className="text-sm font-medium text-[#666]">/piece</span></p>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary">
                  <p className="font-bold text-black">Antiseptic Wash</p>
                  <p className="text-2xl font-black text-primary">₹10 <span className="text-sm font-medium text-[#666]">/piece</span></p>
                </div>
              </div>
            </section>

            <section id="payment">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">07</span>
                PAYMENT & BILLING
              </h2>
              <ul className="list-disc pl-6 flex flex-col gap-3">
                <li><span className="font-bold">Accepted Modes:</span> UPI / Wallet / App Payments</li>
                <li><span className="font-bold font-black text-green-600">Digital Receipts only</span> — Go Green, Save Paper!</li>
                <li>Prepaid Plans, Subscriptions, and Pay-Later options available</li>
                <li>All prices shown in our rate card are inclusive of GST</li>
              </ul>
            </section>

            <section id="damage" className="bg-primary/5 p-8 md:p-12 rounded-[40px] border border-primary/10">
              <h2 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">08</span>
                DAMAGE, LOSS & CLAIM POLICY
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-bold text-black mb-3">Compensation Policy</h3>
                    <ul className="text-sm list-disc pl-5 flex flex-col gap-2">
                      <li>Maximum compensation: <span className="font-bold">5× the service price</span>, capped at ₹1000 per garment</li>
                      <li>The compensated garment will be retained by the company</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-3">Inspection & Approval</h3>
                    <ul className="text-sm list-disc pl-5 flex flex-col gap-2">
                      <li>Every item is photographed and inspected upon arrival</li>
                      <li>Pre-wash damage details are shared for approval before processing</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-bold text-black mb-3 text-red-600">Exclusions</h3>
                    <ul className="text-sm list-disc pl-5 flex flex-col gap-2">
                      <li>Natural wear, weak fabric, defective labels, hidden accessories</li>
                      <li>Color bleeding due to poor dye quality</li>
                      <li>Items left in pockets</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-3">Claim Validity</h3>
                    <p className="text-sm font-bold italic underline">Complaints must be reported within 72 hours of delivery.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="storage">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">09</span>
                STORAGE POLICY
              </h2>
              <p>We are not responsible for garments not collected within 15 days after the delivery date. Unclaimed garments may be donated or recycled after this period.</p>
            </section>

            <section id="communication">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">10</span>
                COMMUNICATION POLICY
              </h2>
              <p className="mb-4">We communicate with customers via WhatsApp, Phone Calls, Email, and App Notifications.</p>
              <p>Customers agree to receive order updates, promotional messages, and service alerts. We may use feedback, testimonials, or photos (with consent) for promotional purposes.</p>
            </section>

            <section id="privacy" className="pt-8 border-t-2 border-primary/20">
              <h2 className="text-3xl font-bold text-black mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">11</span>
                PRIVACY POLICY
              </h2>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">11.1 Data Collection</h3>
                  <p>We collect limited personal information necessary to deliver our services — such as name, phone number, address, and payment details.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">11.2 Information We Use</h3>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>To provide, maintain, and improve our services</li>
                    <li>To process orders, confirmations and updates</li>
                    <li>To process payments and prevent fraud</li>
                    <li>To respond to inquiries and provide customer support</li>
                    <li>To send promotional emails and offers (only with your consent)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">11.3 Data Protection & Rights</h3>
                  <p className="mb-4">We use secure cloud storage, encryption, and restricted access to protect user data. We do not sell or rent personal data to third parties.</p>
                  <p className="font-bold underline">You may request correction or deletion of your data by contacting us at care@theorchidlaundry.com.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="font-bold mb-3">Cookies & Tracking</h3>
                  <p className="text-sm">We use cookies to remember preferences and analyze performance. You can control these through your browser settings.</p>
                </div>
              </div>
            </section>

            <section id="refund">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">12</span>
                REFUND & CANCELLATION POLICY
              </h2>
              <ul className="list-disc pl-6 flex flex-col gap-2">
                <li>Orders can be cancelled before pickup without charge</li>
                <li>Once items are picked up, the order cannot be cancelled</li>
                <li>Compensation for misplaced/damaged items is processed within 7–10 working days</li>
                <li>Refunds are issued via original payment method only</li>
              </ul>
            </section>

            <section id="liability">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">13</span>
                LIMITATION OF LIABILITY
              </h2>
              <p>We are not liable for delays due to unforeseen events (floods, power cuts, strikes, etc.), incorrect labeling, or manufacturing defects. Our liability is limited strictly as per the Damage & Compensation Policy.</p>
            </section>

            <section id="legal">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm">14</span>
                LEGAL & JURISDICTION
              </h2>
              <p>All disputes are subject to the exclusive jurisdiction of Mumbai courts under Indian law. We reserve the right to refuse service to any individual for any reason at any time.</p>
            </section>

            <div className="bg-primary text-white p-10 md:p-14 rounded-[50px] mt-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Need Further Assistance?</h2>
              <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
                <div className="flex flex-col items-center gap-2">
                  <p className="text-white/70 uppercase text-xs tracking-widest font-bold">Call Us</p>
                  <p className="text-xl md:text-2xl font-black">+91 7080804074</p>
                </div>
                <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-white/70 uppercase text-xs tracking-widest font-bold">Email Us</p>
                  <p className="text-xl md:text-2xl font-black">care@theorchidlaundry.com</p>
                </div>
              </div>
              <p className="mt-12 text-sm text-white/60">By using our services, you acknowledge that you have read, understood, and agreed to these Terms and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Global FAQ Section */}
      <GlobalFAQ faqs={privacyFaqs} subtitle="- Data & Privacy Policy" />
    </div>
  );
}

const privacyFaqs = [
  {
    question: "How do you protect my personal data?",
    answer: "We use secure cloud storage, end-to-end encryption, and restricted staff access to ensure your name, number, and address always remain confidential."
  },
  {
    question: "Do you sell my information to third-party marketers?",
    answer: "Absolutely not. We never sell or rent your data. Information is only shared with trusted partners essential for service delivery (like payment gateways) under strict confidentiality."
  },
  {
    question: "How can I request to delete my account and data?",
    answer: "You have full control over your data. Simply email us at care@theorchidlaundry.com, and we will process your deletion request in accordance with local data laws."
  },
  {
    question: "Is my payment information stored on your local servers?",
    answer: "No. All transactions are handled by PCI-compliant secure third-party gateways. We do not store sensitive card or bank details on our internal systems."
  }
];
