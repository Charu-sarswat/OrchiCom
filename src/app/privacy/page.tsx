import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

export default function PrivacyPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container">
        <div className="max-w-[900px] mx-auto legal-content">
          <h1 className="text-5xl mb-2">Privacy <span className="text-gradient">Policy</span></h1>
          <p className="text-[#888] text-sm mb-16">Last Updated: March 2026</p>
          
          <section className="mb-12">
            <h2 className="text-2xl text-primary mb-4">1. Information We Collect</h2>
            <p className="text-[#555] leading-[1.8] text-lg">We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support. This may include your name, email address, phone number, and physical address for pickup/delivery.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-primary mb-4">2. How We Use Your Information</h2>
            <p className="text-[#555] leading-[1.8] text-lg">We use the information we collect to provide, maintain, and improve our services, including to process transactions, send notifications about your orders, and respond to your inquiries.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-primary mb-4">3. Data Security</h2>
            <p className="text-[#555] leading-[1.8] text-lg">We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-primary mb-4">4. Contact Us</h2>
            <p className="text-[#555] leading-[1.8] text-lg">If you have any questions about this Privacy Policy, please contact us at Info@theorchidlaudnry.com.</p>
          </section>
        </div>
      </div>
      
      {/* Global FAQ Section */}
      <GlobalFAQ faqs={privacyFaqs} />
    </div>
  );
}

const privacyFaqs = [
  {
    question: "Is my personal data safe with you?",
    answer: "Yes, we take data security very seriously. We use industry-standard encryption and security measures to help protect your information from unauthorized access."
  },
  {
    question: "What categories of personal data do you collect?",
    answer: "We only collect information necessary to provide our services, such as your name, contact details, and physical address for pickups and deliveries."
  },
  {
    question: "How can I manage or update my data with you?",
    answer: "You can update your personal information anytime by contacting our support team or through your account dashboard if you've registered with us."
  },
  {
    question: "Do you share my data with third-party companies?",
    answer: "We do not sell your personal info. We only share necessary data with trusted service providers who help us operate our business, like delivery partners."
  },
  {
    question: "Do you store my sensitive credit card or payment information?",
    answer: "No. All payments are processed through secure, PCI-compliant third-party gateways. We do not store your full card details on our local servers."
  },
  {
    question: "How long is my address and order history kept on file?",
    answer: "We maintain order history to provide you with better service and for tax compliance purposes. You can request deletion of your account and data at any time."
  },
  {
    question: "Is my data used for marketing purposes without my consent?",
    answer: "We only send marketing updates if you have opted-in to our newsletter. You can unsubscribe from these communications with a single click at any time."
  },
  {
    question: "What happens to my data if I choose to delete my account?",
    answer: "Once you delete your account, your personal identifying information is removed from our active databases, subject to any legal records we must retain."
  },
  {
    question: "Is my data stored on secure international or local servers?",
    answer: "Our data is stored on highly secure, encrypted cloud servers that comply with global data protection standards (like GDPR and local Indian IT acts)."
  },
  {
    question: "How do you protect my data from unauthorized physical access?",
    answer: "Both our administrative offices and facilities have strict access controls and digital security protocols to ensure your information remains confidential."
  },
  {
    question: "Do you use tracking cookies on your website?",
    answer: "Yes, we use essential cookies to improve your browsing experience and provide localized services. You can manage your cookie preferences through your browser settings."
  },
  {
    question: "Who can I contact specifically for data-related privacy inquiries?",
    answer: "For any questions regarding your privacy or data usage, please email our Data Protection Officer at privacy@theorchidlaundry.com for a formal response."
  }
];
