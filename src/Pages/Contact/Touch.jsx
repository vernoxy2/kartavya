import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const data = [
  {
    id: 1,
    name: "Location",
    text: "Plot-513,KBC Complex, Dharampur chowkdi",
    icon: <FaMapMarkerAlt />,
  },
  {
    id: 2,
    name: "Call Us",
    text: "+91 96241 50967",
    icon: <MdCall  />,

  },
  {
    id: 3,
    name: "Email",
    text: "kartavyalebals1@gmail.com",
    icon: <MdEmail />,

  },
];

const Touch = () => {
  return (
    <section className="py-8 sm:py-12 space-y-8 md:space-y-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl md:text-4xl xl:text-6xl text-primary font-bold underline">
            Get In Touch
          </h1>
          
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-4 sm:space-y-5 text-start shadow-lg rounded-xl border-[0.5px] border-transparent hover:bg-primary group duration-300 p-6"
          >
            <div className="h-20 w-20 bg-white rounded-full text-primary flex justify-center items-center text-6xl">
              {item.icon}
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-primary group-hover:text-white duration-300">
              {item.name}
            </h1>
            <p className="text-lg md:text-2xl text-secondary group-hover:text-white duration-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Touch;
