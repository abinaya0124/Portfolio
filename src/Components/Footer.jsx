import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#f9f9f9] w-full py-2 flex items-center justify-between">
      <p>&;copy</p>
      <div className="text-black">
        <VscGithubInverted />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Footer;
