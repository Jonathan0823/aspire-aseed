import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

type Params = Promise<{ id: string }>;

const page = async ({ params }: { params: Params }) => {
  const { id } = await params;
  // Simulasi autentikasi
  const user = await auth();
  if (!user?.user?.id?.startsWith("admin")) {
    redirect("/");
  }

  return <div>{id}</div>;
};

export default page;
