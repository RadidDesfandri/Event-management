"use client"

import React, { useState } from 'react'
import { MdHome } from "react-icons/md";
import { IoIosCreate, IoIosNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import Link from 'next/link';
import ModalLogOut from './modal/modalLogOut';

export default function SideBar() {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [exit, setExit] = useState(false)

    const handleExit = () => {
        setExit(!exit)
    }

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
        <div className='hidden sticky z-20 top-16 md:flex flex-col justify-between w-1/12 h-[490px] '>
            <div className='flex flex-col gap-8'>
                <Link href={'/beranda'}><MdHome className='w-9 h-9 hover:text-white transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300' /></Link>
                <Link href={'/create'}><IoIosCreate className='w-9 h-9 hover:text-white transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300' /></Link>
                <Link href={'/beranda'}><IoIosNotifications className='w-9 h-9 hover:text-white transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300    ' /></Link>
            </div>

            <IoLogOut onClick={openModal} className='w-9 h-9 hover:text-white cursor-pointer transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300' />

            <ModalLogOut isOpen={isOpenModal} onClose={closeModal}>
                <div onClick={handleExit} className='flex  items-center justify-between font-semibold hover:text-red-700 cursor-pointer transition-all duration-100'>
                    <h1>Keluar</h1>
                    <IoLogOut className='w-7 h-7' />
                </div>
            </ModalLogOut>

            {exit &&
                <div onClick={handleExit} className='fixed h-screen flex items-center justify-center inset-0 z-50 bg-white/20'>

                    <div onClick={e => e.stopPropagation()} className='bg-gray-100 shadow-lg p-5 rounded-md'>
                        <h1 className='text-black font-semibold'>Apakah anda yakin ingin keluar?</h1>
                        <div className='w-full flex justify-end'>
                            <div className='flex gap-3 mt-4 cursor-pointer'>
                                <p onClick={handleExit} className='p-1 w-20 text-center border rounded-md border-blue-600 font-bold text-blue-600'>TIDAK</p>
                                <p className='p-1 w-20 text-center bg-blue-600 border rounded-md hover:bg-red-600 hover:border-red-600 transition-all duration-200 border-blue-600 font-bold text-white'>YA</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}
