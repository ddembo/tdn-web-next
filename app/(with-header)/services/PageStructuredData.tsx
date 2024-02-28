import type { WebPage, Graph, BreadcrumbList } from 'schema-dts';

import { LogoUrl, OrganizationId, RootPageId, SiteNodeId } from '@/app/RootStructuredData';

/* NOTE: this schema references objects defined in /app/RootStructuredData.tsx */
const ThisPageId = 'https://www.thedreamynails.com/services/';
const BreadcrumbId = `${ThisPageId}#breadcrumb`;

const pageStructuredData: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': ThisPageId,
      inLanguage: 'en-AU',
      isPartOf: { '@id': SiteNodeId },
      dateCreated: '2023-09-21T20:39:00+11:00',
      dateModified: '2024-02-28T22:10:00+11:00',
      provider: { '@id': OrganizationId },
      breadcrumb: { '@id': BreadcrumbId },
      thumbnailUrl: LogoUrl,
      potentialAction: [{ '@type': 'ReadAction', target: [ThisPageId] }],
    } as WebPage,
    {
      '@type': 'BreadcrumbList',
      '@id': BreadcrumbId,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: RootPageId },
        { '@type': 'ListItem', position: 2, name: 'Service menu', item: ThisPageId },
      ],
    } as BreadcrumbList,
  ],
};

export default function PageStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
    />
  );
}
