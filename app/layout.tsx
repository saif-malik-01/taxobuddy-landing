import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TaxoBuddy — The Intelligent Legal Heritage for Professionals",
    template: "%s | TaxoBuddy"
  },
  description:
    "TaxoBuddy delivers source-backed, AI-driven research and drafting for tax and legal professionals. Powered by 60+ years of authoritative legal content.",
  keywords: ["tax AI India", "legal research AI", "income tax assistant", "GST AI", "AI for CAs", "AI for lawyers", "tax automation"],
  authors: [{ name: "TaxoBuddy Team" }],
  creator: "TaxoBuddy",
  publisher: "Astrazure Eventure Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "TaxoBuddy — AI-Powered Tax & Legal Research",
    description: "Source-backed research and drafting for elite tax and legal professionals.",
    url: "https://taxobuddy.ai",
    siteName: "TaxoBuddy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxoBuddy — Intelligent Legal Heritage",
    description: "Source-backed research and drafting for professionals.",
    creator: "@taxobuddy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
