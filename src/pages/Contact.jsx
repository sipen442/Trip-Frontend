import React from 'react'
import Navbar from '../components/common/Navbar'
import { Button } from '../components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


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
        
    </div>
  )
}

export default Contact