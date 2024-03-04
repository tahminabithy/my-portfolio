import React, { useEffect, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./Skills.css";
export default function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div id="skill" className="md:my-16">
      <h1 className="about-heading text-center heading-shadow ">Skills</h1>
      {/* --------- */}
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        // slidesPerView={4}
        // breakpoints={{
        //   // when window width is >= 640px
        //   640: {
        //     width: 640,
        //     slidesPerView: 1,
        //   },
        //   // when window width is >= 768px
        //   768: {
        //     width: 768,
        //     slidesPerView: 2,
        //   },
        // }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 3,
          },
          //   639: {
          //     slidesPerView: 3,
          //   },
          //   865: {
          //     slidesPerView: 4,
          //   },
          1000: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        s
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {skills.map((skill) => (
          <SwiperSlide
            className="p-12 flex justify-center items-center"
            key={skill.id}
          >
            <div className="p-4   flex justify-center items-center skill-box rounded-xl">
              {" "}
              <div className="">
                {" "}
                <img className="w-28 h-28" src={skill.img} alt={skill.name} />
                <p className="text-white text-center font-bold mt-4">
                  {skill.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className="text-white">Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
