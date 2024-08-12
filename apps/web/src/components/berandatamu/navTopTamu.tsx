"use client"

import { IoIosArrowRoundBack, IoIosInformationCircle, IoIosSearch, IoMdClose } from "react-icons/io";
import Logo from '../logo';
import Link from 'next/link';
import Button from '../button';
import { Navbar } from '@nextui-org/navbar';
import { Field, Form, Formik } from 'formik';
import ModalSearch from "../modal/modalSearch";
import { IoMenu } from "react-icons/io5";
import { ModalHumber } from "../modal/ModalHumber";
import { MdOutlineContactSupport } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { FaBlogger } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { useState } from "react";

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
    const [isDaftarToggle, setDaftarToggle] = useState(false)

    const handleToggle = () => {
        setDaftarToggle(!isDaftarToggle)
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

        <Navbar shouldHideOnScroll className='z-20 hidden lg:block'>
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
                                        <button className='w-1/2 bg-blue-700 font-semibold text-white py-3 rounded-md'>Masuk</button>
                                    </div>

                                    {isDaftarToggle &&
                                        <div className='fixed h-screen bg-white/50 inset-0 z-50'>
                                            <div className=' w-full h-screen px-4 flex justify-center items-center'>
                                                <main className=' rounded-lg w-[300px] bg-white shadow-md '>
                                                    <IoMdClose onClick={handleToggle} className='w-6 h-6 ml-3 mt-3' />
                                                    <h1 className='text-black text-center font-semibold'>Mau daftar sebagai apanih?</h1>
                                                    <div className='flex items-center justify-center text-center gap-4 px-5 my-5'>
                                                        <Link href={'/registerEO'} className='w-1/2 bg-blue-700 font-semibold text-white py-3 rounded-md'>Pembuat</Link>
                                                        <Link href={'/registerUser'} className='w-1/2 bg-transparent border-2 font-semibold border-blue-700 text-blue-700 py-3 rounded-md'>Pengunjung</Link>
                                                    </div>
                                                </main>
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
                        <Button props='Daftar' />
                        <Button props='Masuk' />
                    </div>
                    {/* Button login dan register end */}

                </div>
            </section>
        </Navbar>
    )
}