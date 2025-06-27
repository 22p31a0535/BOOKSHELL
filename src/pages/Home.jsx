import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import OurBestSeller from '../components/OurBestSeller'
import HomeBooks from '../components/HomeBooks'
import HomeAbout from '../components/HomeAbout'
import Footer from '../components/Footer'

const Home = () => {

  useEffect(()=>{
      window.scrollTo(0,0)
    },[])
  return (
    <>
       <Navbar/>
       <Banner/>
       <OurBestSeller/>
       <HomeBooks/>
       <HomeAbout/>
       <Footer/>
    </>
  )
}

export default Home