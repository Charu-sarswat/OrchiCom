import styles from '../legal/legal.module.css';

export default function TermsPage() {
  return (
    <div className={`section-padding ${styles.page}`}>
      <div className="container">
        <div className={styles.content}>
          <h1>Terms & <span className="text-gradient">Conditions</span></h1>
          <p className={styles.lastUpdated}>Last Updated: March 2026</p>
          
          <section>
            <h2>1. Service Terms</h2>
            <p>By using The Orchid Laundry services, you agree to these terms. We provide professional laundry and dry cleaning services. Every effort is made to provide the best garment care, however, we are not responsible for natural wear and tear or damage from existing defects.</p>
          </section>

          <section>
            <h2>2. Pickup & Delivery</h2>
            <p>Pickup and delivery times are estimates. While we strive for punctuality, factors like traffic or weather may cause delays. Minimum order values apply for free pickup and delivery services.</p>
          </section>

          <section>
            <h2>3. Liability</h2>
            <p>In the rare event of loss or damage caused by our process, our liability is limited to 5 times the cleaning cost of the item or a maximum of ₹2,000, whichever is lower, unless otherwise specified.</p>
          </section>

          <section>
            <h2>4. Cancellations</h2>
            <p>Orders can be cancelled up to 4 hours before the scheduled pickup time without any charges.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
