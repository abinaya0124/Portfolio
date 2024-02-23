import { FaDownload } from "react-icons/fa6";

const IntroduceSection = () => {
  return (
    <div className="bg-[#f670a1] h-[580px] md:h-full md:bg-white border-none  ">
      <h1 className="text-6xl lg:text-8xl  ml-4 md:ml-3 text-white md:text-black md:m-5">
        Hello
      </h1>
      <p className="m-5 text-justify w-[70%] leading-7 text-white md:text-black ">
        I am a recent graduate with a degree in Biotechnology, I am on a mission
        to leverage my passion for technology to contribute meaningfully to the
        development of interactive web applications. Excited about the prospect
        of joining a company that is dedicated to making a positive impact on
        the world, I am committed to continuous learning and staying updated on
        the latest technological trends.
      </p>
      <button className="bg-orange-600 flex gap-3 text-white px-6 m-5 py-3 rounded-3xl">
        Download Resume
        <FaDownload className="mt-1" />
      </button>
    </div>
  );
};

export default IntroduceSection;
