import React from "react";
import HomeHeader from "../Pages/Home/HomeHeader";
import Weare from "../Pages/Home/Weare";
import Products from "../Pages/Home/Products";
import Experience from "../Pages/Home/Experience";
import WeServe from "../Pages/Home/WeServe";
import Clients from "../Pages/Home/Clients";
import ContactUs from "../SubComponents/ContactUs";

const HomePage = () => {
  return (
    <div className="">
      <HomeHeader />
      <Weare />
      <Products />
      <Experience />
      <WeServe />
      <Clients/>
      <ContactUs/>
    </div>
  );
};

export default HomePage;
