import React from "react";
import ProductHeader from "../Pages/Products/ProductHeader";
import Explore from "../Pages/Products/Explore";
import Barcode from "../Pages/Products/Barcode";
import Printed from "../Pages/Products/Printed";
import TTR from "../Pages/Products/TTR";
import Machines from "../Pages/Products/Machines";
import Serve from "../Pages/Products/Serve";
import Free from "../Pages/Products/Free";
import { useMetaTags } from "../hooks/useMetaTags";

const ProductPage = () => {
  useMetaTags({
    title:
      "Barcode Labels, Thermal Labels & Custom Printing | Kartavya Industries",
    description:
      "Browse our range of barcode labels, thermal labels, and custom printing solutions tailored for industrial, retail, and logistics applications.",
    keywords:
      "barcode labels, thermal labels, custom label printing, industrial labeling, product labeling",
    image: "https://kartavyaindustries.com/images/products-banner.jpg",
    url: "https://kartavyaindustries.com/products",
    type: "website",
  });
  return (
    <div>
      <ProductHeader />
      <Explore />
      <Barcode />
      <Printed />
      <TTR />
      <Machines />
      <Serve />
      <Free />
    </div>
  );
};

export default ProductPage;
