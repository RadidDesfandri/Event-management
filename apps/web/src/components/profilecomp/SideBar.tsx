import React from 'react'
import LogoLg from '../logoLg'
import { MdExplore, MdOutlinePerson2 } from 'react-icons/md'
import Link from 'next/link'
import { IoTicket } from 'react-icons/io5'

function SideBarProf() {
  return (
    <div className='hidden static h-screen top-0 lg:block w-[350px] bg-blue-950'>
      <main className='bg-[#131e43] py-3 flex items-center justify-center'>
        <LogoLg />
      </main>

      <section className='px-5 py-5 flex flex-col gap-6'>
        <Link href={'/beranda'} className='flex items-center gap-3 text-gray-400 hover:translate-x-1 transition-all duration-150 hover:text-white'>
          <MdExplore className='w-4 h-4' />
          <p className='text-sm'>Jelajahi Event</p>
        </Link>

        <Link href={'/beranda'} className='flex items-center gap-3 text-gray-400 hover:translate-x-1 transition-all duration-150 hover:text-white'>
          <IoTicket className='w-4 h-4' />
          <p className='text-sm'>Ticket Saya</p>
        </Link>
        <span className='w-full h-[0.1px] bg-gray-600'></span>
      </section>

      <section>
        <main className='px-5'>
          <p className='font-semibold text-gray-400 text-sm'>Akun</p>
        </main>
        <main className='bg-blue-700 flex items-center gap-2 px-5 py-3 text-white text-sm mt-2'>
          <MdOutlinePerson2 className='w-4 h-4'/>
          <p>Informasi Dasar</p>
        </main>
      </section>
    </div>
  )
}

export default SideBarProf