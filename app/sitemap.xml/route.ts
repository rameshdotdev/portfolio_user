import { NextResponse } from "next/server";
import { siteConfig } from "@/app/config/site.config";

const pages = ["", "/projects", "/experiences", "/resume"];

function createSitemap() {
  const lastMod = new Date().toISOString().split("T")[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) =>
      `<url><loc>${siteConfig.origin}${page}</loc><lastmod>${lastMod}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
  )
  .join("\n")}
</urlset>`;
}

export async function GET() {
  return new NextResponse(createSitemap(), {
    headers: {
      "content-type": "application/xml; charset=utf-8",
    },
  });
}
