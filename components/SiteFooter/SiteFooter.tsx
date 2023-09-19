import Image from 'next/image';
import ButtonLink from '../ButtonLink/ButtonLink';
import Section from '../Section/Section';

export default function SiteFooter() {
  return (
    <footer className="pt-4 mt-4 text-tdn-highlight text-xs text-center bg-tdn-primary">
      <Section>
        <nav className="footer__nav">
          <ul className="footer-link-list">
            <li className="footer-link-list__item">
              <ButtonLink inline href="/" variant="subtle">
                Home
              </ButtonLink>
            </li>
            <li className="footer-link-list__item">
              <ButtonLink inline href="/prices" variant="subtle">
                Price Menu
              </ButtonLink>
            </li>
            <li className="footer-link-list__item">
              <ButtonLink inline href="/faq" variant="subtle">
                FAQ
              </ButtonLink>
            </li>
          </ul>
        </nav>
        <ul className="footer-link-list">
          <li className="footer-link-list__item">
            <ButtonLink inline href="https://instagram.com/thedreamynails" variant="subtle">
              <Image
                src="./logo-instagram.svg"
                alt="Follow The Dreamy Nails on Instagram"
                width={24}
                height={24}
              />
            </ButtonLink>
          </li>
          <li className="footer-link-list__item">
            <ButtonLink inline href="https://www.tiktok.com/@thedreamynails" variant="subtle">
              <Image
                src="./logo-tiktok.svg"
                alt="Follow The Dreamy Nails on TikTok"
                width={24}
                height={24}
              />
            </ButtonLink>
          </li>
        </ul>
        <small className="footer__copyright">&copy; 2023 The Dreamy Nails</small>
      </Section>
    </footer>
  );
}
