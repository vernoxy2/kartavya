import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./SubComponents/Navbar";
import Footer from "./SubComponents/Footer";
import webbg from "./assets/Webbg.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "./assets/KLogo.svg"

// Lazy Load Pages
const HomePage = lazy(() => import("./Components/HomePage"));
const AboutPage = lazy(() => import("./Components/AboutPage"));
const ProductPage = lazy(() => import("./Components/ProductPage"));
const ContactPage = lazy(() => import("./Components/ContactPage"));

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${webbg})` }}
      className="bg-white overflow-x-hidden scroll-smooth text-center"
    >
      <Navbar />

      {/* Suspense Wrapper */}
      <Suspense
        fallback={
          <div className="flex flex-col justify-center items-center h-screen text-xl space-y-5">

              <img src={Logo} alt="" loading="lazy" className="animate-pulse"/>
              <p>Loading...</p>

            </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
