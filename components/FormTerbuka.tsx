"use client";
import { useState } from "react";
import { useEdgeStore } from "../lib/edgestore";
import { SingleImageDropzone } from "./ImageDropper";
import { createLaporanTerbuka } from "@/lib/action";
import toast, { Toaster } from "react-hot-toast";

const FormTerbuka = ({ type, userId }: { type: string; userId: string }) => {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();

  const handleSubmit = async () => {
    if (!file || !nama || !kelas || !angkatan || !keluhan) {
      return toast.error("Data yang anda masukkan kurang lengkap");
    }
    toast.loading("Mengirim laporan...");
    const res = await edgestore.publicFiles.upload({
      file,
      onProgressChange: (progress) => {
        if (progress === 100) {
          toast.success("File berhasil diupload");
        }
      },
    });
    try {
      await createLaporanTerbuka(
        userId,
        nama,
        kelas,
        angkatan,
        keluhan,
        res.url,
        type
      );
      setNama("");
      setKelas("");
      setAngkatan("");
      setKeluhan("");
      setFile(undefined);
      toast.dismiss();
      toast.success("Laporan berhasil dikirim");
    } catch {
      toast.dismiss();
      toast.error("Gagal mengirim laporan");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen px-4 pt-20">
        <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl text-center mb-5 lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md border-2">
          Aspirasi Terbuka
        </h3>
        <Toaster
          toastOptions={{
            style: {
              padding: "16px",
              color: "#161f77",
              fontWeight: "bold",
              background: "#E8E1D7",
            },
          }}
        />

        <div className="bg-[#d2c6b7] bg-opacity-90 overflow-y-auto rounded-lg max-h-[500px] hide-scrollbar p-8 md:max-w-xl w-full text-left py-12 space-y-6">
          <div className="text-[#161f77]">
            <div className="bg-[#ececec] font-bold px-4 py-2 text-lg md:text-xl rounded-lg inline-block">
              {type === "fasilitaskampus"
                ? "Fasilitas Kampus"
                : type
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
            </div>
          </div>

          <div className="text-[#161f77] text-lg md:text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
            <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
              <p className="w-24">Nama</p>
              <p>:</p>
              <input
                type="text"
                value={nama}
                className="w-48 md:w-80 focus:outline-none text-lg ml-4 p-1 md:p-2 px-4 rounded-full"
                placeholder="Masukkan Nama"
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
          </div>

          <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
            <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
              <p className="w-24">Kelas</p>
              <p>:</p>
              <input
                type="text"
                value={kelas}
                className="w-48 md:w-80 focus:outline-none text-lg ml-4 p-1 md:p-2 px-4 rounded-full"
                placeholder="Masukkan Kelas"
                onChange={(e) => setKelas(e.target.value)}
              />
            </div>
          </div>

          <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
            <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full ">
              <p className="w-24">Angkatan</p>
              <p>:</p>
              <input
                type="text"
                value={angkatan}
                className="w-48 md:w-80 focus:outline-none text-lg ml-4 p-1 md:p-2 px-4 rounded-full"
                placeholder="Masukkan Angkatan"
                onChange={(e) => setAngkatan(e.target.value)}
              />
            </div>
          </div>

          <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
            <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
              <p className="w-24">Detail Keluhan</p>
              <p>:</p>
              <input
                type="text"
                value={keluhan}
                className="w-48 md:w-80 focus:outline-none text-lg ml-4 p-1 md:p-2 px-4 rounded-full"
                placeholder="Masukkan Detail"
                onChange={(e) => setKeluhan(e.target.value)}
              />
            </div>
          </div>

          <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full">
            <div className="flex gap-2 p-4 rounded-full px-5 w-full">
              <p className="w-24">Bukti Keluhan</p>
              <p>:</p>
            </div>
            <SingleImageDropzone
              width={200}
              height={200}
              value={file}
              onChange={(file) => {
                setFile(file);
              }}
              className="bg-white mx-auto"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              className="bg-[#040180] text-white py-2 px-6 rounded-lg hover:bg-[#030e64] focus:outline-none"
              onClick={handleSubmit}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTerbuka;
