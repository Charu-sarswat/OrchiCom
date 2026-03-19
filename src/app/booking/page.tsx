"use client";

import { useState } from "react";
import { Check, Truck, User, List, Plus, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    location: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [locLoading, setLocLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLocLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          // Use OpenStreetMap Nominatim for free reverse geocoding
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await res.json();
          setFormData(prev => ({ ...prev, location: data.display_name || `${latitude}, ${longitude}` }));
        } catch (err) {
          console.error("Error fetching address:", err);
          alert("Could not fetch address. Please enter manually.");
        } finally {
          setLocLoading(false);
        }
      },
      (error) => {
        setLocLoading(false);
        alert("Location access denied or unavailable.");
      }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          type: "booking"
        }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-20 px-4 min-h-[80vh] flex items-center justify-center bg-light">
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="text-center bg-white py-12 px-6 md:py-20 md:px-12 rounded-[30px] md:rounded-[40px] max-w-[600px] shadow-sm border border-black/5"
        >
          <div className="w-20 h-20 md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10" style={{ background: 'rgba(70, 198, 206, 0.1)', color: '#46C6CE' }}>
            <Check size={40} />
          </div>
          <h1 className="text-3xl md:text-4xl mb-4">Booking Confirmed!</h1>
          <p className="text-gray-600 leading-relaxed mb-8">Thank you, {formData.fullname}. Our team will contact you within 2 hours to confirm your pickup.</p>
          <button onClick={() => setStatus("idle")} className="btn btn-primary w-full md:w-auto px-10">Make Another Booking</button>
        </motion.div>
      </div>
    );
  }

  const inputCls = "w-full py-4 px-5 rounded-xl border-[1.5px] border-[#eee] font-[inherit] text-base transition-all duration-300 ease-in-out outline-none focus:border-secondary focus:shadow-[0_0_0_4px_rgba(70,198,206,0.1)]";

  return (
    <div className="py-12 md:py-20 bg-light">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl mb-4">Book Your <span className="text-gradient">Professional Care</span></h1>
          <p className="text-gray-500 max-w-[600px] mx-auto text-sm md:text-base">Quick and easy booking. Fill the form below and relax while we handle your garments.</p>
        </div>

        <form className="max-w-[600px] mx-auto w-full" onSubmit={handleSubmit}>
          <div className="bg-white rounded-[24px] md:rounded-[30px] p-6 md:p-12 shadow-sm border border-black/5">
            <div className="flex items-center gap-4 mb-8 md:mb-10 pb-6 border-b border-gray-50">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <User size={20} />
                </div>
                <div>
                    <h3 className="m-0 text-lg md:text-xl font-bold">Quick Booking</h3>
                    <p className="text-xs md:text-sm text-gray-500 m-0">Only takes 30 seconds</p>
                </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block mb-2 font-bold text-sm text-primary uppercase tracking-wider">Full Name *</label>
                <input type="text" name="fullname" required value={formData.fullname} onChange={handleChange} placeholder="John Doe" className={inputCls} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-bold text-sm text-primary uppercase tracking-wider">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputCls} />
                </div>
                <div>
                  <label className="block mb-2 font-bold text-sm text-primary uppercase tracking-wider">Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="7080803074" className={inputCls} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                    <label className="font-bold text-sm text-primary uppercase tracking-wider">Pickup Location *</label>
                    <button 
                        type="button" 
                        onClick={handleGetLocation}
                        disabled={locLoading}
                        className="text-xs font-bold text-secondary flex items-center gap-1 hover:underline disabled:opacity-50"
                    >
                        {locLoading ? "Fetching..." : "Use Current Location"}
                    </button>
                </div>
                <textarea 
                    name="location" 
                    required 
                    value={formData.location} 
                    onChange={handleChange} 
                    placeholder="Enter your pickup address..." 
                    rows={3}
                    className={`${inputCls} resize-none`} 
                />
              </div>
            </div>

            <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full py-4 md:py-6 text-lg md:text-xl rounded-xl md:rounded-2xl mt-8 md:mt-10 font-bold transition-transform active:scale-[0.98]">
              {status === "loading" ? "Processing..." : "Confirm Booking"}
            </button>
            
            {status === "error" && <p className="text-[#c12b2b] text-center mt-6 font-semibold bg-rose-50 p-4 rounded-xl">Something went wrong. Please try again or call us.</p>}
          </div>

          <p className="text-center text-gray-400 mt-8 text-sm px-4">
            By clicking confirm, you agree to our terms of service. Our team will contact you shortly to confirm the pickup window.
          </p>
        </form>
      </div>
      
      {/* Global FAQ Section */}
      <div className="mt-20">
        <GlobalFAQ faqs={bookingFaqs} />
      </div>
    </div>
  );
}

const bookingFaqs = [
  {
    question: "Do I need to sort my clothes before handing them to the delivery agent?",
    answer: "No! Just place all your garments into a bag. Our trained facility technicians will meticulously inspect, sort, and tag each individual garment based on fabric type, color-fastness, and required care."
  },
  {
    question: "What happens if I miss my requested pickup time slot?",
    answer: "Don't worry. Our delivery partner will call you before arriving. If you're unavailable, we can simply reschedule the pickup for the next convenient slot through WhatsApp."
  },
  {
    question: "Is there an extra charge for Express Delivery?",
    answer: "Yes, our Same-Day/Next-Day Express Delivery carries a minimal surcharge to prioritize your garments through the facility while maintaining our rigorous 8-step quality protocols."
  },
  {
    question: "How do I pay for my order?",
    answer: "You can pay via UPI, Credit/Debit Card, or Cash upon delivery. We also offer highly discounted prepaid wallet plans which can be automatically deducted for seamless contactless delivery."
  },
  {
    question: "Can I change my delivery address after the order is picked up?",
    answer: "Yes, you can update your delivery address as long as it's within our service area. Please notify our support team via WhatsApp at least 4 hours before the scheduled delivery."
  },
  {
    question: "Is there a minimum order requirement for 'Wash per KG' bookings?",
    answer: "Yes, a minimum weight of 3kg is applicable for our 'Wash per KG' service to ensure efficient machine cycles. Lower weights will be billed at the 3kg base rate."
  },
  {
    question: "Do I get an official invoice for my booking?",
    answer: "Absolutely. Once your order is processed, a digital invoice will be sent to your registered email and is also accessible via the order link sent to your WhatsApp."
  },
  {
    question: "Can I cancel my booking after the agent is dispatched?",
    answer: "If the agent has already reached your location, a nominal dispatch fee may apply. Cancellations made 4 hours before the slot are completely free of charge."
  },
  {
    question: "Do you provide bags for the initial pickup?",
    answer: "Our agent carries heavy-duty reusable collection bags. However, we recommend you keep your items ready in a temporary bag or basket for a quick and easy handover."
  },
  {
    question: "Is insurance included for extremely high-value items?",
    answer: "While we take the utmost care, we recommend declaring high-value items during booking. Our liability is limited, but we offer special handling protocols for luxury couture."
  },
  {
    question: "How can I track my order in real-time?",
    answer: "You will receive a unique tracking link via SMS or WhatsApp once your order is picked up. You can see the stage of cleaning (Washing, Ironing, etc.) in real-time."
  },
  {
    question: "What are your operational hours for pickup and delivery slots?",
    answer: "We operate from 9:00 AM to 9:00 PM, 7 days a week. You can choose from four distinct time slots during the day that best fit your schedule."
  }
];
