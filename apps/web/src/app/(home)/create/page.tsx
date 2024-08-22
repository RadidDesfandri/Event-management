import { CreateEvent } from '@/components/create/CreateEvent'
import NavTop from '@/components/navTop'
import React from 'react'

export default function page() {
  return (
    <div className='bg-blue-950'>
      <NavTop />
      <CreateEvent />
    </div>
  )
}
