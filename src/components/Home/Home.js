import React from "react";
import Header from "../header/Header";
import About from "../about/About";
import Education from "../education/Education";
import Project from "../projects/Project";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
const options = [
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

const Home = () => {
  return (
    <div>
      {options.map((props, idx) => (
        <Header key={idx} {...props}></Header>
      ))}
      <About />
      <Education />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
