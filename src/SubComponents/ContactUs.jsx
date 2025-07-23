import React from "react";
import BackG from "../assets/Quote.webp";
import PrimaryBtn from "./PrimaryBtn";

const style = {
  backgroundImage: `url(${BackG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const ContactUs = () => {
  return (
    <section style={style} className=" py-12 sm:pt-16 text-white space-y-32 md:space-y-44 lg:space-y-44 container px-0 ">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold">Contact Us</h1>
      </div>
      <div className="space-y-6 md:space-y-10">
        <h1 className="text-2xl md:text-4xl font-bold">
        Ready to Transform Your Labeling Process?
      </h1>
      <p className="text-lg md:text-2xl font-semibold px-4 md:px-0">
        Get in touch with our experts today and discover the perfect <br className="hidden md:block" />
        labeling solution for your business.
      </p>
      <PrimaryBtn className="bg-white text-primary lg:text-4xl font-bold">Get a Quote</PrimaryBtn>
      </div>
    </section>
  );
};

export default ContactUs;
