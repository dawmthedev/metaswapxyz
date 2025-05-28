import "./globals.css";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Metaswap",
  description: "Metaswap XYZ",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`min-h-screen flex flex-col ${orbitron.variable} font-orbitron`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
