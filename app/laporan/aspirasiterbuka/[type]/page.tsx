import { auth } from "@/auth";
import FormTerbuka from "@/components/FormTerbuka";
import React from "react";

type Params = Promise<{ type: string }>;

const Page = async ({ params }: { params: Params }) => {
  const session = await auth();
  const { type } = await params;
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <FormTerbuka type={type} userId={session?.user?.id ?? ''} />
    </div>
  );
};

export default Page;
