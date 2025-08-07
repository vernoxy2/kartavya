import React from "react";
import Logo from "../assets/HomeImgs/LogoW.webp";
import OnlyLogo from "../assets/OnlyLogo.webp";

import { MdCall, MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = [
  { id: 1, name: "Labels" },
  { id: 2, name: "Ribbons" },
  { id: 3, name: "Printes" },
];

const company = [
  { id: 1, name: "About Us", link: "/about" },
  { id: 2, name: "Contact Us", link: "/contact" },
  { id: 3, name: "Support", link: "/" }, // No link provided
];

const contact = [
  {
    id: 1,
    name: "Call Us",
    Details: "+91 96241 50967",
    icons: <MdCall />,
    link: "tel:+91 96241 50967",
  },
  {
    id: 2,
    name: "Email",
    Details: "kartavyalebals1@gmail.com",
    icons: <MdEmail />,
    link: "mailto:kartavyalebals1@gmail.com",
  },
  {
    id: 3,
    name: "Address",
    Details: "Plot-513,KBC Complex, Dharampur chowkdi, Valsad, Gujarat",
    icons: <FaMapMarkerAlt />,
    link: "https://maps.app.goo.gl/KkM1PznWxwJa7mVX6",
  },
];

const Footer = () => {
  return (
    <section
      data-aos="fade"
      className="relative space-y-4 py-20 bg-primary text-white overflow-hidden"
    >
      <img
        src={OnlyLogo}
        alt="Logo"
        className="absolute -top-20 -right-40 opacity-10 pointer-events-none"
      />

      <div>
        <div
          data-aos="zoom-in"
          className="w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent mb-12"
        ></div>
        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row gap-8 container"
        >
          {/* Column 1 */}
          <div className="w-full lg:w-4/12 space-y-6">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={Logo}
                alt="Kartavya Logo"
                className="w-[80%] sm:w-[60%] lg:w-auto object-contain drop-shadow-md pointer-events-none"
              />
            </Link>
            <p className="text-2xl text-left font-semibold">
              Smart labeling solutions with <br className="hidden lg:block" />
              quality, speed & support.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-6/12 lg:w-2/12 space-y-3 sm:space-y-6 py-2">
            <h1 className="text-2xl sm:text-4xl text-left font-extrabold">
              Products
            </h1>
            {Products.map((product) => (
              <p
                key={product.id}
                className="text-lg sm:text-2xl text-left font-semibold"
              >
                {product.name}
              </p>
            ))}
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-6/12 lg:w-2/12 py-2 space-y-3 sm:space-y-6">
            <h1 className="text-2xl sm:text-4xl text-left font-extrabold">
              Company
            </h1>
            {company.map((item) =>
              item.link ? (
                <Link
                  key={item.id}
                  to={item.link}
                  onClick={{ scrollToTop: true }}
                  className="block text-lg sm:text-2xl text-left font-semibold hover:underline"
                >
                  {item.name}
                </Link>
              ) : (
                <p
                  key={item.id}
                  className="text-lg sm:text-2xl text-left font-semibold text-white/70"
                >
                  {item.name}
                </p>
              )
            )}
          </div>

          {/* Column 4 */}
          <div className="w-full lg:w-4/12 py-2 space-y-6">
            <h1 className="text-4xl text-left font-extrabold">Contact</h1>
            {contact.map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <p className="text-4xl sm:text-5xl text-left font-semibold">
                  {item.icons}
                </p>
                <div className="flex flex-col md:text-2xl text-left font-semibold">
                  <p>{item.name}:</p>
                  {item.link ? (
                    <a href={item.link} className="hover:underline">
                      {item.Details}
                    </a>
                  ) : (
                    <p>{item.Details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
