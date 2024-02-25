import React from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Link, Route, Routes } from "react-router-dom";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import About from "./Components/About";
// EDC7B7 EEE2DC
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
