import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/landingComponents/Hero'
import Feature from '../components/landingComponents/feature'
import FamousTrips from '../components/landingComponents/FamousTrips'

const Landing  = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Feature/>
      <FamousTrips/>
    </div>
  )
}

export default Landing 