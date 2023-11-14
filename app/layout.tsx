import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boikot",
  description: "Lawan penjajah",
  manifest: "/manifest.json",
  icons: { apple: "/icon-192x192.png", icon: "icon-192x192.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-indigo-900 bg-my-cover  bg-cover bg-fixed overflow-x-hidden`}>
        <div className="fixed inset-0 bg-black opacity-40"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
