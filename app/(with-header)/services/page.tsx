import type { Metadata } from 'next/types';

import Section from '@/components/Section/Section';
import Heading, { H1, H2, H3, H4 } from '@/components/Heading/Heading';
import Hero from '@/components/Hero/Hero';
import SiteCTASection from '@/components/SiteCTASection/SiteCTASection';

import PageStructuredData from './PageStructuredData';

export const metadata: Metadata = {
  title: 'Service menu - The Dreamy Nails',
  description:
    'My individually-tailored services include BIAB manicures, bespoke nail art, soft gel extensions & more',
};

/** 
  NOTE about implementation: a static list is not ideal, but we don't have a CMS or DB to work with
  yet, and a redesign is on the horizon, so I've decided to keep it simple for now. Services and
  pricing will be fully dynamic once a booking system / Shopify is implemented.
*/
export default function ServiceMenu() {
  return (
    <div className="grow">
      <PageStructuredData />
      <Hero title={<H1>Service menu</H1>} />
      <Section as="article">
        <Section.Column>
          <H2>Base service</H2>
          <p className="text-sm italic">
            The Dreamy Nails is a gel-only salon. All services includes cuticle oil and hand-cream.
          </p>
          <table className="mr-auto w-full min-w-[66%] lg:w-[66%]">
            <tbody>
              <tr>
                <td className="py-4">
                  <H3 className="mb-0 lg:mb-0">Naked Manicure</H3>
                  <p className="text-sm">
                    Experience our meticulous signature e-file manicure, designed to enhance your
                    natural nails.
                  </p>
                  <p className="text-sm mb-2">
                    This treatment includes expert cuticle care, precision shaping and buffing,
                    finished with a glossy clear top coat for a flawless, polished look.
                  </p>
                </td>
                <td className="py-4 align-top pl-4 min-w-[115px] lg:min-w-[125px]">
                  <Heading as="p" variant="h3" className="lg:max-w-full">
                    $55
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Structured E-file Manicure</H3>
                  <p className="text-sm">
                    Indulge in the ultimate nail-strengthening treatment with our Structured E-file
                    Manicure, featuring a premium builder gel.
                  </p>
                  <p className="text-sm">
                    This service is perfect for those seeking strong, healthy nails, offering a
                    protective overlay that enhances durability while promoting natural nail growth.
                  </p>
                  <p className="text-sm italic font-extralight mb-2">
                    Please note: for new clients, if removal of existing builder gel is required, a
                    $20 fee may apply at my discretion.
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $100
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Removal + Naked Manicure</H3>
                  <p className="text-sm mb-2">
                    Enjoy a seamless gel removal process, followed by our luxurious e-file manicure.
                    This service includes a gentle acetone soak-off, precision cuticle care,
                    buffing, shaping, and a choice of a high-gloss clear top coat to restore your
                    nails to their natural beauty.
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $65
                  </Heading>
                </td>
              </tr>
            </tbody>
          </table>

          <H2 className="mt-8 lg:mt-12">Nail art</H2>
          <table className="mr-auto w-full min-w-[66%] lg:w-[66%]">
            <tbody>
              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Star dust</H3>
                  <p className="text-sm">
                    Stickers, single chrome colour, cat eye, minimal design (e.g. daisy, heart,
                    stars, etc).
                  </p>
                </td>
                <td className="pt-4 align-top pl-4 w-[80px] lg:w-[125px]">
                  <Heading as="p" variant="h3" className="lg:max-w-full">
                    $20
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Divine</H3>
                  <p className="text-sm">
                    French tips, marble, ombre, aura, abstract lines, 1-2 complex feature nails,
                    tortoise shell.
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="lg:max-w-full">
                    $35
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Celestial</H3>
                  <p className="text-sm">
                    Multi nail art design (10 nails), multi chrome, 3D textures, airbrushing effect,
                    1—2 character design, stones/shells, simple charms, intricate designs.
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $50
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Dreamy Omakase</H3>
                  <p className="text-sm">
                    Omakase — I leave the details up to you. Give me a brief or a theme and let me
                    create works of art on your nails. Push beyond boundaries of just nails.
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $60
                  </Heading>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="mb-8 mr-auto w-full min-w-[66%] lg:w-[66%]">
            <tbody>
              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Cuticle oil pen</H3>
                </td>
                <td className="pt-4 align-top pl-4 w-[100px] lg:w-[125px]">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $15
                  </Heading>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm italic font-extralight">
            This service menu is only an indication, and prices may vary depending on complexity of
            nail art, and any extras at our discretion. Please send a DM if unsure, we’ll always be
            transparent and up-front about additional costs.
          </p>
        </Section.Column>
      </Section>
      <SiteCTASection hideServiceMenu />
    </div>
  );
}
