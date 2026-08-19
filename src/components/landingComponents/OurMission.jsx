import { Star } from 'lucide-react'
import React from 'react'

const OurMission = () => {
  return (
    <section className='px-80 py-25 bg-gray-900 text-white '>
        <h2 className='text-4xl font-bold text-center mb-12'>Our Mission </h2>
        <p className='text-xl italic text-center font-medium mb-20'>
            Our mission is to make sure users <br />can plan trips with their friend and family. plan their itinerary, manage their baggage,<br />and discovery new experience together.
            </p>
    <div className='grid grid-cols-3  gap-12 inset-shadow-sm inset-shadow-blue-300 '>
        <div className='text-center border-r shadow-lg shadow-blue-600'>
            <p className='text-4xl font-black   '>300+</p>
            <p className='text-xl mt-2 italic  '>Clints Served</p>
        </div>
        <div className=' text-center border-r shadow-lg shadow-blue-600'>
            <p className='text-4xl font-black flex justify-center items-center gap-2'>4.7 <Star size={30} /></p>
            <p className='text-xl mt-2 italic'>Overall Rating</p>
        </div>
        <div className='text-center shadow-lg shadow-blue-600'>
            <p className='text-4xl font-black'>20+</p>
            <p className='text-xl mt-2'>Contries Linked</p>
        </div>
    </div>
    </section>
  )
}

export default OurMission