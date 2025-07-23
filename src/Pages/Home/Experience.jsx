import React from "react";
import Experienceimg from "../../assets/HomeImgs/Experience.webp";

const Experience = () => {
  return (
    <section className="py-8 sm:py-12 space-y-8 md:space-y-16 bg-secondary shadow-inner">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="text-white flex flex-col space-y-4 sm:space-y-10 justify-center items-center lg:items-left text-center lg:text-left 2xl:w-[80%]">
          <h1 className="text-3xl md:text-6xl font-bold">Experience Kartavya’s trusted quality firsthand.</h1>
          <p className=" sm:text-2xl">
            We believe in our product that’s why we let you try it for free.
            Select your label or ribbon type and we’ll send a sample kit to you.
          </p>
        </div>
        <div>
          <img src={Experienceimg} alt="" className="w-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
