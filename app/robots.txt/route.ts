import { NextResponse } from "next/server";
import { siteConfig } from "@/app/config/site.config";

const ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || siteConfig.origin;

const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${ORIGIN}/sitemap.xml
Host: ${ORIGIN}
`;

export async function GET() {
  return new NextResponse(robotsTxt, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
