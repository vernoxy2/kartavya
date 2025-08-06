import React from "react";
import { FaHandshake, FaMedal, FaRegComments, FaStar } from "react-icons/fa";
import SaidHeading from "../../SubComponents/SaidHeading";
import { IoTimeOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { CiMedal } from "react-icons/ci";

const CommitmentList = [
  {
    id: 1,
    name: (<>Quality-Driven <br className="hidden sm:block" /> Approach</>),
    icon: <CiMedal />,
  },
  {
    id: 2,
    name: (
      <>
        Deliveries
        <br className="hidden sm:block"/>
        On-Time
      </>
    ),
    icon: <IoTimeOutline />,
  },
  {
    id: 3,
    name: "Long-Term Client Relationships",
    icon: <GoPeople />,
  },
  {
    id: 4,
    name: "Transparent Communication",
    icon: <FaRegComments />,
  },
];

const Commitment = () => {
  return (
    <section className="py-8 sm:py-12 space-y-8 md:space-y-16">
      <SaidHeading>
        Our Commitment{" "}
        <span>
          <FaHandshake className="text-6xl my-auto" />
        </span>
      </SaidHeading>
      <div className="space-y-4">
        <h1 className="container text-2xl md:text-4xl font-bold text-primary text-center ">
          What We Stand For Highlight your values
        </h1>
        <p>
          We honor our promises through integrity, consistency, and values that{" "}
          <br className="hidden md:block" /> build trust and meaningful
          relationships.
        </p>
      </div>
      <div className="container">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-7">
          {CommitmentList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col space-y-4 sm:space-y-5 justify-center items-center text-center hover:scale-105 sm:hover:scale-100 border-l-4 sm:border-x-0  sm:border-t-4 border-transparent border-gay-900 hover:border-primary group duration-300 p-6 py-10"
            >
              <div className="h-20 w-20 bg-white group-hover:bg-primary rounded-full text-primary group-hover:text-white flex justify-center items-center text-4xl shadow-xl border border-primary">
                {item.icon}
              </div>
              <h1 className="text-xl md:text-2xl font-semibold text-secondary group-hover:text-primary duration-300 ">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
