import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomButton = ({text,className,link}) => {
 const navigate = useNavigate(); // this is used to change page 

  return (
     <button onClick={()=>{
      navigate(link)

     }} className={`ring ring-blue-400 shadow-lg shadow-blue-400 bg-blue-600 text-white py-2 px-6 border-2 
        hover:bg-black 2xl  rounded-lg ${className}`}> {text}</button>
  )
}

export default CustomButton

