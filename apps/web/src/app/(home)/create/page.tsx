import CardTicket from '@/components/cardTicket'
import { CardTicketWhite } from '@/components/cardTicketWhite'
import { AddFiile } from '@/components/create/addFIile'
import NavTop from '@/components/navTop'
import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-950/95'>
      <NavTop />
      <AddFiile />
      {/* <CardTicketWhite/> */}
      <CardTicket />
    </div>
  )
}
