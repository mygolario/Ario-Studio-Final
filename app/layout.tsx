import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ario Studio | Ultra-Luxury AI Web Experiences for Founders",
  description:
    "Ultra-luxury AI web experiences for founders. Led by Ario Kaveh – web, AI product, and MVP design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-[#050505] text-[#f5f5f5] relative">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

