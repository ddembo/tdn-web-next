'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Pacifico } from 'next/font/google';

import hbdInside from '@/public/hbd/2023/hbd-inside.webp';

const fontPacifico = Pacifico({
  style: ['normal'],
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

export default function Inside() {
  const router = useRouter();

  return (
    <div className={fontPacifico.variable} onClick={() => router.push('/hbd/2023')}>
      <div className="my-4 mx-4 p-4 bg-[linear-gradient(162deg,_rgba(34,12,31,1)_0%,_rgba(75,6,29,1)_100%)] rounded-xl max-w-[1024px] lg:my-12 lg:mx-auto lg:p-12">
        <h1 className="text-3xl text-center mb-6 font-hbd italic">To my dearest Luna,</h1>
        {[
          "Happy Birthday! I love you so much. And I'm sorry in advance but I'm going to be heaping on the praise - so swallow that uncomfortable feeling and deal with it while I drop some truth bombs. :)",
          "It's been my absolute privilege to watch you grow over this last year - I'm so proud of you! Together we're gradually growing Dreamy Nails into something truly impressive, but the skill and service is all you. YOUR skill and personality keeps people coming back. And you know you're just getting started.",
          'Let that sink in for a minute, and visualise where you might be in another year from now.',
          "I've also watched you grow as a person, learning new skills like dancing, and even your recent reflecting on how you want to be more conscious of the way you speak and present yourself.",
          "I know the last few months have been tough, but we've almost made it through the worst of it! You really stepped up when you were needed the most, and I'll always be so grateful to you for that.",
          "I wanted to make this card so you've got something to read easily, whenever and wherever you want, whenever you need a little pick-me-up - a permanent reminder that even if things get tough again:",
          "You're stronger and more awesome than you give yourself credit for, and you got this. You're loved, and even though life is hard sometimes, all that love makes things worthwhile.",
          "Whenever you start to feel the pressure again, come back and read this. Stop, take a deep breath, and remember that whatever the challenge is, it's going to help you grow into a more beautiful and strong person, just like the pressure deep underground forms beautiful and strong crystals.",
          "Happy Birthday again, my love, and don't stop growing ❤️",
        ].map((para) => (
          <p key={para} className="lg:mx-auto lg:max-w-3xl lg:m-6">
            {para}
          </p>
        ))}

        <div className="my-4 mx-4 max-w-3xl lg:my-12 lg:mx-auto">
          <h2 className="font-hbd text-xl mb-6 italic">Love,</h2>
          <p className="font-hbd text-3xl italic">Sol</p>
        </div>
      </div>
      <Image
        src={hbdInside}
        alt="Illustration of a glowing magenta crystal monument on a rocky island in the middle of a calm lake at night, with waves of energy radiating from it"
        priority
        quality={100}
        className="mx-auto h-[1024px] object-cover"
      />
    </div>
  );
}
