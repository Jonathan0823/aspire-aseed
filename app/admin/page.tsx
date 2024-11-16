import { auth } from "@/auth";
import {
  getLaporanSexHar,
  getLaporanTerbuka,
  getLaporanTertutup,
} from "@/lib/action";
import Link from "next/link";
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

  const formatType = (type: string) => {
    if (type === "fasilitaskampus") {
      return "Fasilitas Kampus";
    } else {
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center relative">
      <div className="space-y-12 max-w-lg mx-auto flex flex-col mt-12 z-10 text-center py-11">
        <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md border-2">
          Admin
        </h3>
      </div>

      <div className="bg-[#d2c6b7] bg-opacity-90 overflow-y-auto rounded-lg max-h-[800px] hide-scrollbar p-8 md:max-w-xl w-full text-left py-12 space-y-6">
        {/* Tabel Laporan Terbuka */}
        <div className="text-[#161f77]">
          <div className="bg-[#ececec] font-bold px-4 py-2 text-sm sm:text-lg md:text-xl rounded-lg inline-block">
            Laporan Aspirasi Terbuka
          </div>
        </div>
        <div className="overflow-x-auto">
          {laporanTerbuka.map(
            (laporan: {
              id: string;
              type?: string;
              keluhan?: string;
            }) => (
              <Link href={`/admin/laporan/${laporan.id}`} key={laporan.id} className="flex gap-6 bg-white py-5 rounded-xl px-5">
                <p className="">
                  {"type" in laporan ? formatType(laporan.type || "") : "N/A"}
                </p>
                <p className="">
                  {"keluhan" in laporan ? laporan.keluhan : "N/A"}
                </p>
              </Link>
            )
          )}
        </div>

        <div className="text-[#161f77] mt-8">
          <div className="bg-[#ececec] font-bold px-4 py-2 text-sm sm:text-lg md:text-xl rounded-lg inline-block">
            Laporan Aspirasi Tertutup
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border border-gray-300 px-4 py-2">Nama</th>
                <th className="border border-gray-300 px-4 py-2">
                  Konteks Keluhan
                </th>
                <th className="border border-gray-300 px-4 py-2">Angkatan</th>
                <th className="border border-gray-300 px-4 py-2">
                  Detail Keluhan
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Bukti Keluhan
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <div className="text-[#161f77] mt-8">
          <div className="bg-[#ececec] font-bold px-4 py-2 text-sm sm:text-lg md:text-xl rounded-lg inline-block">
            Sexual Harassment
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border border-gray-300 px-4 py-2">Nama</th>
                <th className="border border-gray-300 px-4 py-2">
                  Deskripsi Alur Kejadian
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Deskripsi Ciri Pelaku
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Bukti Keluhan
                </th>
                <th className="border border-gray-300 px-4 py-2">Kontak</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
