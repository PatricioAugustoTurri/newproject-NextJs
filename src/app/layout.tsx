import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pato Turri",
  description: "Mi tienda online",
};

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        <main className="min-h-screen max-w-6xl md:mt-64 mt-40 mx-auto z-0 px-4 md:px-8">
          {children}
        </main>
        <footer className="w-full h-60 bg-white shadow-2xl content-center mt-8">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
