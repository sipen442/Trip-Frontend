import React from 'react'
import useAuth from '../../hooks/useAuth'
import CustomButton from './CustomButton';

const AppNavbar = () => {
    const {onLogout} = useAuth();
  return (
     // left part
    <header className='flex items-centre justify-between border
     border-gray-500 py-4 px-4 md:px-8 lg:px-20 bg-gray-900'>
      <div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-blue-600 font-bold'>Wanderwise</h1>
      </div>
      <div className='flex items-center justify-between gap-8 font-medium'>
        <nav className='space-x-9 [&>a]:hover:text-purple-600 [&>a]:text-white hidden lg:block'>
          <a href='/dashboard'>Dashboard</a>
          <a href='/trips'>Trips</a>
          <a href='/itineraries'>Itineries</a>
          <a href='/baggage'>Baggage</a>
        </nav>
        <div onClick={()=>{onLogout()}}>
      <CustomButton text="LogOut" />
      </div>
      </div>

    </header>
  )
}

export default AppNavbar