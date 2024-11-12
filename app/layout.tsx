import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aspire Aseed",
  description: "Sarana untuk Menyampaikan Aspirasi Mahasiswa",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session ) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body className={`${montserrat} antialiased`}>
        <SessionProvider>
          <Navbar />
          <div className="absolute inset-0">
            <Image
              src="/background.png"
              alt="background"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
            />
          </div>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
