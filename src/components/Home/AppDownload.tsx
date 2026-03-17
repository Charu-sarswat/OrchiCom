"use client";

import { GrAppleAppStore } from "react-icons/gr";
import { SiGoogleplay } from "react-icons/si";
import styles from "./AppDownload.module.css";

export default function AppDownload() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.text}>
              Download <strong>The Orchid Laundry</strong> app now
            </p>
          </div>
          <div className={styles.apps}>
            <a href="#" className={`${styles.appLink} ${styles.apple}`}>
              <GrAppleAppStore className={styles.icon} />
              <div className={styles.btnText}>
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </a>
            <a href="#" className={`${styles.appLink} ${styles.google}`}>
              <SiGoogleplay className={styles.icon} />
              <div className={styles.btnText}>
                <span>GET IT ON</span>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
