import { SVGIconProps } from './types';

export default function TikTokLogo({
  width = 24,
  height = 24,
  color = 'currentColor',
}: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={String(width)}
      height={String(height)}
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      xmlSpace="preserve"
    >
      <title>Follow The Dreamy Nails on TikTok</title>
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
    </svg>
  );
}
