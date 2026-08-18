import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/landingComponents/Hero'
import Feature from '../components/landingComponents/feature'
import FamousTrips from '../components/landingComponents/FamousTrips'
import OurMission from '../components/landingComponents/OurMission'

const Landing  = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Feature/>
      <FamousTrips/>
      <OurMission/>
    </div>
  )
}

export default Landing 