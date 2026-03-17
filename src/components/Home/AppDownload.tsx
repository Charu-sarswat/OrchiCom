"use client";

import Image from "next/image";
import styles from "./AppDownload.module.css";

export default function AppDownload() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <p className={styles.text}>
              For your convenience, download <strong>The Orchid Laundry</strong> app now
            </p>
          </div>
          <div className={styles.apps}>
            <a href="#" className={styles.appLink}>
              <Image 
                src="/img/app store.png" 
                alt="App Store" 
                width={160} 
                height={50} 
              />
            </a>
            <a href="#" className={styles.appLink}>
              <Image 
                src="/img/play store.png" 
                alt="Play Store" 
                width={160} 
                height={50} 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
