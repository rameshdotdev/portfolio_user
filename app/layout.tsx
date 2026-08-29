import type { Metadata, Viewport } from "next";
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

const personId = `${siteConfig.origin}/#person`;
const websiteId = `${siteConfig.origin}/#website`;
const webpageId = `${siteConfig.origin}/#webpage`;

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Person",
      "@id": personId,

      name: siteConfig.creator.name,

      url: siteConfig.creator.url,

      jobTitle: "Full Stack Developer",

      description:
        "Ramesh Kumar is a Full Stack Developer specializing in Next.js, React, Node.js, TypeScript, and modern web applications.",

      sameAs: [
        siteConfig.socials.github,
        siteConfig.socials.x,
        siteConfig.socials.linkedin,
        siteConfig.socials.buymeacoffee,
      ],
    },

    {
      "@type": "WebSite",
      "@id": websiteId,

      url: siteConfig.origin,

      name: siteConfig.name,

      description: siteConfig.description,

      publisher: {
        "@id": personId,
      },
    },

    {
      "@type": "WebPage",
      "@id": webpageId,

      url: siteConfig.origin,

      name: siteConfig.title,

      description: siteConfig.description,

      isPartOf: {
        "@id": websiteId,
      },

      about: {
        "@id": personId,
      },

      mainEntity: {
        "@id": personId,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),

  title: {
    default: siteConfig.title,
    template: "%s | Ramesh Kumar",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.creator.name,
      url: siteConfig.creator.url,
    },
  ],

  creator: siteConfig.creator.name,

  publisher: siteConfig.creator.name,

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",

    url: siteConfig.origin,

    siteName: siteConfig.name,

    title: siteConfig.title,

    description: siteConfig.description,

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

    title: siteConfig.title,

    description: siteConfig.description,

    creator: "@rameshdotin",

    images: [siteConfig.og],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "t9Ra_CsuIKh8lUFVjsatkOcdPkU2oR08-smkWqUUMSA",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </html>
  );
}
