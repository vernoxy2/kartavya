import React from "react";
import person1 from "../../assets/HomeImgs/Person1.webp";
import person3 from "../../assets/HomeImgs/Person3.webp";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import SaidHeading from "../../SubComponents/SaidHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSList = [
  {
    id: 1,
    name: "Amit Patel",
    designation: "Production Manager",
    review:
      "Kartavya's custom labeling solutions have streamlined our production process. The quality is outstanding and delivery is always on time.",
    image: person1,
    rate: 4.5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    designation: "Production Manager",
    review:
      "Kartavya's custom labeling solutions have streamlined our production process. The quality is outstanding and delivery is always on time.",
    image: person1,
    rate: 3,
  },
  {
    id: 3,
    name: "Priya Sharma",
    designation: "Production Manager",
    review:
      "Kartavya's custom labeling solutions have streamlined our production process. The quality is outstanding and delivery is always on time.",
    image: person3,
    rate: 5,
  },
];

// Render stars based on rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }

  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
  }

  return stars;
};

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
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

const Clients = () => {
  return (
    <section className="py-8 sm:py-12 space-y-8 md:space-y-16">
      <SaidHeading>What Our Clients Say</SaidHeading>

      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {ClientSList.map((client) => (
            <div data-aos="fade" key={client.id} className="px-8 md:px-4 lg:px-8">
              <div className="flex flex-col space-y-3 sm:space-y-5 justify-center items-center text-center group bg-secondary p-12 py-8 text-white hover:bg-primary duration-300 h-full">
                <div className="flex gap-1 text-2xl ">
                  {renderStars(client.rate)}
                </div>
                <p className="text-base md:text-xl">"{client.review}"</p>
                <div className="flex ictems-center justify-center gap-5">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-20 h-20 object-cnover rounded-full mb-4"
                  />
                  <div className="my-auto text-start">
                    <h1 className="text-xl md:text-2xl font-semibold">
                      {client.name}
                    </h1>
                    <p className="text-sm md:text-lg ">{client.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
