import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ario Studio | Cinematic Web Design & AI Product Development",
  description:
    "Cinematic web experiences for founders and modern brands. Led by Ario Kaveh – Web & AI Product Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

