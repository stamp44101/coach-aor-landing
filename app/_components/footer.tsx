export function Footer() {
  const socials = [
    { label: "Instagram", short: "Ig" },
    { label: "TikTok", short: "Tt" },
    { label: "YouTube", short: "Yt" },
    { label: "LinkedIn", short: "In" },
  ];
  return (
    <footer className="bg-cocoa text-cream/85 py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-display italic text-3xl text-cream">adi.</p>
          <p className="mt-2 text-xs tracking-[0.28em] uppercase text-cream/60">
            Step into your feminine power
          </p>
        </div>
        <ul className="flex items-center gap-3">
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
        <p className="text-[11px] tracking-[0.22em] uppercase text-cream/50">
          © {new Date().getFullYear()} Coach Adi · All rights reserved
        </p>
      </div>
    </footer>
  );
}
