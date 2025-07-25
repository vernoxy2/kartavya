import React from "react";
import { FaStar } from "react-icons/fa";
import SaidHeading from "../../SubComponents/SaidHeading";

const CommitmentList = [
  {
    id: 1,
    name: "Quality-Driven Approach",
    icon: <FaStar />,
  },
  {
    id: 2,
    name: "Quality-Driven Approach",
    icon: <FaStar />,
  },
  {
    id: 3,
    name: "Quality-Driven Approach",
    icon: <FaStar />,
  },
  {
    id: 4,
    name: "Quality-Driven Approach",
    icon: <FaStar />,
  },
];

const Commitment = () => {
  return (
    <section className="py-8 sm:py-12 space-y-8 md:space-y-16">
      
      <SaidHeading>Our Commitment</SaidHeading>
      <h1 className="container text-2xl md:text-4xl font-bold text-primary text-center ">
        What We Stand For Highlight your values
      </h1>
      <div className="container">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {CommitmentList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col space-y-4 sm:space-y-5 justify-center items-center text-center shadow-lg rounded-3xl border-[0.5px] border-transparent hover:border-primary duration-300 p-6"
            >
              <div className="h-20 w-20 bg-white rounded-full text-primary flex justify-center items-center text-4xl shadow-2xl border border-primary">
                {item.icon}
              </div>
              <h1 className="text-xl md:text-2xl font-semibold">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
