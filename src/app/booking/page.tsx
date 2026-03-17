"use client";

import { useState } from "react";
import styles from "./booking.module.css";
import { Check, Truck, User, List, Plus, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    quantity: "",
    delivery: "standard",
    pickup_date: "",
    pickup_time: "",
    instructions: "",
    stain: false,
    starch: false,
    waterproof: false,
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
      <div className={`section-padding ${styles.successPage}`}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={styles.successCard}>
          <div className={styles.successIcon}><Check size={48} /></div>
          <h1>Booking Confirmed!</h1>
          <p>Thank you, {formData.fullname}. Our team will contact you within 2 hours to confirm your pickup.</p>
          <button onClick={() => setStatus("idle")} className="btn btn-primary">Make Another Booking</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`section-padding ${styles.page}`}>
      <div className="container">
        <div className={styles.header}>
          <h1>Book Your <span className="text-gradient">Professional Care</span></h1>
          <p>Quick and easy booking. Fill the form below and relax while we handle your garments.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Section 1: Personal Info */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <User size={20} />
              <h3>Personal Information</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.inputGroup}>
                <label>Full Name *</label>
                <input type="text" name="fullname" required value={formData.fullname} onChange={handleChange} placeholder="John Doe" />
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="7080803074" />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label>Address *</label>
                <input type="text" name="address" required value={formData.address} onChange={handleChange} placeholder="Building, Street, Area..." />
              </div>
            </div>
          </div>

          {/* Section 2: Service Details */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <List size={20} />
              <h3>Service Selection</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.inputGroup}>
                <label>Select Service *</label>
                <select name="service" required value={formData.service} onChange={handleChange}>
                  <option value="">-- Choose a Service --</option>
                  <option value="wash">Regular Wash & Iron</option>
                  <option value="dryclean">Dry Cleaning</option>
                  <option value="wedding">Wedding Dress Cleaning</option>
                  <option value="shoe">Shoe Cleaning</option>
                  <option value="sofa">Sofa Cleaning</option>
                </select>
              </div>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Approx. Quantity (kg/pcs) *</label>
                  <input type="text" name="quantity" required value={formData.quantity} onChange={handleChange} placeholder="e.g. 5kg or 2 pieces" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Delivery Speed *</label>
                  <select name="delivery" value={formData.delivery} onChange={handleChange}>
                    <option value="standard">Standard (3 Days)</option>
                    <option value="express">Express (24-48 Hours)</option>
                    <option value="sameday">Same Day (+ Charge)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Add-ons */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Plus size={20} />
              <h3>Additional Services</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.checkboxGrid}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="stain" checked={formData.stain} onChange={handleChange} />
                  <span>Stain Removal Treatment</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="starch" checked={formData.starch} onChange={handleChange} />
                  <span>Fabric Starching (Finish)</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="waterproof" checked={formData.waterproof} onChange={handleChange} />
                  <span>Protective Coating</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 4: Pickup & Delivery */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Truck size={20} />
              <h3>Pickup Schedule</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Preferred Date *</label>
                  <input type="date" name="pickup_date" required value={formData.pickup_date} onChange={handleChange} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Time Slot *</label>
                  <select name="pickup_time" required value={formData.pickup_time} onChange={handleChange}>
                    <option value="">-- Choose Time Slot --</option>
                    <option value="9am-12pm">09:00 AM - 12:00 PM</option>
                    <option value="12pm-3pm">12:00 PM - 03:00 PM</option>
                    <option value="3pm-6pm">03:00 PM - 06:00 PM</option>
                    <option value="6pm-8pm">06:00 PM - 08:00 PM</option>
                  </select>
                </div>
              </div>
              <div className={styles.freeNotice}>
                <Check size={16} /> FREE Pickup & Delivery included
              </div>
            </div>
          </div>

          {/* Section 5: Instructions */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <MessageSquare size={20} />
              <h3>Special Instructions</h3>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.inputGroup}>
                <textarea name="instructions" rows={4} value={formData.instructions} onChange={handleChange} placeholder="Any specific handles, delicate fabrics, or stain locations..."></textarea>
              </div>
            </div>
          </div>

          <button type="submit" disabled={status === "loading"} className={`btn btn-primary ${styles.submitBtn}`}>
            {status === "loading" ? "Processing..." : "Confirm Booking"}
          </button>
          
          {status === "error" && <p className={styles.error}>Something went wrong. Please try again or call us.</p>}
        </form>
      </div>
    </div>
  );
}
