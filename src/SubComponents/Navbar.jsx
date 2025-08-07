import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Kartavya_Logo.png";
import { NavLink } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home", link: "/" },
  { id: "about", label: "About Us", link: "/about" },
  { id: "Products", label: "Products", link: "/products" },
  { id: "contact", label: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="w-full shadow-sm  top-0 left-0 z-50 ">
      <div className="container mx-auto  grid grid-cols-12 items-center">
        {/* Logo */}
        <div className="col-span-6 md:col-span-3 ">
          <NavLink to="/" onClick={handleNavClick}>
            <img
              src={Logo}
              alt="Kartavya Logo"
              className="w-[80%] sm:w-[90%] lg:w-auto object-contain drop-shadow-md"
            />
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex col-span-6 justify-center gap-6 xl:gap-10 text-[16px] font-medium text-[#353535]">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 font-semibold 
                ${
                  isActive
                    ? "text-[#1A1A3C] after:scale-100"
                    : "hover:text-[#1A1A3C] after:scale-0"
                }
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#1A1A3C] after:w-full after:transition-transform after:duration-300 after:origin-left`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* WhatsApp + Hamburger */}
        <div className="col-span-6 md:col-span-3 flex justify-end items-center gap-4">
          <a
            href="https://wa.me/919624150967"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center  gap-2 bg-[#1A1A3C] text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:scale-95 hover:bg-[#0f1f36] transition"
          >
            <FaWhatsapp className="text-lg" />
            +91 96241 50967
          </a>

          <button
            className="md:hidden text-2xl text-[#1A1A3C]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 py-4 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <ul className="flex flex-col gap-4 text-[#1A1A3C] font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `block border-b pb-2 ${
                    isActive ? "font-bold text-[#1A1A3C]" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/919624150967"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap justify-center items-center gap-2 bg-[#1A1A3C] text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-[#0f1f36]   transition"
              onClick={handleNavClick}
            >
              <FaWhatsapp className="text-lg" />
              +91 96241 50967
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
