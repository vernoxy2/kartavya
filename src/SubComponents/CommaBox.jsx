import React from "react";
import Comma from "../assets/comaa.png";

const CommaBox = ({ children }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <img src={Comma} alt="Opening Quote" className="w-10 md:w-12" />
      <h1 className="text-primary font-bold text-2xl md:text-4xl px-4">
        {children}
      </h1>
      <img src={Comma} alt="Closing Quote" className="w-10 md:w-12 rotate-180" />
    </div>
  );
};

export default CommaBox;
