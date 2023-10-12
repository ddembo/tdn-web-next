import SiteCTASection from '@/components/SiteCTASection/SiteCTASection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import SiteHeader from '@/components/SiteHeader/SiteHeader';

export default function WithFooterCTALayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteCTASection />
      <SiteFooter />
    </>
  );
}
