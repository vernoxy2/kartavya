import React from "react";
import BackG from "../assets/Quote.webp";
import PrimaryBtn from "./PrimaryBtn";
import { useNavigate } from "react-router-dom";

const style = {
  backgroundImage: `url(${BackG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "right",
};

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <section
      style={style}
      className="py-12 md:py-32 space-y-6 md:space-y-12 text-primary"
    >
      <div className="container">
        <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:text-start space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Let’s Work Together
            </h1>
            <p className="text-secondary md:text-xl">
              Ready to elevate your product packaging with premium labels?{" "}
              <br className="hidden 2xl:block" /> Get in touch with our expert
              team today.
            </p>
            <PrimaryBtn
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "instant" });
                navigate("/contact");
              }}
              className="bg-primary text-white"
            >
              Get a Quote
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
