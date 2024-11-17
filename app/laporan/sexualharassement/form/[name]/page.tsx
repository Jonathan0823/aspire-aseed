import { auth } from "@/auth";
import SexualHarr from "@/components/SexualHarr";

type Params = Promise<{ name: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { name } = await params;
  const session = await auth();

  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <SexualHarr name={name} userId={session?.user?.id || ""} />
    </div>
  );
};

export default Page;
