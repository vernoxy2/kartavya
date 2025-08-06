import React, { useEffect } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaClipboardList, FaTruck, FaBox, FaGlobe } from "react-icons/fa";

const stats = [
  {
    id: "01.",
    icon: <FaClipboardList />,
    value: 10,
    suffix: "+",
    label: "Years of Experience",
    dark: false,
  },
  {
    id: "02.",
    icon: <FaTruck />,
    value: 500,
    suffix: "+",
    label: "Clients Served",
    dark: true,
  },
  {
    id: "03.",
    icon: <FaBox />,
    value: 5,
    suffix: " lakh+",
    label: "Labels Supplied",
    dark: false,
  },
  {
    id: "04.",
    icon: <FaGlobe />,
    value: 25,
    suffix: "+",
    label: "Industries Catered",
    dark: false,
  },
];

const StatsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-8 md:py-12 space-y-8 md:space-y-16">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 text-start">
          {/* Heading */}
          <div className="text-left my-auto relative col-span-2 ">
            <h2 className="text-2xl md:text-4xl xl:text-6xl font-bold text-[#0E2C54] inline-block ">
              Kartavya in{" "} <br />
              <span className="relative">
                Numbers
                <span className="absolute left-0 bottom-[-5px] w-full h-2 bg-[#0E2C54] -z-10 rounded-md"></span>
              </span>
            </h2>
          </div>

          {/* Stats Grid */}
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={
                "relative group rounded-xl p-6 shadow-md flex flex-col gap-4 transition-transform hover:scale-[1.02] duration-300 hover:bg-primary bg-white"
              }
            >
              <span className="absolute top-3 right-4 text-lg font-semibold opacity-60 text-primary group-hover:text-white duration-300">
                {stat.id}
              </span>

              {/* Icon */}
              <div
                className={`w-28 h-28 rounded-full flex items-center text-4xl text-primary  bg-[#F8F8F8] justify-center mb-8`}
              >
                {stat.icon}
              </div>

              {/* Count-up */}
              <h3 className="text-7xl font-bold text-primary group-hover:text-white duration-300">
                <CountUp end={stat.value} duration={2.5} />
                {stat.suffix}
              </h3>

              {/* Label */}
              <p className="text-4xl font-medium text-primary group-hover:text-white duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
