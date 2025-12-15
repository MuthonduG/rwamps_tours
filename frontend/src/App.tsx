// import { useState } from 'react'
import './App.css'
import ContactUsComponent from './components/layout/contact/ContactUsComponent'
import FaqsComponents from './components/layout/faqs/FaqsComponents'
import HeaderComponent from './components/layout/header/HeaderComponent'
import MappedDestinations from './components/layout/maps/MappedDestinations'
import NavbarComponent from './components/layout/Navbar/NavbarComponent'
import ServicesComponent from './components/layout/our_services/ServicesComponent'
import TestimonialsComponent from './components/layout/testimonials/TestimonialsComponent'
import ToursComponent from './components/layout/tours/ToursComponent'
import WhyUsComponent from './components/why_us/WhyUsComponent'
import FooterComponent from './components/layout/footer/FooterComponent'

function App() {

  return (
    <>
      <NavbarComponent/>
      <HeaderComponent/>
      <ToursComponent/>
      <ServicesComponent/>
      <MappedDestinations/>
      <WhyUsComponent/>
      <TestimonialsComponent/>
      <FaqsComponents/>
      <ContactUsComponent/>
      <FooterComponent/>
    </>
  )
}

export default App
