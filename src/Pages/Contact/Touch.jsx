import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import BgR from "../../assets/ContactImgs/BgR.png";
import BgL from "../../assets/ContactImgs/BgL.png";

const data = [
  {
    id: 1,
    name: "Location",
    text: "Plot-513, KBC Complex, Dharampur chowkdi",
    icon: <FaMapMarkerAlt />,
    link: "https://maps.app.goo.gl/KkM1PznWxwJa7mVX6",
  },
  {
    id: 2,
    name: "Call Us",
    text: "+91 96241 50967",
    icon: <MdCall />,
    link: "tel:+919624150967",
  },
  {
    id: 3,
    name: "Email",
    text: "kartavyalebals1@gmail.com",
    icon: <MdEmail />,
    link: "mailto:kartavyalebals1@gmail.com",
  },
];

const Touch = () => {
  return (
    <section className="py-10 sm:py-20 space-y-8 md:space-y-16 relative z-10">
      <img src={BgR} alt="" className="absolute right-0 top-6"/>
      <img src={BgL} alt="" className="absolute -bottom-16 z-0"/>
      <div className="container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div data-aos="zoom-in" className="flex justify-center items-center col-span-1">
          <h1 className="text-5xl md:text-6xl text-primary font-bold underline mb-6">
            Get In Touch
          </h1>
        </div>

        {data.map((item) => (
          <a
          data-aos="fade-right"
            key={item.id}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
            className="flex flex-col space-y-4 sm:space-y-5 md:text-start shadow-lg rounded-xl border-[0.5px] border-transparent bg-white hover:bg-primary group duration-300 p-5 transition-transform hover:scale-[1.02] z-10"
          >
            <div className="group-hover:text-white text-primary flex justify-center md:justify-start items-start text-6xl">
              {item.icon}
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-primary group-hover:text-white duration-300">
              {item.name}
            </h1>
            <p className="text-lg md:text-2xl xl:text-xl 2xl:text-2xl text-secondary group-hover:text-white duration-300">
              {item.text}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Touch;
