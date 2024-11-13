import SexualHarrWithName from "@/components/SexualHarrWithName";

type Params = Promise<{ name: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { name } = await params;

  return (

      <div className="relative h-screen flex flex-col justify-center items-center">
        <SexualHarrWithName name={name}/>
    </div>
  );
};

export default Page;
