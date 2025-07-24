import React from "react";
import PrimaryBtn from "../../SubComponents/PrimaryBtn";
import WeareImg from "../../assets/HomeImgs/Weare.webp";
import WeareImg2 from "../../assets/HomeImgs/WeareBg.webp";
import WeareImg3 from "../../assets/HomeImgs/WeareBg2.webp";

const Weare = () => {
  return (
    <div className="py-6 md:py-12 space-y-8 sm:space-y-20 relative">
      <h1 className="text-4xl md:text-6xl font-bold text-primary">
        Who We Are
      </h1>
      <div className="bg-primary w-full lg:w-[48%] h-24 z-0 absolute top-52 sm:top-72 lg:top-1/3"></div>
      <img src={WeareImg2} alt="" className="absolute -top-10 sm:-top-24 z-0 h-[20%] sm:h-auto" />
      <img src={WeareImg3} alt="" className="absolute right-0 md:-bottom-44 -bottom-20   z-0 h-[12%] sm:h-auto" />
      <div className="container grid grid-cols-1 lg:grid-cols-2 sm:gap-y-8 z-10">
        <div className="z-10"> 
          <img src={WeareImg} alt="Weare" className="h-full object-contain p-8 sm:p-0 mx-auto z-10" />
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-10 justify-center items-center lg:items-left text-center lg:text-right z-10">
          <h1 className="text-2xl md:text-4xl font-bold text-primary z-10">
            Reliable Labeling & Printing Solutions Tailored for Your Business
          </h1>
          <p className="text-lg sm:text-2xl text-secondary font-semibold lg:w-[100%] z-10">
            At Kartavya, we specialize in delivering high-quality barcode
            labels, custom printed labels, and thermal transfer ribbons to
            businesses across industries. Backed by strong sourcing partnerships
            and deep product knowledge, we ensure you
          </p>
          <p className="text-lg sm:text-2xl text-secondary font-semibold lg:w-[100%] z-10">
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
