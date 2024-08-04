import SideBar from '@/components/sideBar'
import React from 'react'
import Hero from './hero'
import Recomend from './recomend'
import NavTop from '@/components/navTop'

export default function page() {
    return (
        <div className='w-full h-full bg-gray-950/95'>
            <NavTop />
            <div className='flex max-w-7xl mx-auto justify-center md:px-10'>
                <SideBar />
                <Hero />
                <Recomend />
            </div>
        </div>
    )
}
