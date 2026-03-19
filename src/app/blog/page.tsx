"use client";

import { useState, useEffect } from "react";
import { blogPosts } from "@/blog/blogData";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

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
    <div className="bg-white py-20 max-[768px]:pt-20 pb-10">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="text-primary mb-4 max-[768px]:text-[2rem] max-[480px]:text-[1.8rem]">Latest blog</h1>
          <p className="text-[#64748b] text-[1.1rem]">Search for articles, tips, or fabric care guides...</p>
        </div>

        {/* Search & Filters */}
        <div className="max-w-[600px] mx-auto mb-6">
          <div className="flex bg-white rounded-xl overflow-hidden border border-[#e2e8f0]">
            <input type="text" placeholder="Search articles, tips, or fabric care guides..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="flex-1 py-4 px-6 border-none text-base text-[#334155] font-[inherit] outline-none" />
            <button className="bg-[#18a1d8] text-white border-none px-6 cursor-pointer transition-[background] duration-200 hover:bg-[#1489b8]">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-4 max-[480px]:gap-2 mb-10 flex-wrap">
          {categories.map(cat => (
            <button key={cat} className={`${pillBase} ${activeCategory === cat ? pillActive : ""}`} onClick={() => setActiveCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-3xl overflow-hidden border border-[#e2e8f0] flex flex-col transition-all duration-300 ease hover:-translate-y-2 hover:border-[#18a1d8]">
                <div className="relative h-[220px] w-full">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                  <span className="absolute top-[1.2rem] right-[1.2rem] bg-[#18a1d8] text-white py-[0.4rem] px-4 rounded-full text-[0.75rem] font-bold z-[2]">{post.category}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex gap-6 mb-4 text-[0.85rem] text-[#94a3b8] font-semibold">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
                  </div>
                  <h3 className="text-[1.2rem] max-[480px]:text-[1.2rem] md:text-[1.3rem] text-[#1e293b] mb-4 leading-[1.4] font-extrabold">{post.title}</h3>
                  <p className="text-[#64748b] text-[0.95rem] leading-[1.6] mb-8 flex-1">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-[0.8rem] text-[#18a1d8] font-bold no-underline text-[0.95rem] mt-auto hover:gap-5 transition-all duration-200">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-[1.2rem] text-[#94a3b8] font-semibold">No articles found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white py-8 max-[480px]:py-8 min-[992px]:py-10 px-4 max-[480px]:px-4 min-[992px]:px-10 rounded-3xl flex flex-col min-[992px]:flex-row justify-between items-center gap-8 mt-14 border border-[#f1f5f9]">
          <div className="min-[992px]:text-left text-center">
            <h3 className="text-[#1e293b] mb-[0.8rem] leading-[1.2] max-[480px]:text-[1.6rem]">Subscribe to our newsletter</h3>
            <p className="text-[#64748b] text-[1.15rem] leading-[1.5] max-w-[400px]">Get expert tips, fabric care guides and latest laundry news delivered to your inbox.</p>
          </div>
          <div className="flex flex-col shrink-0 min-[992px]:w-auto w-full">
            <form onSubmit={handleSubscribe} className="flex gap-5 min-[992px]:flex-row flex-col">
              <input type="email" placeholder="Enter your email" value={subEmail} onChange={(e) => setSubEmail(e.target.value)} required className="py-4 px-6 rounded-xl border border-[#e2e8f0] min-[992px]:w-[350px] w-full text-base" />
              <button type="submit" disabled={subStatus === 'loading'} className="bg-[#18a1d8] text-white border-none py-4 px-10 rounded-xl font-extrabold cursor-pointer text-base transition-opacity duration-200 hover:opacity-90">
                {subStatus === 'loading' ? 'Saving...' : 'Subscribe'}
              </button>
            </form>
            {subStatus === 'success' && <p className="text-[0.85rem] mt-4 font-semibold text-[#10b981] min-[992px]:text-left text-center">Success! You're subscribed.</p>}
            {subStatus === 'error' && <p className="text-[0.85rem] mt-4 font-semibold text-[#ef4444] min-[992px]:text-left text-center">Something went wrong.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
