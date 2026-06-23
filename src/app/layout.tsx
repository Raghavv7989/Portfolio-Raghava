import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SmoothScrollWrapper } from "@/components/animations/SmoothScrollWrapper";
import { PageTransitionProvider } from "@/components/animations/PageTransitionProvider";
import { CustomCursor } from "@/components/core/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridOverlay } from "@/components/layout/GridOverlay";
import { NoiseTexture } from "@/components/core/NoiseTexture";
import { Preloader } from "@/components/core/Preloader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veera Raghavendra Godavarthi | AI & ML Engineer",
  description: "Portfolio of Veera Raghavendra Godavarthi - AI Engineer, Machine Learning Builder, and Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="flex flex-col font-sans text-slate relative min-h-screen">
        <Preloader />
        <NoiseTexture />
        <GridOverlay />
        <CustomCursor />
        <SmoothScrollWrapper>
          <Navbar />
          <PageTransitionProvider>
            <main className="flex-1 flex flex-col pt-24 min-h-screen">
              {children}
            </main>
          </PageTransitionProvider>
          <Footer />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
