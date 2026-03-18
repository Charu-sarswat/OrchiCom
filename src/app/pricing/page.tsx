"use client";

import { useState, Fragment, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./pricing.module.css";
import { Search, Info, Truck, Clock, CheckCircle, Package, Star, Calendar, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    name: "Basic Plan",
    price: "₹2999",
    features: [
      "Free Pick-up and delivery",
      "Minimum Bill Amount Rs. 200 per visit",
      "Weekly one visit",
      "Unlimited validity",
      "5% discount on all services"
    ],
    popular: false,
  },
  {
    name: "Professional Plan",
    price: "₹4999",
    features: [
      "Free Pick-up and delivery",
      "Minimum Bill Amount Rs. 300 per visit",
      "Weekly one visit",
      "Unlimited validity",
      "7% discount on all services"
    ],
    popular: true,
  },
  {
    name: "Premium Plan",
    price: "₹9999",
    features: [
      "Free Pick-up and delivery",
      "Minimum Bill Amount Rs. 500 per visit",
      "Weekly one visit",
      "Unlimited validity",
      "10% discount on all services"
    ],
    popular: false,
  }
];

const pricingData = {
  "Dry Clean": [
    {
      category: "Men",
      items: [
        { name: "Coat", price: "₹249" },
        { name: "Coat - Short", price: "₹249" },
        { name: "Jacket - Short (including leather)", price: "₹249" },
        { name: "Kimono / Kurta", price: "₹175" },
        { name: "Overcoat", price: "₹425" },
        { name: "Shawl - Kashmiri /", price: "₹249" },
        { name: "Suit (2-Piece)", price: "₹249" },
        { name: "Sherwani - Cotton", price: "₹349" },
      ]
    },
    {
      category: "Women",
      items: [
        { name: "Saree (Plain)", price: "₹249" },
        { name: "Saree (Heavy Embroidery)", price: "₹449" },
        { name: "Suit (3-Piece)", price: "₹299" },
        { name: "Lehenga (Normal)", price: "₹549" },
        { name: "Blouse", price: "₹99" },
      ]
    }
  ],
  "Steam Press": [
    {
      category: "Men",
      items: [
        { name: "Shirt", price: "₹25" },
        { name: "Trousers", price: "₹25" },
        { name: "Suit (2-Piece)", price: "₹149" },
      ]
    },
    {
      category: "Women",
      items: [
        { name: "Saree", price: "₹65" },
        { name: "Kurta", price: "₹25" },
      ]
    }
  ],
  "Wash Per KG": [
    {
      category: "Household",
      items: [
        { name: "Wash & Fold", price: "₹60/kg" },
        { name: "Wash & Iron", price: "₹80/kg" },
      ]
    }
  ]
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

interface PricingItem {
  name: string;
  price: string;
}

interface PricingGroup {
  category: string;
  items: PricingItem[];
}

interface PricingDataMap {
  [serviceName: string]: PricingGroup[];
}

interface Plan {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

export default function PricingPage() {
  return (
    <Suspense fallback={<div>Loading Pricing...</div>}>
      <PricingContent />
    </Suspense>
  );
}

function PricingContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeService, setActiveService] = useState("Dry Clean");
  const [activeCategory, setActiveCategory] = useState("All");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [pricingData, setPricingData] = useState<PricingDataMap>({});
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();

  // Pre-select service tab from ?service= query param
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setActiveService(serviceParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Fetch Services and Categories
        const servicesRes = await fetch(`${API_URL}/services/all`);
        const services = await servicesRes.json();

        // Transform services data to pricingData format
        const formattedPricing: any = {};
        
        // Define desired order
        const serviceOrder = ["dry clean", "wash per kg", "steam iron"];
        
        services.forEach((service: any) => {
          // Normalize service name: trim and replace multiple whitespaces/newlines with a single space
          const rawName = service.name || "";
          const normalizedName = rawName.trim().replace(/\s+/g, ' ');
          const lowerName = normalizedName.toLowerCase();
          
          // Determine display name
          let displayName = normalizedName;
          if (lowerName.includes("dry") && lowerName.includes("clean")) displayName = "Dry Clean";
          else if (lowerName.includes("steam") && (lowerName.includes("press") || lowerName.includes("iron"))) displayName = "Steam Iron";
          else if (lowerName.includes("wash") && lowerName.includes("kg")) displayName = "Wash Per Kg";

          if (lowerName.includes("wash") && lowerName.includes("kg")) {
            // Special handling for Wash Per Kg: categories with prices but no sub-items
            const items = service.LaundryCategory.flatMap((cat: any) => {
              if (cat.LaundryItem && cat.LaundryItem.length > 0) {
                return cat.LaundryItem.map((item: any) => ({
                  name: item.name,
                  price: `₹${item.price}${item.perUnit ? `/${item.perUnit}` : item.unit ? `/${item.unit}` : ""}`
                }));
              } else {
                return [{
                  name: cat.name,
                  price: `₹${cat.price}${cat.unit ? `/${cat.unit}` : ""}`
                }];
              }
            });

            formattedPricing[displayName] = [{
              category: "Products",
              items: items
            }];
          } else {
            // Grouping logic for Dry Clean and Steam Press
            const groups: { [key: string]: any[] } = {
              "Men": [],
              "Women": [],
              "Kids": [],
              "Others": []
            };

            service.LaundryCategory.forEach((cat: any) => {
              const catName = cat.name.toLowerCase();
              let targetGroup = "Others";
              
              if (catName.includes("men") && !catName.includes("women")) targetGroup = "Men";
              else if (catName.includes("women")) targetGroup = "Women";
              else if (catName.includes("kid") || catName.includes("child")) targetGroup = "Kids";

              const catItems = cat.LaundryItem.map((item: any) => ({
                name: item.name,
                price: `₹${item.price}${item.perUnit ? `/${item.perUnit}` : item.unit ? `/${item.unit}` : ""}`
              }));

              groups[targetGroup].push(...catItems);
            });

            formattedPricing[displayName] = Object.entries(groups)
              .filter(([_, items]) => items.length > 0)
              .map(([name, items]) => ({
                category: name,
                items: items
              }));
          }
        });

        // Re-calculate sorted names for selection
        const availableServices = Object.keys(formattedPricing).sort((a, b) => {
          const idxA = serviceOrder.indexOf(a.toLowerCase());
          const idxB = serviceOrder.indexOf(b.toLowerCase());
          if (idxA !== -1 && idxB !== -1) return idxA - idxB;
          if (idxA !== -1) return -1;
          if (idxB !== -1) return 1;
          return a.localeCompare(b);
        });

        setPricingData(formattedPricing);
        if (availableServices.length > 0) {
          setActiveService(availableServices[0]);
        }

        // Fetch Subscription Plans
        const plansRes = await fetch(`${API_URL}/subscriptions`);
        const plansData = await plansRes.json();
        setPlans(plansData.map((p: any) => ({
          name: p.name,
          price: `₹${p.price}`,
          features: p.features || [],
          popular: p.isPopular || false
        })));

      } catch (error) {
        console.error("Error fetching pricing data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Reset category when service changes
  useEffect(() => {
    setActiveCategory("All");
  }, [activeService]);

  const categories = ["All", ...new Set((pricingData[activeService] || []).map((g: PricingGroup) => g.category))];
  
  const serviceOrder = ["dry clean", "wash per kg", "steam iron"];
  const services = Object.keys(pricingData).sort((a, b) => {
    const idxA = serviceOrder.indexOf(a.toLowerCase());
    const idxB = serviceOrder.indexOf(b.toLowerCase());
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.localeCompare(b);
  });

  const currentServiceData = pricingData[activeService] || [];

  const filteredData = currentServiceData.filter((group: PricingGroup) => 
    activeCategory === "All" || group.category === activeCategory
  ).map((group: PricingGroup) => ({
    ...group,
    items: group.items.filter((item: PricingItem) => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter((group: any) => group.items.length > 0);

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <h1>Our services & pricing</h1>
        </div>

        {/* Search Bar */}
        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder="Search items (e.g. shirt, saree, comforter...)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchBtn}>
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className={styles.filtersSection}>
          <div className={styles.filterGroup}>
            <p>Services</p>
            <div className={styles.filterPills}>
              {services.map(service => (
                <button 
                  key={service}
                  className={activeService === service ? styles.activeService : ""}
                  onClick={() => setActiveService(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <p>Category</p>
            <div className={styles.categoryPills}>
              {!activeService.toLowerCase().includes("kg") && categories.map(cat => (
                <button 
                  key={cat}
                  className={activeCategory === cat ? styles.activeCategory : ""}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
              {activeService.toLowerCase().includes("kg") && (
                <span style={{ fontSize: '0.9rem', color: '#666' }}>All items shown below</span>
              )}
            </div>
          </div>
        </div>

        {/* Current Selection Info */}
        <div className={styles.selectionInfo}>
          <p>You are in <span>{activeService}</span> » <span>{activeCategory}</span></p>
        </div>

        {/* Pricing Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Service Category</th>
                <th>Item Description</th>
                <th>Price (INR)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((group) => (
                  <Fragment key={group.category}>
                    {!activeService.toLowerCase().includes("kg") && (
                      <tr className={styles.categoryHeader}>
                        <td colSpan={3}>
                          <div className={styles.catTitle}>
                            <User size={16} /> {group.category}
                          </div>
                        </td>
                      </tr>
                    )}
                    {group.items.map((item, i) => (
                      <tr key={i}>
                        <td className={styles.groupCol}>{activeService.toLowerCase().includes("kg") ? "Laundry" : `${group.category} Service`}</td>
                        <td className={styles.itemCol}>{item.name}</td>
                        <td className={styles.priceCol}>{item.price}</td>
                      </tr>
                    ))}
                  </Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className={styles.noResults}>No items found matching your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add-on Services */}
        <div className={styles.addOns}>
          <h3><Star size={20} /> Add-on Services</h3>
          <ul className={styles.addOnList}>
            <li><Star className={styles.starIcon} size={16} /> <span>Starch:</span> <strong>₹10/per piece</strong></li>
            <li><Star className={styles.starIcon} size={16} /> <span>Fragrance:</span> <strong>₹10/per piece</strong></li>
            <li><Star className={styles.starIcon} size={16} /> <span>Antiseptic Wash:</span> <strong>₹10/per piece</strong></li>
            <li><Star className={styles.starIcon} size={16} /> <span>Express Service (20% extra):</span> <strong>Min ₹199</strong></li>
          </ul>
        </div>

        {/* Subscription Plans */}
        <div className={styles.plansSection}>
          <h2>Subscription plans</h2>
          <div className={styles.plansGrid}>
            {plans.map((plan, idx) => (
              <div key={idx} className={`${styles.planCard} ${plan.popular ? styles.popular : ""}`}>
                {plan.popular && <span className={styles.popularBadge}>Most Popular</span>}
                <div className={styles.planHeader}>
                   <h3>{plan.name}</h3>
                   <div className={styles.planPrice}>{plan.price}</div>
                </div>
                <ul className={styles.planFeatures}>
                  {plan.features.map((f, i) => (
                    <li key={i}><CheckCircle size={18} className={styles.checkIcon} /> {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Info */}
        <div className={styles.deliveryBanner}>
          <div className={styles.deliveryHeader}>
            <Truck size={24} />
            <h4>Pickup & Delivery Charges</h4>
          </div>
          <div className={styles.deliveryContent}>
            <div className={styles.deliveryRow}>
              <div className={styles.deliveryBullet}>
                <span className={styles.dot}></span>
                <p>&lt; ₹299: <span>₹60 delivery charge</span></p>
              </div>
              <div className={styles.deliveryBullet}>
                <span className={styles.dot}></span>
                <p>₹299 - ₹499: <span>₹30 delivery charge</span></p>
              </div>
              <div className={styles.deliveryBullet}>
                <span className={styles.dot}></span>
                <p>&gt; ₹499: <span>FREE delivery</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <h3><Clock size={20} /> Pick-up & Delivery Slots</h3>
            <div className={styles.slots}>
              <p>Slot 1: 9:00 AM - 12:00 PM</p>
              <p>Slot 2: 12:00 PM - 3:00 PM</p>
              <p>Slot 3: 3:00 PM - 6:00 PM</p>
              <p>Slot 4: 6:00 PM - 9:00 PM</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <h3><Calendar size={20} /> Cut-off Timings</h3>
            <div className={styles.slots}>
              <p>Slots 1 & 2: Cut-off 10:00 PM (Previous Day)</p>
              <p>Slots 3 & 4: Cut-off 10:00 AM (Same day)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
