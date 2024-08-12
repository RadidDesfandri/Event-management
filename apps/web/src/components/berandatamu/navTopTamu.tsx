"use client"

import React, { useState } from 'react'
import { IoIosArrowRoundBack, IoIosSearch } from "react-icons/io";
import Logo from '../logo';
import Link from 'next/link';
import Button from '../button';
import { Navbar } from '@nextui-org/navbar';
import { Field, Form, Formik } from 'formik';
import ModalSearch from '../modal/modalSearch';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from "react-icons/io";
import { ModalHumber } from '../modal/ModalHumber';
import { FaBlogger } from 'react-icons/fa6';
import { MdOutlineContactSupport } from 'react-icons/md';
import { SiGooglemessages } from "react-icons/si";
import { GrMoney } from "react-icons/gr";
import { IoIosInformationCircle } from "react-icons/io";


interface SearchForm {
    search: string
}


export default function NavTopTamu() {
    const data = [
        { icons: IoIosInformationCircle, text: 'Tentang kami' },
        { icons: GrMoney, text: 'Biaya' },
        { icons: FaBlogger, text: 'Blog' },
        { icons: SiGooglemessages, text: 'Hubungi kami' },
        { icons: MdOutlineContactSupport, text: 'Pertanyaan?' },
    ]

    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isMenu, setMenu] = useState(false)
    const [isToggle, setIsToggle] = useState(false)
    const [isToggleMasuk, setIsToggleMasuk] = useState(false)
    const [isDaftar, setIsdatfar] = useState(false)
    const [isMasuk, setIsMasuk] = useState(false)

    const handleMasuk = () => {
        setIsMasuk(!isMasuk)
    }

    const handleDaftar = () => {
        setIsdatfar(!isDaftar)
    }

    const handleToggleMasuk = () => {
        setIsToggleMasuk(!isToggleMasuk)
    }

    const handleToggle = () => {
        setIsToggle(!isToggle)
    }

    const openMenu = () => {
        setMenu(true)
    }

    const closeMenu = () => {
        setMenu(false)
    }

    const searchOpen = () => {
        setIsSearchOpen(true)
    }

    const closeSearch = () => {
        setIsSearchOpen(false)
    }

    const initialValues: SearchForm = {
        search: ''
    }
    return (

        <Navbar shouldHideOnScroll className='z-20'>
            <section className='w-full sticky top-0 backdrop-blur-lg bg-transparent'>
                <div className='max-w-7xl h-16 mx-auto md:px-10 px-5 flex items-center justify-between'>
                    <div className='flex w-full md:w-[640px] lg:w-[898px] justify-between lg:justify-between items-center'>

                        <Link href={'/'}><Logo /></Link>

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

                            {/* Menu humberger start */}
                            <IoMenu onClick={openMenu} className='w-8 h-8 text-white md:hidden block' />
                            <ModalHumber isOpen={isMenu} onClose={closeMenu}>

                                {/* Nav start */}
                                <div className='bg-blue-950 h-16 w-full flex items-center justify-between px-5'>
                                    <Logo />
                                    <IoMdClose onClick={closeMenu} className='text-white h-8 w-8 cursor-pointer' />
                                </div>
                                {/* Nav end */}

                                <div className='px-5 pt-7'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-2xl font-semibold text-black'>Masuk ke Akunmu</h1>
                                        <p className='text-gray-700'>Untuk menggunakan semua fitur di tricket.</p>
                                    </div>

                                    <div className='flex gap-5 pt-3 border-b border-gray-500 pb-10'>
                                        <button onClick={handleToggle} className='w-1/2 bg-transparent border-2 font-semibold border-blue-700 text-blue-700 py-3 rounded-md'>Daftar</button>
                                        <button onClick={handleToggleMasuk} className='w-1/2 bg-blue-700 font-semibold text-white py-3 rounded-md'>Masuk</button>
                                    </div>

                                    {isToggle &&
                                        <div className='fixed h-screen w-full inset-0 z-50 bg-white/30'>
                                            <div className='flex justify-center items-center h-screen'>
                                                <div className='bg-gray-100 shadow-lg p-4 rounded-md w-[350px]'>
                                                    <IoMdClose onClick={handleToggle} className='w-7 h-7 hover:text-red-700 cursor-pointer' />
                                                    <h1 className='text-center mt-4 text-gray-800 font-semibold'>Mau daftar sebagai apa nih?</h1>
                                                    <div className='flex gap-4 my-3 '>

                                                        <Link href={'/registerEO'} className='w-1/2 text-center bg-blue-700 font-semibold text-white rounded-md py-3'>Pembuat</Link>

                                                        <Link href={'/registerUser'} className='w-1/2 bg-transparent border-2 font-semibold text-center border-blue-700 text-blue-700 rounded-md py-3'>Pengunjung</Link>

                                                    </div>
                                                    <p className='text-[11px] text-gray-600'>Fitur yang didapatkan oleh akun pembuat dan pengunjung akan berbeda!</p>

                                                </div>
                                            </div>
                                        </div>
                                    }

                                    {isToggleMasuk &&
                                        <div className='fixed h-screen w-full inset-0 z-50 bg-white/30'>
                                            <div className='flex justify-center items-center h-screen'>
                                                <div className='bg-gray-100 shadow-lg p-4 rounded-md w-[350px]'>
                                                    <IoMdClose onClick={handleToggleMasuk} className='w-7 h-7 hover:text-red-700 cursor-pointer' />
                                                    <h1 className='text-center mt-4 text-gray-800 font-semibold'>Mau masuk sebagai apa nih?</h1>
                                                    <div className='flex gap-4 my-3 '>

                                                        <Link href={'/loginEO'} className='w-1/2 text-center bg-blue-700 font-semibold text-white rounded-md py-3'>Pembuat</Link>

                                                        <Link href={'/loginUser'} className='w-1/2 bg-transparent border-2 font-semibold text-center border-blue-700 text-blue-700 rounded-md py-3'>Pengunjung</Link>

                                                    </div>
                                                    <p className='text-[11px] text-gray-600'>Fitur yang didapatkan oleh akun pembuat dan pengunjung akan berbeda!</p>

                                                </div>
                                            </div>
                                        </div>
                                    }


                                    <div className='pt-14'>
                                        {data.map((item, key) => {
                                            return (
                                                <div key={key} className='flex items-center mb-6 gap-4 text-xl font-semibold text-gray-900'>
                                                    < item.icons className='w-8 h-8 text-gray-600' />
                                                    <p>{item.text}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>


                            </ModalHumber>
                            {/* Menu humberger end */}

                        </div>
                    </div>


                    {/* Button login dan register start */}
                    <div className='gap-3 hidden md:flex text-gray-100'>
                        <div onClick={handleDaftar}>
                            <Button props='Daftar' />
                        </div>
                        <div onClick={handleMasuk}>
                            <Button props='Masuk' />
                        </div>
                    </div>
                    {/* Button login dan register end */}

                    {isDaftar &&
                        <div className='fixed h-screen w-full inset-0 z-50 bg-white/30'>
                            <div className='flex justify-center items-center h-screen'>
                                <div className='bg-gray-100 shadow-lg p-4 rounded-md w-[350px]'>
                                    <IoMdClose onClick={handleDaftar} className='w-7 h-7 hover:text-red-700 cursor-pointer' />
                                    <h1 className='text-center mt-4 text-gray-800 font-semibold'>Mau daftar sebagai apa nih?</h1>
                                    <div className='flex gap-4 my-3 '>

                                        <Link href={'/registerEO'} className='w-1/2 text-center bg-blue-700 font-semibold text-white rounded-md py-3'>Pembuat</Link>

                                        <Link href={'/registerUser'} className='w-1/2 bg-transparent border-2 font-semibold text-center border-blue-700 text-blue-700 rounded-md py-3'>Pengunjung</Link>

                                    </div>
                                    <p className='text-[11px] text-gray-600'>Fitur yang didapatkan oleh akun pembuat dan pengunjung akan berbeda!</p>

                                </div>
                            </div>
                        </div>
                    }

                    {isMasuk &&
                        <div className='fixed h-screen w-full inset-0 z-50 bg-white/30'>
                            <div className='flex justify-center items-center h-screen'>
                                <div className='bg-gray-100 shadow-lg p-4 rounded-md w-[350px]'>
                                    <IoMdClose onClick={handleMasuk} className='w-7 h-7 hover:text-red-700 cursor-pointer' />
                                    <h1 className='text-center mt-4 text-gray-800 font-semibold'>Mau masuk sebagai apa nih?</h1>
                                    <div className='flex gap-4 my-3 '>

                                        <Link href={'/loginEO'} className='w-1/2 text-center bg-blue-700 font-semibold text-white rounded-md py-3'>Pembuat</Link>

                                        <Link href={'/loginUser'} className='w-1/2 bg-transparent border-2 font-semibold text-center border-blue-700 text-blue-700 rounded-md py-3'>Pengunjung</Link>

                                    </div>
                                    <p className='text-[11px] text-gray-600'>Fitur yang didapatkan oleh akun pembuat dan pengunjung akan berbeda!</p>

                                </div>
                            </div>
                        </div>
                    }


                </div>
            </section>
        </Navbar>
    )
}

