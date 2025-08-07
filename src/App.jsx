import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./SubComponents/Navbar";
import Footer from "./SubComponents/Footer";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import ProductPage from "./Components/ProductPage";
import ContactPage from "./Components/ContactPage";
import webbg from "./assets/Webbg.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css"; // Ensure AOS styles are imported

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000,
      delay: 200
     });
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${webbg})` }}
      className="bg-white overflow-x-hidden scroll-smooth text-center"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
