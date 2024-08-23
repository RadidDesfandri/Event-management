"use client"

import { Navbar } from '@nextui-org/navbar'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from './logo'
import { IoIosSearch, IoMdListBox } from 'react-icons/io'
import { IoLogOut, IoMenu } from 'react-icons/io5'
import Image from 'next/image'
import ModalProfile from './modal/ModalProfile'
import ModalSearch from './modal/modalSearch'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaMoneyCheckAlt, FaUserAlt } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import MenuSearch from './MenuSearch'
import { IEvent } from './types/event'
import NotFound from './NotFound'

export default function NavTop() {
    const [searchRes, setSearchRes] = useState<IEvent[]>([])
    const [term, setTerm] = useState("")

    const fetchData = async (term: string) => {
        try {
            const response = await fetch(`http://localhost:8000/api/events?query=${term}`)
            const data = await response.json()
            setSearchRes(data.event)
            // console.log(searchRes);

        } catch (err) {
            return Error
        }
    }

    const handleData = (e: any) => {
        setTerm(e.target.value)
        fetchData(e)
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (term.trim() !== "") {
                fetchData(term)
            } else {
                setSearchRes([])
            }
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [term])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [logOut, setLogOut] = useState(false)
    const [logOutDesk, setLogOutDesk] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const [openSearchMobile, setOpenSearchMobile] = useState(false)

    const handleSearchMobile = () => {
        setOpenSearchMobile(!openSearchMobile)
    }

    const handleMenuSearch = () => {
        setOpenSearch(!openSearch)
    }

    const handleLogOutDesk = () => {
        setLogOutDesk(!logOutDesk)
    }

    const handleLogOut = () => {
        setLogOut(!logOut)
    }

    const handleMenu = () => {
        setIsMenu(!isMenu)
    }

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

    return (
        <Navbar shouldHideOnScroll className='z-20'>
            <section className='w-full sticky top-0 backdrop-blur-lg bg-transparent'>
                <div className='max-w-7xl h-16 mx-auto md:px-10 px-5 flex items-center justify-between'>
                    <div className='flex w-full md:w-[640px] lg:w-[898px] justify-between lg:justify-between items-center'>
                        <Link href={'/beranda'}><Logo /></Link>

                        <div className='flex gap-2 items-center'>
                            {/* Search laptop start */}
                            <div onClick={handleMenuSearch} className='backdrop-blur-md md:ml-6 px-3 lg:flex hidden bg-white/20 rounded-lg w-[180px] md:w-[350px] lg:w-[802px] items-center md:px-5'>
                                <input
                                    type="text"
                                    name='search'
                                    placeholder='Cari event seru di sini'
                                    onChange={handleData}
                                    className='md:h-10 h-9 placeholder-white placeholder:text-sm md:placeholder:text-base bg-transparent rounded-md w-full focus:outline-none text-white' />
                                <button type='submit'><IoIosSearch className='text-white w-5 h-5 cursor-pointer' /></button>
                            </div>

                            {openSearch &&
                                <section onClick={handleMenuSearch} className='fixed w-full inset-0 z-50 h-screen'>
                                    <main className={`${searchRes.length == 0 ? "" : "bg-white/70"}  py-2 absolute w-[802px] top-[60px] rounded-sm left-[136px]`}>
                                        {searchRes.map((item) => {
                                            return (
                                                <MenuSearch key={item.id} data={item} />
                                            )
                                        })}
                                        {
                                            searchRes.length == 0 && term && (
                                                <NotFound height={200} width={200} background='bg-white' text='GA KETEMU BEGE?!' />
                                            )
                                        }
                                    </main>
                                </section>
                            }
                            {/* Search laptop end */}

                            {/* Search mobile start */}
                            <div className='block lg:hidden'>
                                <IoIosSearch onClick={searchOpen} className='text-white w-5 h-5 md:w-7 md:h-7 cursor-pointer' />
                                <ModalSearch isOpen={isSearchOpen} onClose={closeSearch}>
                                    <div className='mt-5 px-4'>
                                        <div className='flex items-center gap-2'>
                                            <IoIosArrowRoundBack onClick={closeSearch} className='w-8 h-8 cursor-pointer text-blue-700' />
                                            <div onClick={handleSearchMobile} className='flex w-full bg-transparent border border-blue-700 rounded-lg h-8 pl-2'>
                                                <input
                                                    type="text"
                                                    name='search'
                                                    placeholder='Cari event seru di sini'
                                                    className='w-full bg-transparent focus:outline-none'
                                                    onChange={handleData}
                                                />
                                                <button type='submit' className='bg-blue-700 rounded-r-md w-10 flex items-center justify-center'>
                                                    <IoIosSearch className='w-6 h-6 text-white cursor-pointer' />
                                                </button>
                                            </div>
                                            {openSearchMobile &&
                                                <section onClick={handleSearchMobile} className='fixed w-full inset-0 z-50 h-screen'>
                                                    <main className='absolute w-[370px] top-[60px] rounded-sm left-[30px]'>
                                                        {searchRes.map((item) => {
                                                            return (
                                                                <div onClick={handleSearchMobile}>
                                                                    <MenuSearch key={item.id} data={item} />
                                                                </div>
                                                            )
                                                        })}
                                                        {
                                                            searchRes.length == 0 && term && (
                                                                <NotFound height={150} width={150} text='GA KETEMU BEGE?!' />
                                                            )
                                                        }
                                                    </main>
                                                </section>
                                            }
                                        </div>
                                    </div>
                                </ModalSearch>
                            </div>
                            {/* Search mobile end */}

                            <IoMenu onClick={handleMenu} className='w-8 h-8 text-white md:hidden block' />

                            {isMenu &&
                                <div className='fixed w-full inset-0 z-50 h-screen bg-blue-950'>
                                    <IoIosArrowRoundBack onClick={handleMenu} className='w-12 h-12 ml-5 mt-5 text-white' />
                                    <div className='bg-white h-full mt-24 relative'>

                                        <div className='p-5 bg-gray-900 w-20 h-20 flex rounded-full absolute top-[-40px] left-6'>
                                            <FaUserAlt className='w-10 h-10 text-white text-center' />
                                        </div>
                                        <div className='px-5 pt-14 border-b-2 pb-5'>
                                            <p className='text-lg font-bold mt-3 text-gray-700'>Dashboard</p>
                                            <p className='text-lg font-bold text-gray-700'>Event saya</p>
                                        </div>

                                        <div className='px-5 pt-8 flex flex-col gap-3'>
                                            <div className='flex gap-4 items-center text-gray-700'>
                                                <MdVerifiedUser className='w-6 h-6 ' />
                                                <p className='font-semibold text-lg'>Informasi dasar</p>
                                            </div>
                                            <div className='flex gap-4 items-center text-gray-700'>
                                                <IoMdListBox className='w-6 h-6 ' />
                                                <p className='font-semibold text-lg'>Informasi legal</p>
                                            </div>
                                            <div className='flex gap-4 items-center text-gray-700'>
                                                <FaMoneyCheckAlt className='w-6 h-6 ' />
                                                <p className='font-semibold text-lg'>Rekening</p>
                                            </div>
                                        </div>

                                        <div onClick={handleLogOut} className='px-5 mt-40 cursor-pointer flex justify-between font-bold text-lg'>
                                            <p className='text-red-700'>Keluar</p>
                                            <IoLogOut className='w-9 h-9 text-red-700' />
                                        </div>

                                        {logOut &&
                                            <div onClick={handleLogOut} className='fixed h-screen flex items-center justify-center inset-0 z-50 bg-white/20'>

                                                <div onClick={e => e.stopPropagation()} className='bg-gray-100 shadow-lg p-5 rounded-md'>
                                                    <h1 className='text-black font-semibold'>Apakah anda yakin ingin keluar?</h1>
                                                    <div className='w-full flex justify-end'>
                                                        <div className='flex gap-3 mt-4 cursor-pointer'>
                                                            <p onClick={handleLogOut} className='p-1 w-20 text-center border rounded-md border-blue-600 font-bold text-blue-600'>TIDAK</p>
                                                            <p className='p-1 w-20 text-center bg-blue-600 border rounded-md hover:bg-red-600 hover:border-red-600 transition-all duration-200 border-blue-600 font-bold text-white'>YA</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </div>
                            }
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
                            <div className='mt-3 cursor-pointer flex items-center justify-between hover:bg-gray-200 rounded-md transition-all duration-100'>
                                <p onClick={handleLogOutDesk} className='py-2 px-2 font-semibold text-red-700 '>Keluar</p>
                                <IoLogOut className='w-5 h-5' />
                            </div>
                        </div>
                        {logOutDesk &&
                            <div onClick={handleLogOutDesk} className='fixed h-screen flex items-center justify-center inset-0 z-50 bg-white/20'>
                                <div onClick={e => e.stopPropagation()} className='bg-gray-100 shadow-lg p-5 rounded-md'>
                                    <h1 className='text-black font-semibold'>Apakah anda yakin ingin keluar?</h1>
                                    <div className='w-full flex justify-end'>
                                        <div className='flex gap-3 mt-4 cursor-pointer'>
                                            <p onClick={handleLogOutDesk} className='p-1 w-20 text-center border rounded-md border-blue-600 font-bold text-blue-600'>TIDAK</p>
                                            <p className='p-1 w-20 text-center bg-blue-600 border rounded-md hover:bg-red-600 hover:border-red-600 transition-all duration-200 border-blue-600 font-bold text-white'>YA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </ModalProfile>
                </div>
            </section>
        </Navbar>
    )
}
