import React from "react";
import CommaBox from "../../SubComponents/CommaBox";
import roll from "../../assets/AboutImgs/Roll.webp";
import Circle1 from "../../assets/AboutImgs/Circle1.webp";
import Circle2 from "../../assets/AboutImgs/Circle2.webp";
import Experience from "../../assets/AboutImgs/Experience.png";
import PANindia from "../../assets/AboutImgs/PANindia.png";
import Range from '../../assets/AboutImgs/Range.png';
import Customization from '../../assets/AboutImgs/Customization.png';
import Delivery from '../../assets/AboutImgs/Delivery.png';
import Support from '../../assets/AboutImgs/Support.png';
import { TbTruckDelivery } from "react-icons/tb";

const Businesses = () => {
  return (
    <section className="py-8 sm:py-14 space-y-8 md:space-y-20 relative overflow-hidden">
      <h1 className="text-primary font-extrabold text-4xl md:text-6xl text-center">
        Why Businesses Choose
      </h1>

      {/* Layered Images Container */}
      <div className="container flex flex-col lg:flex-row">
        <div className="lg:w-3/12 flex flex-col gap-4 justify-between">
          <div className="group flex flex-col gap-2 p-1 items-center justify-center h-full pr-5 ">
            <img
              src={Experience}
              alt=""
              className="group-hover:scale-105 duration-300 h-[40%]"
            />
            <h1 className="text-secondary group-hover:text-primary duration-300 font-semibold text-2xl md:text-3xl">
              10+ Years of Industry Experience
            </h1>
          </div>
          <div className="group flex flex-col gap-2 p-1 items-center justify-center h-full pe-5">
            <img
              src={PANindia}
              alt=""
              className="group-hover:scale-105 duration-300 h-[40%]"
            />
            <h1 className="text-secondary group-hover:text-primary duration-300 font-semibold text-2xl md:text-3xl">
              PAN India Supply Network
            </h1>
          </div>
        </div>
        {/* Right Image */}
        <div className="lg:w-6/12 flex items-center justify-center">
          <img src={Circle2} alt="Roll" className="fastspin object-contain" />
          <img src={Circle1} className="absolute Rspin" alt="" />
          <img
            src={roll}
            className="absolute scale-105 hover:scale-125 duration-300 hover:-rotate-12 spin"
            alt=""
          />
        </div>
        <div className="lg:w-3/12 flex flex-col gap-4 justify-between">
          <div className="group flex flex-col gap-2 p-1 items-center justify-center h-full pe-5 ">
            <img
              src={Support}
              alt=""
              className="group-hover:scale-105 duration-300 h-[40%]"
            />
            <h1 className="text-secondary group-hover:text-primary duration-300 font-semibold text-2xl md:text-3xl">
              Dedicated Client Support
            </h1>
          </div>
          <div className="group flex flex-col gap-2 p-1 items-center justify-center h-full pr-5">
            <img
              src={Delivery}
              alt=""
              className="group-hover:scale-105 duration-300 h-[40%]"
            />
            <h1 className="text-secondary group-hover:text-primary duration-300 font-semibold text-2xl md:text-3xl">
              Quick Sampling & Fast Delivery
            </h1>
          </div>
        </div>
      </div>
      <div className="container w-full ">
        <div className="-mt-16 flex gap-36 justify-center">
          <div className="group flex flex-col gap-2 p-1 items-center justify-center h-full pe-2  ">
            <img
              src={Range}
              alt=""
              className="group-hover:scale-105 duration-300 h-[40%]"
            />
            <h1 className="text-secondary group-hover:text-primary duration-300 font-semibold text-2xl md:text-3xl">
              Wide Range of <br /> Labels & Ribbons
            </h1>
          </div>
          <div className="group flex flex-col gap-2 p-1 items-center justify-center h-full ">
            <img
              src={Customization}
              alt=""
              className="group-hover:scale-105 duration-300 h-[40%]"
            />
            <h1 className="text-secondary group-hover:text-primary duration-300 font-semibold text-2xl md:text-3xl">
              Customization Based <br /> on Application
            </h1>
          </div>
        </div>
      </div>

      <CommaBox>
        At Kartavya, we don’t just deliver products{" "}
        <br className="hidden md:block" />
        we deliver labeling confidence.
      </CommaBox>
    </section>
  );
};

export default Businesses;
