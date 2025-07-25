import React from 'react'
import AboutHeader from '../Pages/About/AboutHeader'
import Trust from '../Pages/About/Trust'
import Businesses from '../Pages/About/Businesses'
import Commitment from '../Pages/About/Commitment'
import ContactUs from '../SubComponents/ContactUs'

const AboutPage = () => {
  return (
    <div>
      <AboutHeader />
      <Trust />
      <Businesses />
      <Commitment/>
      <ContactUs />
    </div>
  )
}

export default AboutPage
