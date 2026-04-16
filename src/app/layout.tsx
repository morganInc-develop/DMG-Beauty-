import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Anton, Cormorant_Garamond, Inter_Tight } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic"],
  variable: "--font-google-cursive",
});

export const metadata: Metadata = {
  title: {
    default: "DMG | Christian Apparel Rooted in Faith",
    template: "%s | DMG",
  },
  description:
    "Christian apparel rooted in faith, shaped by Old Harbour, Jamaica, and worn in Fort Lauderdale, Florida.",
  keywords: [
    "DMG",
    "Christian apparel",
    "Fort Lauderdale clothing brand",
    "Old Harbour Jamaica",
    "faith-based fashion",
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
      className={`${cormorantGaramond.variable} antialiased`}
      style={
        {
          "--font-fallback-display": anton.style.fontFamily,
          "--font-fallback-sans": interTight.style.fontFamily,
        } as CSSProperties
      }
    >
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

/* FONT FALLBACK: Anton and Inter Tight are loaded via next/font until the licensed Beni and Clash Grotesk files are added in /public/fonts/. */
