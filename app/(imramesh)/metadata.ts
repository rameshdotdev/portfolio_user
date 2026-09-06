import type { Metadata } from "next";
import { siteConfig } from "@/app/config/site.config";

export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio | Ramesh Kumar",

  description:
    "Discover the portfolio of Ramesh Kumar, a Full Stack Developer specializing in Next.js, React, Node.js, and modern web applications.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Full Stack Developer Portfolio | Ramesh Kumar",

    description:
      "Discover the portfolio of Ramesh Kumar, a Full Stack Developer specializing in Next.js, React, Node.js, and modern web applications.",

    url: siteConfig.origin,
    siteName: siteConfig.name,
    type: "website",

    images: [
      {
        url: siteConfig.og,
        width: 1200,
        height: 630,
        alt: "Ramesh Kumar - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Full Stack Developer Portfolio | Ramesh Kumar",

    description:
      "Discover the portfolio of Ramesh Kumar, a Full Stack Developer specializing in Next.js, React, Node.js, and modern web applications.",

    images: [siteConfig.og],
  },
};
