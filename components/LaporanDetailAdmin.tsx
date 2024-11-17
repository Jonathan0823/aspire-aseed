"use client";
import { getLaporanById } from "@/lib/action";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { formatType } from "./LaporanList";

const LaporanDetailAdmin = ({ id }: { id: string }) => {
  type LaporanType =
    | {
        id: string;
        type: string;
        userId: string;
        angkatan: string;
        keluhan: string;
        buktiKeluhan: string;
        createdAt: Date;
        updatedAt: Date;
      }
    | {
        id: string;
        userId: string;
        buktiKeluhan: string;
        angkatan: string;
        keluhan: string;
        createdAt: Date;
        updatedAt: Date;
        kontak: string;
      }
    | {
        id: string;
        userId: string;
        buktiKeluhan: string;
        createdAt: Date;
        updatedAt: Date;
        nama: string;
        AlurKejadian: string;
        ciriPelaku: string;
        kontak: string;
      }
    | null;

  const [laporan, setLaporan] = useState<LaporanType>(null);
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const fetchLaporan = async () => {
    if (!type) return;
    const res = await getLaporanById(id, type);
    if (res !== undefined) {
      setLaporan(res);
    }
  };

  useEffect(() => {
    fetchLaporan();
  }, [type]);

  console.log(laporan);

  return (
    <div className="flex flex-col z-50 justify-center items-center w-screen px-4 pt-20">
      <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl text-center mb-5 lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md border-2">
        {type === "terbuka"
          ? "Aspirasi Terbuka"
          : type === "tertutup"
          ? "Aspirasi Tertutup"
          : "Sexual Harassment"}
      </h3>

      <div className="bg-[#d2c6b7] bg-opacity-90 overflow-y-auto rounded-lg max-h-[500px] hide-scrollbar p-8 md:max-w-xl w-full text-left py-12 space-y-6">
        {type !== "sexual" && (
          <div className="text-[#161f77]">
            <div className="bg-[#ececec] font-bold px-4 py-2 text-sm sm:text-lg md:text-xl rounded-lg inline-block">
              {formatType(laporan && "type" in laporan ? laporan.type : "")}
            </div>
          </div>
        )}

        {type === "terbuka" && (
          <>
            <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-24">Nama</p>
                <p>:</p>
                <p>{laporan && "nama" in laporan ? laporan.nama : ""}</p>
              </div>
            </div>

            <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-24">Kelas</p>
                <p>:</p>
                <p>
                  {laporan && "kelas" in laporan
                    ? (laporan as { kelas: string }).kelas
                    : ""}
                </p>
              </div>
            </div>
          </>
        )}
        {type !== "sexual" && (
          <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
            <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full ">
              <p className="w-24">Angkatan</p>
              <p>:</p>
              <p>
                {laporan && "angkatan" in laporan
                  ? (laporan as { angkatan: string }).angkatan
                  : ""}
              </p>
            </div>
          </div>
        )}

        {type === "sexual" && (
          <>
            <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-24">Nama</p>
                <p>:</p>
                <p>
                  {laporan && "nama" in laporan && laporan.nama.trim() !== ""
                    ? (laporan as { nama: string }).nama
                    : "Anon"}
                </p>
              </div>
            </div>

            {laporan && "kontak" in laporan && laporan.kontak.trim() !== "" && (
              <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
                <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                  <p className="w-24">Kontak</p>
                  <p>:</p>
                  <p>{laporan.kontak}</p>
                </div>
              </div>
            )}
          </>
        )}

        <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
          <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
            <p className="w-24">
              {type === "sexual" ? "Alur Kejadian" : "Detail Keluhan"}
            </p>
            <p>:</p>
            <p>
              {type === "sexual"
                ? laporan && "AlurKejadian" in laporan
                  ? (laporan as { AlurKejadian: string }).AlurKejadian
                  : ""
                : laporan && "keluhan" in laporan
                ? (laporan as { keluhan: string }).keluhan
                : ""}
            </p>
          </div>
        </div>

        <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
          <div className="flex gap-2 p-4 rounded-full px-5 w-full">
            <p className="w-24">Bukti Keluhan</p>
            <p>:</p>
          </div>
            {laporan?.buktiKeluhan && (
              <Image
                src={laporan.buktiKeluhan}
                alt="bukti"
                width={500}
                height={500}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default LaporanDetailAdmin;
