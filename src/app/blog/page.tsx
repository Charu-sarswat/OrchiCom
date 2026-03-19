"use client";

import { useState, useEffect } from "react";
import { blogPosts } from "@/blog/blogData";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All posts");
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${API_URL}/blog`);
        const data = await res.json();
        setPosts(data.map((p: any) => ({
          ...p,
          date: new Date(p.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }),
          author: p.author || "Admin",
          category: p.category || "General",
          image: p.image || "/img/blog-1.jpg",
          excerpt: p.excerpt || p.content.substring(0, 150) + "..."
        })));
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const categories = ["All posts", ...new Set(posts.map(post => post.category))];
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All posts" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const [subEmail, setSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail) return;
    setSubStatus('loading');
    try {
      const res = await fetch(`${API_URL}/blog/subscribe`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: subEmail }) });
      if (res.ok) { setSubStatus('success'); setSubEmail(""); setTimeout(() => setSubStatus('idle'), 3000); }
      else setSubStatus('error');
    } catch (error) { console.error("Subscription error:", error); setSubStatus('error'); }
  };

  const pillBase = "py-[0.6rem] max-[480px]:py-2 px-6 max-[480px]:px-5 rounded-full font-bold text-[0.9rem] max-[480px]:text-[0.8rem] border-2 border-[#e2e8f0] bg-white text-[#64748b] cursor-pointer transition-all duration-200 hover:border-[#18a1d8] hover:text-[#18a1d8]";
  const pillActive = "!bg-[#18a1d8] !text-white !border-[#18a1d8]";

  return (
    <>
      <div className="bg-[#f8fafc] py-20 md:py-28 pb-10">
      <div className="container">
        <div className="text-center mb-16 px-4">
          <h1 className="text-[2rem] md:text-[3.2rem] text-black font-bold mb-4">
            The Orchid <span className="text-gradient">Blog</span>
          </h1>
          <p className="max-w-[700px] mx-auto text-[1.1rem] text-[#444]">
            Expert Fabric Care Guides, Laundry Tips, and Professional Insights
          </p>
        </div>

        {/* Search & Filters */}
        <div className="max-w-[700px] mx-auto mb-10 px-4">
          <div className="flex bg-white rounded-[20px] overflow-hidden border border-[#e2e8f0] p-1.5 shadow-none">
            <input 
              type="text" 
              placeholder="Search articles, tips, or fabric care guides..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="flex-1 py-[1rem] px-[1.8rem] border-none text-base text-[#444] font-[inherit] outline-none bg-transparent" 
            />
            <button className="bg-[#18a1d8] text-white border-none w-[55px] h-[55px] rounded-[15px] flex items-center justify-center cursor-pointer transition-all duration-300 ease hover:bg-[#37B9EC] hover:scale-105">
              <Search size={22} />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-4 max-[480px]:gap-2 mb-16 flex-wrap px-4">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`${pillBase} ${activeCategory === cat ? pillActive : ""}`} 
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-[30px] overflow-hidden border border-[#e2e8f0] flex flex-col transition-all duration-400 ease hover:-translate-y-2 hover:border-primary/20 shadow-none">
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover transform hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-[1.5rem] right-[1.5rem] bg-[#18a1d8] text-white py-[0.5rem] px-5 rounded-full text-[0.75rem] font-bold z-[2]">{post.category}</span>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex gap-6 mb-5 text-[0.85rem] text-[#94a3b8] font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-primary" /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={14} className="text-primary" /> {post.author}</span>
                  </div>
                  <h3 className="text-[1.3rem] md:text-[1.4rem] text-black mb-4 leading-[1.3] font-bold">{post.title}</h3>
                  <p className="text-[#444] text-[0.95rem] md:text-[1rem] leading-relaxed mb-8 flex-1">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-[#18a1d8] font-bold no-underline text-[1rem] mt-auto group">
                    Read More <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-[1.2rem] text-[#94a3b8] font-bold">No articles found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white py-12 md:py-16 px-8 md:px-16 rounded-[40px] border border-black/5 flex flex-col min-[992px]:flex-row justify-between items-center gap-10 mt-20 mx-4">
          <div className="min-[992px]:text-left text-center">
            <h3 className="text-[1.8rem] md:text-[2.2rem] text-black font-bold mb-4 leading-tight">Subscribe to our newsletter</h3>
            <p className="text-[#444] text-[1.1rem] md:text-[1.2rem] leading-relaxed max-w-[450px]">Get expert tips, fabric care guides and latest laundry news delivered to your inbox.</p>
          </div>
          <div className="flex flex-col shrink-0 min-[992px]:w-auto w-full">
            <form onSubmit={handleSubscribe} className="flex gap-4 md:gap-5 min-[992px]:flex-row flex-col">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={subEmail} 
                onChange={(e) => setSubEmail(e.target.value)} 
                required 
                className="py-4 px-8 rounded-2xl border border-[#e2e8f0] min-[992px]:w-[380px] w-full text-[1rem] bg-gray-50/50 focus:bg-white focus:border-primary outline-none transition-all" 
              />
              <button 
                type="submit" 
                disabled={subStatus === 'loading'} 
                className="bg-[#18a1d8] text-white border-none py-4 px-10 rounded-2xl font-bold cursor-pointer text-[1rem] transition-all hover:bg-primary/90 hover:scale-[1.02]"
              >
                {subStatus === 'loading' ? 'Saving...' : 'Subscribe'}
              </button>
            </form>
            {subStatus === 'success' && <p className="text-[0.9rem] mt-4 font-bold text-[#10b981] min-[992px]:text-left text-center">🎉 Success! You're subscribed.</p>}
            {subStatus === 'error' && <p className="text-[0.9rem] mt-4 font-bold text-[#ef4444] min-[992px]:text-left text-center">Something went wrong. Please try again.</p>}
          </div>
        </div>
      </div>
      </div>
      
      {/* Global FAQ Section */}
      <GlobalFAQ faqs={blogFaqs} />
    </>
  );
}

const blogFaqs = [
  {
    question: "Do you provide fabric care tips in your blog?",
    answer: "Yes, our blog is a comprehensive resource for fabric care, stain removal guides, and tips on how to extend the life of your expensive garments."
  },
  {
    question: "How often do you update the blog with new laundry tips?",
    answer: "We update our blog weekly with fresh insights, seasonal garment care advice, and the latest trends in professional laundry and dry cleaning technology."
  },
  {
    question: "Can I request a specific topic for a blog post?",
    answer: "Absolutely! If you have a specific fabric or garment care question you'd like us to cover, feel free to reach out via our contact page or social media."
  },
  {
    question: "Are the tips in your blog safe for all types of clothes?",
    answer: "While we provide general professional advice, always check your garment's care label first. Our tips are designed to supplement standard care instructions with professional expertise."
  },
  {
    question: "Do you cover DIY stain removal methods?",
    answer: "Yes, we often share safe 'At-Home' emergency tips for immediate stain management before you can get your garment to our professional facility."
  },
  {
    question: "Can I find advice for seasonal garment storage (e.g., winter wear)?",
    answer: "Definitely. We have dedicated guides on how to properly clean and store woolens, silks, and heavy linens to prevent moth damage and fabric yellowing during off-seasons."
  },
  {
    question: "Do you feature insights from textile experts?",
    answer: "Our articles are written and reviewed by our senior facility technicians who have decades of hands-on experience in professional garment care."
  },
  {
    question: "Are your blog articles available for download as PDFs?",
    answer: "Many of our 'Ultimate Care Guides' are being converted into downloadable checklists for your convenience. Stay tuned for these resources!"
  },
  {
    question: "Can I share your blog content on my social media?",
    answer: "We encourage it! Every article has easy sharing buttons so you can help your friends and family care for their wardrobes better too."
  },
  {
    question: "Is there a way to get notified when a new post is published?",
    answer: "Yes, by subscribing to our newsletter at the bottom of the blog page, you'll receive a monthly roundup of our most popular and helpful articles."
  },
  {
    question: "Do you offer exclusive discounts within your blog articles?",
    answer: "Occasionally, we hide 'easter egg' promo codes inside our educational long-form guides as a reward for our most dedicated readers."
  },
  {
    question: "Can I ask specific questions about an article?",
    answer: "Yes! You can reach out via our contact form or WhatsApp with any follow-up questions you have regarding the tips shared in our posts."
  }
];
