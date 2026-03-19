import { Zap, CheckCircle, IndianRupee, Shield, Handshake, Leaf } from "lucide-react";

const valuesBgColors = [
  "bg-[#f0f9ff] col-span-2 lg:col-span-2",
  "bg-[#f0fdf4]",
  "bg-[#fffcf0]",
  "bg-[#f5f3ff]",
  "bg-[#fef2f2]",
  "bg-[#ecfdf5] col-span-1 lg:col-span-2",
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center text-white text-center h-[36vh] min-h-[220px] md:h-[50vh] md:min-h-[340px] bg-cover bg-center bg-fixed max-[768px]:bg-scroll"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.35)), url('/about.png')" }}
      >
        <div className="container">
          <div className="max-w-[700px] mx-auto px-4">
            <h1 className="mb-2 leading-[1.15] text-[clamp(1.8rem,5vw,3.5rem)]">About <span className="text-white">The Orchid Laundry LLP</span></h1>
            <p className="text-[1.05rem] opacity-[0.85] tracking-[0.05em]">Fast - Reliable - Affordable</p>
          </div>
        </div>
      </section>

      <div className="section-padding">
        <div className="container">
          {/* Main Introduction */}
          <div className="grid gap-6 md:gap-10 items-center grid-cols-1 min-[900px]:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="rounded-3xl overflow-hidden max-w-[80%] min-[900px]:max-w-[80%] max-[576px]:max-w-[80%] mx-auto">
                <img src="/img/about-new.jpg" alt="The Orchid Laundry Service" className="w-full h-auto block" />
              </div>
            </div>
            <div>
              <p className="text-[#555] mb-4 text-base leading-[1.7]">
                At The Orchid Laundry, we turn an everyday chore into a seamless, stress-free experience.
              </p>
              <p className="text-[#555] mb-4 text-base leading-[1.7]">
                We know the hours spent on washing, drying, ironing, and folding can add up, time that could be better spent on family, work, or simply enjoying life.
              </p>
              <p className="text-[#555] mb-4 text-base leading-[1.7]">
                That is why we started <strong className="text-gradient">The Orchid Laundry LLP</strong>, to make laundry fast, reliable, and affordable. What began as a small idea in Dombivli has grown into a professional, tech-enabled service dedicated to quality, convenience, and customer delight.
              </p>
            </div>
          </div>

          {/* Our Approach Card */}
          <div className="bg-[#fdfcf6] py-[1.4rem] md:py-[1.8rem] px-6 md:px-[2.5rem] rounded-[20px] md:rounded-[28px] mt-6 md:mt-8 mx-auto max-w-[1200px] text-center border border-[rgba(24,161,216,0.15)] transition-all duration-300 ease hover:border-primary">
            <div className="flex items-center justify-center gap-[0.8rem] mb-[0.8rem]">
              <h2 className="m-0 text-[1.8rem]">Our <span className="text-gradient">approach</span></h2>
            </div>
            <p className="text-[0.95rem] md:text-[1.05rem] text-[#444] leading-[1.75] max-w-[880px] mx-auto">
              We combine technology, expert care, and efficient operations to deliver a consistent, high-quality laundry experience. From scheduled pickups and doorstep delivery to customizable instructions for every garment, we ensure your clothes are treated with care while saving you time, effort, and money.
            </p>
            <p className="text-[0.95rem] md:text-[1.05rem] text-[#444] leading-[1.75] max-w-[880px] mx-auto mt-4">
              Our eco-friendly detergents, advanced washing machines, and streamlined processes make laundry simpler for our customers and better for the planet.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-6 mb-6 md:mb-10">
            <div className="bg-white py-[1.4rem] md:py-8 px-6 md:px-10 rounded-[18px] md:rounded-3xl border border-primary transition-transform duration-300 ease hover:-translate-y-[6px]">
              <div className="flex items-center gap-[0.8rem] mb-4">
                <h3 className="m-0 text-2xl md:text-[1.8rem]">Our <span className="text-gradient">mission</span></h3>
              </div>
              <p className="text-[0.95rem] md:text-base leading-[1.65] text-[#444] m-0">
                To improve the quality of life for our customers by saving them time, energy, and hassle through a highly reliable, convenient, and affordable laundry service.
              </p>
            </div>
            <div className="bg-white py-[1.4rem] md:py-8 px-6 md:px-10 rounded-[18px] md:rounded-3xl border border-primary transition-transform duration-300 ease hover:-translate-y-[6px]">
              <div className="flex items-center gap-[0.8rem] mb-4">
                <h3 className="m-0 text-2xl md:text-[1.8rem]">Our <span className="text-gradient">vision</span></h3>
              </div>
              <p className="text-[0.95rem] md:text-base leading-[1.65] text-[#444] m-0">
                To become the most trusted laundry brand in India, starting from Dombivli and expanding across Maharashtra and beyond, delivering consistent quality, convenience, and value to every household.
              </p>
            </div>
          </div>

          {/* Core Values Title */}
          <div className="text-center mt-8 md:mt-10 mb-4 md:mb-6">
            <h2 className="mb-2 text-[1.8rem]">Our core <span className="text-gradient">values</span></h2>
          </div>
          
          {/* Values Bento Grid */}
          <div className="grid gap-2 min-[400px]:gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Zap size={28} />, title: "Fast", desc: "Quick, on-time service with efficiency at every step." },
              { icon: <CheckCircle size={28} />, title: "Reliable", desc: "Consistent quality, every wash, every time." },
              { icon: <IndianRupee size={28} />, title: "Affordable", desc: "Premium service at fair, transparent pricing." },
              { icon: <Shield size={28} />, title: "Integrity", desc: "Honest, transparent, and ethical in all dealings." },
              { icon: <Handshake size={28} />, title: "Respect", desc: "Treating every customer, associate, and partner with dignity." },
              { icon: <Leaf size={28} />, title: "Sustainability", desc: "Caring for the environment with eco-friendly processes and resources." },
            ].map((value, i) => (
              <div key={i} className={`py-[0.9rem] min-[400px]:py-4 md:py-[1.4rem] px-[0.7rem] min-[400px]:px-[0.9rem] md:px-[1.6rem] rounded-2xl md:rounded-3xl flex flex-col justify-center items-center text-center border border-[rgba(24,161,216,0.1)] transition-all duration-300 ease hover:scale-[1.02] hover:border-primary ${valuesBgColors[i]}`}>
                <div className="flex items-center gap-4 mb-[0.8rem]">
                  <h4 className="m-0 text-black text-base md:text-[1.15rem] font-extrabold tracking-[0.5px] md:tracking-[1px]">{value.title}</h4>
                </div>
                <p className="text-[0.82rem] md:text-[0.88rem] text-[#555] leading-[1.5] m-0 max-w-[240px]">{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Promise */}
          <div className="bg-[#f0f9ff] py-[1.4rem] md:py-[1.8rem] px-6 md:px-[2.5rem] rounded-[20px] md:rounded-[28px] mt-6 md:mt-8 text-center border border-primary">
            <h2 className="text-black mb-4 text-[1.8rem]">Our <span className="text-gradient">promise</span></h2>
            <p className="text-[0.95rem] md:text-[1.05rem] leading-[1.75] text-[#444] max-w-[860px] mx-auto">
              At The Orchid Laundry, we do not just clean clothes — we give you back your time, peace of mind, and confidence in every wash. With every pickup, wash, and delivery, we aim to make laundry faster, reliable, and more affordable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
