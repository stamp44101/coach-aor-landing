import { Placeholder } from "./placeholder";

const services = [
  {
    title: "1:1 Online Coaching",
    description:
      "Twelve weeks of deep, weekly sessions. Built around your story — patterns, grief, ambition, and what you&rsquo;re finally ready to put down.",
    price: "from $1,200",
    cta: "Inquire",
    variant: "warm" as const,
    img: "SERVICE_COACHING.jpg",
    span: "lg:col-span-7",
  },
  {
    title: "Reset Retreat",
    description:
      "A 5-day in-person retreat in nature. Small group of 8. Breathwork, somatic practice, journaling, and long quiet meals.",
    price: "from $2,400",
    cta: "Join the waitlist",
    variant: "deep" as const,
    img: "SERVICE_RETREAT.jpg",
    span: "lg:col-span-5",
  },
  {
    title: "Inner Compass Course",
    description:
      "A six-module self-paced course on intuition, values mapping, and decision-making from a regulated nervous system.",
    price: "$320",
    cta: "Enroll",
    variant: "sage" as const,
    img: "SERVICE_COURSE.jpg",
    span: "lg:col-span-4",
  },
  {
    title: "Group Circle",
    description:
      "Monthly virtual circle for women in transition. Two hours of guided practice, sharing, and accountability.",
    price: "$45 / month",
    cta: "Hold my seat",
    variant: "soft" as const,
    img: "SERVICE_CIRCLE.jpg",
    span: "lg:col-span-4",
  },
  {
    title: "Discovery Call",
    description:
      "30 free minutes to talk about what you&rsquo;re moving through and whether we&rsquo;re a fit. No pressure, no script.",
    price: "Complimentary",
    cta: "Book a call",
    variant: "warm" as const,
    img: "SERVICE_DISCOVERY.jpg",
    span: "lg:col-span-4",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-tan-deep/95 text-cream py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-cream/70 mb-3">
              What I offer
            </p>
            <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Our Services
            </h2>
          </div>
          <p className="md:max-w-sm text-cream/85 text-[15px] leading-relaxed">
            Five ways to work together — pick the container that matches where
            you are right now, not where you think you should be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className={`bg-cocoa/30 backdrop-blur-sm rounded-[2px] overflow-hidden flex flex-col ${s.span ?? ""}`}
            >
              <Placeholder
                ratio="4/3"
                variant={s.variant}
                label={s.img}
                className="!rounded-none"
              />
              <div className="p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="font-display text-2xl md:text-3xl text-cream leading-tight">
                  {s.title}
                </h3>
                <p
                  className="mt-3 text-[14px] text-cream/80 leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: s.description }}
                />
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-xs tracking-[0.22em] uppercase text-cream/70">
                    {s.price}
                  </p>
                  <a
                    href="#booking"
                    className="text-[11px] tracking-[0.24em] uppercase px-4 py-2.5 rounded-full border border-cream/40 hover:bg-cream hover:text-cocoa transition-colors"
                  >
                    {s.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
