import React from "react";
import CommaBox from "../../SubComponents/CommaBox";
import roll from "../../assets/AboutImgs/roll.webp";
import Circle1 from "../../assets/AboutImgs/Circle1.webp";
import Circle2 from "../../assets/AboutImgs/Circle2.webp";

const Businesses = () => {
  return (
    <section className="py-8 sm:py-12 space-y-8 md:space-y-16 relative overflow-hidden">
      <h1 className="text-primary font-extrabold text-4xl md:text-6xl text-center">
        Why Businesses Choose
      </h1>

      {/* Layered Images Container */}
      <div className="relative w-full h-60 md:h-80 flex">
        {/* Background Circle2 */}
        <img
          src={Circle2}
          alt="Circle 2"
          className="absolute w-2/3 md:w-1/3 top-0 left-1/2 -translate-x-1/2 z-10"
        />

        {/* Middle Circle1 */}
        <img
          src={Circle1}
          alt="Circle 1"
          className="absolute w-2/3 md:w-1/4 top-5 left-1/2 -translate-x-1/2 z-20"
        />

        {/* Foreground Roll Image */}
        <img
          src={roll}
          alt="Roll"
          className="absolute w-1/2 md:w-1/4 top-10 left-1/2 -translate-x-1/2 z-30"
        />
      </div>

      <CommaBox>
        At Kartavya, we don’t just deliver products{" "}
        <br className="hidden md:block" />
        we deliver labeling confidence.
      </CommaBox>
    </section>
  );
};

export default Businesses;
