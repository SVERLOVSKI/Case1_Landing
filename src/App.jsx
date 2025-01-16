import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Promo from './Components/Promo/Promo'
import Specifications from './Components/Specifications/Specifications'
import Blog from './Components/Blog/Blog'
import Team from './Components/Team/Team'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
      <Header />
      <main className="main-content">
        <Promo />
        <Specifications />
        <Blog />
        <Team />
      </main>
      <Footer />
    </>
  )
}

export default App
