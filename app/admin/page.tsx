import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';


const fetchLaporan = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', 
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const page = async () => {
  // Simulasi autentikasi
  const user = await auth();
  if (!user) {
    redirect('/login');
    return null;
  }


  const laporanTerbuka = await fetchLaporan('/api/laporanTerbuka');
  const laporanTertutup = await fetchLaporan('/api/laporanTertutup');
  const laporanSexHar = await fetchLaporan('/api/laporanSexualHarassment');

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center relative">
      <div className="space-y-12 max-w-lg mx-auto flex flex-col mt-12 z-10 text-center py-11">
        <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2">
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
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border border-gray-300 px-4 py-2">Nama</th>
                <th className="border border-gray-300 px-4 py-2">Konteks Keluhan</th>
                <th className="border border-gray-300 px-4 py-2">Angkatan</th>
                <th className="border border-gray-300 px-4 py-2">Detail Keluhan</th>
                <th className="border border-gray-300 px-4 py-2">Bukti Keluhan</th>
              </tr>
            </thead>
            <tbody>
              {laporanTerbuka.map((laporan: any, index: number) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{laporan.nama}</td>
                  <td className="border border-gray-300 px-4 py-2">{laporan.konteksKeluhan}</td>
                  <td className="border border-gray-300 px-4 py-2">{laporan.angkatan}</td>
                  <td className="border border-gray-300 px-4 py-2">{laporan.detailKeluhan}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a href={laporan.buktiKeluhan} className="text-blue-500 hover:underline">
                      Lihat Bukti
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                <th className="border border-gray-300 px-4 py-2">Konteks Keluhan</th>
                <th className="border border-gray-300 px-4 py-2">Angkatan</th>
                <th className="border border-gray-300 px-4 py-2">Detail Keluhan</th>
                <th className="border border-gray-300 px-4 py-2">Bukti Keluhan</th>
              </tr>
            </thead>
            <tbody>
              {laporanTertutup.map((laporan: any, index: number) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{laporan.nama}</td>
                  <td className="border border-gray-300 px-4 py-2">{laporan.konteksKeluhan}</td>
                  <td className="border border-gray-300 px-4 py-2">{laporan.angkatan}</td>
                  <td className="border border-gray-300 px-4 py-2">{laporan.detailKeluhan}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a href={laporan.buktiKeluhan} className="text-blue-500 hover:underline">
                      Lihat Bukti
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
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
                <th className="border border-gray-300 px-4 py-2">Deskripsi Alur Kejadian</th>
                <th className="border border-gray-300 px-4 py-2">Deskripsi Ciri Pelaku</th>
                <th className="border border-gray-300 px-4 py-2">Bukti Keluhan</th>
                <th className="border border-gray-300 px-4 py-2">Kontak</th>
              </tr>
            </thead>
            <tbody>
              {laporanSexHar.map((laporan: any, index: number) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{laporan.nama}</td>
                  <td className="border border-gray-300 px-4 py-2">{laporan.deskripsiKejadian}</td>
                  <td className="border border-gray-300 px-4 py-2">{laporan.deskripsiPelaku}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a href={laporan.buktiKeluhan} className="text-blue-500 hover:underline">
                      Lihat Bukti
                    </a>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{laporan.kontak}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
