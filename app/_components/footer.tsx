import Image from "next/image";

type Social = { label: string; href: string; svg: React.ReactNode };

const socials: Social[] = [
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V9c0-.9.3-1.5 1.6-1.5h1.7V4.7c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.2H7.6V14h2.8v8h3.1z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 3c.3 2 1.5 3.6 3.6 4v2.5c-1.4 0-2.6-.3-3.6-1v5.7c0 3.6-2.9 6.4-6.5 6.3C6.1 20.4 3.7 18 3.7 14.7c0-3.3 2.7-6 6-6 .4 0 .7 0 1.1.1V12c-.3-.1-.7-.2-1.1-.2-1.7 0-3.1 1.4-3.1 3 0 1.5 1.1 2.9 2.9 3 1.7.1 3-1.3 3-3V3H16z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M21.6 7.2c-.2-1.1-.9-2-2-2.2C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.6.4c-1.1.2-1.8 1.1-2 2.2C2 9.1 2 12 2 12s0 2.9.4 4.8c.2 1.1.9 2 2 2.2 1.9.4 7.6.4 7.6.4s5.7 0 7.6-.4c1.1-.2 1.8-1.1 2-2.2.4-1.9.4-4.8.4-4.8s0-2.9-.4-4.8zM10 15.5v-7l5.5 3.5L10 15.5z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-cocoa text-cream/85 py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-start gap-3">
          <Image
            src="/img/logo-light.png"
            alt="Coach Aor CA"
            width={120}
            height={120}
            className="h-14 w-auto"
          />
          <p className="text-xs tracking-[0.28em] uppercase text-cream/70">
            Coach Aor CA
          </p>
          <a
            href="https://www.coachaorca.com"
            className="text-[11px] tracking-[0.22em] uppercase text-cream/55 hover:text-cream transition-colors"
          >
            www.coachaorca.com
          </a>
        </div>

        <div className="md:text-center flex flex-col md:items-center gap-3">
          <ul className="flex items-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-cream text-cocoa hover:bg-cream-deep transition-colors"
                >
                  <span className="w-4 h-4 inline-block">{s.svg}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[11px] tracking-[0.28em] uppercase text-cream/65">
            Follow Me On Social Media
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-[11px] tracking-[0.22em] uppercase text-cream/40">
            © {new Date().getFullYear()} Coach Aor CA · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
