"use client";

import { useState } from "react";
import { blogPosts } from "@/blog/blogData";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

import { useEffect } from "react";

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
          date: new Date(p.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
          }),
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
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
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
      const res = await fetch(`${API_URL}/blog/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subEmail })
      });

      if (res.ok) {
        setSubStatus('success');
        setSubEmail("");
        setTimeout(() => setSubStatus('idle'), 3000);
      } else {
        setSubStatus('error');
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setSubStatus('error');
    }
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>Latest blog</h1>
          <p>Search for articles, tips, or fabric care guides...</p>
        </div>

        {/* Search & Filters */}
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder="Search articles, tips, or fabric care guides..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchBtn}>
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className={styles.filtersSection}>
          {categories.map(cat => (
            <button 
              key={cat}
              className={`${styles.filterPill} ${activeCategory === cat ? styles.activeFilter : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.slug} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className={styles.fixedImg} 
                  />
                  <span className={styles.category}>{post.category}</span>
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span><Calendar size={14} /> {post.date}</span>
                    <span><User size={14} /> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.link}>
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No articles found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <h3>Subscribe to our newsletter</h3>
            <p>Get expert tips, fabric care guides and latest laundry news delivered to your inbox.</p>
          </div>
          <div className={styles.newsletterFormWrapper}>
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                required
              />
              <button type="submit" disabled={subStatus === 'loading'}>
                {subStatus === 'loading' ? 'Saving...' : 'Subscribe'}
              </button>
            </form>
            {subStatus === 'success' && <p className={styles.successText}>Success! You're subscribed.</p>}
            {subStatus === 'error' && <p className={styles.errorText}>Something went wrong.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
