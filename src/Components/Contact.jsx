import { useState } from "react";
import { GrSend } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section id="">
      <h3 className="text-center text-3xl font-bold m-10 mt-14">Contact</h3>
      <div className="md:flex justify-center gap-10 items-center bg-[#fba6a6] p-3">
        <div>
          <div className="flex gap-3 mb-3">
            <MdEmail className="mt-1.5" />
            <div>
              <h3 className="font-bold text-gray-800 text-lg">E-Mail</h3>
              <p className="">pjabi124@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-3">
            <MdLocationOn className="mt-1.5" />
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Location</h3>
              <p>Chengalpattu, Tamilnadu</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <label className="relative cursor-pointer mb-8 mt-5">
              <input
                type="text"
                placeholder="Name"
                className="h-12 w-72 md:w-96 px-6 text-2xl text-gray-600 bg-pink-200 border-2 rounded-lg border-opacity-50 outline-none  placeholder-pink-300 placeholder-opacity-0 transition duration-200"
              />
              <span className="text-lg text-gray-800 text-opacity-80 bg-pink-200 rounded-lg p-2 absolute left-5 top-0.5 px-1 transition duration-200 input-text">
                Name
              </span>
            </label>
          </div>
          <div className=" flex justify-center items-center">
            <label className="relative cursor-pointer mb-8">
              <input
                type="email"
                placeholder="Email"
                className="h-12 w-72 md:w-96 px-6 text-2xl text-gray-600 bg-pink-200 border-2 rounded-lg border-opacity-50 outline-none  placeholder-pink-300 placeholder-opacity-0 transition duration-200"
              />
              <span className="text-lg text-gray-800 text-opacity-80 bg-pink-200 rounded-lg p-2 absolute left-5 top-0.5 px-1 transition duration-200 input-email">
                Email
              </span>
            </label>
          </div>
          <div className=" flex justify-center items-center">
            <label className="relative cursor-pointer mb-5">
              <textarea
                type="text"
                placeholder="Name"
                className="h-12 w-72 md:w-96 px-6 text-2xl text-gray-600 bg-pink-200 border-2 rounded-lg border-opacity-50 outline-none  placeholder-pink-300 placeholder-opacity-0 pt-2 transition duration-200"
              />
              <span className="text-lg text-gray-800 text-opacity-80 bg-pink-200 rounded-lg p-2 absolute left-5 top-0.5 px-1 transition duration-200 input-textarea">
                Description
              </span>
            </label>
          </div>

          <div className="flex justify-center items-center">
            <button className="bg-pink-500 py-2 w-96 gap-3 flex justify-center items-center rounded-lg text-white text-lg hover:text-black hover:bg-white duration-200 ease-out  ">
              Submit
              <GrSend />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
