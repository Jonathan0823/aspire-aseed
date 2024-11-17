"use client";
import React, { useState } from "react";
import { SingleImageDropzone } from "./ImageDropper";
import toast, { Toaster } from "react-hot-toast";
import { useEdgeStore } from "@/lib/edgestore";
import { createLaporanSexHar } from "@/lib/action";

const SexualHarr = ({ name, userId }: { name: string; userId: string }) => {
  const [file, setFile] = useState<File>();
  const [nama, setNama] = useState(name);
  const [description, setDescription] = useState("");
  const [pelaku, setPelaku] = useState("");
  const [kontak, setKontak] = useState("");
  const { edgestore } = useEdgeStore();

  const handleSubmit = async () => {
    if (!nama && name) return toast.error("Nama tidak boleh kosong");
    if (!description || !file || !pelaku)
      return toast.error("Data yang anda masukkan kurang lengkap");
    try {
      const res = await edgestore.publicFiles.upload({
        file,
        onProgressChange: (progress) => {
          if (progress === 100) {
            toast.success("File berhasil diupload");
          }
        },
      });

      await createLaporanSexHar(
        userId,
        description,
        nama,
        pelaku,
        res.url,
        kontak
      );
      setNama("");
      setFile(undefined);
      setDescription("");
      setPelaku("");
      setKontak("");
      toast.success("Laporan berhasil dikirim");
    } catch {
      toast.error("Gagal mengirim laporan");
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen px-4 pt-20">
        <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl text-center mb-5 lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2">
          Sexual Harassment
        </h3>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#161f77",
              fontWeight: "bold",
              background: "#E8E1D7",
            },
          }}
        />

        <div className="bg-[#d2c6b7] bg-opacity-90 overflow-y-auto rounded-lg max-h-[500px] hide-scrollbar p-8 md:max-w-2xl w-full text-left py-12 space-y-6">
          {name && (
            <div className="text-[#161f77] text-xl space-y-2 font-bold mt-5 w-full ">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-52">Nama</p>
                <p>:</p>
                <input
                  type="text"
                  name="name"
                  value={nama}
                  onChange={(e) => {
                    setNama(e.target.value);
                  }}
                  className="w-80 focus:outline-none ml-4 p-2 px-4 rounded-full"
                  placeholder="Masukkan Nama"
                />
              </div>
            </div>
          )}

          <div className="text-[#161f77] text-xl space-y-2 font-bold mt-5 w-full">
            <div className="flex gap-2 p-4 rounded-full px-5 w-full">
              <p className="w-52">Deskripsikan alur kejadian</p>
              <p>:</p>
              <input
                name="description"
                className="w-80 focus:outline-none text-lg ml-4 p-2 px-4 rounded-full"
                placeholder="Masukkan Deskripsi"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div className="text-[#161f77] text-xl space-y-2 font-bold mt-5 w-full">
            <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
              <p className="w-52">Deskripsikan ciri pelaku</p>
              <p>:</p>
              <input
                name="pelaku"
                className="w-80 focus:outline-none text-lg ml-4 p-2 px-4 rounded-full"
                placeholder="Masukkan Ciri Pelaku"
                value={pelaku}
                onChange={(e) => {
                  setPelaku(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div className="text-[#161f77] text-xl space-y-2 font-bold mt-5 w-full">
            <div className="flex gap-2 p-4 rounded-full px-5 w-full">
              <p className="w-52">Bukti yang mendukung laporan tersebut</p>
              <p>:</p>
              <SingleImageDropzone
                width={200}
                height={200}
                value={file}
                onChange={(file) => {
                  setFile(file);
                }}
                className="bg-white ml-4"
              />
            </div>
          </div>

          <div className=" bg-opacity-90 overflow-y-auto rounded-lg max-h-[500px] hide-scrollbar p-8 md:max-w-xl w-full text-left py-12 space-y-6">
            <div className="text-xl font-bold text-[#161f77] mb-5">
              Apakah Anda bersedia menindaklanjuti kejadian ini? Jika iya,
              silakan sebutkan kontak yang dapat dihubungi:
            </div>
            <div className="text-[#161f77] text-xl space-y-2 font-bold mt-5 w-full">
              <div className="flex gap-2 p-4 rounded-full px-5 w-full">
                <p className="w-52">Kontak (opsional)</p>
                <p>:</p>
                <input
                  type="text"
                  value={kontak}
                  onChange={(e) => {
                    setKontak(e.target.value);
                  }}
                  name="contact"
                  className="w-80 focus:outline-none text-lg ml-4 p-2 px-4 rounded-full"
                  placeholder="Masukkan Kontak"
                />
              </div>
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
    </div>
  );
};

export default SexualHarr;
