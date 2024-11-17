import { auth } from "@/auth";
import LaporanDetailAdmin from "@/components/LaporanDetailAdmin";
import { redirect } from "next/navigation";
import React from "react";

type Params = Promise<{ id: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { id } = await params;
  // Simulasi autentikasi
  const user = await auth();
  if (!user?.user?.id?.startsWith("admin")) {
    redirect("/");
  }

  return <div>
    <LaporanDetailAdmin id={id} />
  </div>;
};

export default Page;
