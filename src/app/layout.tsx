import "./globals.css";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import SplashScreen from "./splash-screen";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${orbitron.variable} font-orbitron `}
      >
        {children}
        <SplashScreen />
      </body>
    </html>
  );
}
