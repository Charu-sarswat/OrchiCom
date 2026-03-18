"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Chandrakant Basar",
    role: "Regular Customer",
    image: "/img/Chandrakant Basar.jpeg",
    text: "Pickup and delivery are always on time, and my office wear comes back clean, crisp, and neatly packed. The service feels reliable everytime.",
    rating: 5,
  },
  {
    name: "Prashant Kardode",
    role: "Weekly Customer",
    image: "/img/Prashant Kardode.jpeg",
    text: "Booking is simple, turnaround is quick, and the clothes always smell fresh and look properly finished. It has become my go-to laundry service.",
    rating: 5,
  },
  {
    name: "Saurabh",
    role: "Working Professional",
    image: "/img/Saurabh.jpeg",
    text: "Their wash-and-fold service saves me a lot of time. Even after repeated washes, my clothes are handled carefully and returned in great condition.",
    rating: 5,
  },
  {
    name: "Amit Rauth",
    role: "Family Customer",
    image: "/img/Amit Rauth.jpeg",
    text: "The staff is responsive and professional. They handled a few delicate garments perfectly, and the stain removal was better than I expected.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What our <span className="text-gradient">Clients Say</span></h2>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.track}>
          {[...Array(2)].map((_, listIndex) => (
            <div key={listIndex} className={styles.list}>
              {testimonials.map((item, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.profile}>
                    <div className={styles.avatar}>
                      <Image src={item.image} alt={item.name} width={90} height={90} className={styles.img} />
                    </div>
                    <div className={styles.meta}>
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>

                  <div className={styles.divider}></div>
                  
                  <div className={styles.rating}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#FFD700" stroke="none" />
                    ))}
                  </div>

                  <p className={styles.text}>"{item.text}"</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
