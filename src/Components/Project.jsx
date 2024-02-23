import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./SwipperButtons.css";
import { useEffect, useState } from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Movie-Ticket-Booking",
      technology: "React JS, Tailwind CSS",
      about:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 2,
      title: "News-Application",
      technology: "React JS, Bootstrap",
      about:
        "Built a responsive News Web App with React.js and Bootstrap, featuring category-based filtering and real-time updates.",
    },
    {
      id: 3,
      title: " Blog-Application",
      technology: "MERN Stack",
      about:
        "Developed a comprehensive blog application using the MERN stack, allowing users to create, view, and manage blog posts efficiently.",
    },
    {
      id: 4,
      title: "Login-Register",
      technology: "MERN Stack",
      about:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 5,
      title: "Expense-Tracker",
      technology: "React JS, Tailwind CSS",
      about:
        "Developed an efficient Expense Tracker using React.js, leveraging the Context API for seamless state management.",
    },
    {
      id: 6,
      title: "  Quiz-Application ",
      technology: "React JS, Bootstrap",
      about:
        "Created an interactive application with React.js and Bootstrap, integrating single-choice questions, scoring, and result calculation.",
    },
    {
      id: 7,
      title: "Weather-Web-App ",
      technology: "React JS",
      about:
        "Built a React.js application to fetch and display real-time weather data by integrating external APIs.",
    },
    {
      id: 8,
      title: " TODO-List-App ",
      technology: "React JS",
      about:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="project">
      <h3 className="text-center text-3xl font-bold mt-10">Projects</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="flex justify-center items-center pt-14 m-10"
      >
        <SliderButtons />
        {projects.map((item, id) => (
          <SwiperSlide>
            <div
              key={id}
              className="bg-gray-200 border border-gray-200 h-[18rem] md:h-[21rem] lg:h-[14rem] rounded-lg shadow "
            >
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-700">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 pt-3 h-28 md:h-24 lg:h-16">
                  {item.about}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 mt-6 lg:mt-9 md:mt-20 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg focus:outline-none "
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </section>
  );
};

export default Project;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="relative r-buttons mt-5 flex">
      <button className="LeftBtn" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button className="rightBtn" onClick={() => swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
