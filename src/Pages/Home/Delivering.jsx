import React from "react";

const List = [
  {
    id: 1,
    name: "Industry Expertise",
    description:
      "With years of experience and deep product knowledge, we help you choose the right label and ribbon for your specific use case.",
  },
  {
    id: 2,
    name: "Custom Solutions",
    description:
      "From label sizes and materials to print finishes and ribbon types we offer fully customizable options to suit your requirements.",
  },
  {
    id: 3,
    name: "Premium Quality",
    description:
      "We partner with trusted sources to deliver high-performance labels and ribbons that ensure clear printing and long-lasting durability",
  },
  {
    id: 4,
    name: "Fast Turnaround",
    description:
      "Need your order urgently? We ensure quick processing and delivery timelines to keep your operations running smoothly.",
  },
  {
    id: 5,
    name: "Bulk Order Friendly",
    description:
      "We support large-volume orders with consistent quality and competitive pricing ideal for scaling businesses and industrial clients",
  },
  {
    id: 6,
    name: "Dedicated Support",
    description:
      "Whether it’s product selection or technical questions, our team is always available to assist you at every step.",
  },
];

const Delivering = () => {
  return (
    <section className="py-8 sm:py-12 space-y-6 md:space-y-16">
      <div className="flex flex-col gap-y-9 container">
        <h1 className="text-3   xl md:text-6xl font-bold text-primary">
          Delivering Smart Labeling Solutions <br className="hidden lg:block" />
          with Quality, Speed & Support
        </h1>
        <p className="text-lg md:text-2xl font-semibold text-secondary  lg:w-2/3 2xl:w-3/6 mx-auto">
          At Kartavya, we go beyond just supplying labels and ribbons we provide
          solutions tailored to your business needs. Here's why businesses
          across industries trust us
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {List.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-4 sm:space-y-5 p-5 py-14 justify-start items-start text-start text-secondary hover:text-primary duration-300 transfrom border-[2px] border-transparent hover:border-primary group"
          >
            <div className="h-24 w-24 bg-secondary group-hover:bg-primary duration-300 rounded-xl"></div>
            <h1 className="text-2xl md:text-4xl font-bold">{item.name}</h1>
            <p className="text-lg md:text-2xl">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Delivering;
