import React from "react";
import { BiSolidStore } from "react-icons/bi";
import { FaBox, FaIndustry, FaOilCan, FaRecycle, FaStore, FaTruck, FaTshirt } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { IoFastFoodSharp } from "react-icons/io5";
import { PiPackage } from "react-icons/pi";

const data = [
  { id: 1, icon: <GiMedicines />, name: "Pharma" },
  { id: 2, icon: <FaIndustry />, name: "Manufacturing" },
  { id: 3, icon: <BiSolidStore />, name: "Retail" },
  { id: 4, icon: <IoFastFoodSharp />, name: "Food" },
  { id: 4, icon: <FaRecycle />, name: "Plastic" },
  { id: 5, icon: <FaOilCan />, name: "Oil" },
  { id: 6, icon: <FaTshirt />, name: "Textile" },
  { id: 7, icon: <FaBox />, name: "Packaging" },
  { id: 8, icon: <FaTruck />, name: "Logistics" },
];

const Serve = () => {
  return (
    <section className="py-10 sm:py-20 space-y-8 md:space-y-10">
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold text-primary text-center">
        Industries We Serve
      </h1>

      <div className="container px-0 flex flex-wrap justify-center items-center gap-4 md:gap-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[132px] h-48 flex flex-col justify-center items-center text-center  border border-transparent bg-white group hover:bg-primary hover:scale-105 transition duration-300"
          >
            <div className="h-14 w-14 bg-white rounded-full text-primary text-3xl flex justify-center items-center border border-gray-300 shadow-inner transition duration-300">
              {item.icon}
            </div>
            <h1 className="text-lg font-semibold mt-4 text-primary group-hover:text-white transition duration-300">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Serve;
