import Background from "@/components/background";

const AboutSection = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <Background />

        <h2 className="bg-[#040180] border lg:mt-0 mt-20 border-white text-2xl text-white rounded-full py-2 px-20 inline-block font-bold mb-4">
          ABOUT
        </h2>
      <div className="bg-[#d2c6b7] bg-opacity-90 rounded-lg p-8 md:max-w-xl mx-5 text-center">
        <p className="text-[#040180] font-semibold text-xl leading-relaxed">
          AspireAseed is a website managed by the Association of Students of
          English Education Department. This website accommodates every student
          who has opinions, complaints, and input directed at the campus. It
          includes academic issues, campus facilities, security, and
          cleanliness. This website can also be a place to express ideas and
          aspirations of PBI students.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
