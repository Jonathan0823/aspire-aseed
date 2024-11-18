import Link from "next/link";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen md:pt-16 min-h-screen px-3 bg-cover bg-center relative">
      <Logo />
      <div className="space-y-4 max-w-lg mx-auto flex flex-col mt-10 z-10 text-center">
        <Link href="/laporan/aspirasiterbuka" className="w-80 py-3 md:text-xl text-white font-bold rounded-full bg-[#161f77] shadow-md hover:bg-[#1D2A56] border-2 ">
          Aspirasi Terbuka
        </Link>
        <Link href="/laporan/aspirasitertutup" className="w-80 py-3 md:text-xl text-white font-bold rounded-full bg-[#161f77] shadow-md hover:bg-[#1D2A56] border-2">
          Aspirasi Tertutup
        </Link>
        <Link href="/laporan/sexualharassement" className="w-80 py-3 md:text-xl text-white font-bold rounded-full bg-[#161f77] shadow-md hover:bg-[#1D2A56] border-2">
          Sexual Harassment
        </Link>
      </div>
    </div>
  );
}
