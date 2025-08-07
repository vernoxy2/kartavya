import React from "react";
import CommaBox from "../../SubComponents/CommaBox";
import BgR from "../../assets/ProductsImgs/BgR.png";
import BgL from "../../assets/ProductsImgs/BgL.png";

const Explore = () => {
  return (
    <div className="py-6 md:py-12 space-y-4 md:space-y-12 relative">
      <img src={BgR} alt="" className="absolute right-0 -top-20 sm:-top-28 h-52 lg:h-auto" />
      <img src={BgL} alt="" className="absolute bottom-0 sm:-bottom-28 h-52 lg:h-auto" />
      <CommaBox
        quote="Explore Our Labeling & Ribbon Solutions"
        subtext="Whether you need barcode labels for logistics, custom printed labels for branding, or thermal transfer ribbons for high-performance printing, Kartavya offers smart, reliable, and customizable solutions trusted across industries."
      />
      <h1 data-aos="fade-up" className="text-4xl md:text-5xl xl:text-6xl font-bold text-primary text-center py-6">
        {" "}
        Our Products
      </h1>
    </div>
  );
};

export default Explore;
