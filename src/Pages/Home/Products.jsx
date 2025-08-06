import React from "react";
import Product1 from "../../assets/HomeImgs/Product1.webp";
import Product2 from "../../assets/HomeImgs/Product2.webp";
import Product3 from "../../assets/HomeImgs/Product3.webp";
import PrimaryBtn from "../../SubComponents/PrimaryBtn";
import { FaCheckCircle } from "react-icons/fa";
import SaidHeading from "../../SubComponents/SaidHeading";
import CommaBox from "../../SubComponents/CommaBox";

const Products = () => {
  return (
    <div className="py-6 md:py-12 space-y-8 sm:space-y-16">
      <SaidHeading>Our Products</SaidHeading>
      <CommaBox
        quote={
          <>
            Delivering high-performance barcode labels,
            <br />
            custom printed labels, and TTR ribbons for
            <br />
            logistics, pharma, retail & more.
          </>
        }
      />

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Product 1 */}
        <div
          className="shadow-2xl bg-no-repeat bg-cover py-56 relative group"
          style={{ backgroundImage: `url(${Product1})` }}
        >
          <div className="text-primary font-bold text-4xl group-hover:bg-white/65 duration-300 flex absolute top-5 py-3 px-7 ">
            Printed Labels
          </div>
          <div className="group-hover:bg-white/65 duration-300 absolute bottom-0 w-full text-start flex flex-row justify-between items-center ps-5 py-4">
            <div>
              <h1 className="text-xl font-bold text-primary">
                Custom labels tailored for branding,{" "}
                <br className="hidden md:block" /> packaging, and retail.
              </h1>
              <div className="flex flex-col ">
                <h1 className="text-lg font-semibold text-secondary flex items-center">
                  <span>
                    <FaCheckCircle className="text-primary inline-block mr-2" />
                  </span>
                  Matte / Gloss / Transparent
                </h1>
                <h1 className="text-lg font-semibold text-secondary flex items-center">
                  <span>
                    <FaCheckCircle className="text-primary inline-block mr-2" />
                  </span>
                  Custom sizes & finishes
                </h1>
              </div>
            </div>
            <div>
              <PrimaryBtn className="bg-primary text-white">
                Learn More
              </PrimaryBtn>
            </div>
          </div>
        </div>
        {/* right border */}
        <div className=" flex flex-col justify-between gap-8">
          <div className="h-full flex justify-between gap-8">
            {/* Barcode Labels */}
            <div className="w-full shadow-md hover:shadow-xl duration-300">
              <div
                className="shadow-2xl bg-no-repeat bg-cover py-28 relative group"
                style={{ backgroundImage: `url(${Product2})` }}
              >
                <div className="text-primary font-bold text-xl group-hover:bg-white/65 duration-300 flex absolute top-2 py-1 px-4 ">
                  Barcode Labels
                </div>
                <div className="group-hover:bg-white/65 duration-300 absolute bottom-0 w-full text-start flex flex-row justify-between items-center ps-5 py-4 ">
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-xs font-bold text-primary">
                      High-quality, scan-ready labels for inventory and tracking
                      needs.
                    </h1>
                    <div className="flex flex-col">
                      <h1 className="text-xs font-semibold text-secondary flex items-center">
                        <span>
                          <FaCheckCircle className="text-primary inline-block mr-2" />
                        </span>
                        Adhesive strength
                      </h1>
                      <h1 className="text-xs font-semibold text-secondary flex items-center">
                        <span>
                          <FaCheckCircle className="text-primary inline-block mr-2" />
                        </span>
                        Clear printing
                      </h1>
                    </div>
                  </div>
                  <div>
                    <PrimaryBtn className="bg-primary text-white text-xs">
                      Learn More
                    </PrimaryBtn>
                  </div>
                </div>
              </div>
            </div>
            {/* TTR Ribbons */}
            <div className="w-full shadow-md hover:shadow-xl duration-300">
              <div
                className="shadow-2xl bg-no-repeat bg-cover py-28 relative group"
                style={{ backgroundImage: `url(${Product3})` }}
              >
                <div className="text-primary font-bold text-xl group-hover:bg-white/65 duration-300 flex absolute top-2 py-1 px-4 ">
                  TTR Ribbons
                </div>
                <div className="group-hover:bg-white/65 duration-300 absolute bottom-0 w-full text-start flex flex-row justify-between items-center ps-5 py-4 ">
                  <div className="flex flex-col space-y-2">
                    <h1 className="text-xs font-bold text-primary">
                      Wax, Wax-Resin, and Resin ribbons compatible with all
                      major printers.
                    </h1>
                    <div className="flex flex-col">
                      <h1 className="text-xs font-semibold text-secondary flex items-center">
                        <span>
                          <FaCheckCircle className="text-primary inline-block mr-2" />
                        </span>
                        Crisp, long-lasting prints
                      </h1>
                      <h1 className="text-xs font-semibold text-secondary flex items-center">
                        <span>
                          <FaCheckCircle className="text-primary inline-block mr-2" />
                        </span>
                        Smudge & heat-resistant
                      </h1>
                    </div>
                  </div>
                  <div>
                    <PrimaryBtn className="bg-primary text-white text-xs">
                      Learn More
                    </PrimaryBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Products;
