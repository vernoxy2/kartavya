import React from "react";
import HomeHeader from "../Pages/Home/HomeHeader";
import Weare from "../Pages/Home/Weare";
import Products from "../Pages/Home/Products";
import Experience from "../Pages/Home/Experience";
import WeServe from "../Pages/Home/WeServe";
import Clients from "../Pages/Home/Clients";
import ContactUs from "../SubComponents/ContactUs";
import Delivering from "../Pages/Home/Delivering";
import { useMetaTags } from "../hooks/useMetaTags";

const HomePage = () => {
  useMetaTags({
    title: "Precision Barcode Labels & Custom Printing | Kartavya Industries",
    description:
      "Precision-made barcode labels and custom printing solutions designed for smooth scanning, durability, and industry compliance.",
    keywords:
      "barcode labels, thermal labels, custom label printing, industrial labeling",
    image: "https://kartavyaindustries.com/path-to-preview-image.jpg",
    url: "https://kartavyaindustries.com/",
    type: "website",
  });
  return (
    <div className="">
      <HomeHeader />
      <Weare />
      <Products />
      <Experience />
      <WeServe />
      <Delivering />
      {/* <Clients /> */}
      <ContactUs />
    </div>
  );
};

export default HomePage;
