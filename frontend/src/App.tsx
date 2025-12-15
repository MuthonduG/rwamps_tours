// import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/layout/header/HeaderComponent'
import NavbarComponent from './components/layout/Navbar/NavbarComponent'
import ServicesComponent from './components/layout/our_services/ServicesComponent'
import TestimonialsComponent from './components/layout/testimonials/TestimonialsComponent'
import ToursComponent from './components/layout/tours/ToursComponent'
import WhyUsComponent from './components/why_us/WhyUsComponent'

function App() {

  return (
    <>
      <NavbarComponent/>
      <HeaderComponent/>
      <ToursComponent/>
      <ServicesComponent/>
      <WhyUsComponent/>
      <TestimonialsComponent/>
    </>
  )
}

export default App
