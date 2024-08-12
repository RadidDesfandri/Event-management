import Hero from '@/components/berandatamu/hero'
import Recomend from '@/components/berandatamu/recomend'
import { Footer } from '@/components/Footer'
import ModalLogOut from '@/components/modal/modalLogOut'
import NavTop from '@/components/navTop'
import { NavTopMobile } from '@/components/navTopMobile'
import SideBar from '@/components/sideBar'
import React from 'react'

export default function Page() {
  return (
    <div className='w-full h-full -z-50 bg-gray-950/95 '>
      <NavTop />
      <NavTopMobile/>
      <div className='flex max-w-7xl mx-auto justify-center md:px-10'>
        <SideBar />
        <Hero />
        <Recomend />
      </div>
      <Footer />
    </div>
  )
}
