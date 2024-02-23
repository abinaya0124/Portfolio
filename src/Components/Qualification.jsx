import { IoSchoolSharp } from "react-icons/io5";

const Qualification = () => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="flex gap-3 mb-5 mt-5">
          <IoSchoolSharp className="mt-1 text-2xl md:text-xl" />
          <div>
            <h3 className="font-bold text-gray-700">Btech Biotechnology</h3>
            <p className="font-semibold text-gray-500">
              B.S.Abdur Rahmon Crescent Institute of
              <br /> Science and Technology
            </p>
            <p className="text-sm">Aug 2019- Sep 2023 </p>
          </div>
        </div>
        <div className="flex gap-3">
          <IoSchoolSharp className="mt-1 text-2xl md:text-xl" />
          <div>
            <h3 className="font-bold text-gray-700">Higher Secondary</h3>
            <p className="font-semibold text-gray-500">
              The Velammal International School
            </p>
            <p className="text-sm">Jun 2017- May 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
