import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  // Simulasi data laporan
  const reports = [
    {
      nama: 'Eguin',
      konteks: 'Fasilitas Kampus',
      angkatan: '2023',
      detail: 'AC semua tidak berfungsi.',
      bukti: 'Screenshot_1.png',
    },
    {
      nama: '',
      konteks: 'Kebersihan',
      angkatan: '2023',
      detail: 'Kamar mandi tidak bersih.',
      bukti: 'Foto.png',
    },
    
  ];

  const sexualReports = [
    {
      nama: 'Anonim',
      deskripsiKejadian: 'Terjadi di ruang kelas saat jam kosong.',
      ciriPelaku: 'Pria, memakai jaket hitam, tinggi sekitar 170 cm.',
      bukti: 'rekaman_video.mp4',
      kontak: 'anonim123@gmail.com',
    },
    {
      nama: 'Anonim',
      deskripsiKejadian: 'Insiden di kantin, pelaku membuat gestur tidak senonoh.',
      ciriPelaku: 'Pria, rambut pendek, memakai kemeja biru.',
      bukti: 'foto_pelaku.png',
      kontak: 'anonim456@gmail.com',
    },
  ];

  // Laporan aspirasi terbuka
  const openReports = reports;


  const closedReports = reports.map((report) => ({
    ...report,
    nama: report.nama ? 'Anonim' : '',
  }));

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center relative">
      <div className="space-y-12 max-w-lg mx-auto flex flex-col mt-12 z-10 text-center py-11">
        <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2">
          Admin
        </h3>
      </div>

      <div className="bg-[#d2c6b7] bg-opacity-90 overflow-y-auto rounded-lg max-h-[800px] hide-scrollbar p-8 md:max-w-xl w-full text-left py-12 space-y-6">
        
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
              {openReports.map((report, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{report.nama}</td>
                  <td className="border border-gray-300 px-4 py-2">{report.konteks}</td>
                  <td className="border border-gray-300 px-4 py-2">{report.angkatan}</td>
                  <td className="border border-gray-300 px-4 py-2">{report.detail}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a href="#" className="text-blue-500 hover:underline">
                      {report.bukti}
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
              {closedReports.map((report, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{report.nama}</td>
                  <td className="border border-gray-300 px-4 py-2">{report.konteks}</td>
                  <td className="border border-gray-300 px-4 py-2">{report.angkatan}</td>
                  <td className="border border-gray-300 px-4 py-2">{report.detail}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a href="#" className="text-blue-500 hover:underline">
                      {report.bukti}
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
                <th className="border border-gray-300 px-4 py-2">Deskirpsi alur kejaddian</th>
                <th className="border border-gray-300 px-4 py-2">Deskirpsi ciri pelaku</th>
                <th className="border border-gray-300 px-4 py-2">Bukti Keluhan</th>
                <th className="border border-gray-300 px-4 py-2">Kontak</th>
              </tr>
            </thead>
            <tbody>
          {sexualReports.map((report, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{report.nama}</td>
              <td className="border border-gray-300 px-4 py-2">{report.deskripsiKejadian}</td>
              <td className="border border-gray-300 px-4 py-2">{report.ciriPelaku}</td>
              <td className="border border-gray-300 px-4 py-2">
                <a href="#" className="text-blue-500 hover:underline">
                  {report.bukti}
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">{report.kontak}</td>
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
