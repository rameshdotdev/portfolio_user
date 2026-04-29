import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import ReduxProvider from "@/providers/redux-provider";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/app/config/site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const structuredData = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.creator.name,
    url: siteConfig.origin,
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.x,
      siteConfig.socials.linkedin,
      siteConfig.socials.buymeacoffee,
    ],
    jobTitle: "Full Stack Developer",
    description:
      "Ramesh Kumar is a full stack developer building fast, accessible, and SEO-friendly web experiences with Next.js, React, and MERN stack.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.origin,
    name: siteConfig.title,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.creator.name,
      url: siteConfig.origin,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.origin,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.origin,
  },
]);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: {
    default: siteConfig.title,
    template: "%s | Ramesh Kumar",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator.name, url: siteConfig.creator.url }],
  creator: siteConfig.creator.name,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.origin,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
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
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.creator.name,
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors />
            <main>{children}</main>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: structuredData }}
            />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
