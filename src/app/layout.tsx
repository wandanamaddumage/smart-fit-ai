import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartFit AI - Get Jacked",
  description: "A modern fitness AI platform to get jacked for free.",
  icons: {
    icon: "/ai-avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html
        lang="en"
        data-darkreader-proxy-injected="true"
        // data-darkreader-mode="dynamic"
        // data-darkreader-scheme="dark"
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-20 2xl:mx-auto max-w-screen-2xl">
            <Navbar />

            {/* GRID BACKGROUND */}
            <div className="fixed inset-0 -z-1">
              <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
              <div className="absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>

            <main className="pt-24 flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
