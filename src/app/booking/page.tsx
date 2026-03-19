"use client";

import { useState } from "react";
import { Check, Truck, User, List, Plus, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullname: "", email: "", phone: "", address: "", service: "", quantity: "",
    delivery: "standard", pickup_date: "", pickup_time: "", instructions: "",
    stain: false, starch: false, waterproof: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "booking" }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="section-padding min-h-[80vh] flex items-center justify-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center bg-white py-20 px-12 rounded-[40px] max-w-[600px] shadow-none">
          <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center mx-auto mb-10" style={{ background: 'rgba(70, 198, 206, 0.1)', color: '#46C6CE' }}><Check size={48} /></div>
          <h1>Booking Confirmed!</h1>
          <p>Thank you, {formData.fullname}. Our team will contact you within 2 hours to confirm your pickup.</p>
          <button onClick={() => setStatus("idle")} className="btn btn-primary">Make Another Booking</button>
        </motion.div>
      </div>
    );
  }

  const inputCls = "w-full py-4 px-5 rounded-xl border-[1.5px] border-[#eee] font-[inherit] text-base transition-all duration-300 ease-in-out outline-none focus:border-secondary focus:shadow-[0_0_0_4px_rgba(70,198,206,0.1)]";

  return (
    <div className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4">Book Your <span className="text-gradient">Professional Care</span></h1>
          <p>Quick and easy booking. Fill the form below and relax while we handle your garments.</p>
        </div>

        <form className="max-w-[800px] mx-auto" onSubmit={handleSubmit}>
          {/* Section 1: Personal Info */}
          <div className="bg-white rounded-[20px] mb-8 border border-black/5 overflow-hidden shadow-none">
            <div className="bg-primary text-white py-5 px-8 flex items-center gap-4">
              <User size={20} />
              <h3 className="m-0 text-[1.15rem] font-semibold">Personal Information</h3>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <label className="block mb-[0.8rem] font-semibold text-[0.9rem] text-primary">Full Name *</label>
                <input type="text" name="fullname" required value={formData.fullname} onChange={handleChange} placeholder="John Doe" className={inputCls} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-6">
                  <label className="block mb-[0.8rem] font-semibold text-[0.9rem] text-primary">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputCls} />
                </div>
                <div className="mb-6">
                  <label className="block mb-[0.8rem] font-semibold text-[0.9rem] text-primary">Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="7080803074" className={inputCls} />
                </div>
              </div>
              <div className="mb-6">
                <label className="block mb-[0.8rem] font-semibold text-[0.9rem] text-primary">Address *</label>
                <input type="text" name="address" required value={formData.address} onChange={handleChange} placeholder="Building, Street, Area..." className={inputCls} />
              </div>
            </div>
          </div>

          {/* Section 2: Service Details */}
          <div className="bg-white rounded-[20px] mb-8 border border-black/5 overflow-hidden shadow-none">
            <div className="bg-primary text-white py-5 px-8 flex items-center gap-4">
              <List size={20} />
              <h3 className="m-0 text-[1.15rem] font-semibold">Service Selection</h3>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <label className="block mb-[0.8rem] font-semibold text-[0.9rem] text-primary">Select Service *</label>
                <select name="service" required value={formData.service} onChange={handleChange} className={inputCls}>
                  <option value="">-- Choose a Service --</option>
                  <option value="wash">Regular Wash & Iron</option>
                  <option value="dryclean">Dry Cleaning</option>
                  <option value="wedding">Wedding Dress Cleaning</option>
                  <option value="shoe">Shoe Cleaning</option>
                  <option value="sofa">Sofa Cleaning</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-6">
                  <label className="block mb-[0.8rem] font-semibold text-[0.9rem] text-primary">Approx. Quantity (kg/pcs) *</label>
                  <input type="text" name="quantity" required value={formData.quantity} onChange={handleChange} placeholder="e.g. 5kg or 2 pieces" className={inputCls} />
                </div>
                <div className="mb-6">
                  <label className="block mb-[0.8rem] font-semibold text-[0.9rem] text-primary">Delivery Speed *</label>
                  <select name="delivery" value={formData.delivery} onChange={handleChange} className={inputCls}>
                    <option value="standard">Standard (3 Days)</option>
                    <option value="express">Express (24-48 Hours)</option>
                    <option value="sameday">Same Day (+ Charge)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Add-ons */}
          <div className="bg-white rounded-[20px] mb-8 border border-black/5 overflow-hidden shadow-none">
            <div className="bg-primary text-white py-5 px-8 flex items-center gap-4">
              <Plus size={20} />
              <h3 className="m-0 text-[1.15rem] font-semibold">Additional Services</h3>
            </div>
            <div className="p-8">
              <div className="grid gap-[1.2rem]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                <label className="flex items-center gap-[0.8rem] cursor-pointer font-medium text-[#555]">
                  <input type="checkbox" name="stain" checked={formData.stain} onChange={handleChange} className="w-5 h-5 accent-secondary" />
                  <span>Stain Removal Treatment</span>
                </label>
                <label className="flex items-center gap-[0.8rem] cursor-pointer font-medium text-[#555]">
                  <input type="checkbox" name="starch" checked={formData.starch} onChange={handleChange} className="w-5 h-5 accent-secondary" />
                  <span>Fabric Starching (Finish)</span>
                </label>
                <label className="flex items-center gap-[0.8rem] cursor-pointer font-medium text-[#555]">
                  <input type="checkbox" name="waterproof" checked={formData.waterproof} onChange={handleChange} className="w-5 h-5 accent-secondary" />
                  <span>Protective Coating</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 4: Pickup & Delivery */}
          <div className="bg-white rounded-[20px] mb-8 border border-black/5 overflow-hidden shadow-none">
            <div className="bg-primary text-white py-5 px-8 flex items-center gap-4">
              <Truck size={20} />
              <h3 className="m-0 text-[1.15rem] font-semibold">Pickup Schedule</h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-6">
                  <label className="block mb-[0.8rem] font-semibold text-[0.9rem] text-primary">Preferred Date *</label>
                  <input type="date" name="pickup_date" required value={formData.pickup_date} onChange={handleChange} className={inputCls} />
                </div>
                <div className="mb-6">
                  <label className="block mb-[0.8rem] font-semibold text-[0.9rem] text-primary">Time Slot *</label>
                  <select name="pickup_time" required value={formData.pickup_time} onChange={handleChange} className={inputCls}>
                    <option value="">-- Choose Time Slot --</option>
                    <option value="9am-12pm">09:00 AM - 12:00 PM</option>
                    <option value="12pm-3pm">12:00 PM - 03:00 PM</option>
                    <option value="3pm-6pm">03:00 PM - 06:00 PM</option>
                    <option value="6pm-8pm">06:00 PM - 08:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-[0.6rem] text-[#1c7c3d] font-bold text-[0.9rem] mt-2">
                <Check size={16} /> FREE Pickup & Delivery included
              </div>
            </div>
          </div>

          {/* Section 5: Instructions */}
          <div className="bg-white rounded-[20px] mb-8 border border-black/5 overflow-hidden shadow-none">
            <div className="bg-primary text-white py-5 px-8 flex items-center gap-4">
              <MessageSquare size={20} />
              <h3 className="m-0 text-[1.15rem] font-semibold">Special Instructions</h3>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <textarea name="instructions" rows={4} value={formData.instructions} onChange={handleChange} placeholder="Any specific handles, delicate fabrics, or stain locations..." className={inputCls}></textarea>
              </div>
            </div>
          </div>

          <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full py-6 text-xl rounded-[15px] mt-4">
            {status === "loading" ? "Processing..." : "Confirm Booking"}
          </button>
          
          {status === "error" && <p className="text-[#c12b2b] text-center mt-6 font-semibold">Something went wrong. Please try again or call us.</p>}
        </form>
      </div>
      
      {/* Global FAQ Section */}
      <GlobalFAQ faqs={bookingFaqs} />
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
