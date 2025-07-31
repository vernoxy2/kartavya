import React from "react";
import SaidHeading from "../../SubComponents/SaidHeading";
import Printers from "../../assets/ProductsImgs/Machines/Printers.webp";
import Scanners from "../../assets/ProductsImgs/Machines/Scanners.webp";
import Dispensers from "../../assets/ProductsImgs/Machines/Dispensers.webp";
import Mobile from "../../assets/ProductsImgs/Machines/Mobile.webp";
import { IoIosPhonePortrait, IoMdSettings } from "react-icons/io";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaBarcode } from "react-icons/fa";
import { IoPrintSharp } from "react-icons/io5";

const data = [
  {
    id: 1,
    name: "Barcode Printers",
    sub: "TSC, Zebra, etc",
    img: Printers,
    icons: <IoPrintSharp />,
  },
  {
    id: 2,
    name: "Barcode Scanners",
    sub: "Handheld & fixed mount",
    img: Scanners,
    icons: <FaBarcode />,
  },
  {
    id: 3,
    name: "Label Dispensers",
    sub: "Automatic dispensing",
    img: Dispensers,
    icons: <IoMdSettings />,
  },
  {
    id: 4,
    name: "Handheld Mobile",
    sub: "Handheld computers",
    img: Mobile,
    icons: <HiMiniDevicePhoneMobile />,
  },
];

const Machines = () => {
  return (
    <div className="py-8 sm:py-12 space-y-8 md:space-y-16">
      <SaidHeading>Machines & devices</SaidHeading>
      <div className="space-y-6 container">
        <h1 className=" text-2xl md:text-4xl font-bold text-primary text-center">
           Label Printers, Barcode Scanners & More
        </h1>
        <p className=" text-lg md:text-2xl text-secondary font-semibold">
          We also supply a range of barcode equipment for complete setup.
          Showcase
        </p>
      </div>
      {/* Main container */}
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex m-2 flex-col bg-primary/5 group hover:bg-primary hover:scale-105 duration-300 justify-center text-center rounded-md overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.name}
              className=" object-contain"
            />
            <div className="p-5 text-start group-hover:text-white duration-300 relative">
              <div className="bg-white gh p-1 text-6xl flex items-center justify-center -mt-12 w-20 h-20 ml-auto text-primary shadow-lg">
                {item.icons}
              </div>
              <h1 className="text-xl md:text-2xl font-bold mt-4">
                {item.name}
              </h1>
              <p className="text-sm md:text-base">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Machines;
