import React from 'react'
import ContHeader from '../Pages/Contact/ContHeader'
import Map from '../Pages/Contact/Map'
import ContactForm from '../Pages/Contact/ContactForm'
import Touch from '../Pages/Contact/Touch'

const ContactPage = () => {
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
