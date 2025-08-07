import React from "react";

const SaidHeading = ({children}) => {
  return (
    <div className="bg-primary text-3xl sm:text-4xl xl:text-5xl font-bold text-white w-9/12 sm:w-1/2 lg:w-[35%] 2xl:w-2/5 text-center lg:text-right px-10 py-3 flex gap-4 justify-end  items-center">
      {children}
    </div>
  );
};

export default SaidHeading;
