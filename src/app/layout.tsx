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
    default: "DMG Beauty — Fashion & Accessories",
    template: "%s | DMG Beauty",
  },
  description:
    "Shop bonnets, clothes, and accessories from DMG Beauty. Bold style, built for you.",
  keywords: ["DMG Beauty", "bonnets", "clothes", "accessories", "fashion"],
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
