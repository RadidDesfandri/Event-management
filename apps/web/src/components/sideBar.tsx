"use client"

import React, { useState } from 'react'
import { MdHome } from "react-icons/md";
import { IoIosCreate, IoIosNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import Link from 'next/link';
import ModalLogOut from './modal/modalLogOut';


export default function SideBar() {
    const [isOpenModal, setIsOpenModal] = useState(false)

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
                <Link href={'/beranda'}><IoIosCreate className='w-9 h-9 hover:text-white transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300' /></Link>
                <Link href={'/beranda'}><IoIosNotifications className='w-9 h-9 hover:text-white transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300    ' /></Link>
            </div>

            <IoLogOut onClick={openModal} className='w-9 h-9 hover:text-white cursor-pointer transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300' />
            <ModalLogOut isOpen={isOpenModal} onClose={closeModal}>
                <div className='flex  items-center justify-between font-semibold hover:text-red-700 cursor-pointer transition-all duration-100'>
                    <h1>Keluar</h1>
                    <IoLogOut className='w-7 h-7'/>
                </div>
            </ModalLogOut>

        </div>
    )
}
