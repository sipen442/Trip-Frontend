import { GlobeCheck, Handshake, Plane, Telescope } from 'lucide-react'
import React from 'react'
import CustomButton from '../common/CustomButton'
import { useNavigate } from 'react-router-dom'

const featuresData =[
    {
        title:'24*7 Availability',
        content:'our website works 24*7 without any interruption. we guarentee 100% uptime',
        icon:GlobeCheck,
        link:"/about"
        
    },
    {
        title:'Easy Travel Planning',
        content:'Plan your complete journey easily with everything you need in one place.',
        icon:Plane ,
        link:"/contact"
    },
    {
        title:'Discover New Places',
        content:'Explore beautiful cities, local attractions, and breathtaking destinations.',
        icon:Telescope
    },
    {
        title:'Best Travel Deals',
        content:'Get great deals on hotels, flights, tours, and exciting travel experiences.',
        icon:Handshake 
    }
]

const Feature = () => {
    const navigate = useNavigate();
  return (
    <div className='px-20 py-24 bg-gray-900'>
        {/* heading */}
        <div  >
            <h2 onClick={()=>{navigate("/features")}} className='text-4xl m-15 font-bold text-center text-white'>Features</h2>
        </div>

        {/* content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
            {
               featuresData.map((feature, index)=>{
                return(
                    <div key={index} onClick={()=>{navigate("/feature.link")}} className='border rounded text-white p-4 border-green-600 '>

                       <feature.icon size={49} className='text-blue-900 mx-auto mb-4'/>
                       <h3 className='text-xl fond-bold-4'>{feature.title}</h3>
                       <p>{feature.content}</p>
                       
                    </div>
                )
               })
            }

        </div>
    </div>
  )
}

export default Feature

// Grid:partition gerne ksm garcha