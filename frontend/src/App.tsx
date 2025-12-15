// import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/layout/header/HeaderComponent'
import NavbarComponent from './components/layout/Navbar/NavbarComponent'
import ToursComponent from './components/layout/tours/ToursComponent'

function App() {

  return (
    <>
      <NavbarComponent/>
      <HeaderComponent/>
      <ToursComponent/>
    </>
  )
}

export default App
