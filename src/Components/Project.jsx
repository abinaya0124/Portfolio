import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./SwipperButtons.css";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: " Movie-Ticket-Booking",
      technology: "React JS, Tailwind CSS",
      about:
        "Developed using React JS and styled with Tailwind CSS, this platform allows users to select movies, book tickets, and view the total ticket prices.",
      link: "https://github.com/abinaya0124/Movie-Ticket-Booking",
    },
    {
      id: 2,
      title: "News-Application",
      technology: "React JS, Bootstrap",
      about:
        "Built a responsive News Web App with React.js and Bootstrap, featuring category-based filtering and real-time updates.",
      link: "https://github.com/abinaya0124/News-Application",
    },
    {
      id: 3,
      title: " Blog-Application",
      technology: "MERN Stack",
      about:
        "Developed a comprehensive blog application using the MERN stack, allowing users to create, view, and manage blog posts efficiently.",
      link: "https://github.com/abinaya0124/Blog-Application",
    },

    {
      id: 4,
      title: "Expense-Tracker",
      technology: "React JS, Tailwind CSS",
      about:
        "Developed an efficient Expense Tracker using React.js, leveraging the Context API for seamless state management.",
      link: "https://github.com/abinaya0124/Expense-Tracker",
    },
    {
      id: 5,
      title: "  Quiz-Application ",
      technology: "React JS, Bootstrap",
      about:
        "Created an interactive application with React.js and Bootstrap, integrating single-choice questions, scoring, and result calculation.",
      link: "https://github.com/abinaya0124/Quiz-Application",
    },
    {
      id: 6,
      title: "Weather-Web-App ",
      technology: "React JS",
      about:
        "Built a React.js application to fetch and display real-time weather data by integrating external APIs.",
      link: "https://github.com/abinaya0124/Weather-Web-App",
    },
    {
      id: 7,
      title: " TODO-List-App ",
      technology: "React JS",
      about:
        "The To-Do List project created using React JS, it enables addition, deletion, and updating of tasks. ",
      link: "https://github.com/abinaya0124/TODO-List-App",
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
          <SwiperSlide key={id}>
            <div
              className="bg-gray-200 border border-gray-200 h-[18rem] md:h-[21rem] lg:h-[14rem] rounded-lg "
              style={{ boxShadow: "0 0 6px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="p-5 ">
                <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-700 ">
                  {item.title}
                </h5>
                <p className="mb-3 font-normal text-gray-500 pt-3 h-28 md:h-24 lg:h-16">
                  {item.about}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center px-3 mt-6 text-gray-600 font-bold lg:mt-9 md:mt-20 py-2 text-sm text-center bg-orange-500 rounded-lg focus:outline-none "
                  style={{
                    background: "rgb(238,174,202)",
                    background:
                      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                  }}
                >
                  View Code
                  <FaArrowRightLong className="ml-2" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="relative r-buttons mt-5 flex">
      <button className="LeftBtn" onClick={() => swiper.slidePrev()}>
        <GrCaretPrevious />
      </button>
      <button className="rightBtn" onClick={() => swiper.slideNext()}>
        <GrCaretNext />
      </button>
    </div>
  );
};
