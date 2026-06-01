import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-loaded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-loaded",
  display: "swap",
});

const thai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-thai-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coach Aor CA — Step Into Your Feminine Power",
  description:
    "Transformational coaching, hypnotherapy, retreats, and courses with Panida Thongsui (Coach Aor). Reconnect with your inner self, break free from limitations, and design a life aligned with your truest values.",
  metadataBase: new URL("https://coach-adi-landing.vercel.app"),
  openGraph: {
    title: "Coach Aor CA — Step Into Your Feminine Power",
    description:
      "Coaching, hypnotherapy, retreats & courses with Panida Thongsui (Coach Aor). Reconnect with your inner self.",
    url: "https://coach-adi-landing.vercel.app",
    siteName: "Coach Aor CA",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${thai.variable} h-full antialiased`}
      style={
        {
          "--font-display": `var(--font-display-loaded), "Playfair Display", "Times New Roman", serif`,
          "--font-body": `var(--font-body-loaded), var(--font-thai-loaded), system-ui, sans-serif`,
        } as React.CSSProperties
      }
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
