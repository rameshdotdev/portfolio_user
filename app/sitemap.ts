import type { MetadataRoute } from "next";

const pages = ["", "/projects", "/experiences", "/resume"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date().toISOString().split("T")[0];
  const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN || "https://imramesh.in";

  return pages.map((page) => ({
    url: `${origin}${page}`,
    lastModified: lastMod,
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}
