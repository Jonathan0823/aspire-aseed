import { auth } from "@/auth";
import LaporanList from "@/components/LaporanList";
import {
  getLaporanSexHar,
  getLaporanTerbuka,
  getLaporanTertutup,
} from "@/lib/action";
import { redirect } from "next/navigation";

const page = async () => {
  // Simulasi autentikasi
  const user = await auth();
  if (!user?.user?.id?.startsWith("admin")) {
    redirect("/");
  }

  const getLaporan = [
    getLaporanTerbuka(),
    getLaporanTertutup(),
    getLaporanSexHar(),
  ];
  const [laporanTerbuka, laporanTertutup, laporanSexHar] = await Promise.all(
    getLaporan
  );

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center relative">
      <div className="space-y-12 max-w-lg mx-auto flex flex-col mt-12 z-10 text-center py-11">
        <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md border-2">
          Admin
        </h3>
      </div>

      <div className="bg-[#d2c6b7] bg-opacity-90 overflow-y-auto rounded-lg max-h-[800px] hide-scrollbar p-8 md:max-w-xl w-full text-left py-12 space-y-6">
        <div className="text-[#161f77]">
          <div className="bg-[#ececec] font-bold px-4 py-2 text-sm sm:text-lg md:text-xl rounded-lg inline-block">
            Laporan Aspirasi Terbuka
          </div>
        </div>
        <LaporanList
          laporan={laporanTerbuka.map((laporan) => ({
            ...laporan,
            createdAt: laporan.createdAt.toISOString(),
            updatedAt: laporan.updatedAt.toISOString(),
          }))}
          type="terbuka"
        />

        <div className="text-[#161f77]">
          <div className="bg-[#ececec] font-bold px-4 py-2 text-sm sm:text-lg md:text-xl rounded-lg inline-block">
            Laporan Aspirasi Tertutup
          </div>
        </div>
        <LaporanList
          laporan={laporanTertutup.map((laporan) => ({
            ...laporan,
            createdAt: laporan.createdAt.toISOString(),
            updatedAt: laporan.updatedAt.toISOString(),
          }))}
          type="tertutup"
        />

        <div className="text-[#161f77]">
          <div className="bg-[#ececec] font-bold px-4 py-2 text-sm sm:text-lg md:text-xl rounded-lg inline-block">
            Laporan Sexual Harassment
          </div>
        </div>
        <LaporanList
          laporan={laporanSexHar.map((laporan) => ({
            ...laporan,
            createdAt: laporan.createdAt.toISOString(),
            updatedAt: laporan.updatedAt.toISOString(),
          }))}
          type="sexual"
        />
      </div>
    </div>
  );
};

export default page;
