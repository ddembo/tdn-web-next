import { MetadataRoute } from 'next'
 
/* NOTE: changeFrequency weekly for all pages while we work towards v2... this is so the changes
  will get crawled regularly. When v2 is done and site content is more stable, this could
  negatively impact SEO due to unnecessary crawls, so we should adjust to monthly/yearly for
  static pages, and less for dynamic e.g. shop pages.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://thedreamynails.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://thedreamynails.com/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://thedreamynails.com/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]
}