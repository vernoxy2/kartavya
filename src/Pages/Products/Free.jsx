import React from "react";
import Bg from "../../assets/ProductsImgs/Free.webp";
import PrimaryBtn from "../../SubComponents/PrimaryBtn";

const style = {
  backgroundImage: `url(${Bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "left",
};

const Free = () => {
  return (
    <section
      style={style}
      className="py-12 md:py-32 space-y-6 md:space-y-12 text-primary"
    >
      <div className="container">
        <div className="">
          <div className="md:text-end space-y-8 ">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Free Sample. No Obligation
            </h1>
            <p className="text-secondary md:text-xl">
              See the quality yourself. Get a sample of any label or{" "}
              <br className="hidden 2xl:block" /> ribbon before placing bulk
              order.
            </p>
            <PrimaryBtn className="bg-primary text-white">
              Get a Quote
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Free;
