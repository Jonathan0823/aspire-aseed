// pages/index.tsx
import Image from "next/image";
import Background from "./components/background";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen md:pt-16 min-h-screen bg-cover bg-center relative">
      <Background />
      <div className="flex flex-col items-center z-10 bg-[#E8E1D7] rounded-lg shadow-lg w-full md:max-w-7xl max-w-xl p-6">
        <div className="flex justify-center flex-col items-center w-full mb-4 relative md:py-20 py-10">
          <Image
            src="/download-removebg-preview.png"
            alt="Logo"
            width={300}
            height={300}
            className="absolute left-0 top-4 lg:w-60 md:w-48 md:block hidden"
          />
          <Image
            src="/download-removebg-preview.png"
            alt="Logo"
            width={300}
            height={300}
            className="absolute right-0 top-4 lg:w-60 md:w-48 md:block hidden"
          />

          <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#161f77] text-center ">
            AspireAseed
          </h1>
          <p className="lg:text-3xl md:text-xl text-lg text-[#161f77] text-center mt-3 mb-4">
            Universitas Singaperbangsa Karawang
          </p>
        </div>
      </div>
      <div className="space-y-4 max-w-lg mx-auto flex flex-col mt-10 z-10">
        <button className="w-80 py-3 md:text-xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2 ">
          Aspirasi Terbuka
        </button>
        <button className="w-80 py-3 md:text-xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2">
          Aspirasi Tertutup
        </button>
        <button className="w-80 py-3 md:text-xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2">
          Sexual Harassment
        </button>
      </div>
    </div>
  );
}
