"use client";

import { useParams, notFound } from "next/navigation";
import { servicesData } from "@/services/servicesData";
import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceDetail.module.css";
import { 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  XCircle, 
  AlertCircle, 
  Sparkles,
  Shirt, 
  User, 
  User2, 
  Briefcase, 
  Bed,
  Luggage,
  IndianRupee,
  Info
} from "lucide-react";


type ServiceKey = keyof typeof servicesData;

// Map service slug → pricing page service tab name
const slugToPricingService: Record<string, string> = {
  "dry-cleaning":      "Dry Clean",
  "wash-iron":         "Wash Per Kg",
  "wash-fold":         "Wash Per Kg",
  "wash-kg":           "Wash Per Kg",
  "premium-laundry":   "Dry Clean",
  "household-laundry": "Wash Per Kg",
  "steam-iron":        "Steam Iron",
  "shoe-cleaning":     "Dry Clean",
  "sofa-cleaning":     "Dry Clean",
  "carpet-cleaning":   "Dry Clean",
  "curtain-cleaning":  "Dry Clean",
  "bridal-wear":       "Dry Clean",
  "special-laundry":   "Dry Clean",
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  if (!servicesData[slug as ServiceKey]) {
    return notFound();
  }

  const service = servicesData[slug as ServiceKey] as any;
  const pricingService = slugToPricingService[slug] || "Dry Clean";

  const splitTitle = (title: string) => {
    if (!title) return null;
    const words = title.split(" ");
    const splitPoint = Math.floor(words.length / 2);
    const firstPart = words.slice(0, splitPoint).join(" ");
    const secondPart = words.slice(splitPoint).join(" ");
    return (
      <>
        {firstPart} <span className="text-gradient">{secondPart}</span>
      </>
    );
  };

  return (
    <div className={`section-padding ${styles.page}`}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.topLabel}>The Orchid Laundry</span>
            <h1>{splitTitle(service.title)}</h1>

            <p className={styles.heroSubtitle}>{service.subtitle}</p>
            <p className={styles.heroDescription}>{service.description}</p>
            
            <ul className={styles.heroBenefits}>
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index}>
                  <CheckCircle size={18} className={styles.checkIcon} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.heroImageCol}>
            <div className={styles.imageCard}>
              <Image 
                src={service.image} 
                alt={service.title} 
                width={600} 
                height={500} 
                className={styles.mainImage}
                priority
              />
            </div>
          </div>
        </div>

        {/* Long Description Section */}
        {'longDescription' in service && (
          <section className={styles.longDescriptionSection}>
            <div className="section-title text-center">
              <h2>{splitTitle(service.longDescTitle)}</h2>
            </div>

            <div className={styles.longDescCard}>
              <div className={styles.longDescContent}>
                {service.longDescription.map((para: string, i: number) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* Comparisons Section */}
        {'comparisons' in service && (
          <section className={styles.comparisonSection}>
            <div className={styles.comparisonGrid}>
              {service.comparisons.map((comp: any, idx: number) => (
                <div key={idx} className={`${styles.comparisonCard} ${comp.isNegative ? styles.negativeCard : styles.positiveCard}`}>
                  <div className={styles.compHeader}>
                    {comp.isNegative ? <XCircle size={24} color="#f44336" /> : <CheckCircle size={24} color="#4caf50" />}
                    <h3>{comp.title}</h3>
                  </div>
                  <ul className={styles.compList}>
                    {comp.points.map((point: string, pIdx: number) => (
                      <li key={pIdx}>
                        {comp.isNegative ? <XCircle size={18} className={styles.xIcon} /> : <CheckCircle size={18} className={styles.checkIcon} />}
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process Section */}
        {'process' in service && service.process && (
          <section className={styles.processSection}>
            <div className="section-title text-center">
              <h2>{splitTitle(service.processTitle)}</h2>
              <p>{slug === 'steam-iron' ? 'Each garment goes through a careful process to ensure exceptional results every time.' : 'Every garment is processed through a carefully designed procedure to guarantee a fresh, crisp, and spotless finish.'}</p>
            </div>

            <div className={styles.processGrid}>
              {service.process.map((p: any) => (
                <div key={p.step} className={styles.processCard}>
                  <div className={styles.processBadge}>{p.step}</div>
                  <div className={styles.processInfo}>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Features Section */}
        {service.keyFeatures && (
          <section className={styles.featuresSection}>
            <div className={styles.featuresCard}>
              <h3>
                <Sparkles size={22} />
                {splitTitle(service.featuresTitle || "Key Features")}
              </h3>
              <div className={styles.featuresGrid}>
                {service.keyFeatures.map((feature: string, i: number) => (
                  <div key={i} className={styles.featureItem}>
                    <div className={styles.featureCheck}>
                      <CheckCircle size={18} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Extra Sections (e.g., Special Features, Additional Services) */}
        {service.extraSections && service.extraSections.map((section: any, idx: number) => (
          <section key={idx} className={styles.featuresSection}>
            <div className={styles.featuresCard}>
              <h3>
                <Info size={22} />
                {splitTitle(section.title)}
              </h3>
              <div className={section.items.length > 6 ? styles.featuresGridFull : styles.featuresGrid}>
                {section.items.map((item: string, i: number) => (
                  <div key={i} className={styles.featureItem}>
                    <div className={styles.featureCheck}>
                      <CheckCircle size={18} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Closing Statement / Note */}
        {'closingStatement' in service && (
          <div className={styles.processStatement}>
            <Info size={20} className={styles.statementIcon} />
            <p>{service.closingStatement}</p>
          </div>
        )}

        <div className={styles.bottomActions}>
          <div className={styles.actionButtons}>
            <Link 
              href={`https://wa.me/917006823074?text=I%20want%20to%20schedule%20a%20pickup%20for%20${service.title}`}
              className={styles.pickupBtn}
              target="_blank"
            >
              <Calendar size={18} />
              {service.pickupBtnText || "Schedule Pickup"}
            </Link>
            {service.pricingBtnText && (
              <Link href={`/pricing?service=${encodeURIComponent(pricingService)}`} className={styles.pricingBtn}>
                <IndianRupee size={16} />
                {service.pricingBtnText}
              </Link>
            )}
          </div>
          <Link href="/services" className={styles.backBtn}>
            <ArrowRight size={18} className={styles.rotateIcon} />
            {service.backBtnText || "Back to All Services"}
          </Link>
        </div>

      </div>
    </div>
  );
}
