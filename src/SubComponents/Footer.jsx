import React from "react";
import Logo from "../assets/HomeImgs/LogoW.webp";
import { IoCall } from "react-icons/io5";
import { MdCall, MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Products = [
  {
    id: 1,
    name: "Labels",
  },
  {
    id: 2,
    name: "Ribbons",
  },
  {
    id: 3,
    name: "Printes",
  },
];

const company = [
  {
    id: 1,
    name: "About Us",
  },
  {
    id: 2,
    name: "Contact Us",
  },
  {
    id: 3,
    name: "Support",
  },
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
    link:"",
  },
];

const Footer = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 container">
          {/* Column 1 */}
          <div className="w-full lg:w-4/12 space-y-6">
            <img
              src={Logo}
              alt="Kartavya Logo"
              className="w-[80%] sm:w-[60%] lg:w-auto object-contain drop-shadow-md"
            />
            <p className="text-2xl text-left font-semibold">
              Smart labeling solutions with <br className="hidden lg:block"/> quality, speed & support.
            </p>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-6/12 lg:w-2/12 space-y-3 sm:space-y-6 py-2">
            <h1 className="text-2xl sm:text-4xl text-left font-extrabold">Products</h1>
            {Products.map((product) => (
              <p className="text-lg sm:text-2xl text-left font-semibold">{product.name}</p>
            ))}
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-6/12 lg:w-2/12 py-2 space-y-3 sm:space-y-6">
            {/* Add your content here */}
            <h1 className="text-2xl sm:text-4xl text-left font-extrabold">Company</h1>
            {company.map((company) => (
              <p className="text-lg sm:text-2xl text-left font-semibold">{company.name}</p>
            ))}
          </div>

          {/* Column 4 */}
          <div className="w-full lg:w-4/12 py-2 space-y-6">
            {/* Add your content here */}
            <h1 className="text-4xl text-left font-extrabold">Contact</h1>
            {contact.map((contact) => (
              <div className="flex items-center space-x-3">
                <p className="text-4xl sm:text-5xl text-left font-semibold">
                  {contact.icons}
                </p>
                <div className="flex flex-col md:text-2xl text-left font-semibold">
                  <p>{contact.name}:</p>
                  <p>{contact.Details}</p>
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
