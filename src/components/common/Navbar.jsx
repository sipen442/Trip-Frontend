import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
  // left part
    <header className='flex items-centre justify-between border
     border-gray-500 py-4 px-20 bg-gray-900'>
      <div>
        <h1 className='text-4xl text-blue-600 font-bold'>Wanderwise</h1>
      </div>
      <div className='flex items-center justify-between gap-8 font-medium'>
        <nav className='space-x-9 [&>a]:hover:text-purple-600 [&>a]:text-white'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/contact'>contact</a>
        </nav>
      <CustomButton text="login" link="/login "/>
      </div>

    </header>
  )
}

export default Navbar