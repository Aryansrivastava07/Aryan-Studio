const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aryan-studio.vercel.app";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aryan Studio",
  description:
    "Aryan Studio captures cinematic Indian weddings with premium photography, videography, drone coverage, and pre-wedding storytelling.",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDdZkVAzz1CNpN1tKw_t2OUF3Tg2oxfghNeHYMOIdEaC153jiYLR2kvTg1vothxdhrZcKNRhgWwK3ZpTj4MRAN8AspLHJNV2KZv6k7Ox06wkRinmYAVLy2Zzg2bFkicD7EIBmuZO14mv8W4u8QRPdcQ7KnwrKGYFs8eYRsdatJJoPP4XrfArFqKBI5dBE1rJCcQY0VCEY1OlLCp8j_X8TBQsnty-bKQ8vNRvqDXR0Qr37E5EHnLlk2idqM6-kmyOw9QG-IUqDn3FO2Y",
  telephone: "+91 9451545987",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Hanuman Mandir, Gandhi Nagar",
    addressLocality: "Pukhrayan",
    addressRegion: "Uttar Pradesh",
    postalCode: "209861",
    addressCountry: "IN",
  },
  areaServed: "Kanpur Dehat, Uttar Pradesh, India",
  serviceType:
    "Wedding Photography, Pre-Wedding Photography, Candid Wedding Coverage, HD Videography, Drone Photography, Event Filming",
  priceRange: "₹20,000+",
};

export default function SeoStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
