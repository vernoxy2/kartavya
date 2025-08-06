import React from "react";
import Comma from "../assets/comaa.png";

const CommaBox = ({ quote, subtext }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 px-4 max-w-5xl mx-auto relative">
      {/* Top Quote Icon */}
      <div className="w-full flex justify-start">
        <img src={Comma} alt="Opening Quote" className="w-10 md:w-12" />
      </div>

      {/* Main Quote */}
      <h1 className="text-primary font-bold text-2xl md:text-4xl leading-snug">
        {quote}
      </h1>

      {/* Subtext (if any) */}
      {subtext && (
        <p className="text-base md:text-lg xl:text-2xl text-secondary md:pt-4">
          {subtext}
        </p>
      )}

      {/* Bottom Quote Icon */}
      <div className="w-full flex justify-end">
        <img src={Comma} alt="Closing Quote" className="w-10 md:w-12 rotate-180" />
      </div>
    </div>
  );
};

export default CommaBox;
