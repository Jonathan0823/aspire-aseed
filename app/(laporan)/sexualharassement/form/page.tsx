import { auth } from "@/auth";
import SexualHarr from "@/components/SexualHarr";

export const Page = async () => {
  const session = await auth();

  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <SexualHarr name={""} userId={session?.user?.id || ""} />
    </div>
  );
};
