import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="container ">
      <div id="about" className="py-16">
        <div className="d-flex justify-content-between">
          <div className="style-circle"></div>
          <div className="style-circle"></div>
          <div className="style-line"></div>
        </div>
        <div className="row g-3">
          <div className="col-lg-6 col-12 text-start ">
            <div className="mt-5">
              <h2 className="about-heading">Who I am</h2>
              <p className="text-white  font-style">
                My name's Jane. I'm a web designer and developer based in
                Southampton, UK. <br /> <br /> During the day I work as a lead
                developer at a local agency and in the evening I work on
                freelance projects and utilize the time to built my own
                products. I spent my leisure hours writing articles and poetry.
                Right now I'm also trying a hand at machine learning and AI. I
                love to learn and explore new arenas.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="flex justify-center items-center">
              <img
                className="img-fluid about-img"
                src="https://dev-portfolio-template.netlify.app/static/media/orangeTheme-girl.d0ad58be.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
