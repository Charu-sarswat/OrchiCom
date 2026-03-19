"use client";

import { GrAppleAppStore } from "react-icons/gr";
import { BiLogoPlayStore } from "react-icons/bi";


export default function AppDownload() {
  return (
    <section className="py-[1.2rem] bg-transparent">
      <div className="container">
        <div className="bg-primary rounded-3xl max-[768px]:rounded-[18px] max-[400px]:rounded-[14px] py-[1.2rem] max-[768px]:py-[1.1rem] px-8 max-[768px]:px-[1.2rem] max-[400px]:p-4 flex max-[768px]:flex-col justify-between items-center gap-6 max-[768px]:gap-4 max-[768px]:text-center w-full">
          <div className="flex-1">
            <p className="text-[1.2rem] max-[768px]:text-[1.05rem] text-white m-0 font-bold leading-[1.2]">
              Download <strong className="text-black block">The Orchid Laundry App</strong>
            </p>
            <p className="text-white opacity-[0.88] text-[0.85rem] max-[768px]:text-[0.82rem] mt-1 font-medium">
              Experience the most convenient way to handle your laundry. Download it now.
            </p>
          </div>
          <div className="flex gap-3 max-[768px]:gap-[0.6rem] shrink-0 max-[768px]:w-full max-[768px]:justify-center">
            <a href="#" className="flex items-center gap-2 max-[768px]:gap-[6px] bg-black text-white py-[7px] max-[768px]:py-[6px] px-[14px] max-[768px]:px-3 rounded-[10px] no-underline min-w-[135px] max-[768px]:min-w-0 max-[768px]:flex-1 max-[768px]:justify-center transition-all duration-200 ease hover:bg-[#222] hover:-translate-y-[2px]">
              <GrAppleAppStore className="text-[1.6rem] max-[768px]:text-[1.4rem]" />
              <div className="flex flex-col leading-[1.1]">
                <span className="text-[0.65rem] font-medium opacity-80">Download on the</span>
                <strong className="text-[0.9rem] max-[768px]:text-[0.85rem] font-bold">App Store</strong>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 max-[768px]:gap-[6px] bg-black text-white py-[7px] max-[768px]:py-[6px] px-[14px] max-[768px]:px-3 rounded-[10px] no-underline min-w-[135px] max-[768px]:min-w-0 max-[768px]:flex-1 max-[768px]:justify-center transition-all duration-200 ease hover:bg-[#222] hover:-translate-y-[2px]">
              <BiLogoPlayStore className="text-[1.6rem] max-[768px]:text-[1.4rem]" />
              <div className="flex flex-col leading-[1.1]">
                <span className="text-[0.65rem] font-medium opacity-80">Get it on</span>
                <strong className="text-[0.9rem] max-[768px]:text-[0.85rem] font-bold">Google Play</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
