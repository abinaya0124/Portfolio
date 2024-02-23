import { BsLaptopFill } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="flex gap-3 mb-5 mt-5">
          <BsLaptopFill className="mt-1 text-2xl md:text-xl" />
          <div>
            <h3 className="font-bold text-gray-700">Web Developer Intern</h3>
            <p className="font-semibold text-gray-500">RF Labs</p>
            <p className="text-sm">Dec 2023- Feb 2024 </p>
          </div>
        </div>
        <div className="flex gap-3">
          <BsLaptopFill className="mt-1 text-2xl md:text-xl" />
          <div>
            <h3 className="font-bold text-gray-700">
              Full Stack Developer Intern
            </h3>
            <p className="font-semibold text-gray-500">Linsible Technologies</p>
            <p className="text-sm">Jun 2023- Sep 2023</p>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="flex -ml-9 flex-col justify-center items-center m-8">
    //     <div className="flex gap-5 text-left mb-6 md:-ml-8">
    //       <BsLaptopFill className="mt-1" />
    //       <div className="flex flex-col">
    //         <h3 className="font-bold text-base">Web Developer Intern</h3>
    //         <span className="text-gray-500">RF Labs</span>
    //         <div className="text-gray-800">Dec 2023- Feb 2024</div>
    //       </div>
    //     </div>

    //     <div className="flex gap-5 justify-center ml-9 md:ml-0 items-left">
    //       <BsLaptopFill className="mt-1" />
    //       <div className="flex flex-col">
    //         <h3 className="font-bold text-base">Full Stack Developer Intern</h3>
    //         <span className="text-gray-500 ">Linsible Technologies</span>
    //         <span className="text-gray-800">Jun 2023- Sep 2023</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Experience;
