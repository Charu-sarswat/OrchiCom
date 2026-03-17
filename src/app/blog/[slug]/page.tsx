"use client";

import { useParams, notFound } from "next/navigation";
import { blogPosts } from "@/blog/blogData";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogDetail.module.css";
import { Calendar, User, ArrowRight, Tag, Mail, HelpCircle, ChevronRight, Facebook, Twitter, Linkedin, MessageSquare, Clock } from "lucide-react";

export default function BlogDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return notFound();
  }

  const recentPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

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
              {post.content.split("\n\n").map((para: string, i: number) => (
                 <div key={i}>
                    {para.startsWith("###") ? (
                      <h2 className={styles.sectionHeading}>{para.replace("### ", "")}</h2>
                    ) : para.startsWith("-") ? (
                      <ul className={styles.bulletList}>
                        {para.split("\n").map((item, j) => (
                          <li key={j}>{item.replace("- ", "")}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{para}</p>
                    )}
                 </div>
              ))}

              {/* Specific to the image: Seasonal Care Table */}
              <h2 className={styles.sectionHeading}>Seasonal Care</h2>
              <table className={styles.careTable}>
                <thead>
                  <tr>
                    <th>Season</th>
                    <th>Care Tips</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Spring/Summer</td>
                    <td>Wash whites more often with brightener-free detergents to prevent yellowing...</td>
                  </tr>
                  <tr>
                    <td>Fall/Winter</td>
                    <td>Clean and store summer clothing in breathable bags, ensuring no stains are present...</td>
                  </tr>
                  <tr>
                    <td>Year-Round</td>
                    <td>Maintain correct temperature and humidity levels in storage areas.</td>
                  </tr>
                </tbody>
              </table>

              <div className={styles.investmentSection}>
                 <h2 className={styles.sectionHeading}>Investment Pays Off</h2>
                 <p>By implementing these simple yet effective strategies, you'll never have to worry about your clothes losing their quality. Professional garment care is the key to longevity.</p>
              </div>
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

            {/* Bottom Newsletter */}
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

          {/* Sidebar Area */}
          <aside className={styles.sidebar}>
            {/* Stay Updated Widget */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}><Mail size={18} /> Stay Updated</h3>
              <p>Join our newsletter to receive the latest updates directly in your inbox.</p>
              <div className={styles.widgetForm}>
                <input type="email" placeholder="Your Email Address" />
                <button className={styles.widgetBtn}>SUBSCRIBE NOW</button>
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}><Clock size={18} /> Recent Posts</h3>
              <div className={styles.recentList}>
                {blogPosts.slice(0, 3).map(p => (
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

            {/* Categories Widget */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}><Tag size={18} /> Categories</h3>
              <div className={styles.categoryList}>
                <Link href="#" className={styles.categoryItem}>
                  <span>Pro Tips</span>
                  <span className={styles.catCount}>4</span>
                </Link>
                <Link href="#" className={styles.categoryItem}>
                  <span>Fabric Care</span>
                  <span className={styles.catCount}>6</span>
                </Link>
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
