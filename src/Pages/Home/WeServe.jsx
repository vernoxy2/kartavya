import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCar, FaIndustry, FaRegHospital, FaTruck } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";
import { ImLab, ImSpoonKnife } from "react-icons/im";
import { IoHardwareChip } from "react-icons/io5";

const ServeList = [
  {
    id: 1,
    icon: <FaRegHospital />,
    name: "Pharmaceutical & Healthcare",
    description:
      "Labels that meet strict regulatory standards for medicines, lab samples, and medical packaging.",
    data: [
      "High print clarity",
      "Small-format options",
      "Long-lasting & non-smudge",
    ],
  },
  {
    id: 2,
    icon: <FaIndustry />,
    name: "Manufacturing & Industrial",
    description:
      "Reliable ribbons and labels for raw materials, machine parts, and finished goods.",
    data: [
      "Resin & wax-resin ribbons",
      "Heavy-duty label materials",
      "Pre-printed customization",
    ],
  },
  {
    id: 3,
    icon: <BsShopWindow />,
    name: "Retail & Packaging",
    description:
      "Make your products shelf-ready with visually appealing and functional labeling.",
    data: [
      "Matte & transparent labels",
      "Product branding",
      "Ready for POS scanning",
    ],
  },
  {
    id: 4,
    icon: <FaTruck />,
    name: "Logistics & Transportation",
    description:
      "Durable labeling for tracking shipments, inventory, and packages under tough conditions.",
    data: [
      "Durable shipment tracking",
      "Inventory labeling",
      "Withstands tough conditions",
    ],
  },
  {
    id: 5,
    icon: <ImSpoonKnife />,
    name: "Food & Beverage",
    description:
      "Labels that meet the demands of food safety and brand appeal for packaging.",
    data: [
      "Bulk availability",
      "Industry-specific solutions",
      "Custom sample kits available",
    ],
  },
  {
    id: 6,
    icon: <FaCar />,
    name: "Automotive",
    description:
      "Parts identification, safety labels, and quality control tracking.",
    data: [
      "Parts ID made easy",
      "Clear safety labeling",
      "Track quality at every step",
    ],
  },
  {
    id: 7,
    icon: <IoHardwareChip />,
    name: "Electronics",
    description: "Component labeling, serial numbers, and warranty tracking.",
    data: [
      "Clear component labels",
      "Unique serial numbers",
      "Easy warranty tracking",
    ],
  },
  {
    id: 8,
    icon: <ImLab />,
    name: "Oil & Chemical Industry",
    description:
      "Durable labels that withstand harsh environments, chemicals, and high temperatures.",
    data: [
      "Resin ribbons for chemicals",
      "Waterproof & smudge-proof",
      "Long-lasting legibility",
    ],
  },
];

const WeServe = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="py-8 sm:py-12 space-y-8 md:space-y-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Industries We Serve
        </h1>
        <p className="text-lg sm:text-2xl text-secondary font-semibold mt-4">
          Smart Labeling & Ribbon Solutions <br className="lg:hidden" /> for
          Every Sector
        </p>
        <p className="text-lg sm:text-2xl text-secondary 2xl:w-2/3 mx-auto font-semibold mt-2">
          At Kartavya, we provide reliable and industry-specific labeling and
          printing solutions that help businesses stay organized, compliant, and
          customer-ready. Our range of barcode labels, printed labels, and TTR
          ribbons are tailored to perform across diverse operational
          environments.
        </p>
      </div>

      <div className="container">
        <Slider {...settings} className="py-12 drop-shadow-2xl">
          {ServeList.map((serve, index) => {
            // Check if this is the center slide
            const isActive = index === activeSlide;

            return (
              <div key={serve.id} className="px-8 flex flex-col items-center">
                <div
                  className={`h-[400px] mx-auto flex flex-col space-y-4 sm:space-y-5 justify-between items-center text-center border border-primary/30 rounded-2xl p-6 shadow-md transition-all duration-300 ease-in-out
                    ${
                      isActive
                        ? "bg-gradient-to-b from-primary to-secondary text-white scale-100"
                        : "bg-white text-black scale-100"
                    }`}
                >
                  <div
                    className={`text-5xl ${
                      isActive ? "text-white" : "text-primary"
                    }`}
                  >
                    {serve.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold">
                    {serve.name}
                  </h2>
                  <p className="text-base md:text-lg text-inherit">
                    {serve.description}
                  </p>
                  <ul className="text-base md:text-lg list-disc list-inside text-left">
                    {serve.data.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default WeServe;
