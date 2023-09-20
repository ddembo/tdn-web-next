import Image from 'next/image';
import ButtonLink from '../ButtonLink/ButtonLink';
import Section from '../Section/Section';

// consider a List component
const listStyles = 'inline-block p-0 m-0 pb-4 w-full list-none'
const listItemStyles = "inline text-tdn-highlight before:content-['·'] before:mx-2 before:first-of-type:content-none"

export default function SiteFooter() {
  return (
    <footer className="pt-4 mt-4 text-tdn-highlight text-xs text-center bg-tdn-primary">
      <Section as="div">
        <nav className="w-full">
          <ul className={listStyles}>
            <li className={listItemStyles}>
              <ButtonLink inline href="/" variant="subtle">
                Home
              </ButtonLink>
            </li>
            <li className={listItemStyles}>
              <ButtonLink inline href="/prices" variant="subtle">
                Price Menu
              </ButtonLink>
            </li>
            <li className={listItemStyles}>
              <ButtonLink inline href="/faq" variant="subtle">
                FAQ
              </ButtonLink>
            </li>
          </ul>
        </nav>
        <ul className={listStyles}>
          <li className={listItemStyles}>
            <ButtonLink inline href="https://instagram.com/thedreamynails" variant="subtle">
              {/* TODO: need to refactor svg's into components so i can change the color. u_u */}
              <Image
                src="./logo-instagram.svg"
                alt="Follow The Dreamy Nails on Instagram"
                width={24}
                height={24}
              />
            </ButtonLink>
          </li>
          <li className={listItemStyles}>
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
        <small className="w-full font-extralight">&copy; 2023 The Dreamy Nails</small>
      </Section>
    </footer>
  );
}
