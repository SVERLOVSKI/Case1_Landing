import { useContext, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Promo from './Components/Promo/Promo'
import Specifications from './Components/Specifications/Specifications'
import Blog from './Components/Blog/Blog'
import Team from './Components/Team/Team'
import Footer from './Components/Footer/Footer'
import LoginForm from './Components/LoginForm/LoginForm'
import ReturnCall from './Components/ReturnCall/ReturnCall'



function App() {
  const [visibleLoginForm, setVisibleLoginForm] = useState(false);
  const [visibleReturnCallForm, setVisibleReturnCallForm] = useState(false)

  function handleVisibleLoginForm() {
    setVisibleLoginForm(!visibleLoginForm);
  }

  function handleVisibleReturnCallForm() {
    setVisibleReturnCallForm(!visibleReturnCallForm);
  }

  return (
    <>
        <Header 
        onClickLogin={handleVisibleLoginForm}
        onClickCall={handleVisibleReturnCallForm}
        />
        <main className="main-content">
          <Promo
          onClick={handleVisibleReturnCallForm} />
          <Specifications />
          <Blog
          onClick={handleVisibleReturnCallForm} />
          <Team
          onClick={handleVisibleReturnCallForm} />
        </main>
        <Footer />
        <LoginForm 
        visibleLoginForm={visibleLoginForm}
        onClick={handleVisibleLoginForm}
        />
        <ReturnCall 
        visibleReturnCallForm={visibleReturnCallForm}
        onClick={handleVisibleReturnCallForm}
        />
    </>
  )
}

export default App
