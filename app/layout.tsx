import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Background from "@/components/background";
import { SessionProvider } from "next-auth/react";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aspire Aseed",
  description: "Sarana untuk Menyampaikan Aspirasi Mahasiswa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat} antialiased`}>
        <SessionProvider>
          <Navbar />
          <Background />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
