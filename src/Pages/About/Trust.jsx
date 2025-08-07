import React from "react";
import TrustImg from "../../assets/AboutImgs/TrustImg.webp";

const Trust = () => {
  return (
    <section className="py-6 md:py-16 space-y-8 md:space-y-16">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-2 gap-y-12">
        <div data-aos="fade-right" className="flex flex-col space-y-4 sm:space-y-10 justify-center items-start lg:text-start">
          <h1 className="text-primary font-bold text-2xl md:text-4xl">
            Delivering Labeling & Printing Solutions with Trust and Precision
          </h1>
          <p className="text-secondary font-semibold text-lg md:text-2xl leading-tight lg:w-[90%] pt-5">
            With over 10 years in the labeling industry, Kartavya is a trusted
            partner for barcode labels, custom printed labels, and thermal
            transfer ribbons. We offer tailored solutions for diverse industries
            including pharma, logistics, retail, oil, plastic, and textile.
          </p>
          <p className="text-secondary font-semibold text-lg md:text-2xl leading-tight lg:w-[90%]">
            Backed by reliable suppliers and print partners, we ensure top-tier
            quality, fast delivery, and expert support—pan India
          </p>
        </div>
        <div data-aos="fade-left" className="w-full h-full">
          <img src={TrustImg} alt="" className="w-full object-cover pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Trust;
