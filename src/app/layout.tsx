import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingContact from "@/components/FloatingContact/FloatingContact";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Orchid Laundry | Premium Laundry & Dry Cleaning Services",
  description: "Professional laundry, dry cleaning, shoe cleaning, and carpet cleaning services with free pickup and delivery.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable}`}>
        <Navbar />
        <main style={{ minHeight: '80vh', paddingTop: '90px' }}>
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
