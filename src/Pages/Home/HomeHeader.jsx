import React from "react";
import PrimaryBtn from "../../SubComponents/PrimaryBtn";
import Header from "../../assets/HomeImgs/Header.webp"

const HomeHeader = () => {
  return (
    <div className="py-6 md:py-12 space-y-8">
      {/* Hero section */}
      <div className="container md:flex space-y-10 items-center justify-between">
        {/* Left text section */}
        <div className="md:w-7/12 flex flex-col space-y-10 justify-center items-center sm:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Reliable Bar code Labels for <br />{" "}
            <span className="font-normal">Seamless Tracking</span>
          </h1>
          <p className="text-lg sm:text-2xl text-secondary lg:w-[65%]">
            Precision-made barcode labels that ensure smooth scanning,
            durability, and compliance for all industries.
          </p>
          <PrimaryBtn className="bg-primary text-white">Explore Barcode Labels</PrimaryBtn>
        </div>
        {/* Right image section */}
        <div className="sm:w-5/12 ">
          <img src={Header} alt="Header" className="w-full object-contain"/></div>
      </div>
    </div>
  );
};

export default HomeHeader;
