import Link from 'next/link';
import Image from 'next/image';

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
    <section className="bg-white section-padding">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-[2rem] md:text-5xl font-bold leading-[1.2]">Our <span className="text-gradient">Services</span></h2>
        </div>
        
        <div className="grid gap-y-10 gap-x-4 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mt-8 lg:mt-12">
          {services.map((service) => (
            <Link href={service.link} key={service.id} className="group bg-transparent no-underline flex flex-col items-center gap-3 lg:gap-4 transition-all duration-300">
              <div className="relative w-[100px] h-[100px] md:w-[90px] md:h-[90px] rounded-xl overflow-hidden border-[1.5px] border-transparent transition-all duration-300 group-hover:border-[#18A1D8] shadow-none">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  priority={service.id <= 3}
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-[1.15rem] font-extrabold m-0">
                  {service.title.split(' ')[0]} 
                  <span className="text-primary ml-1">
                    {service.title.split(' ').slice(1).join(' ')}
                  </span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
