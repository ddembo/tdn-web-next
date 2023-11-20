'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import hbdFront from '@/public/hbd/2023/hbd-front.webp';

export default function Front() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/hbd/2023/inside')}
    > 
      <Image
        src={hbdFront}
        alt="Illustration of a ruby glittering heart-shaped portal into another world, hovering over a lake at night. The words Happy Birthday in balloons are strung up across the portal"
        priority
        quality={100}
        className="h-screen w-screen object-cover"
      />
    </div>
  );
}
