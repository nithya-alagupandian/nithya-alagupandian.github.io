import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nithya Alagupandian | Java Backend Engineer",
  description:
    "Portfolio of Nithya Alagupandian — 6.5+ years of experience building enterprise-grade backend systems with Java, Spring Boot, Microservices, and Cloud technologies.",
  keywords: [
    "Java",
    "Spring Boot",
    "Backend Engineer",
    "Microservices",
    "Portfolio",
    "Nithya Alagupandian",
  ],
  openGraph: {
    title: "Nithya Alagupandian | Java Backend Engineer",
    description:
      "Portfolio of Nithya Alagupandian — 6.5+ years building enterprise backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
