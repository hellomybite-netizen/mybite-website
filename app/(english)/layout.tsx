import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";
import "../globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mybite.id/"),
  title: {
    default: "MyBite | Marketing for Indonesian Communities Abroad",
    template: "%s | MyBite",
  },
  description: "MyBite helps businesses connect with Indonesian migrant communities through localized content, responsible digital advertising, and conversion-focused funnels.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    siteName: "MyBite",
    images: [{ url: "https://mybite.id/og.png", width: 1200, height: 630, alt: "MyBite — Local insight. Global growth." }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${manrope.variable}`}>{children}</body></html>;
}
