import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
    <div>
      <Navbar />
      <Banner/>
      <Footer/>
    </div>

  

    </>
  )
}

export default Home