import Image from "next/image";

export function Nav() {
  const links = [
    { href: "#about", label: "About Me" },
    { href: "#services", label: "Service" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#booking", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/85 border-b border-cocoa/8">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-12 h-16 md:h-20">
        <a href="#top" className="flex items-center gap-3 text-cocoa">
          <Image
            src="/img/logo-ca.png"
            alt="Coach Aor CA"
            width={64}
            height={64}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </a>
        <ul className="hidden md:flex items-center gap-9 text-[13px] tracking-wide text-cocoa-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a className="hover:text-cocoa transition-colors" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-1 text-[11px] tracking-[0.18em] text-cocoa-soft pl-3 border-l border-cocoa/15">
            <button className="px-2 hover:text-cocoa transition-colors font-medium text-cocoa">TH</button>
            <span className="text-cocoa/30">/</span>
            <button className="px-2 hover:text-cocoa transition-colors">EN</button>
          </li>
        </ul>
        <a
          href="#booking"
          className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-cream bg-mocha hover:bg-mocha/85 transition-colors px-4 md:px-6 py-2.5 md:py-3 rounded-full"
        >
          Book a session
        </a>
      </nav>
    </header>
  );
}
