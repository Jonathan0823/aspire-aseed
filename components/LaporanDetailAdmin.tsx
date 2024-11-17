"use client";
import { getLaporanById } from "@/lib/action";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const LaporanDetailAdmin = ({ id }: { id: string }) => {
  type LaporanType = 
    | { id: string; type: string; userId: string; angkatan: string; keluhan: string; buktiKeluhan: string; createdAt: Date; updatedAt: Date; }
    | { id: string; userId: string; buktiKeluhan: string; angkatan: string; keluhan: string; createdAt: Date; updatedAt: Date; kontak: string; }
    | { id: string; userId: string; buktiKeluhan: string; createdAt: Date; updatedAt: Date; nama: string; AlurKejadian: string; ciriPelaku: string; kontak: string; }
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


  return <div></div>;
};

export default LaporanDetailAdmin;
