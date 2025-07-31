import React from 'react'
import ProductHeader from '../Pages/Products/ProductHeader'
import Explore from '../Pages/Products/Explore'
import Barcode from '../Pages/Products/Barcode'
import Printed from '../Pages/Products/Printed'
import TTR from '../Pages/Products/TTR'
import Machines from '../Pages/Products/Machines'
import Serve from '../Pages/Products/Serve'
import Free from '../Pages/Products/Free'

const ProductPage = () => {
  return (
    <div>
      <ProductHeader />
      <Explore />
      <Barcode />
      <Printed/>
      <TTR/>
      <Machines/>
      <Serve/>
      <Free/>
    </div>
  )
}

export default ProductPage
