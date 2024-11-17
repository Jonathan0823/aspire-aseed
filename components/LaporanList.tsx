import Link from "next/link";
import React from "react";

type LaporanListProps = {
  laporan: Laporan[];
  type: string;
};

interface Laporan {
  id: string;

  userId: string;

  angkatan?: string;

  keluhan?: string;

  buktiKeluhan: string;

  type?: string;

  createdAt: Date;

  updatedAt: Date;

  nama?: string;

  kontak?: string;

  Alur?: string;

  AlurKejadian?: string;
}

const LaporanList = ({ laporan, type }: LaporanListProps) => {
  const formatType = (type: string) => {
    if (type === "fasilitaskampus") {
      return "Fasilitas Kampus";
    } else {
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };
  return (
    <div className="overflow-x-auto max-h-52">
      <div>
        <div className="flex gap-6 bg-gray-200 py-3 rounded-t-xl px-5 font-bold w-full">
          <p className="w-40">{type === "sexual" ? "Nama" : "Type"}</p>
          <p className="w-1/2">
            {type === "sexual" ? "Alur Kejadian" : "Keluhan"}
          </p>
        </div>
      </div>
      <div className="overflow-y-auto">
        {laporan.map((laporan: Laporan) => (
          <Link
            href={`/admin/laporan/${laporan.id}`}
            key={laporan.id}
            className="flex gap-6 bg-white py-5 rounded-xl px-5"
          >
            {type === "sexual" ? (
              <>
                <p className="w-40 border-r border-black">
                  {"nama" in laporan
                    ? formatType(laporan.nama || "Anon")
                    : "N/A"}
                </p>
                <p className="">
                  {"AlurKejadian" in laporan ? laporan.AlurKejadian : "N/A"}
                </p>
              </>
            ) : (
              <>
                <p className="w-40 border-r border-black">
                  {"type" in laporan ? formatType(laporan.type || "") : "N/A"}
                </p>
                <p className="">
                  {"keluhan" in laporan ? laporan.keluhan : "N/A"}
                </p>
              </>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LaporanList;
