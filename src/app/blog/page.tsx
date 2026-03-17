"use client";

import { useState } from "react";
import { blogPosts } from "@/blog/blogData";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All posts");

  const categories = ["All posts", ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All posts" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>Latest <span className="text-gradient">Blog</span></h1>
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
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get expert tips, fabric care guides and latest laundry news delivered to your inbox.</p>
          </div>
          <div className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
