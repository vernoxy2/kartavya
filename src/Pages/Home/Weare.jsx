import React from "react";
import PrimaryBtn from "../../SubComponents/PrimaryBtn";
import WeareImg from "../../assets/HomeImgs/Weare.webp";

const Weare = () => {
  return (
    <div className="py-6 md:py-12 space-y-8 sm:space-y-20">
      <h1 className="text-4xl md:text-6xl font-bold text-primary">
        Who We Are
      </h1>
      <div className="container grid grid-cols-1 lg:grid-cols-2 sm:gap-y-8">
        <div>
          <img src={WeareImg} alt="Weare" className="h-full object-contain p-10 sm:p-0 mx-auto" />
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-10 justify-center items-center lg:items-left text-center lg:text-right">
          <h1 className="text-2xl md:text-4xl font-bold text-primary">
            Reliable Labeling & Printing Solutions Tailored for Your Business
          </h1>
          <p className="text-lg sm:text-2xl text-secondary font-semibold lg:w-[100%]">
            At Kartavya, we specialize in delivering high-quality barcode
            labels, custom printed labels, and thermal transfer ribbons to
            businesses across industries. Backed by strong sourcing partnerships
            and deep product knowledge, we ensure you
          </p>
          <p className="text-lg sm:text-2xl text-secondary font-semibold lg:w-[100%]">
            get the right labeling solution – every time. Whether it’s finding
            the perfect material, print finish, or ribbon type, Kartavya bridges
            quality with convenience, so you can focus on what matters most –
            your business.
          </p>
        </div>
      </div>
      <div>
        <PrimaryBtn className="-mt-20 bg-primary">Learn More</PrimaryBtn>
      </div>
    </div>
  );
};

export default Weare;
