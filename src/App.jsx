import React from "react";
import Navbar from "./SubComponents/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ContHeader from "./Pages/Contact/ContHeader";
import Footer from "./SubComponents/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutPage from "./Components/AboutPage";


const App = () => {
  return (
    <div className="bg-white overflow-x-hidden scroll-smooth text-center">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={ <AboutPage />} />
        <Route path="/contact" element={<ContHeader />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
