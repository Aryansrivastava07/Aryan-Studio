import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import SeoStructuredData from "@/components/SeoStructuredData";

const metadataBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aryan-studio.vercel.app";

export const metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: "Aryan Studio - Premium Wedding Photography",
    template: "%s | Aryan Studio",
  },
  description:
    "Aryan Studio offers premium Indian wedding photography, cinematic videography, pre-wedding portraits, candid coverage, and drone services in Uttar Pradesh.",
  keywords: [
    "wedding photography",
    "Indian wedding videography",
    "pre-wedding photoshoot",
    "drone wedding coverage",
    "candid wedding photography",
  ],
  openGraph: {
    title: "Aryan Studio - Premium Wedding Photography",
    description:
      "Premium Indian wedding photography, cinematic films, and drone coverage for unforgettable celebrations.",
    url: metadataBaseUrl,
    siteName: "Aryan Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdZkVAzz1CNpN1tKw_t2OUF3Tg2oxfghNeHYMOIdEaC153jiYLR2kvTg1vothxdhrZcKNRhgWwK3ZpTj4MRAN8AspLHJNV2KZv6k7Ox06wkRinmYAVLy2Zzg2bFkicD7EIBmuZO14mv8W4u8QRPdcQ7KnwrKGYFs8eYRsdatJJoPP4XrfArFqKBI5dBE1rJCcQY0VCEY1OlLCp8j_X8TBQsnty-bKQ8vNRvqDXR0Qr37E5EHnLlk2idqM6-kmyOw9QG-IUqDn3FO2Y",
        alt: "Aryan Studio cinematic wedding photography",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Studio - Premium Wedding Photography",
    description:
      "Premium Indian wedding photography, cinematic films, and drone coverage for unforgettable celebrations.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdZkVAzz1CNpN1tKw_t2OUF3Tg2oxfghNeHYMOIdEaC153jiYLR2kvTg1vothxdhrZcKNRhgWwK3ZpTj4MRAN8AspLHJNV2KZv6k7Ox06wkRinmYAVLy2Zzg2bFkicD7EIBmuZO14mv8W4u8QRPdcQ7KnwrKGYFs8eYRsdatJJoPP4XrfArFqKBI5dBE1rJCcQY0VCEY1OlLCp8j_X8TBQsnty-bKQ8vNRvqDXR0Qr37E5EHnLlk2idqM6-kmyOw9QG-IUqDn3FO2Y",
    ],
  },
  icons: {
    icon: "/site-icon.svg",
    shortcut: "/site-icon.svg",
    apple: "/site-icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Analytics />
        <SeoStructuredData />
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
