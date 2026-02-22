import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TaxoBuddy — The Intelligent Legal Heritage for Professionals",
  description:
    "TaxoBuddy delivers source-backed, AI-driven research and drafting for tax and legal professionals. Powered by 60+ years of authoritative legal content.",
  keywords: "tax AI India, legal research AI, income tax assistant, GST AI, AI for CAs, AI for lawyers",
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
