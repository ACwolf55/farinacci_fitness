import React from 'react'
import Header from '~/components/Header'
import ContactForm from '~/components/ContactForm'
import Footer from "~/components/Footer";


function contact() {
  return (
    <div>
      <Header/>
      {/* <p>HERE B CONTACT FORM *insert pirate emoji here*</p> */}
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default contact