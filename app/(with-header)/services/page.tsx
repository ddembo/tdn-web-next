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
            The Dreamy Nails is a gel-only salon. All services finish with cuticle oil and a
            hand-cream massage.
          </p>
          <table className="mr-auto w-full min-w-[66%] lg:w-[66%]">
            <tbody>
              <tr>
                <td className="py-4">
                  <H3 className="mb-0 lg:mb-0">Naked manicure</H3>
                  <p className="text-sm">
                    Includes signature cuticle care, buff & shape and a choice of clear top coat.
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
                  <H3 className="mb-0 lg:mb-0">Soft gel extensions</H3>
                  <p className="text-sm mb-2">
                    Includes signature cuticle care, nail prep, application of soft gel extensions
                    with a choice of up to 3 gel colours.
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $95
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Structured manicure (BIAB)</H3>
                  <p className="text-sm mb-2">
                    Includes detailed cuticle care, nail prep, and application of a builder gel and
                    gel colour over the natural nails.
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $90
                  </Heading>
                </td>
              </tr>
              <tr>
                <td className="pl-4">
                  <H4>Infill</H4>
                  <p className="text-sm mb-2">
                    For clients returning to The Dreamy Nails within 3 weeks.
                  </p>
                </td>
                <td className="align-top pl-4">
                  <Heading as="p" variant="h4" className="mb-0 lg:mb-0 lg:max-w-full">
                    $75
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Removal manicure</H3>
                  <p className="text-sm mb-2">
                    Includes soak-off with acetone, signature cuticle care, buff & shape and a
                    choice of clear top coat.
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $65
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Removal</H3>
                  <p className="text-sm mb-2">
                    A soak-off with acetone. This price only applies if followed by one of the base
                    services above, otherwise please book a <b>removal manicure</b>.
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $20
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

          <H2 className="mt-8 lg:mt-12">Add-ons</H2>
          <table className="mb-8 mr-auto w-full min-w-[66%] lg:w-[66%]">
            <tbody>
              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Nail repair</H3>
                  <p className="text-sm">Request for a repair on a chipped, broken or torn nail.</p>
                </td>
                <td className="pt-4 align-top pl-4 w-[100px] lg:w-[125px]">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $5/nail
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Cuticle oil pen</H3>
                  <p className="text-sm">
                    My homemade natural cuticle oil is vegan, cruelty free, and will keep your
                    cuticles looking and feeling their best between visits. Made from nourishing
                    ingredients such as jojoba, calendula and Vitamin E.
                  </p>
                </td>
                <td className="pt-4 align-top pl-4 w-[100px] lg:w-[125px]">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $10
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Charms</H3>
                  <p className="text-sm">Price is variable depending on your specific needs.</p>
                </td>
                <td className="pt-4 align-top pl-4 w-[100px] lg:w-[125px]">&nbsp;</td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">
                    After-hours appointments
                  </H3>
                  <p className="text-sm">
                    Appointments outside of regular hours are available at our discretion and will
                    incur a $20 surcharge. This includes appointments that start after 6:30pm on a
                    weekday, or any time on a weekend or public holiday.
                  </p>
                </td>
                <td className="pt-4 align-top pl-4 w-[100px] lg:w-[125px]">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $20
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
