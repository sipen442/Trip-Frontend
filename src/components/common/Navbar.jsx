import React from 'react'
import CustomButton from './CustomButton'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    // left part
    <header className='flex items-centre justify-between border
     border-gray-500 py-4 px-4 md:px-8 lg:px-20 bg-gray-900'>
      <div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl text-blue-600 font-bold'>Wanderwise</h1>
      </div>
      <div className='flex items-center justify-between gap-8 font-medium'>
        <nav className='space-x-9 [&>a]:hover:text-purple-600 [&>a]:text-white hidden md:block'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/contact'>contact</a>
        </nav>
        <CustomButton text="login" link="/login " />

        <Drawer swipeDirection="right" >
          <DrawerTrigger render={<Button variant="outline" size="icon" className="lg:hidden"/>}><Menu /></DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-3xl font-bold">Wanderwise</DrawerTitle>
              <DrawerDescription>click on any of the link to navigate  </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 flex flex-col">
              <a className='w-full' href='/'><Button className={"w-full h-12 text-lg "} variant='secondrar'>Home</Button></a>
              <a className="w-full "href='/about'><Button className={"w-full h-12 text-lg"} variant='secondrar'>About</Button></a>
              <a className="w-full "href='/contact'><Button className={"w-full h-12 text-lg"} variant='secondrar'>Contact</Button></a>
            </div>
            <DrawerFooter>
              <CustomButton text="login" link="/login " />
              <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

    </header>
  )
}

export default Navbar