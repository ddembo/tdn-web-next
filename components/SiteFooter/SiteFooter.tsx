import ButtonLink from '@/components/ButtonLink/ButtonLink';
import SiteCTASection from '@/components/SiteCTASection/SiteCTASection';
import InstagramLogo from '@/components/icons/InstagramLogo';
import TikTokLogo from '@/components/icons/TikTokLogo';

const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '/';
const TIKTOK_URL = process.env.NEXT_PUBLIC_TIKTOK_URL || '/';

// consider a List component
const listStyles = 'inline-block p-0 m-0 pb-4 w-full list-none';
const listItemStyles =
  "inline text-tdn-highlight before:content-['·'] before:mx-2 before:first-of-type:content-none";

export default function SiteFooter() {
  return (
    <>
      <SiteCTASection />
      <footer className="justify-self-end w-full py-4 text-tdn-highlight text-xs text-center bg-tdn-primary">
        <div className="mx-auto lg:max-w-[978px]">
          <nav className="w-full">
            <ul className={listStyles}>
              <li className={listItemStyles}>
                <ButtonLink inline href="/" variant="subtle">
                  Home
                </ButtonLink>
              </li>
              <li className={listItemStyles}>
                <ButtonLink inline href="/about" variant="subtle">
                  About me
                </ButtonLink>
              </li>
              <li className={listItemStyles}>
                <ButtonLink inline href="/services" variant="subtle">
                  Service menu
                </ButtonLink>
              </li>
            </ul>
          </nav>
          <ul className={listStyles}>
            <li className={listItemStyles}>
              <ButtonLink inline href={INSTAGRAM_URL} variant="subtle">
                <InstagramLogo />
              </ButtonLink>
            </li>
            <li className={listItemStyles}>
              <ButtonLink inline href={TIKTOK_URL} variant="subtle">
                <TikTokLogo />
              </ButtonLink>
            </li>
          </ul>
          <small className="w-full font-extralight">&copy; 2023 The Dreamy Nails</small>
        </div>
      </footer>
    </>
  );
}
