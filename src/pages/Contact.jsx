import React from 'react'
import Navbar from '../components/common/Navbar'
import { Button } from '../components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CustomButton from '../components/common/CustomButton'


const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Button>click me</Button>
        <Button variant='Rounded'> click me</Button>
        <HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    Welcome to the contact pages
  </HoverCardContent>
</HoverCard>

<Card  className="w-80 ">
  <CardHeader>
    <CardTitle>Trip Details</CardTitle>
    <CardDescription>Create new trip</CardDescription>
    <CardAction>more-info</CardAction>
  </CardHeader>
  <CardContent>
    <div >
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFie1_15Vqrn6-WYhgNq37ym_-W3oRhFjxwbi81KA3QWhCjTXtlTRSH0&s=10' alt='manang mustang' className='w-full h-42'/>
  </div>
  
  <p>Manang and Mustang are two beautiful destinations in Nepal, famous for their breathtaking Himalayan landscapes, peaceful villages, ancient monasteries, and rich local culture.</p>

  </CardContent>
  <CardFooter>
   <Button className="w-full px-4 py-2 bg-blue-500">Book Now</Button>
  </CardFooter>
</Card>
        
    </div>
  )
}

export default Contact