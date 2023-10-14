import { MetadataRoute } from 'next'
 
const BASE_URL = `https://${process.env.NEXT_PUBLIC_DOMAIN}`;

/* NOTE: changeFrequency weekly for all pages while we work towards v2... this is so the changes
  will get crawled regularly. When v2 is done and site content is more stable, this could
  negatively impact SEO due to unnecessary crawls, so we should adjust to monthly/yearly for
  static pages, and less for dynamic e.g. shop pages.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]
}