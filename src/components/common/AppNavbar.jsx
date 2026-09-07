import React from 'react'
import useAuth from '../../hooks/useAuth'

const AppNavbar = () => {
    const {onLogout} = useAuth();
  return (
     // left part
    <header className='flex items-centre justify-between border
     border-gray-500 py-4 px-20 bg-gray-900'>
      <div>
        <h1 className='text-4xl text-blue-600 font-bold'>Wanderwise</h1>
      </div>
      <div className='flex items-center justify-between gap-8 font-medium'>
        <nav className='space-x-9 [&>a]:hover:text-purple-600 [&>a]:text-white'>
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