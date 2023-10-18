import type {
  WebSite,
  NailSalon,
  WebPage,
  Graph,
  BreadcrumbList,
  PostalAddress,
  OpeningHoursSpecification,
  ImageObject,
} from 'schema-dts';

const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
const TIKTOK_URL = process.env.NEXT_PUBLIC_TIKTOK_URL;
const HOMEPAGE_URL = process.env.NEXT_PUBLIC_WEBSITE_HOMEPAGE;
const didResolveVars = INSTAGRAM_URL && TIKTOK_URL;
/*
  NOTE: this should only be included once on the root page, child pages will need their own JSON-LD graph linked to the nodes here.

  The popular `next-seo` package doesn't support the NailSalon or WebSite types... also most components don't seem to accept an id, which is a huge oversight and essential for properly linking to nodes defined on different pages. I decided to just embed my own markup manually for now until I can abstract something better.
*/

export const RootPageId = HOMEPAGE_URL;
export const SiteNodeId = `${HOMEPAGE_URL}#site`;
export const OrganizationId = `${HOMEPAGE_URL}#organization`;
export const AddressId = `${HOMEPAGE_URL}#address`;
const BreadcrumbId = `${HOMEPAGE_URL}#breadcrumb`;
const LogoId = `${HOMEPAGE_URL}#logo`;
export const LogoUrl = `${HOMEPAGE_URL}tdn-logo.svg`;

const commonSiteAndOrgData: Partial<WebSite> & Partial<NailSalon> = {
  name: 'The Dreamy Nails',
  url: HOMEPAGE_URL,
  alternateName: 'thedreamynails.com',
  description: 'Sydney BIAB nail art, manicures & press-ons',
  sameAs: didResolveVars ? [INSTAGRAM_URL, TIKTOK_URL] : undefined,
};

const pageStructuredData: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'PostalAddress',
      '@id': AddressId,
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
      postalCode: '2043',
    } as PostalAddress,
    {
      '@type': 'ImageObject',
      '@id': LogoId,
      inLanguage: 'en-AU',
      url: LogoUrl,
      contentUrl: LogoUrl,
      caption: 'The Dreamy Nails',
      width: { '@type': 'QuantitativeValue', value: '128' },
      height: { '@type': 'QuantitativeValue', value: '180' },
    } as ImageObject,
    {
      '@type': 'WebPage',
      '@id': RootPageId,
      inLanguage: 'en-AU',
      isPartOf: { '@id': SiteNodeId },
      // NOTE: created issue #13 to improve datetime handling here
      // COULD potentially use a vscode keybinding or snippet too https://stackoverflow.com/questions/38780057/how-to-insert-current-date-time-in-vscode
      dateCreated: '2023-09-21T20:39:00+11:00',
      dateModified: '2023-10-15T14:05:00+11:00',
      provider: { '@id': OrganizationId },
      about: { '@id': OrganizationId },
      breadcrumb: { '@id': BreadcrumbId },
      thumbnailUrl: LogoUrl,
      potentialAction: [{ '@type': 'ReadAction', target: [RootPageId] }],
    } as WebPage,
    {
      '@type': 'BreadcrumbList',
      '@id': BreadcrumbId,
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: RootPageId }],
    } as BreadcrumbList,
    {
      '@type': 'WebSite',
      '@id': SiteNodeId,
      inLanguage: 'en-AU',
      ...commonSiteAndOrgData,
      dateCreated: '2023-09-21T20:39:00+11:00',
      dateModified: '2023-10-15T14:05:00+11:00', // TODO: This should change every deployment
      provider: { '@id': OrganizationId },
    } as WebSite,
    {
      '@type': 'NailSalon',
      '@id': OrganizationId,
      logo: { '@id': LogoId },
      ...commonSiteAndOrgData,
      address: { '@id': AddressId },
      location: { '@id': AddressId },
      image: { '@id': LogoId },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00:00',
        closes: '17:30:00',
      } as OpeningHoursSpecification,
    } as NailSalon,
  ],
};

export default function RootStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
    />
  );
}
