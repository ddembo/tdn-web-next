import type { WebSite, NailSalon, WebPage, Graph, BreadcrumbList } from 'schema-dts';

const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
const TIKTOK_URL = process.env.NEXT_PUBLIC_TIKTOK_URL;
const HOMEPAGE_URL = process.env.NEXT_PUBLIC_WEBSITE_HOMEPAGE;
const didResolveVars = INSTAGRAM_URL && TIKTOK_URL;
/*
  NOTE: this should only be included once on the root page, child pages will need their own JSON-LD graph linked to the nodes here.

  The popular `next-seo` package doesn't support the NailSalon or WebSite types... also most components don't seem to accept an id, which is a huge oversight and essential for properly linking to nodes defined on different pages. I decided to just embed my own markup manually for now until I can abstract something better.
*/

// TODO: once this is stable and verified, clean this up with env vars.
export const RootPageId = HOMEPAGE_URL;
export const SiteNodeId = `${HOMEPAGE_URL}#site`;
export const OrganizationId = `${HOMEPAGE_URL}#organization`;
const BreadcrumbId = `${HOMEPAGE_URL}#breadcrumb`;

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
      '@type': 'WebPage',
      '@id': RootPageId,
      isPartOf: SiteNodeId,
      // NOTE: created issue #13 to improve datetime handling here
      // COULD potentially use a vscode keybinding or snippet too https://stackoverflow.com/questions/38780057/how-to-insert-current-date-time-in-vscode
      dateCreated: '2023-09-21T20:39:00+11:00',
      dateModified: '2023-10-04T20:50:00+11:00',
      provider: OrganizationId,
      breadcrumb: BreadcrumbId,
    } as WebPage,
    {
      '@type': 'BreadcrumbList',
      '@id': BreadcrumbId,
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: RootPageId }],
    } as BreadcrumbList,
    {
      '@type': 'WebSite',
      '@id': SiteNodeId,
      ...commonSiteAndOrgData,
      dateCreated: '2023-09-21T20:39:00+11:00',
      dateModified: '2023-10-04T20:50:00+11:00', // TODO: This should change every deployment
      provider: OrganizationId,
    } as WebSite,
    {
      '@type': 'NailSalon',
      '@id': OrganizationId,
      logo: `${HOMEPAGE_URL}logo.png`,
      ...commonSiteAndOrgData,
      location: {
        '@type': 'PostalAddress',
        addressLocality: 'Sydney',
        addressRegion: 'NSW',
        addressCountry: 'AU',
        postalCode: '2043',
      },
      openingHours: 'Mo-Sa 09:00-18:00',
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
