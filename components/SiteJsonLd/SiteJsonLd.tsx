import type { WithContext, WebSite, NailSalon } from 'schema-dts';

const webSiteJsonLD: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Dreamy Nails',
  description: 'Sydney BIAB nail art, manicures & press-ons',
};

const nailSalonJsonLD: NailSalon = {
  '@type': 'NailSalon',
  name: 'The Dreamy Nails',
  description: 'Sydney BIAB nail art, manicures & press-ons',
  location: {
    '@type': 'PostalAddress',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    addressCountry: 'AU',
    postalCode: '2043',
  },
};

/*
  NOTE: this should only be included once on the root page, child pages will need their own customisations e.g. for image galleries, product pages, etc.

  The popular `next-seo` package doesn't support the WebSite type, so decided to just implement this manually for now. It's manageable because it's currently only needed on one page, will need some abstraction eventually.

*/
export default function SiteJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nailSalonJsonLD) }}
      />
    </>
  );
}
