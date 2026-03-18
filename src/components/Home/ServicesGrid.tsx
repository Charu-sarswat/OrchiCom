import Link from 'next/link';
import Image from 'next/image';
import styles from './ServicesGrid.module.css';

const services = [
  { 
    id: 1, 
    title: 'Dry Cleaning', 
    img: '/img/dry-cleaning-jpg-500x500.webp',
    link: '/services/dry-cleaning'
  },
  { 
    id: 2, 
    title: 'Wash & Iron', 
    img: '/wash.png',
    link: '/services/wash-iron'
  },
  { 
    id: 3, 
    title: 'Wash & Fold', 
    img: '/img/mother-with-daughter-doing-laundry-self-serviece-laundrette.jpg',
    link: '/services/wash-fold'
  },
  { 
    id: 4, 
    title: 'Premium Laundry', 
    img: '/img/Premium Laundry-Service-1-1024x576.png',
    link: '/services/premium-laundry'
  },
  { 
    id: 5, 
    title: 'Household Cleaning', 
    img: '/img/household.jpg',
    link: '/services/household'
  },
  { 
    id: 6, 
    title: 'Steam Ironing', 
    img: '/img/steam-ironing-service.png',
    link: '/services/steam-iron'
  },
  { 
    id: 7, 
    title: 'Shoe Cleaning', 
    img: '/img/Shoe Cleaning.webp',
    link: '/services/shoe-cleaning'
  },
  { 
    id: 8, 
    title: 'Sofa Cleaning', 
    img: '/img/Sofa and Upholstery.webp',
    link: '/services/sofa-cleaning'
  },
  { 
    id: 9, 
    title: 'Carpet Cleaning', 
    img: '/img/Carpet and Rug Cleaning.jpg',
    link: '/services/carpet-cleaning'
  },
  { 
    id: 10, 
    title: 'Curtain Cleaning', 
    img: '/img/curtain-cleaning.png',
    link: '/services/curtain-cleaning'
  }
];

const ServicesGrid = () => {
  return (
    <section className={`section-padding ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our <span className="text-gradient">Services</span></h2>
        </div>
        
        <div className={styles.grid}>
          {services.map((service) => (
            <Link href={service.link} key={service.id} className={styles.serviceCard}>
              <div className={styles.imageBox}>
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  priority={service.id <= 3}
                  className={styles.img}
                />
              </div>
              <div className={styles.details}>
                <h3>
                  {service.title.split(' ')[0]} 
                  <span style={{ color: 'var(--primary)', marginLeft: '4px' }}>
                    {service.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
                <span className={styles.linkText}>View Details ➜</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
