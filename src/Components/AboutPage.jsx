import React from 'react'
import AboutHeader from '../Pages/About/AboutHeader'
import Trust from '../Pages/About/Trust'
import Businesses from '../Pages/About/Businesses'
import Commitment from '../Pages/About/Commitment'
import ContactUs from '../SubComponents/ContactUs'
import Numbers from '../Pages/About/Numbers'
import { useMetaTags } from '../hooks/useMetaTags'

const AboutPage = () => {
  useMetaTags({
    title: 'About Us | Kartavya Industries - Labeling & Printing Experts',
    description: 'Kartavya Industries is a leading manufacturer of precision barcode labels and custom printing solutions.',
    keywords: 'about Kartavya Industries, labeling company, barcode label experts',
    image: 'https://kartavyaindustries.com/images/about-team.jpg',
    url: 'https://kartavyaindustries.com/about',
    type: 'website'
  });
  return (
    <div>
      <AboutHeader />
      <Trust />
      <Businesses />
      <Commitment/>
      <Numbers/>
      <ContactUs />
    </div>
  )
}

export default AboutPage
