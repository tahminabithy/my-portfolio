import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <section className="container py-5">
      <div id="education" className="">
        <div className="d-flex justify-content-between">
          <div className="style-circle"></div>
          <div className="style-circle"></div>
          <div className="style-line"></div>
        </div>
        <div className="row g-4">
          <div className="col-lg-8 col-12 text-start">
            <div className="mt-5">
              <h2 className="about-heading">Education</h2>
              <div className="d-flex align-items-start justify-content-start  edu-border">
                <div>
                  <div className="bg-pink-800 rounded-full w-16 h-16 flex justify-center items-center">
                    <i class="fas fa-graduation-cap text-2xl text-white p-6 "></i>
                  </div>
                  {/* <i class=' text-white icon-bg p-4 rounded-circle'></i> */}
                </div>

                <div className="text-white mx-4">
                  <p className="">2007-2015</p>
                  <h4 className="font-style fs-5">
                    Higher Secondary School Certificate
                  </h4>
                  <h5 className="font-style fs-6">
                    Shaheed Bir Uttam Lt. Anwar Girls' College
                  </h5>
                </div>
              </div>
              <div className="d-flex  edu-border my-4">
                <div>
                  <div className="bg-pink-800 rounded-full w-16 h-16 flex justify-center items-center">
                    <i class="fas fa-graduation-cap text-2xl text-white p-6 "></i>
                  </div>
                  {/* <i class=' text-white icon-bg p-4 rounded-circle'></i> */}
                </div>

                <div className="text-white mx-4">
                  <p>2007-2015</p>
                  <h4 className="font-style fs-5">
                    Secondary School Certificate
                  </h4>
                  <h5 className="font-style fs-6">
                    Civil Aviation School And College
                  </h5>
                </div>
              </div>
              <div className="d-flex  edu-border">
                <div>
                  <div className="bg-pink-800 rounded-full w-16 h-16 flex justify-center items-center">
                    <i class="fas fa-graduation-cap text-2xl text-white p-6 "></i>
                  </div>
                  {/* <i class=' text-white icon-bg p-4 rounded-circle'></i> */}
                </div>

                <div className="text-white mx-4">
                  <p>2016-2020</p>
                  <h4 className="font-style fs-5">Bachelor of Science</h4>
                  <h5 className="font-style fs-6">Brac University</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div>
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

export default Education;
