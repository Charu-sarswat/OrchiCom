"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./faq.module.css";

const faqs = [
  {
    question: "Do you offer free pickup and delivery?",
    answer: "Yes, we offer free pickup and delivery for all orders within our service area. There is a minimum order value for free delivery."
  },
  {
    question: "How long does it take for my clothes to be ready?",
    answer: "Regular laundry and wash & iron services typically take 48-72 hours. For dry cleaning, it's usually 3-5 days. Express delivery options are available for same-day or next-day turnaround."
  },
  {
    question: "What items can be dry cleaned?",
    answer: "We handle a wide range of items including suits, silk sarees, woolens, delicate dresses, curtains, and upholstery. If you're unsure, our experts can advise you on the best treatment."
  },
  {
    question: "How do you handle delicate fabrics?",
    answer: "Delicate fabrics undergo a special inspection. We use fabric-safe solvents and target specific stains manually before choosing the most gentle cleaning cycle."
  },
  {
    question: "Do you offer stain removal?",
    answer: "Yes, we specialize in professional stain removal. However, please note that while we have a very high success rate, total removal depends on the age and type of the stain."
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className={`section-padding ${styles.page}`}>
      <div className="container">
        <div className={styles.header}>
          <h1>Frequently Asked <span className="text-gradient">Questions</span></h1>
          <p>Everything you need to know about our services. Can&apos;t find what you&apos;re looking for? Contact us.</p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={`${styles.item} ${activeIndex === idx ? styles.active : ""}`}>
              <button className={styles.question} onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}>
                <span>{faq.question}</span>
                {activeIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    className={styles.answer}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
