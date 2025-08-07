import React from "react";
import TTRImg from "../../assets/ProductsImgs/TTR.webp";
import { AiFillCheckCircle } from "react-icons/ai";
import PrimaryBtn from "../../SubComponents/PrimaryBtn";

const TTR = () => {
  return (
    <section className="py-8 sm:py-12 space-y-4">
      {/* Main container */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Text section */}
        <div className="text-start space-y-4 md:space-y-8 flex flex-col justify-center">
          <h1 className="text-primary text-3xl md:text-4xl font-bold">
            TTR (Thermal Transfer Ribbons){" "}
          </h1>
          <p className="text-secondary font-semibold text-lg md:text-2xl">
            Wax, wax-resin, and resin ribbons for sharp,{" "}
            <br className="hidden 2xl:block" /> long-lasting prints.
          </p>
          <div className="text-white space-y-3 md:space-y-6 text-lg md:text-2xl flex flex-col pt-7">
            {[
              "Available in roll or sheet format",
              "High adhesive strength",
              "Compatible with thermal printers",
            ].map((text, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 bg-primary rounded-full pe-12 w-fit"
              >
                <AiFillCheckCircle className="text-white text-5xl -m-0.5" />
                <h1 className="text-white text-sm md:text-lg font-semibold tracking-wide">
                  {text}
                </h1>
              </div>
            ))}
          </div>
        </div>
        {/* Image section */}
        <div className="flex items-center justify-center pointer-events-none">
          <img src={TTRImg} alt="" />
        </div>
      </div>
      <PrimaryBtn className="bg-primary text-white">View More</PrimaryBtn>
    </section>
  );
};

export default TTR;
