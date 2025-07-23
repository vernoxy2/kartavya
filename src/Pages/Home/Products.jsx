import React from "react";
import Product1 from "../../assets/HomeImgs/Product1.webp";
import Product2 from "../../assets/HomeImgs/Product2.webp";
import Product3 from "../../assets/HomeImgs/Product3.webp";



const Products = () => {
  return (
    <div className="py-6 md:py-12 space-y-8 sm:space-y-16">
      <div className="bg-primary text-4xl sm:text-5xl font-bold text-white w-8/12 sm:w-1/2 lg:w-[35%] 2xl:w-2/5 text-center lg:text-right lg:px-10 py-3">
        Our Products
      </div>
      <h1 className="container text-2xl md:text-5xl font-bold text-primary text-center 2xl:w-4/5 px-4">
        Delivering high-performance barcode labels, custom printed labels, and
        TTR ribbons for logistics, pharma, retail & more.
      </h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="shadow-2xl bg-no-repeat bg-cover py-56 " style={{backgroundImage: `url(${Product1})`}}>

        </div>
        <div className="border border-black"></div>
      </div>
    </div>
  );
};

export default Products;
