import LaporanDetailAdmin from "@/components/LaporanDetailAdmin";
type Params = Promise<{ id: string }>;

const page = async ({params}: {params: Params}) => {
  const { id } = await params;

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center relative">
      <LaporanDetailAdmin id={id}/>
    </div>
  );
};

export default page;
