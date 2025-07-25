import React from "react";
import HeaderImg from "../../assets/AboutImgs/AboutHeader.webp";

const style = {
  backgroundImage: `url(${HeaderImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}

const AboutHeader = () => {
  return (
    <section style={style} className="py-72 md:py-92 space-y-8 md:space-y-16">
      <div></div>
    </section>
  );
};

export default AboutHeader;
