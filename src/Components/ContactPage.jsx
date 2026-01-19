import React from 'react'
import ContHeader from '../Pages/Contact/ContHeader'
import Map from '../Pages/Contact/Map'
import ContactForm from '../Pages/Contact/ContactForm'
import Touch from '../Pages/Contact/Touch'
import { useMetaTags } from '../hooks/useMetaTags'

const ContactPage = () => {
   useMetaTags({
    title: 'Contact Us | Kartavya Industries - Get a Quote or Support',
    description: 'Need help with barcode labels or custom printing? Contact Kartavya Industries for quotes, questions, or technical support.',
    keywords: 'contact Kartavya Industries, label quote, printing support',
    image: 'https://kartavyaindustries.com/images/contact-banner.jpg',
    url: 'https://kartavyaindustries.com/contact',
    type: 'website'
  });
  return (
    <div>
      <ContHeader />
      <Touch/>
      <ContactForm/>
      <Map/>
    </div>
  )
}

export default ContactPage
