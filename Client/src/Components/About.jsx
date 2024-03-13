import React, { useState } from "react";
import Qualification from "./Qualification";
import Experience from "./Experience";

const About = () => {
  const [active, setActive] = useState("Qualification");
  return (
    <section id="about">
      <div className="flex justify-center items-center gap-5 text-2xl md:text-3xl font-bold">
        {["Qualification", "Experience"].map((page) => (
          <div
            key={page}
            onClick={() => setActive(page)}
            className={`pb-3 mt-11 mb-5 page cursor-pointer ${
              active === page ? "selected" : ""
            }
            ${
              active === page ? "text-pink-500 border-green-500 border-b-2" : ""
            } 
            `}
          >
            {page}
          </div>
        ))}
      </div>
      <div>
        {active === "Qualification" && <Qualification />}
        {active === "Experience" && <Experience />}
      </div>
    </section>
  );
};

export default About;
