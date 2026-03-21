import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData } from '@/services/servicesData';
import { locations } from '@/services/locationData';
import ServiceHero from '@/components/pSEO/ServiceHero';
import LocationContent from '@/components/pSEO/LocationContent';
import FAQSection from '@/components/pSEO/FAQSection';
import InternalLinks from '@/components/pSEO/InternalLinks';
import JsonLd from '@/components/pSEO/JsonLd';

// Types
type ServiceKey = keyof typeof servicesData;

interface ServiceLocationParams {
  params: {
    slug: string;
    location: string;
  };
}

// 1. Static Generation (SSG) - All combinations of services and locations
export async function generateStaticParams() {
  const params: any[] = [];
  
  Object.keys(servicesData).forEach((serviceSlug) => {
    locations.forEach((location) => {
      params.push({
        slug: serviceSlug,
        location: location.slug,
      });
    });
  });

  return params;
}

// 2. SEO Optimization (Metadata API)
export async function generateMetadata({ params }: ServiceLocationParams): Promise<Metadata> {
  const { slug, location: locationSlug } = await params;
  const service = servicesData[slug as ServiceKey] as any;
  const location = locations.find(l => l.slug === locationSlug);

  if (!service || !location) {
    return { title: "Service Not Found" };
  }

  const serviceName = service.title.replace("Best ", "").replace(" Service", "");
  const title = `Best ${serviceName} Service in ${location.name} | The Orchid Laundry`;
  const description = `The Orchid Laundry provides expert ${serviceName} in ${location.name}. Free doorstep pickup and delivery for families in ${location.areas.slice(0, 3).join(", ")}. Book your premium wash in ${location.name} now!`;
  const projectImages = [
    '/img/dry-cleaning-jpg-500x500.webp',
    '/wash-iron.png',
    '/img/mother-with-daughter-doing-laundry-self-serviece-laundrette.jpg',
    '/img/Premium Laundry-Service-1-1024x576.png',
    '/img/Bridal Wear Cleaning.jpeg',
    '/img/Shoe Cleaning.webp',
    '/img/Sofa and Upholstery.webp',
    '/img/Carpet and Rug Cleaning.jpg',
    '/img/curtain-cleaning.png',
    '/img/household.jpg',
    '/img/steam-ironing-service.png',
    '/img/Laundry by Kilo.jpg',
    '/img/servicee.jpg'
  ];

  const unsplashVisuals = [
    'https://images.unsplash.com/photo-1545173153-5dd921216d78?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1489274495757-95c503936932?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521316730702-829a8e30df4c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567113463300-102550d233c5?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511210115324-c174309e8d1a?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=2070&auto=format&fit=crop'
  ];

  const allImages = [...projectImages, ...unsplashVisuals];
  const locationIndex = locations.findIndex(l => l.slug === locationSlug);
  const serviceIndex = Object.keys(servicesData).indexOf(slug);
  const finalImageIndex = (locationIndex + serviceIndex) % allImages.length;
  const imageUrl = allImages[finalImageIndex];

  return {
    title,
    description,
    alternates: {
      canonical: `https://theorchidlaundry.com/services/${slug}/${locationSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://theorchidlaundry.com/services/${slug}/${locationSlug}`,
      images: [{ url: imageUrl }],
    },
  };
}

// 3. Page Component
export default async function ServiceLocationPage({ params }: ServiceLocationParams) {
  const { slug, location: locationSlug } = await params;
  const service = servicesData[slug as ServiceKey] as any;
  const location = locations.find(l => l.slug === locationSlug);

  if (!service || !location) {
    return notFound();
  }

  const serviceName = service.title.replace("Best ", "").replace(" Service", "");
  const pageUrl = `https://theorchidlaundry.com/services/${slug}/${locationSlug}`;

  // Cleaning up service key string just for display logic
  const serviceDisplayName = service.title.replace("Best ", "");

  // Enhanced Image Selection Logic using Project Assets + Premium Visuals
  const projectImages = [
    '/img/dry-cleaning-jpg-500x500.webp',
    '/wash-iron.png',
    '/img/mother-with-daughter-doing-laundry-self-serviece-laundrette.jpg',
    '/img/Premium Laundry-Service-1-1024x576.png',
    '/img/Bridal Wear Cleaning.jpeg',
    '/img/Shoe Cleaning.webp',
    '/img/Sofa and Upholstery.webp',
    '/img/Carpet and Rug Cleaning.jpg',
    '/img/curtain-cleaning.png',
    '/img/household.jpg',
    '/img/steam-ironing-service.png',
    '/img/Laundry by Kilo.jpg',
    '/img/servicee.jpg'
  ];

  const unsplashVisuals = [
    'https://images.unsplash.com/photo-1545173153-5dd921216d78?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1489274495757-95c503936932?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521316730702-829a8e30df4c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567113463300-102550d233c5?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511210115324-c174309e8d1a?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=2070&auto=format&fit=crop'
  ];

  const allImages = [...projectImages, ...unsplashVisuals];

  // Calculate a stable unique index
  const locationIndex = locations.findIndex(l => l.slug === locationSlug);
  const serviceIndex = Object.keys(servicesData).indexOf(slug);
  const finalImageIndex = (locationIndex + serviceIndex) % allImages.length;
  const imageUrl = allImages[finalImageIndex];

  return (
    <main className="bg-white">
      {/* Schema Markup for Local SEO Rich Results */}
      <JsonLd 
        serviceName={serviceName} 
        locationName={location.name} 
        url={pageUrl} 
        description={location.description}
      />

      {/* Service Hero Section */}
      <ServiceHero 
        serviceName={serviceDisplayName} 
        locationName={location.name} 
        imageUrl={imageUrl}
        serviceSlug={slug}
      />

      {/* Main SEO Body Content */}
      <LocationContent 
        serviceName={serviceName} 
        locationName={location.name} 
        areas={location.areas} 
        description={location.description}
        serviceKey={slug}
      />

      {/* Dynamic Local FAQ Section */}
      <FAQSection 
        serviceName={serviceName} 
        locationName={location.name} 
      />

      {/* Internal Linking Infrastructure */}
      <InternalLinks 
        currentService={serviceDisplayName} 
        currentLocation={location.name} 
        currentServiceSlug={slug} 
        currentLocationSlug={locationSlug} 
      />
    </main>
  );
}
