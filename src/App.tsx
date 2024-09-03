import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Cards from './components/Cards/Card'
import Discount from './components/Discount/Discount'
import Info from './components/Info/Info'
import Explore from './components/ExploreImage/Explore'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import Opinion from './components/Opinions/Opinion'

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Main />
      <Cards />
      <Discount />
      <Info />
      <Explore />
      <Opinion />
      <Newsletter/>
      <Footer />
    </>
  )
}

export default App
