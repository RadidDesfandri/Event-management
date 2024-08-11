"use client"

import { Navbar } from '@nextui-org/navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './logo'
import { IoIosSearch } from 'react-icons/io'
import { IoLogOut, IoMenu } from 'react-icons/io5'
import Image from 'next/image'
import ModalProfile from './modal/ModalProfile'
import ModalSearch from './modal/modalSearch'
import { Field, Form, Formik } from 'formik'
import { IoIosArrowRoundBack } from "react-icons/io";


interface SearchForm {
    search: string
}

export default function NavTop() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const searchOpen = () => {
        setIsSearchOpen(true)
    }

    const closeSearch = () => {
        setIsSearchOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    };

    const closeModal = () => {
        setIsModalOpen(false)
    };

    const initialValues: SearchForm = {
        search: ''
    }

    return (
        <Navbar shouldHideOnScroll className='z-20'>
            <section className='w-full sticky top-0 backdrop-blur-lg bg-transparent'>
                <div className='max-w-7xl h-16 mx-auto md:px-10 px-5 flex items-center justify-between'>
                    <div className='flex w-full md:w-[640px] lg:w-[898px] justify-between lg:justify-between items-center'>
                        <Link href={'/beranda'}><Logo /></Link>

                        <div className='flex gap-2 items-center'>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values, action) => {
                                    alert(JSON.stringify(values))
                                    action.resetForm()
                                }}
                            >
                                <Form>

                                    {/* Search laptop start */}
                                    <div className='backdrop-blur-md md:ml-6 px-3 lg:flex hidden bg-white/20 rounded-lg w-[180px] md:w-[350px] lg:w-[802px] items-center md:px-5'>
                                        <Field
                                            type="text"
                                            name='search'
                                            placeholder='Cari event seru di sini'
                                            className='md:h-10 h-9 placeholder-white placeholder:text-sm md:placeholder:text-base bg-transparent rounded-md w-full focus:outline-none text-white' />
                                        <button type='submit'><IoIosSearch className='text-white w-5 h-5 cursor-pointer' /></button>
                                    </div>
                                    {/* Search laptop end */}


                                    {/* Search mobile start */}
                                    <div className='block lg:hidden'>
                                        <IoIosSearch onClick={searchOpen} className='text-white w-5 h-5 md:w-7 md:h-7 cursor-pointer' />
                                        <ModalSearch isOpen={isSearchOpen} onClose={closeSearch}>
                                            <div className='mt-5 px-4'>
                                                <div className='flex items-center gap-2'>
                                                    <IoIosArrowRoundBack onClick={closeSearch} className='w-8 h-8 cursor-pointer text-blue-700' />
                                                    <div className='flex w-full bg-transparent border border-blue-700 rounded-lg h-8 pl-2'>
                                                        <Field
                                                            type="text"
                                                            name='search'
                                                            placeholder='Cari event seru di sini'
                                                            className='w-full bg-transparent focus:outline-none'
                                                        />
                                                        <button type='submit' className='bg-blue-700 rounded-r-md w-10 flex items-center justify-center'>
                                                            <IoIosSearch className='w-6 h-6 text-white cursor-pointer' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </ModalSearch>
                                    </div>
                                    {/* Search mobile end */}
                                </Form>
                            </Formik>

                            <IoMenu className='w-8 h-8 text-white md:hidden block' />
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
