import React from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import About from "./Components/About";

const App = () => {
  return (
    <div className="bg-[#f0fbf6]">
      <Header />
      <Hero />
      <Project />
      <About />
      <Contact />
    </div>
  );
};

export default App;
