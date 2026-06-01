"use client";

import Image from "next/image";
import { useLang, pick } from "./lang";

// Brand-colored social icons (Instagram gradient, FB blue, TikTok, YouTube red)
const SocialIcons = () => (
  <ul className="flex items-center gap-3">
    <li>
      <a
        href="https://www.instagram.com/coachaor.ca/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="block"
      >
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <radialGradient id="ig-grad" cx="0.3" cy="1" r="1">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="32" height="32" rx="8" fill="url(#ig-grad)" />
          <rect
            x="8"
            y="8"
            width="16"
            height="16"
            rx="4.5"
            fill="none"
            stroke="#fff"
            strokeWidth="1.8"
          />
          <circle cx="16" cy="16" r="3.6" fill="none" stroke="#fff" strokeWidth="1.8" />
          <circle cx="21.5" cy="10.5" r="1" fill="#fff" />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="https://www.facebook.com/coachaor.ca/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="block"
      >
        <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden>
          <rect x="0" y="0" width="32" height="32" rx="8" fill="#1877F2" />
          <path
            d="M18.5 26V17.5h2.85l.43-3.3H18.5v-2.11c0-.96.27-1.61 1.65-1.61h1.76V7.54a23.4 23.4 0 0 0-2.57-.13c-2.55 0-4.3 1.55-4.3 4.4v2.46H12v3.3h3.04V26h3.46z"
            fill="#fff"
          />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="https://www.tiktok.com/@coachaor.ca"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="block"
      >
        <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden>
          <rect x="0" y="0" width="32" height="32" rx="8" fill="#000" />
          <path
            d="M21.5 9.5c.4 2.4 1.9 4.3 4.5 4.7v2.7c-1.7 0-3.3-.4-4.5-1.2v6.1c0 4-3.3 7.1-7.4 7-3.5-.1-6.4-3-6.4-6.5 0-3.6 3.1-6.5 6.8-6.5.4 0 .7 0 1.1.1v3.1c-.4-.1-.7-.2-1.1-.2-1.7 0-3.2 1.4-3.2 3.1 0 1.6 1.2 3 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1V6h3.5c.1.9.1 2.3.5 3.5z"
            fill="#fff"
          />
          <path
            d="M21.5 9.5c.4 2.4 1.9 4.3 4.5 4.7l-.8-2c-1.4-.2-2.6-1.1-3-2.3-.1-.4-.2-.9-.2-1.4l-.5-.5z"
            fill="#FE2C55"
          />
          <path
            d="M14.8 15.8c-3.7 0-6.8 2.9-6.8 6.5 0 2.2 1.1 4.1 2.8 5.3-1-1-1.6-2.4-1.6-4 0-3.5 3-6.4 6.7-6.4.7 0 1.4.1 2 .3v-1.5c-.4-.1-.8-.1-1.1-.2-.7-.1-1.4 0-2 0z"
            fill="#25F4EE"
          />
        </svg>
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/@CoachAorCA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="block"
      >
        <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden>
          <rect x="0" y="0" width="32" height="32" rx="8" fill="#FF0000" />
          <path d="M13.5 10.5l9 5.5-9 5.5v-11z" fill="#fff" />
        </svg>
      </a>
    </li>
  </ul>
);

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className="bg-mocha text-cream py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/img/logo-ca.png"
            alt="Coach Aor CA"
            width={56}
            height={56}
            className="h-12 md:h-14 w-auto"
          />
          <div className="flex flex-col">
            <p className="font-display text-2xl md:text-3xl text-cream leading-none">
              Coah Aor CA
            </p>
            <a
              href="https://www.coachaorca.com"
              className="mt-1 text-[11px] md:text-xs tracking-[0.18em] uppercase text-cream/85 hover:text-cream transition-colors"
            >
              www.coachaorca.com
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          <SocialIcons />
          <p className="text-[12px] md:text-sm text-cream/95 tracking-wide">
            {pick(lang, "Follow Me On Social Media", "ติดตามได้ที่โซเชียลมีเดีย")}
          </p>
        </div>
      </div>
    </footer>
  );
}
