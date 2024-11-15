import { auth } from "@/auth";
import FormTertutup from "@/components/FormTertutup";
import { redirect } from "next/navigation";
import React from "react";

type Params = Promise<{ type: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { type } = await params;
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <FormTertutup type={type} userId={session.user?.id || ""} />
    </div>
  );
};

export default Page;
