import { NextResponse } from "next/server";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aryan-studio.vercel.app";

const routes = ["", "/portfolio", "/services", "/contact"];

export function GET() {
  const sitemapEntries = routes
    .map((route) => {
      const url = `${siteUrl}${route}`;
      return `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml;charset=UTF-8",
    },
  });
}
