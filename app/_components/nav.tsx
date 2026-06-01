export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#booking", label: "Booking" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/85 border-b border-cocoa/8">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-12 h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2.5 text-cocoa">
          <span className="font-display text-2xl md:text-3xl italic leading-none">
            adi.
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.32em] uppercase text-mocha">
            Coach
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-9 text-[13px] tracking-wide text-cocoa-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a className="hover:text-cocoa transition-colors" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#booking"
          className="text-[11px] md:text-xs uppercase tracking-[0.2em] border border-cocoa/40 hover:bg-cocoa hover:text-cream transition-colors px-4 md:px-5 py-2.5 md:py-3 rounded-full"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}
