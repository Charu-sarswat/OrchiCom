"use client";

import { Star } from "lucide-react";
import Image from "next/image";


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
    name: "Sheetal Surve",
    role: "Purchase Manager",
    image: "/img/Sheetal Surve.jpeg",
    text: "Very convenient service for busy schedules. Pickup was smooth, delivery was on time, and the clothes came back clean, soft, and well packed.",
    rating: 5,
  },
  {
    name: "Jyoti Jonwal",
    role: "Sr. Investment Advisor",
    image: "/img/Jyoti Jonwal.jpeg",
    text: "What I liked most was the consistency. Every order has been neatly finished, and the team is polite, responsive, and easy to coordinate with.",
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
    <section className="bg-white py-12 overflow-hidden section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] md:text-[3.2rem] text-black w-full mb-4">
            What our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="max-w-[700px] mx-auto text-[1.1rem] text-[#444]">
            Trusted by Families and Professionals Across the City
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden relative py-8">
        <div className="flex w-max animate-scroll-rtl hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, listIndex) => (
            <div key={listIndex} className="flex gap-8 pr-8">
              {testimonials.map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl w-[290px] md:w-[350px] min-h-[360px] shrink-0 flex flex-col p-5 md:p-8 border-[1.5px] border-[rgba(24,161,216,0.15)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-2 hover:border-[#18A1D8] hover:shadow-[0_20px_40px_rgba(24,161,216,0.15)] shadow-none">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full overflow-hidden shrink-0 relative flex items-center justify-center bg-[#f8fafc] border-[3px] border-[#18A1D8] shadow-[0_0_20px_rgba(24,161,216,0.2)]">
                      <Image src={item.image} alt={item.name} width={90} height={90} className="object-cover object-top block !w-full !h-full" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <strong className="text-[1.1rem] md:text-[1.3rem] text-black font-bold whitespace-nowrap font-outfit">{item.name}</strong>
                      <span className="text-[0.95rem] md:text-[1.05rem] text-gradient font-semibold">{item.role}</span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-[#f1f5f9] mb-6"></div>
                  
                  <div className="flex gap-[6px] mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#FFD700" stroke="none" />
                    ))}
                  </div>

                  <p className="text-[#444] font-medium m-0 leading-[1.6]">"{item.text}"</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
