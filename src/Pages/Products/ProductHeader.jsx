import React from 'react'
import ProHeader from "../../assets/ProductsImgs/ProductHeaderImg.webp"

const style = {
    backgroundImage: `url(${ProHeader})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}

const ProductHeader = () => {
  return (
    <section data-aos="fade" style={style} className='py-72 md:py-92'></section>
  )
}

export default ProductHeader
