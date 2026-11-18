import type { Metadata } from "next";
import { Geist, Geist_Mono, Geist_Pixel, Jacquard_24 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistPixel = Geist_Pixel({
  weight: "400",
  variable: "--font-geist-pixel",
  subsets: ["latin"],
});

const jacquard24 = Jacquard_24({
  weight: "400",
  variable: "--font-jacquard-24",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catch24",
  description: "Five questions from the last 24 hours of news.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${geistPixel.variable} ${jacquard24.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

