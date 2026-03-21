import { MetadataRoute } from 'next';
import { servicesData } from '@/services/servicesData';
import { locations } from '@/services/locationData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://theorchidlaundry.com';

  // 1. Static Base Routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/pricing',
    '/faq',
    '/privacy',
    '/terms',
    '/services',
    '/blog',
    '/booking',
    '/b2b-services'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }));

  // 2. Individual Service Pages (e.g., /services/dry-cleaning)
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 3. Programmatic SEO Location Pages (300+ pages)
  const locationRoutes: MetadataRoute.Sitemap = [];
  
  Object.keys(servicesData).forEach((serviceSlug) => {
    locations.forEach((location) => {
      locationRoutes.push({
        url: `${baseUrl}/services/${serviceSlug}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    });
  });

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
  ];
}
