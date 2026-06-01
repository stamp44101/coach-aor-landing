import Image from "next/image";

export function Footer() {
  const socials = [
    { label: "Instagram", short: "Ig" },
    { label: "Facebook", short: "Fb" },
    { label: "TikTok", short: "Tt" },
    { label: "YouTube", short: "Yt" },
    { label: "LINE", short: "Li" },
  ];
  return (
    <footer className="bg-cocoa text-cream/85 py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-start gap-3">
          <Image
            src="/img/logo-light.png"
            alt="Coach Aor CA"
            width={120}
            height={120}
            className="h-14 w-auto"
          />
          <p className="text-xs tracking-[0.28em] uppercase text-cream/60">
            Coach Aor CA
          </p>
        </div>

        <div className="md:text-center">
          <p className="text-[11px] tracking-[0.28em] uppercase text-cream/60 mb-3">
            Follow Me On Social Media
          </p>
          <ul className="flex md:justify-center items-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-cream/30 hover:bg-cream hover:text-cocoa transition-colors text-[11px] tracking-[0.1em] uppercase"
                >
                  {s.short}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:text-right">
          <a
            href="https://www.coachaorca.com"
            className="text-xs tracking-[0.22em] uppercase text-cream/70 hover:text-cream transition-colors"
          >
            www.coachaorca.com
          </a>
          <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-cream/40">
            © {new Date().getFullYear()} Coach Aor CA · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
