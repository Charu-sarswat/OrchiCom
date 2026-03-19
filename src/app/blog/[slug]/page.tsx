"use client";

import { useParams, notFound } from "next/navigation";
import { blogPosts } from "@/blog/blogData";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Tag, Mail, HelpCircle, ChevronRight, Facebook, Twitter, Linkedin, MessageSquare, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import GlobalFAQ from "@/components/FAQ/GlobalFAQ";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export default function BlogDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<any>(null);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [subEmail, setSubEmail] = useState("");
  const [bottomSubEmail, setBottomSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [bottomSubStatus, setBottomSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${API_URL}/blog/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setPost({ ...data, date: new Date(data.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }), author: data.author || "Admin", category: data.category || "General", image: data.image || "/img/blog-1.jpg" });
        }
        const recentRes = await fetch(`${API_URL}/blog`);
        const recentData = await recentRes.json();
        const formattedRecent = recentData.map((p: any) => ({ ...p, date: new Date(p.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }), image: p.image || "/img/blog-1.jpg" }));
        setAllPosts(formattedRecent);
        setRecentPosts(formattedRecent.filter((p: any) => p.slug !== slug).slice(0, 3));
      } catch (error) { console.error("Error fetching blog post:", error); }
      finally { setIsLoading(false); }
    };
    fetchPost();
  }, [slug]);

  const handleSubscribe = async (e: React.FormEvent, isBottom: boolean = false) => {
    e.preventDefault();
    const email = isBottom ? bottomSubEmail : subEmail;
    const setStatus = isBottom ? setBottomSubStatus : setSubStatus;
    const setEmail = isBottom ? setBottomSubEmail : setSubEmail;
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/blog/subscribe`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      if (res.ok) { setStatus('success'); setEmail(""); setTimeout(() => setStatus('idle'), 3000); }
      else setStatus('error');
    } catch (error) { console.error("Subscription error:", error); setStatus('error'); }
  };

  if (isLoading) return <div className="container section-padding">Loading...</div>;
  if (!post) return notFound();

  const categories = allPosts.reduce((acc: any, p: any) => { const cat = p.category || "General"; acc[cat] = (acc[cat] || 0) + 1; return acc; }, {});

  return (
    <div className="bg-white py-5 md:py-10 pb-[60px] md:pb-20">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[0.85rem] text-[#888] mb-10">
          <Link href="/" className="no-underline text-[#888] hover:text-[#18a1d8] transition-colors duration-200">Home</Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="no-underline text-[#888] hover:text-[#18a1d8] transition-colors duration-200">Blog</Link>
          <ChevronRight size={14} />
          <span className="text-[#555] font-semibold">{post.title}</span>
        </nav>

        <div className="grid gap-12 grid-cols-1 min-[1200px]:grid-cols-[1fr_340px]">
          {/* Main Content Area */}
          <div>
            <div className="mb-12">
              <span className="bg-[#e0f2fe] text-[#0ea5e9] py-[0.4rem] px-4 rounded-[6px] text-[0.75rem] font-extrabold uppercase inline-block mb-6">{post.category}</span>
              <h1 className="text-[#18a1d8] font-extrabold leading-[1.2] mb-6 text-2xl max-[480px]:text-2xl md:text-[clamp(1.6rem,8vw,2rem)] min-[1024px]:text-[2.2rem] min-[1200px]:text-[clamp(1.8rem,6vw,2.8rem)]">{post.title}</h1>
              <div className="flex flex-wrap gap-4 md:gap-8 text-[0.8rem] md:text-[0.9rem] text-[#64748b] font-semibold">
                <div className="flex items-center gap-[0.6rem]"><User size={16} className="text-[#18a1d8]" /> <span>By {post.author}</span></div>
                <div className="flex items-center gap-[0.6rem]"><Calendar size={16} className="text-[#18a1d8]" /> <span>{post.date}</span></div>
                <div className="flex items-center gap-[0.6rem]"><Tag size={16} className="text-[#18a1d8]" /> <span>{post.category}</span></div>
              </div>
            </div>

            <article className="text-[1.1rem] leading-[1.8] text-[#444]">
              <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content.replace(/&nbsp;/g, ' ') }} />
            </article>

            {/* Social Share & Tags Footer */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-16 py-8 border-t border-b border-[#eee] gap-6">
              <div className="flex items-center gap-6">
                <span className="font-bold text-[#333]">Share:</span>
                <div className="flex gap-[0.8rem] flex-wrap">
                  <Link href="#" className="w-10 h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-all duration-200 hover:bg-[#18a1d8] hover:text-white hover:border-[#18a1d8]"><Facebook size={18} /></Link>
                  <Link href="#" className="w-10 h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-all duration-200 hover:bg-[#18a1d8] hover:text-white hover:border-[#18a1d8]"><Twitter size={18} /></Link>
                  <Link href="#" className="w-10 h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-all duration-200 hover:bg-[#18a1d8] hover:text-white hover:border-[#18a1d8]"><Linkedin size={18} /></Link>
                  <Link href="#" className="w-10 h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#64748b] transition-all duration-200 hover:bg-[#18a1d8] hover:text-white hover:border-[#18a1d8]"><Mail size={18} /></Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-[#333]">Tags:</span>
                {["PRO TIPS", "FABRIC CARE"].map(t => <span key={t} className="bg-[#f1f5f9] py-[0.4rem] px-[0.8rem] rounded text-[0.75rem] font-bold text-[#64748b]">{t}</span>)}
              </div>
            </div>

            {/* Author Box */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center p-4 max-[480px]:p-4 md:p-10 bg-white border border-[#e2e8f0] rounded-[20px] mb-20 max-[768px]:text-center">
              <div>
                <div className="w-[60px] max-[480px]:w-[60px] md:w-20 h-[60px] max-[480px]:h-[60px] md:h-20 bg-[#f1f5f9] rounded-full flex items-center justify-center text-[#18a1d8]">
                  <User size={40} />
                </div>
              </div>
              <div>
                <h4 className="text-[1.1rem] max-[480px]:text-[1.1rem] md:text-[1.25rem] mb-2 text-[#18a1d8] font-extrabold">{post.author}</h4>
                <p className="text-[0.95rem] text-[#64748b] leading-[1.6]">Professional laundry experts dedicated to helping you care for your garments. Our guides provide actionable advice for longevity, fabric health, and premium care services.</p>
              </div>
            </div>

            {/* Related Articles */}
            <div>
              <h3 className="text-2xl mb-8 font-extrabold">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {recentPosts.slice(0, 2).map((p) => (
                  <Link href={`/blog/${p.slug}`} key={p.slug} className="flex flex-col no-underline">
                    <div className="relative h-[180px] rounded-xl overflow-hidden mb-4">
                      <Image src={p.image} alt={p.title} fill />
                    </div>
                    <div>
                      <h4 className="text-[1.1rem] text-[#1e293b] font-bold mb-[0.4rem]">{p.title}</h4>
                      <span className="text-[0.8rem] text-[#18a1d8] font-bold uppercase">{p.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#f8fafc] p-4 md:p-12 max-[768px]:py-8 max-[768px]:px-4 rounded-[20px] flex flex-col md:flex-row justify-between items-center gap-8 mt-16 max-[768px]:text-center">
              <div>
                <h3 className="text-2xl text-[#1e293b] mb-2 font-extrabold">Subscribe to Our Newsletter</h3>
                <p className="text-[#64748b]">Get expert tips, fabric care guides and latest laundry news delivered to your inbox.</p>
              </div>
              <div className="flex flex-col shrink-0 max-[768px]:w-full">
                <form onSubmit={(e) => handleSubscribe(e, true)} className="flex gap-4 max-[768px]:flex-col max-[768px]:w-full">
                  <input type="email" placeholder="Enter your email" value={bottomSubEmail} onChange={(e) => setBottomSubEmail(e.target.value)} required className="py-[0.8rem] px-6 rounded-xl border border-[#e2e8f0] w-[300px] max-[768px]:w-full" />
                  <button type="submit" disabled={bottomSubStatus === 'loading'} className="bg-[#18a1d8] text-white border-none py-[0.8rem] px-8 rounded-xl font-bold cursor-pointer max-[768px]:w-full">
                    {bottomSubStatus === 'loading' ? 'Saving...' : 'Subscribe'}
                  </button>
                </form>
                {bottomSubStatus === 'success' && <p className="text-[0.85rem] mt-[0.8rem] font-semibold pl-2 text-[#10b981]">Success! You're subscribed.</p>}
                {bottomSubStatus === 'error' && <p className="text-[0.85rem] mt-[0.8rem] font-semibold pl-2 text-[#ef4444]">Something went wrong.</p>}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className="flex flex-col gap-10">
            <div className="bg-white border border-[#e2e8f0] p-6 max-[480px]:p-6 md:p-10 rounded-[20px]">
              <h3 className="flex items-center gap-[0.8rem] text-[1.15rem] text-[#18a1d8] font-extrabold mb-6"><Mail size={18} /> Stay Updated</h3>
              <p className="text-[0.9rem] text-[#64748b] mb-6 leading-[1.5]">Join our newsletter to receive the latest updates directly in your inbox.</p>
              <form onSubmit={(e) => handleSubscribe(e)} className="flex flex-col gap-4">
                <input type="email" placeholder="Your Email Address" value={subEmail} onChange={(e) => setSubEmail(e.target.value)} required className="py-[0.8rem] px-4 border border-[#e2e8f0] rounded-lg text-[0.9rem]" />
                <button type="submit" className="bg-[#18a1d8] text-white border-none py-[0.8rem] rounded-lg font-bold cursor-pointer tracking-[0.05em]" disabled={subStatus === 'loading'}>
                  {subStatus === 'loading' ? 'SAVING...' : 'SUBSCRIBE NOW'}
                </button>
              </form>
              {subStatus === 'success' && <p className="text-[0.8rem] mt-2 font-semibold text-center text-[#10b981]">Successfully subscribed!</p>}
              {subStatus === 'error' && <p className="text-[0.8rem] mt-2 font-semibold text-center text-[#ef4444]">Error subscribing.</p>}
            </div>

            <div className="bg-white border border-[#e2e8f0] p-6 max-[480px]:p-6 md:p-10 rounded-[20px]">
              <h3 className="flex items-center gap-[0.8rem] text-[1.15rem] text-[#18a1d8] font-extrabold mb-6"><Clock size={18} /> Recent Posts</h3>
              <div className="flex flex-col gap-6">
                {recentPosts.map(p => (
                  <Link href={`/blog/${p.slug}`} key={p.slug} className="flex gap-4 no-underline items-start transition-all duration-200 ease hover:translate-x-[5px] hover:opacity-80">
                    <ArrowRight size={14} className="text-[#18a1d8] mt-1 shrink-0" />
                    <div>
                      <p className="text-[0.95rem] text-[#1e293b] font-bold leading-[1.4] !m-0 !mb-[0.3rem]">{p.title}</p>
                      <span className="text-[0.8rem] text-[#94a3b8]">{p.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#e2e8f0] p-6 max-[480px]:p-6 md:p-10 rounded-[20px]">
              <h3 className="flex items-center gap-[0.8rem] text-[1.15rem] text-[#18a1d8] font-extrabold mb-6"><Tag size={18} /> Categories</h3>
              <div className="flex flex-col gap-4">
                {Object.entries(categories).map(([cat, count]) => (
                  <Link href={`/blog?category=${cat}`} key={cat} className="flex justify-between no-underline text-[#475569] font-semibold text-[0.95rem] py-2 px-[0.8rem] rounded-lg transition-all duration-200 ease hover:bg-[#f0f9ff] hover:text-[#18a1d8] hover:translate-x-[5px]">
                    <span>{cat}</span>
                    <span className="bg-[#f1f5f9] text-[#64748b] w-6 h-6 rounded-full flex items-center justify-center text-[0.75rem]">{count as number}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Widget */}
            <div className="bg-[#f0f9ff] border border-[#bae6fd] p-6 max-[480px]:p-6 md:p-10 rounded-[20px] text-center">
              <h3 className="flex items-center justify-center gap-[0.8rem] text-[1.15rem] text-[#18a1d8] font-extrabold mb-6"><HelpCircle size={18} /> Need Expert Help?</h3>
              <p className="text-[0.9rem] text-[#475569] mb-6">Our team of laundry experts is ready to assist with any garment care specialty. Contact us today!</p>
              <Link href="/contact" className="bg-[#18a1d8] text-white no-underline py-[0.8rem] px-8 rounded-xl font-bold inline-block">Get in Touch</Link>
            </div>
          </aside>
        </div>
      </div>
      
      {/* Global FAQ Section */}
      <GlobalFAQ faqs={blogFaqs} />
    </div>
  );
}

const blogFaqs = [
  {
    question: "Is the information in this article verified by professionals?",
    answer: "Yes, every guide we publish is written and vetted by our senior textile experts who manage our professional facility in Dombivli."
  },
  {
    question: "Can I apply these tips to delicate fabrics like silk or wool?",
    answer: "While many tips are universal, delicate fabrics often require special handling. We always recommend testing any home method on a small, hidden area first."
  },
  {
    question: "What should I do if a recommended home remedy doesn't work?",
    answer: "If a stain persists, do not keep scrubbing. Bring the garment to our facility as soon as possible so our professionals can treat it before the stain becomes permanent."
  },
  {
    question: "How can I stay updated with similar garment care guides?",
    answer: "The best way is to subscribe to our newsletter at the bottom of this page. We'll send the most helpful and popular guides directly to your inbox."
  },
  {
    question: "Do you offer professional versions of the services described in your blog?",
    answer: "Absolutely. Most techniques we write about are professional-grade versions of what we perform daily at The Orchid Laundry facility."
  },
  {
    question: "Can I request a deep-dive into a specific fabric cleaning technique?",
    answer: "We love feedback! If there's a specific fabric or garment type you're struggling with, send us a message on WhatsApp and we may feature it in our next post."
  },
  {
    question: "How does professional dry cleaning differ from home washing mentioned here?",
    answer: "Commercial dry cleaning involves specialized non-water-based solvents and high-precision machinery that home washers simply cannot replicate for delicate fibers."
  },
  {
    question: "Are there any risks to following DIY cleaning tips from the internet?",
    answer: "Generic internet tips can be dangerous for certain dyes. Our blog focuses exclusively on safe, professional-approved methods to minimize any risk to your wardrobe."
  },
  {
    question: "Do you provide sources or references for your blog content?",
    answer: "Our primary source is our own decade of experience in the laundry industry, supplemented by modern textile science and manufacturer care guidelines."
  },
  {
    question: "Can I share this specific post with my friends or colleagues?",
    answer: "Yes, please do! Use the social share buttons provided to help others extend the life of their favorite clothes."
  },
  {
    question: "Is there a way to print your guides for offline use?",
    answer: "Our website is mobile-optimized so you can keep the guide open on your phone while you work, but you can also use your browser's 'Print' function for a clean layout."
  },
  {
    question: "Who can I contact for more specific textile-related questions?",
    answer: "You can reach out to our customer care team via the 'Contact' page if you have a unique fabric issue that wasn't covered in our articles."
  }
];
