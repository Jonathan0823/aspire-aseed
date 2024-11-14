"use client";
import React, { useState } from "react";

const SexualHarrWithName = ({ name }: { name: string }) => {
  const [nama, setNama] = useState(name);
  const [description, setDescription] = useState("");
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-screen px-4 pt-20">
        <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl text-center mb-5 lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2">
          Sexual Harassment
        </h3>

        <div className="bg-[#d2c6b7] bg-opacity-90 overflow-y-auto rounded-lg max-h-[500px] hide-scrollbar p-8 md:max-w-xl w-full text-left py-12 space-y-6">
          <div className="text-[#161f77] text-xl space-y-2 font-bold mt-5 w-full max-w-md">
            <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
              <p className="w-24">Nama</p>
              <p>:</p>
              <input
                type="text"
                name="name"
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value);
                }}
                className="w-full sm:w-52 focus:outline-none px-3 py-2 rounded-full"
                placeholder="Masukkan Nama"
              />
            </div>
          </div>

          <div className="text-[#161f77] text-xl space-y-2 font-bold mt-5 w-full max-w-md">
            <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
              <p className="w-24">Deskripsikan alur kejadian</p>
              <p>:</p>
              <input
                name="description"
                className="w-full sm:w-52 focus:outline-none p-2 rounded-full"
                placeholder="Masukkan Deskripsi"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
            </div>
          </div>

          <div className="text-[#161f77] text-xl space-y-2 font-bold mt-5 w-full max-w-md">
            <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
              <p className="w-24">Bukti yang mendukung laporan tersebut :</p>
              <p>:</p>
              <input
                type="file"
                name="evidence"
                className="w-full sm:w-52 focus:outline-none px-3 py-2 rounded-full"
              />
            </div>
          </div>

          <div className=" bg-opacity-90 overflow-y-auto rounded-lg max-h-[500px] hide-scrollbar p-8 md:max-w-xl w-full text-left py-12 space-y-6">
            <div className="text-xl font-bold text-[#161f77] mb-5">
              Apakah Anda bersedia menindaklanjuti kejadian ini? Jika iya,
              silakan sebutkan kontak yang dapat dihubungi:
            </div>
            <div className="text-[#161f77] text-xl space-y-2 font-bold mt-5 w-full max-w-md">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-24">Kontak (opsional)</p>
                <p>:</p>
                <input
                  type="text"
                  name="contact"
                  className="w-full sm:w-52 focus:outline-none px-3 py-2 rounded-full"
                  placeholder="Masukkan Kontak"
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-[#040180] text-white py-2 px-6 rounded-lg hover:bg-[#030e64] focus:outline-none">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SexualHarrWithName;