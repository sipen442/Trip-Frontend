import React from 'react'
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
    <div className='relative'>
{/* image */}
<div className='w-full h-[90vh] overflow-hidden flex items-end'>
    <img src="/Hero-image.jpg" alt="wanderwise hero section"
     className='w-full '/>
</div>
{/* overlay :-box with black colour*/}
<div className='w-full h-[90vh] bg-black absolute top-0 opacity-50'>

</div >

{/* content */}
<div className='absolute top-0 w-full h-[90vh] flex items-center 
justify-center text-white'>
    <div className='w-1/2 mx-auto text-center'>
    <h1 className='text-5xl font-bold text-white'>
        plan your trip with wanderwise
        </h1>
    <p className='text-white mt-12 text-2xl leading-9 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Iusto dolorum magni blanditiis non similique commodi laborum beatae eligendi. 
        Consectetur ut atque, dolor sint quos aliquid in molestias. 
        Perspiciatis, culpa ut?
    </p>
    <div className='space-x-7 mt-12' >
    <CustomButton text="Get started"/>
    <CustomButton text="learn more"/>
    </div>
    </div>

</div>

    </div>
  )
}

export default Hero


// // leading: space between line
// tracking: space between letter or text