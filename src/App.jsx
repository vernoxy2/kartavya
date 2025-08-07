import React from "react";
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

const App = () => {
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
