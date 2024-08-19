import Image from 'next/image'
import React from 'react'
import Category from './category'
import Link from 'next/link'
import ListEvents from './listEvents'

export default function Hero() {
  return (
    <div className='flex flex-col items-center'>
      <div className='bg-gray-500 rounded-lg relative'>
        <Image src={'/hero1.jpg'} alt='hero' width={500} height={500} className='w-[370px] h-[150px] md:w-[820px] md:h-[300px] rounded-lg' />
        <Link href={'#event'} className='bg-blue-500 hover:bg-blue-600 transition-all duration-150 shadow-lg shadow-blue-500/50 rounded-lg absolute py-1 px-2 md:py-2 md:px-3 font-semibold text-gray-100 md:bottom-8 md:left-8 bottom-3 left-3 text-sm'>Jelajahi Sekarang</Link>
      </div>
      <Category />
      <ListEvents />
    </div>
  )
}