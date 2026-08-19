import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/landingComponents/Hero'
import Feature from '../components/landingComponents/feature'
import FamousTrips from '../components/landingComponents/FamousTrips'
import OurMission from '../components/landingComponents/OurMission'
import Testimonials from '../components/landingComponents/Testimonials'
import Footer  from '../components/landingComponents/Footer'

const Landing  = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Feature/>
      <FamousTrips/>
      <OurMission/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Landing 