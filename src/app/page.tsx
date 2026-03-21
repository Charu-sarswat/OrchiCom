import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Wallet, 
  Hourglass, 
  Star, 
  Heart, 
  Leaf, 
  Fan, 
  Flame, 
  Sparkles, 
  Smartphone, 
  Shield 
} from 'lucide-react';
import Hero from '@/components/Home/Hero';
import ServicesGrid from '@/components/Home/ServicesGrid';
import Delivery from '@/components/Home/Delivery';
import Process from '@/components/Home/Process';
import Testimonials from '@/components/Home/Testimonials';
import GlobalFAQ from '@/components/FAQ/GlobalFAQ';

const homeFaqs = [
  {
    question: "What type of cleaning services does The Orchid Laundry offer?",
    answer: "We offer a comprehensive range of services including Dry Cleaning, Premium Laundry, Wash & Iron, Wash & Fold, Steam Ironing, Shoe Cleaning, Sofa Cleaning, Carpet Cleaning, and delicate Bridal Wear care."
  },
  {
    question: "Apart from laundry and dry cleaning, what other services does The Orchid Laundry offer?",
    answer: "In addition to garments, we specialize in home upholstery care (sofas, carpets, and curtains), heavy woolens, leather jacket treatments, and specialized shoe refurbishment."
  },
  {
    question: "Do you offer any discounts for first-time customers?",
    answer: "Yes! New customers often enjoy a welcome discount on their first order. Please check our booking page or contact our support team for the latest introductory offers."
  },
  {
    question: "Does The Orchid Laundry have a minimum order amount for pickup and delivery services?",
    answer: "Yes, we have a nominal minimum order value to qualify for our free doorstep pickup and delivery service. Contact us directly for the exact minimum value in your specific location."
  },
  {
    question: "How can I avail discounts and offers at The Orchid Laundry?",
    answer: "You can avail offers by checking our website's banner announcements, subscribing to our WhatsApp alerts, or choosing one of our highly discounted prepaid bulk plans."
  },
  {
    question: "Is it possible to schedule a pickup and delivery online at The Orchid Laundry?",
    answer: "Absolutely. You can schedule a pickup in under 60 seconds directly through our website booking portal or by messaging us on WhatsApp."
  },
  {
    question: "What are your standard delivery timelines?",
    answer: "Our standard delivery for laundry is 48-72 hours, while dry cleaning typically takes 3-5 days. We ensure your clothes are returned fresh and crisp in the shortest possible time."
  },
  {
    question: "Do you handle luxury or highly expensive designer garments?",
    answer: "Yes, we specialize in luxury garment care. Every piece is inspected manually and processed using the most delicate, fabric-safe solvents available in the industry."
  },
  {
    question: "Is there any extra cost for express or same-day delivery?",
    answer: "Yes, for customers in a hurry, we offer an Express Service with a small surcharge to prioritize your garments through our facility."
  },
  {
    question: "How do you ensure the safety and hygiene of my clothes?",
    answer: "We use individual wash cycles (no mixing with other customers), premium non-toxic detergents, and temperature-controlled drying systems to maintain global hygiene standards."
  },
  {
    question: "What if a stubborn stain is not removed?",
    answer: "We have an extremely high success rate with stains. If a stain persists without damaging the fabric, we'll consult with you on possible advanced treatments or re-processing options."
  },
  {
    question: "Where is The Orchid Laundry facility located?",
    answer: "Our main professional facility is located in Dombivli East, serving the local community and surrounding areas with high-quality, professional laundry solutions."
  }
];

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* About Section */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Image on Left */}
            <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] lg:h-[450px] w-full shadow-none group">
              <Image 
                src="/img/about-new.jpg" 
                alt="The Orchid Laundry" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content on Right */}
            <div className="flex flex-col space-y-3 lg:space-y-5 lg:pl-4 max-w-[92%] lg:max-w-xl text-left lg:text-left mx-auto lg:mx-0 px-2 md:px-0">
              <div className="space-y-1.5 lg:space-y-2">
                <span className="text-primary font-bold text-[0.75rem] md:text-[0.8rem] uppercase tracking-[3px] block">Who We Are</span>
                <h2 className="text-[2rem] md:text-[2.8rem] text-black leading-[1.2] lg:leading-tight m-0">
                  About <span className="text-gradient">The Orchid Laundry</span>
                </h2>
                <h3 className="text-[1rem] md:text-[1.2rem] text-black font-semibold tracking-wide mt-1 lg:mt-0">
                  Fast • Reliable • Affordable
                </h3>
              </div>
              
              <div className="space-y-3 lg:space-y-4 text-[#555] text-[0.95rem] md:text-[1.05rem] leading-relaxed lg:leading-snug">
                <p>
                  At <strong className="text-primary">The Orchid Laundry</strong>, we turn an everyday chore into a seamless, stress-free experience.
                </p>
                <p>
                  We know the hours spent on washing, drying, ironing, and folding can add up—time that could be better spent on family, work, or simply enjoying life.
                </p>
                <p>
                  That is why we started <strong className="text-primary">The Orchid Laundry</strong>, to make laundry fast, reliable, and affordable. What began as a small idea in Dombivli has grown into a tech-enabled service dedicated to quality and convenience.
                </p>
              </div>

              {/* Compact Feature Grid */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 py-3 border-y border-gray-100">
                {[
                  { label: "FAST", desc: "On-time delivery" },
                  { label: "RELIABLE", desc: "Expert handling" },
                  { label: "AFFORDABLE", desc: "Best pricing" },
                  { label: "HYGIENIC", desc: "UV-safe process" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[0.88rem] md:text-[0.9rem]">
                    <CheckCircle2 size={16} className="text-primary shrink-0" /> 
                    <span className="text-black font-semibold uppercase">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex lg:block">
                <Link href="/about" className="btn btn-primary !rounded-lg !px-10">Read Our Full Story</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* Why Choose Us */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] md:text-[3.2rem] text-black w-full mb-4">
              The Orchid Laundry – <span className="text-gradient">Why Choose Us?</span>
            </h2>
            <p className="max-w-[700px] mx-auto text-[1.1rem] text-[#444]">
              Elevating Your Laundry Experience with Professional Care
            </p>
          </div>
        </div>
        
        <div className="why-choose-wrapper">
          <div className="why-choose-track">
            {[...Array(2)].map((_, listIndex) => (
              <div key={listIndex} className="flex gap-8">
                {[
                  { title: "Cost-Effective Laundry by Kilo", desc: "Get professional cleaning at affordable prices. Outsourcing your laundry saves money compared to frequent home washing, especially for busy families.", icon: Wallet },
                  { title: "Saves Time, Space & Effort", desc: "Laundry takes hours every week, plus drying requires space and attention. We take care of it all, letting you focus on what matters most.", icon: Hourglass },
                  { title: "Professional-Grade Cleaning", desc: "Our trained experts handle all types of fabrics—cotton, silk, wool, polyester, and blends—ensuring flawless cleaning without damage.", icon: Star },
                  { title: "Skin-Friendly & Safe", desc: "We use premium detergents, softeners, and stain removers that are gentle on your skin and suitable for all ages.", icon: Heart },
                  { title: "Eco-Conscious & Water-Smart", desc: "Our machines use up to 40% less water than traditional washing. We follow sustainable practices to minimize environmental impact while maintaining superior hygiene.", icon: Leaf },
                  { title: "Controlled Air Drying & Anti-Bacterial Care", desc: "Clothes are dried in temperature-controlled, anti-bacterial dryers, preventing colour fading, shrinkage, and bacterial growth—unlike line drying under direct sunlight.", icon: Fan },
                  { title: "Precision Steam Ironing", desc: "We use high-pressure steam presses with Teflon-coated plates for a crisp, wrinkle-free finish, preserving delicate fabrics like silk, polyester, and wool.", icon: Flame },
                  { title: "Stain Removal Experts", desc: "Tough stains don't stand a chance! We use specialised enzyme soaks and targeted treatments for oil, grease, wine, and other stubborn stains.", icon: Sparkles },
                  { title: "Complete Convenience", desc: "Enjoy doorstep pickup and delivery, customizable schedules, and easy online booking. Your laundry fits seamlessly into your lifestyle.", icon: Smartphone },
                  { title: "Quality Assurance & Customer Care", desc: "Every garment goes through multiple quality checks, and our customer support team is ready to assist with any special requests or concerns.", icon: CheckCircle2 },
                  { title: "Hygiene & Safety First", desc: "From detergents to packaging, every step is hygienic, UV-safe, and allergy-conscious, ensuring peace of mind for your family.", icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="why-choose-card">
                    <div className="flex items-center gap-3 w-full mb-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-black" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-[1.1rem] md:text-[1.2rem] font-bold text-primary m-0 leading-[1.3]">
                        <span className="mr-[2px]">{item.title[0]}</span>
                        {item.title.slice(1)}
                      </h3>
                    </div>
                    <p className="text-[#555] text-sm leading-[1.5] m-0">{item.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Delivery />
      <Process />
      <GlobalFAQ faqs={homeFaqs} subtitle="- Professional Laundry & Clean Services" />
      <Testimonials />
    </main>
  );
}
