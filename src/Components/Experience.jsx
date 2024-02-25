import { BsLaptopFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section className="flex justify-center">
      <div>
        <div className="flex gap-3 mb-5 mt-7">
          <BsLaptopFill className="mt-1 text-2xl md:text-xl" />
          <div>
            <h3 className="font-bold text-gray-700 md:text-lg">
              Web Developer Intern
            </h3>
            <p className="font-semibold text-gray-500">RF Labs</p>
            <p className="text-sm">Dec 2023- Feb 2024 </p>
          </div>
        </div>
        <div className="flex gap-3">
          <BsLaptopFill className="mt-1 text-2xl md:text-xl" />
          <div>
            <h3 className="font-bold text-gray-700 md:text-lg">
              Full Stack Developer Intern
            </h3>
            <p className="font-semibold text-gray-500">Linsible Technologies</p>
            <p className="text-sm">Jun 2023- Sep 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
