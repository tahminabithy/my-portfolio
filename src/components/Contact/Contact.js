import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useForm } from "react-hook-form";
export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div id="contact" className="px-8 py-6 md:px-24 md:py-12">
      <h2 className="  about-heading">Contacts</h2>
      <div className="md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {" "}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Name"
              className="w-100 py-3 px-4 border-1 border-black  rounded-3xl bg-pink-800"
              {...register("name", { required: true })}
            />
            <br />
            <input
              className="mt-10  w-100 py-3 px-4 border-1 border-black rounded-3xl bg-pink-800"
              placeholder="Email"
              {...register("email")}
            />
            <br />
            <textarea
              placeholder="Type your message ...."
              className="mt-10 h-56  w-100 py-3 px-4  border-1 border-black rounded-3xl bg-pink-800"
              {...register("message")}
            />
            <input
              className="mt-10 px-12 py-2 border-3 text-pink-800 font-bold rounded-3xl border-pink-800"
              type="submit"
            />
          </form>
        </div>
        <div className="text-white md:px-16">
          <p className="font-bold text-lg">
            <i className="fas fa-envelope  mr-8 bg-pink-800 p-3 rounded-full text-black shadow-lg  "></i>{" "}
            tahmina.akter9519@gmail.com
          </p>
          <p className="font-bold text-lg">
            <i className="fa solid fa-linkedin  mr-8 bg-pink-800 p-3 rounded-full text-black "></i>
            <a href="www.linkedin.com/in/tahmina-akter-bithy">
              tahmina-akter-bithy
            </a>
          </p>
          <p className="font-bold text-lg">
            <i className="fas fa-location-arrow mr-8 bg-pink-800 p-3 rounded-full text-black "></i>
            Montreal , Quebec
          </p>
        </div>
      </div>
    </div>
  );
}
