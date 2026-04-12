import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

const siteUrl = "https://karasov.co";

export const metadata: Metadata = {
  title: "Vitalii Karasov — Product Manager & AI Engineer",
  description:
    "I build AI-powered systems that replace manual workflows. Product Manager who ships — from problem definition to working system. PRINCE2 certified.",
  keywords: [
    "Product Manager",
    "AI Engineer",
    "PRINCE2",
    "n8n",
    "Make.com",
    "Claude API",
    "LangGraph",
    "CrewAI",
    "MVP",
    "automation",
    "multi-agent AI",
    "fractional PM",
  ],
  authors: [{ name: "Vitalii Karasov" }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Vitalii Karasov — Product Manager & AI Engineer",
    description:
      "I build AI-powered systems that replace manual workflows. Product Manager who ships — from problem definition to working system. PRINCE2 certified.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vitalii Karasov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitalii Karasov — Product Manager & AI Engineer",
    description:
      "I build AI-powered systems that replace manual workflows. Product Manager who ships — from problem definition to working system. PRINCE2 certified.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vitalii Karasov",
  jobTitle: "Product Manager & AI Engineer",
  url: siteUrl,
  email: "vitalii@karasov.co",
  sameAs: [
    "https://github.com/vkarasovpm-dotcom",
    "https://www.linkedin.com/in/vitaliikarasov/",
    "https://www.youtube.com/@TheHumanGambit",
    "https://www.upwork.com/freelancers/~01af851972931ea5c2",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  );
}
