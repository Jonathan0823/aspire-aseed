// AboutSection.tsx
import Background from "@/app/components/background";

const ContactSection: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <Background />

        <h2 className="bg-[#040180] border border-white text-2xl text-white rounded-full py-2 px-20 inline-block font-bold mb-4">
          ABOUT
        </h2>
      <div className="bg-[#d2c6b7] bg-opacity-90 rounded-lg p-8 md:max-w-xl w-full text-left mx-5 py-12 space-y-4">
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
  );
};

export default ContactSection;
