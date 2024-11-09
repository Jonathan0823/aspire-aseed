// pages/index.tsx
import Image from 'next/image';
import AboutSection from "./pages/AboutSection";
import Background from "./pages/background";



export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
      <Background />
      <div className="flex flex-col items-center justify-center bg-[#E8E1D7] rounded-lg shadow-lg w-80 sm:w-[500px] p-6">
        
        <div className="flex justify-between items-center w-full mb-4">
        <Image src="/download-removebg-preview.png" alt="Logo" width={60} height={60} />




          <h1 className="text-2xl font-bold text-[#0D1A42] text-center">AspireAseed</h1>
          <Image src="/download-removebg-preview.png" alt="Logo" width={60} height={60} />




        </div>
        
        <p className="text-sm text-[#0D1A42] text-center mb-8">Universitas Singaperbangsa Karawang</p>

        
        <div className="space-y-4 w-full">
          <button className="w-full py-3 text-white font-semibold rounded-lg bg-[#273968] shadow-md hover:bg-[#1D2A56]">
            Aspirasi Terbuka
          </button>
          <button className="w-full py-3 text-white font-semibold rounded-lg bg-[#273968] shadow-md hover:bg-[#1D2A56]">
            Aspirasi Tertutup
          </button>
          <button className="w-full py-3 text-white font-semibold rounded-lg bg-[#273968] shadow-md hover:bg-[#1D2A56]">
            Sexual Harassment
          </button>
        </div>
      </div>
    </div>
  );
}
