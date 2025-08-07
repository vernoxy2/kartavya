import React from "react";
import PrintedImg from "../../assets/ProductsImgs/Printed.webp";
import { AiFillCheckCircle } from "react-icons/ai";
import PrimaryBtn from "../../SubComponents/PrimaryBtn";

const Printed = () => {
  return (
    <section className="py-8 sm:py-12 space-y-4 bg-secondary">
      {/* Main container */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Image section */}
        <div className="flex items-center justify-center">
          <img src={PrintedImg} alt="" className="w-full pointer-events-none" />
        </div>
        {/* Text section */}
        <div className="text-end space-y-4 md:space-y-8 flex flex-col justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">Printed Labels</h1>
          <p className="text-white font-semibold text-lg md:text-2xl">
            Custom-designed labels for product{" "}
            <br className="hidden 2xl:block" /> packaging, branding, and
            identification
          </p>
          <div className="text-white space-y-3 md:space-y-6 text-lg md:text-2xl flex flex-col items-end pt-7">
            {[
              "Glossy, matte, transparent & paper options",
              "Custom shapes & sizes",
              "Ideal for bottles, boxes, pouches",
            ].map((text, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 bg-white rounded-full ps-9 md:ps-12 w-fit"
              >
                <h1 className="text-secondary text-sm md:text-lg font-semibold tracking-wide">
                  {text}
                </h1>
                <AiFillCheckCircle className="bg-secondary rounded-full text-5xl -m-0.5" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <PrimaryBtn className="bg-white ">View More</PrimaryBtn>
    </section>
  );
};

export default Printed;
