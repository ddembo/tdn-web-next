import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Happy 27th Birthday Luna!',
};

export default function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black h-screen w-screen overflow-x-hidden text-[#fbd2de]">{children}</div>
  );
}
