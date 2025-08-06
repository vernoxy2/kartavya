import React from "react";
import Navbar from "./SubComponents/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ContHeader from "./Pages/Contact/ContHeader";
import Footer from "./SubComponents/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutPage from "./Components/AboutPage";
import ProductPage from "./Components/ProductPage";
import ContactPage from "./Components/ContactPage";
import webbg from "./assets/Webbg.webp";


const App = () => {
  return (
    <div style={{ backgroundImage: `url(${webbg})` }} className="bg-white overflow-x-hidden scroll-smooth text-center">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={ <AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
