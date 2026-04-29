import type { Metadata } from "next";
import { siteConfig } from "@/app/config/site.config";

export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio | Ramesh Kumar",
  description:
    "Discover the portfolio of Ramesh Kumar, a full stack Next.js developer building fast, accessible, and SEO-friendly web applications.",
  metadataBase: new URL(siteConfig.origin),
  openGraph: {
    title: "Full Stack Developer Portfolio | Ramesh Kumar",
    description:
      "Discover the portfolio of Ramesh Kumar, a full stack Next.js developer building fast, accessible, and SEO-friendly web applications.",
    url: siteConfig.origin,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Ramesh Kumar portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer Portfolio | Ramesh Kumar",
    description:
      "Discover the portfolio of Ramesh Kumar, a full stack Next.js developer building fast, accessible, and SEO-friendly web applications.",
    images: ["/favicon.png"],
  },
};
