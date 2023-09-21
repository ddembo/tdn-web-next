import type { Metadata } from 'next/types';

import Section from '@/components/Section/Section';
import Heading, { H1, H2, H3, H4 } from '@/components/Heading/Heading';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';

export const metadata: Metadata = {
  title: 'The Dreamy Nails | Service menu',
  description: 'Get an idea of my current nail services, and how much your appointment will cost.',
};

/** 
  NOTE about implementation: a static list is not ideal, but we don't have a CMS or DB to work with
  yet, and a redesign is on the horizon, so I've decided to keep it simple for now. Services and
  pricing will be fully dynamic once a booking system / Shopify is implemented.
*/
export default function ServiceMenu() {
  return (
    <div className="grow">
      {/* FIXME: fix types for heading prop so I don't need a Fragment */}
      <Hero heading={<>Service menu</>} />
      <Section>
        <Section.Column>
          <H2>Base services</H2>
          <p className="text-sm italic">All services include cuticle oil and hand-cream</p>
          <table className="mr-auto w-full min-w-[66%] lg:w-[66%]">
            <tbody>
              <tr>
                <td className="py-4">
                  <H3 className="mb-0 lg:mb-0">Naked mani</H3>
                  <p className="text-sm">
                    Includes signature cuticle care, buff & shape and a choice of clear top coat
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
                  <p className="text-sm">
                    Includes signature cuticle care, nail prep, application of soft gel extensions
                    with a choice of up to 3 gel colours
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    From $65
                  </Heading>
                </td>
              </tr>
              <tr>
                <td className="pt-1">
                  <H4>Infill (2 — 4 weeks)</H4>
                </td>
                <td className="pt-1 align-top pl-4">
                  <Heading as="p" variant="h4" className="mb-0 lg:mb-0 lg:max-w-full">
                    $65
                  </Heading>
                </td>
              </tr>
              <tr>
                <td className="pt-1">
                  <H4>Rebalance (5+ weeks)</H4>
                </td>
                <td className="pt-1 align-top pl-4">
                  <Heading as="p" variant="h4" className="lg:max-w-full">
                    $80
                  </Heading>
                </td>
              </tr>
              <tr>
                <td className="pt-1">
                  <H4>Xl — xxxl length</H4>
                </td>
                <td className="pt-1 align-top pl-4">
                  <Heading as="p" variant="h4" className="lg:max-w-full">
                    From +$15
                  </Heading>
                </td>
              </tr>
            </tbody>
          </table>

          <H2 className="mt-8 lg:mt-12">Nail art packages</H2>
          <table className="mr-auto w-full min-w-[66%] lg:w-[66%]">
            <tbody>
              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Star dust</H3>
                  <p className="text-sm">
                    Includes stickers, chrome, simple lines/swirls, hearts, stars
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
                    Includes a single colour airbrush, chrome, single colour aura encapsulated
                    ombre, marble
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="lg:max-w-full">
                    $30
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Celestial</H3>
                  <p className="text-sm">
                    Includes a multi-colour airbrush colour, multi-colour aura colour, 3d art
                  </p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $40
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Clean girl</H3>
                  <p className="text-sm">Includes French/micro French tips</p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $35
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">The Dreamy freestyle</H3>
                  <p className="text-sm">
                    Includes a multi-colour airbrush colour, multi-colour aura colour, 3D art
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

          <H2 className="mt-8 lg:mt-12">Bling</H2>
          <table className="mr-auto w-full min-w-[66%] lg:w-[66%]">
            <tbody>
              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Small</H3>
                  <p className="text-sm">Mini to small crystals, pearls and metallic balls</p>
                </td>
                <td className="pt-4 align-top pl-4 w-[100px] lg:w-[125px]">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $0.6/nail
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Medium</H3>
                  <p className="text-sm">Medium charms, crystals, bows, hearts, character</p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $3/nail
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Large</H3>
                  <p className="text-sm">Large charms, crystals, dangling, 3D</p>
                </td>
                <td className="pt-4 align-top pl-4">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $5/nail
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
                  <H3 className="mb-0 lg:mb-0">Removal (External, no SNS & acrylic)</H3>
                  <p className="text-sm">
                    Gel nail enhancement that has been performed by someone else. This includes a
                    soak-off with acetone prior to any new application (Please note that this does
                    not include any manicure)
                  </p>
                </td>
                <td className="pt-4 align-top pl-4 w-[100px] lg:w-[125px]">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $40
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Removal (In-house)</H3>
                  <p className="text-sm">
                    Nail enhancement that has been performed by myself. This includes a soak-off
                    with acetone prior to any new application (Please note that this does not
                    include any manicure)
                  </p>
                </td>
                <td className="pt-4 align-top pl-4 w-[100px] lg:w-[125px]">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $20
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Nail repair</H3>
                  <p className="text-sm">Request for a repair on a chipped, broken or torn nail</p>
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
                </td>
                <td className="pt-4 align-top pl-4 w-[100px] lg:w-[125px]">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $10
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Late appointment (after 6pm weekdays)</H3>
                </td>
                <td className="pt-4 align-top pl-4 w-[100px] lg:w-[125px]">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $15
                  </Heading>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <H3 className="mb-0 lg:mb-0">Weekends & public holidays</H3>
                </td>
                <td className="pt-4 align-top pl-4 w-[100px] lg:w-[125px]">
                  <Heading as="p" variant="h3" className="mb-0 lg:mb-0 lg:max-w-full">
                    $25
                  </Heading>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm italic font-extralight">
            This service menu is only an indication, and prices may vary depending on infills,
            complexity of nail art, and any extras at our discretion. Please send a DM if unsure,
            we&apos;ll always be transparent and up-front about additional costs.
          </p>
        </Section.Column>
      </Section>
    </div>
  );
}
