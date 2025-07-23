import React from "react";
import Slider from "react-slick";

// React Slick CSS (Make sure these are included in your project)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServeList = [
  {
    id: 1,
    name: "Pharmaceutical & Healthcare",
    description:
      "Labels that meet strict regulatory standards for medicines, lab samples, and medical packaging.",
    data: [
      "High print clarity",
      "Small-format options",
      "Long-lasting & non-smudge",
    ],
  },
  {
    id: 2,
    name: "Manufacturing & Industrial",
    description:
      "Reliable ribbons and labels for raw materials, machine parts, and finished goods.",
    data: [
      "Resin & wax-resin ribbons",
      "Heavy-duty label materials",
      "Pre-printed customization",
    ],
  },
  {
    id: 3,
    name: "Retail & Packaging",
    description:
      "Make your products shelf-ready with visually appealing and functional labeling.",
    data: [
      "Matte & transparent labels",
      "Product branding",
      "Ready for POS scanning",
    ],
  },
  {
    id: 4,
    name: "Logistics & Transportation",
    description:
      "Durable labeling for tracking shipments, inventory, and packages under tough conditions.",
    data: [
      "Durable shipment tracking",
      "Inventory labeling",
      "Withstands tough conditions",
    ],
  },
  {
    id: 5,
    name: "Food & Beverage",
    description:
      "Labels that meet the demands of food safety and brand appeal for packaging.",
    data: [
      "Bulk availability",
      "Industry-specific solutions",
      "Custom sample kits available",
    ],
  },
  {
    id: 6,
    name: "Automotive",
    description:
      "Parts identification, safety labels, and quality control tracking.",
    data: [
      "Parts ID made easy",
      "Clear safety labeling",
      "Track quality at every step",
    ],
  },
  {
    id: 7,
    name: "Electronics",
    description: "Component labeling, serial numbers, and warranty tracking.",
    data: [
      "Clear component labels",
      "Unique serial numbers",
      "Easy warranty tracking",
    ],
  },
  {
    id: 8,
    name: "Oil & Chemical Industry",
    description:
      "Durable labels that withstand harsh environments, chemicals, and high temperatures.",
    data: [
      "Resin ribbons for chemicals",
      "Waterproof & smudge-proof",
      "Long-lasting legibility",
    ],
  },
];

const WeServe = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8 sm:py-12 space-y-8 md:space-y-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Industries We Serve
        </h1>
        <p className="text-lg sm:text-2xl text-secondary font-semibold mt-4">
          Smart Labeling & Ribbon Solutions <br className="lg:hidden" /> for
          Every Sector
        </p>
        <p className="text-lg sm:text-2xl text-secondary 2xl:w-2/3 mx-auto font-semibold mt-2">
          At Kartavya, we provide reliable and industry-specific labeling and
          printing solutions that help businesses stay organized, compliant, and
          customer-ready. Our range of barcode labels, printed labels, and TTR
          ribbons are tailored to perform across diverse operational
          environments.
        </p>
      </div>

      <div className="container">
        <Slider {...settings} className="py-12 drop-shadow-2xl">
          {ServeList.map((serve) => (
            <div key={serve.id} className="px-2 gr">
              <div className="h-full flex flex-col space-y-4 sm:space-y-5 justify-between items-center text-center border border-primary/30 rounded-xl p-6 shadow-md bg-white group-hover:bg-gradient-to-t from-primary/10 to-white">
                <h2 className="text-xl md:text-2xl font-bold">{serve.name}</h2>
                <p className="text-base md:text-lg text-gray-600">
                  {serve.description}
                </p>
                <ul className="text-base md:text-lg list-disc list-inside text-left">
                  {serve.data.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WeServe;
