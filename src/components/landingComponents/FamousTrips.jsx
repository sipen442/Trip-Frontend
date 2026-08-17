import React from 'react'
import CustomButton from '../common/CustomButton'
import { useNavigate } from 'react-router-dom'

const  tripsData =[
    {
        title:"Everest Base Camp",
        content:"Experience an unforgettable Himalayan adventure with breathtaking mountain views and a journey toward the world's highest peak.",
       Image:"https://cdn.trekthehimalayas.com/images/EverestBaseCampTrek/GalleryDesktop/Summer/8ebcab01-64a4-4a6b-9a4c-f2b4de2650fc_EBC-2.webp",
        link:"/about"
        
    },
    {
        title:"Pokhara",
        content:"Enjoy the beautiful Phewa Lake, stunning views of the Annapurna range, peaceful surroundings, and exciting adventure activities like paragliding.",
        Image:"https://nepalecoadventure.com/wp-content/uploads/2017/04/A-Complete-Travel-Guide-To-Pokhara-City.jpg",
        link:"/contact"
    },
    {
        title:"Kathmandu",
        content:"Explore ancient temples, historic monuments, traditional markets, and the rich cultural heritage of Nepal's capital city.",
        Image:"https://himalayan-masters.com/wp-content/uploads/2021/05/Nagarkot-A-Picturesque-Destination-Near-Kathmandu-1200x800.jpg",
       link:"/about"
    },
    {
        title:"Rara Lake",
        content:"Experience the peaceful beauty of Nepal's largest lake, surrounded by forests, mountains, and untouched natural landscapes.",
        Image:"https://worldhimalayandestination.com/wp-content/uploads/2019/05/view-of-rara-lake-825x450.jpg",
        link:"/home"
    }
]

const FamousTrips = () => {
    const navigate = useNavigate();
  return (
    <div className='px-20 py-24  bg-gray-900'>
        {/* heading */}
        <div  >
            <h2  className='text-4xl m-15 font-bold text-center text-white'>Famous Trips</h2>
        </div>

        {/* content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
            {
               tripsData.map((feature, index)=>{
                return(
                    <div key={index} onClick={()=>{navigate("/feature.link")}} className='border rounded p-4 border-green-600 bg-yellow-950 text-white grid grid-cols-1 md:bg-amber-300 lg:bg-gray-700 '>
                      <div className='w-full h-40 overflow-hidden '>
                      <img className='w-full' src={feature.Image} alt={feature.title}/>
                      </div>
                        
                       <h3 className='text-xl mx-auto py-6 fond-bold-4'>{feature.title}</h3>
                       <p>{feature.content}</p>
                       
                    </div>
                )
               })
            }

        </div>
    </div>
  )
}

export default FamousTrips

// Grid:partition gerne kam garcha
