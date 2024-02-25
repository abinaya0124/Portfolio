import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname);
  const [show, setShow] = useState(false);

  const handleClick = (nav) => {
    setActive(nav);
    setShow(false);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="px-10 py-5 bg-gray-100 shadow-md z-10 fixed w-full">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-500">Abinaya</h3>
        <FaBars className="md:hidden " onClick={handleShow} />
      </div>
      {show && (
        <div className="md:hidden ">
          <div className="flex flex-col justify-end items-end mt-2 gap-9">
            <NavLink
              to="/"
              className={`hover:border-b-2 border-purple-950 ${
                active === "/" ? "text-orange-500" : ""
              } `}
              onClick={() => handleClick("/")}
            >
              Home
            </NavLink>
            <NavLink
              to="/project"
              className={`hover:border-b-2 border-purple-950 ${
                active === "/project" ? "text-orange-500" : ""
              }`}
              onClick={() => handleClick("/project")}
            >
              Project
            </NavLink>
            <NavLink
              to="/about"
              className={`hover:border-b-2 border-purple-950 ${
                active === "/about" ? "text-orange-500" : ""
              }`}
              onClick={() => handleClick("/about")}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={`hover:border-b-2 border-purple-950 ${
                active === "/contact" ? "text-orange-500" : ""
              }`}
              onClick={() => handleClick("/contact")}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
      <div className="hidden md:flex flex-end text-gray-500 font-bold bg-gray-100 w-full justify-end gap-9  -mt-6">
        <a
          href="#"
          className={`hover:translate-x-2 ${
            active === "/" ? "text-orange-500" : ""
          }`}
          onClick={() => handleClick("/")}
        >
          Home
        </a>
        <a
          href="#project"
          className={`hover:translate-x-2  ${
            active === "/project" ? "text-orange-500" : ""
          }`}
          onClick={() => handleClick("/project")}
        >
          Project
        </a>
        <a
          href="#about"
          className={`hover:translate-x-2 ${
            active === "/about" ? "text-orange-500" : ""
          }`}
          onClick={() => handleClick("/about")}
        >
          About
        </a>
        <a
          href="#contact"
          className={`hover:translate-x-2  ${
            active === "/contact" ? "text-orange-500" : ""
          }`}
          onClick={() => handleClick("/contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
