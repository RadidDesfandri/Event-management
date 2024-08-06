"use client"

import { Navbar } from '@nextui-org/navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './logo'
import { IoIosSearch } from 'react-icons/io'
import { IoLogOut, IoMenu } from 'react-icons/io5'
import Image from 'next/image'
import ModalProfile from './modal/ModalProfile'


export default function NavTop() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    };

    const closeModal = () => {
        setIsModalOpen(false)
    };

    return (
        <Navbar shouldHideOnScroll className='z-20'>
            <section className='w-full sticky top-0 backdrop-blur-lg bg-transparent'>
                <div className='max-w-7xl h-16 mx-auto md:px-10 px-5 flex items-center justify-between'>
                    <div className='flex w-full md:w-[922px] justify-between items-center'>
                        <Link href={'/'}><Logo /></Link>
                        <div className='flex gap-2 items-center'>
                            <div className='backdrop-blur-md md:ml-6 px-3 flex bg-white/20 rounded-lg w-[180px] md:w-[830px] items-center md:px-5'>
                                <input type="text" placeholder='Cari event seru di sini' className='md:h-10 h-9 placeholder-white placeholder:text-sm md:placeholder:text-base bg-transparent rounded-md w-full focus:outline-none text-white' />
                                <IoIosSearch className='text-white w-5 h-5 cursor-pointer' />
                            </div>
                            <IoMenu className='w-8 h-8 text-white md:hidden flex' />
                        </div>
                    </div>

                    {/* Profile */}
                    <div className='gap-3 hidden md:flex text-gray-100'>
                        <Image onClick={openModal} src={'/pameran1.jpg'} alt='Profile' width={100} height={100} className='w-10 h-10 rounded-full object-cover cursor-pointer' />
                    </div>
                    <ModalProfile isOpen={isModalOpen} onClose={closeModal}>
                        <div className=' flex flex-col'>
                            <div className='flex gap-2 items-center border-b pb-3'>
                                <Image src={'/pameran1.jpg'} alt='Profile' width={100} height={100} className='w-10 h-10 rounded-full object-cover cursor-pointer' />
                                <p className='font-bold text-gray-700'>Username</p>
                            </div>
                            <div className='pt-3 border-b pb-3'>
                                <Link href={'/dashboard'}><p className='py-2 px-2 font-semibold text-gray-700 hover:bg-gray-200 rounded-md transition-all duration-100'>Dashboard</p></Link>
                                <Link href={'#'}><p className=' py-2 px-2 font-semibold text-gray-700 hover:bg-gray-200 rounded-md transition-all duration-100'>Event Saya</p></Link>
                            </div>
                            <div className='mt-3 flex items-center justify-between hover:bg-gray-200 rounded-md transition-all duration-100'>
                                <p className='py-2 px-2 font-semibold text-red-700 '>Keluar</p>
                                <IoLogOut className='w-5 h-5' />
                            </div>
                        </div>
                    </ModalProfile>

                </div>
            </section>
        </Navbar>
    )
}
