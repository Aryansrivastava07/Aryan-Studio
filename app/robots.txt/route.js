import { NextResponse } from "next/server";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aryan-studio.vercel.app";

export function GET() {
  const robots = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`;

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
  });
}
