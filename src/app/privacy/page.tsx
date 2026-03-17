import styles from '../legal/legal.module.css';

export default function PrivacyPage() {
  return (
    <div className={`section-padding ${styles.page}`}>
      <div className="container">
        <div className={styles.content}>
          <h1>Privacy <span className="text-gradient">Policy</span></h1>
          <p className={styles.lastUpdated}>Last Updated: March 2026</p>
          
          <section>
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support. This may include your name, email address, phone number, and physical address for pickup/delivery.</p>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, including to process transactions, send notifications about your orders, and respond to your inquiries.</p>
          </section>

          <section>
            <h2>3. Data Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
          </section>

          <section>
            <h2>4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at Info@theorchidlaudnry.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
