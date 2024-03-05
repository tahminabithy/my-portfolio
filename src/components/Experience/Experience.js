import React from "react";
import img from "../image/experience.avif";
import "./Experience.css";
export default function Experience() {
  return (
    <div className="container">
      <h1 className=" about-heading  md:text-end py-6">Experience</h1>
      <div className="grid grid cols-1 md:grid-cols-2 py-12 gap-12">
        <img src={img} alt="" />
        <div className="">
          <div className="flex justify-start  edu-border mb-6">
            <div className="bg-pink-800 rounded-full w-16 h-16 flex justify-center items-center">
              <i class="fas fa-layer-group text-2xl text-white p-6 "></i>
            </div>
            <div className="text-white ml-6">
              <p className="text-pink-500 font-bold">2023-Present</p>
              <h4 className="text-pink-200">Frontend Developer</h4>
              <p className="text-lg font-bold text-fuchsia-100">
                Tecognize Solutions Ltd.
              </p>
            </div>
          </div>
          <div className="flex justify-start  edu-border mb-6">
            <div className="bg-pink-800 rounded-full w-16 h-16 flex justify-center items-center">
              <i class="fas fa-layer-group text-2xl text-white p-6 "></i>
            </div>
            <div className="text-white ml-6">
              <p className="text-pink-500 font-bold">2023-Present</p>
              <h4 className="text-pink-200">Frontend Developer</h4>
              <p className="text-lg font-bold text-fuchsia-100">
                Tecognize Solutions Ltd.
              </p>
            </div>
          </div>
          <div className="flex justify-start  edu-border">
            <div className="bg-pink-800 rounded-full w-16 h-16 flex justify-center items-center">
              <i class="fas fa-layer-group text-2xl text-white p-6 "></i>
            </div>
            <div className="text-white ml-6">
              <p className="text-pink-500 font-bold">2023-Present</p>
              <h4 className="text-pink-200">Frontend Developer</h4>
              <p className="text-lg font-bold text-fuchsia-100">
                Tecognize Solutions Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
