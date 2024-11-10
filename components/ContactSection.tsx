import Background from "@/components/background";

const ContactSection = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center ">
      <Background />
      <div className="flex flex-col justify-center items-center w-screen px-4">

        <h2 className="bg-[#040180] border border-white text-2xl text-white rounded-full py-2 px-20 inline-block font-bold mb-4">
          Contact
        </h2>
      <div className="bg-[#d2c6b7] bg-opacity-90 rounded-lg p-8 md:max-w-xl w-full text-left py-12 space-y-4">
        <p className="text-[#040180] font-semibold text-xl leading-relaxed">
          Email: 
        </p>
        <p className="text-[#040180] font-semibold text-xl leading-relaxed">
          Instagram: 
        </p>
        <p className="text-[#040180] font-semibold text-xl leading-relaxed">
          Tiktok: 
        </p>
        <p className="text-[#040180] font-semibold text-xl leading-relaxed">
          Contact Person: 
        </p>
      </div>
      </div>
    </div>
  );
};

export default ContactSection;
