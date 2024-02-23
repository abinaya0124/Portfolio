import React from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Link, Route, Routes } from "react-router-dom";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import About from "./Components/About";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <a href="#project">
        <Project />
      </a>
      <a href="#about">
        <About />
      </a>
      <a href="#contact">
        <Contact />
      </a>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
