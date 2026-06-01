import { Nav } from "./_components/nav";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { CtaStrip } from "./_components/cta-strip";
import { Testimonials } from "./_components/testimonials";
import { Booking } from "./_components/booking";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <CtaStrip />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
