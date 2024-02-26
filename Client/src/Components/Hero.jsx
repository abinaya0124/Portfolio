import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import Introduction from "./Introduction";
import { Link, NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="md:flex gap-32 items-center">
      <div
        className=" w-[100%] lg:w-[90%] h-[60vh] md:h-[100vh] relative"
        style={{
          background:
            "linear-gradient(55deg, rgba(244,137,176,1) 1%, rgba(255,195,160,1) 70%)",
        }}
      >
        <div className="bg-white absolute w-[95%] m-2 mt-7 md:mt-0 md:m-0 md:w-[70%] h-[290px] rounded-[5px] shadow-pink-200 shadow-lg flex flex-col items-center top-[15%] md:top-[30%] md:left-[50%]">
          <img
            src="https://pxbar.com/wp-content/uploads/2023/09/cartoon-photo-girl.jpg"
            className="rounded-full w-28 m-5 mb-3"
          />
          <h3 className="border-b-2 mb-2 pb-1 font-bold text-purple-900">
            Abinaya P
          </h3>
          <p className="uppercase text-gray-900 font-bold">
            Front-End
            <br /> Developer
          </p>
          <div className="bg-[#f0fbf6] w-full flex  justify-center items-center gap-5 text-2xl p-2 mt-5">
            <NavLink to="https://github.com/abinaya0124">
              <VscGithubInverted className="hover:text-orange-500 " />
            </NavLink>
            <NavLink to="www.linkedin.com/in/abinaya-p-8b591920a">
              <FaLinkedin className="hover:text-orange-500 " />
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <Introduction />
      </div>
    </div>
  );
};

export default Hero;
