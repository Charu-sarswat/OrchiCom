"use client";

import { useParams, notFound } from "next/navigation";
import { blogPosts } from "@/blog/blogData";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogDetail.module.css";
import { Calendar, User, ArrowRight, Tag, Mail, HelpCircle, ChevronRight, Facebook, Twitter, Linkedin, MessageSquare, Clock } from "lucide-react";

import { useEffect, useState } from "react";

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
          setPost({
            ...data,
            date: new Date(data.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric"
            }),
            author: data.author || "Admin",
            category: data.category || "General",
            image: data.image || "/img/blog-1.jpg"
          });
        }

        const recentRes = await fetch(`${API_URL}/blog`);
        const recentData = await recentRes.json();
        const formattedRecent = recentData.map((p: any) => ({
          ...p,
          date: new Date(p.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
          }),
          image: p.image || "/img/blog-1.jpg"
        }));
        setAllPosts(formattedRecent);
        setRecentPosts(formattedRecent.filter((p: any) => p.slug !== slug).slice(0, 3));
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setIsLoading(false);
      }
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
      const res = await fetch(`${API_URL}/blog/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setStatus('success');
        setEmail("");
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus('error');
    }
  };

  if (isLoading) {
    return <div className="container section-padding">Loading...</div>;
  }

  if (!post) {
    return notFound();
  }

  // Calculate dynamic categories from all posts
  const categories = allPosts.reduce((acc: any, p: any) => {
    const cat = p.category || "General";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <ChevronRight size={14} />
          <Link href="/blog">Blog</Link>
          <ChevronRight size={14} />
          <span>{post.title}</span>
        </nav>

        <div className={styles.mainGrid}>
          {/* Main Content Area */}
          <div className={styles.contentArea}>
            <div className={styles.postHeader}>
              <span className={styles.categoryBadge}>{post.category}</span>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.postMeta}>
                <div className={styles.metaItem}>
                  <User size={16} /> <span>By {post.author}</span>
                </div>
                <div className={styles.metaItem}>
                  <Calendar size={16} /> <span>{post.date}</span>
                </div>
                <div className={styles.metaItem}>
                  <Tag size={16} /> <span>{post.category}</span>
                </div>
              </div>
            </div>

            <article className={styles.article}>
              <div 
                className={styles.blogContent}
                dangerouslySetInnerHTML={{ __html: post.content.replace(/&nbsp;/g, ' ') }} 
              />
            </article>

            {/* Social Share & Tags Footer */}
            <div className={styles.articleFooter}>
              <div className={styles.shareGroup}>
                <span>Share:</span>
                <div className={styles.socialButtons}>
                   <Link href="#" className={styles.socialCircle}><Facebook size={18} /></Link>
                   <Link href="#" className={styles.socialCircle}><Twitter size={18} /></Link>
                   <Link href="#" className={styles.socialCircle}><Linkedin size={18} /></Link>
                   <Link href="#" className={styles.socialCircle}><Mail size={18} /></Link>
                </div>
              </div>
              <div className={styles.footerTags}>
                <span>Tags:</span>
                {["PRO TIPS", "FABRIC CARE"].map(t => <span key={t} className={styles.tagLabel}>{t}</span>)}
              </div>
            </div>

            {/* Author Box */}
            <div className={styles.authorBox}>
              <div className={styles.authorAvatar}>
                <div className={styles.avatarCircle}>
                  <User size={40} />
                </div>
              </div>
              <div className={styles.authorBody}>
                <h4>{post.author}</h4>
                <p>Professional laundry experts dedicated to helping you care for your garments. Our guides provide actionable advice for longevity, fabric health, and premium care services.</p>
              </div>
            </div>

            {/* Related Articles */}
            <div className={styles.relatedSection}>
              <h3>Related Articles</h3>
              <div className={styles.relatedGrid}>
                {recentPosts.slice(0, 2).map((p) => (
                  <Link href={`/blog/${p.slug}`} key={p.slug} className={styles.relatedCard}>
                    <div className={styles.relatedImg}>
                      <Image src={p.image} alt={p.title} fill />
                    </div>
                    <div className={styles.relatedInfo}>
                      <h4>{p.title}</h4>
                      <span>{p.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.newsletterSection}>
               <div className={styles.newsletterContent}>
                  <h3>Subscribe to Our Newsletter</h3>
                  <p>Get expert tips, fabric care guides and latest laundry news delivered to your inbox.</p>
               </div>
               <div className={styles.newsletterFormWrapper}>
                 <form onSubmit={(e) => handleSubscribe(e, true)} className={styles.newsletterForm}>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={bottomSubEmail}
                      onChange={(e) => setBottomSubEmail(e.target.value)}
                      required
                    />
                    <button type="submit" disabled={bottomSubStatus === 'loading'}>
                      {bottomSubStatus === 'loading' ? 'Saving...' : 'Subscribe'}
                    </button>
                 </form>
                 {bottomSubStatus === 'success' && <p className={styles.successText}>Success! You're subscribed.</p>}
                 {bottomSubStatus === 'error' && <p className={styles.errorText}>Something went wrong.</p>}
               </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className={styles.sidebar}>
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}><Mail size={18} /> Stay Updated</h3>
              <p>Join our newsletter to receive the latest updates directly in your inbox.</p>
              <form onSubmit={(e) => handleSubscribe(e)} className={styles.widgetForm}>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  required
                />
                <button type="submit" className={styles.widgetBtn} disabled={subStatus === 'loading'}>
                  {subStatus === 'loading' ? 'SAVING...' : 'SUBSCRIBE NOW'}
                </button>
              </form>
              {subStatus === 'success' && <p className={styles.successTextSide}>Successfully subscribed!</p>}
              {subStatus === 'error' && <p className={styles.errorTextSide}>Error subscribing.</p>}
            </div>

            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}><Clock size={18} /> Recent Posts</h3>
              <div className={styles.recentList}>
                {recentPosts.map(p => (
                  <Link href={`/blog/${p.slug}`} key={p.slug} className={styles.recentLink}>
                    <ArrowRight size={14} />
                    <div>
                      <p>{p.title}</p>
                      <span>{p.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}><Tag size={18} /> Categories</h3>
              <div className={styles.categoryList}>
                {Object.entries(categories).map(([cat, count]) => (
                  <Link href={`/blog?category=${cat}`} key={cat} className={styles.categoryItem}>
                    <span>{cat}</span>
                    <span className={styles.catCount}>{count as number}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Widget */}
            <div className={styles.widgetHelp}>
               <h3 className={styles.widgetTitle}><HelpCircle size={18} /> Need Expert Help?</h3>
               <p>Our team of laundry experts is ready to assist with any garment care specialty. Contact us today!</p>
               <Link href="/contact" className={styles.helpBtn}>Get in Touch</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
