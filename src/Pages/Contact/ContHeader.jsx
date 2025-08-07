import React from "react";
import Cont from "../../assets/ContactImgs/ContHeader.webp"

const style = {
  backgroundImage: `url(${Cont})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}

const ContHeader = () => {
  return (
    <section data-aos="fade" style={style} className="py-72 md:py-92 space-y-8 md:space-y-16"></section>
  );
};

export default ContHeader;
