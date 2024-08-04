import React from 'react'
import { MdHome } from "react-icons/md";
import { IoIosCreate, IoIosNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";


export default function SideBar() {
    return (
        <div className='hidden sticky top-16 md:flex flex-col justify-between w-1/12 h-[500px]'>
            <div className='flex flex-col gap-8'>
                <MdHome className='w-9 h-9 hover:text-white transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300' />
                <IoIosCreate className='w-9 h-9 hover:text-white transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300' />
                <IoIosNotifications className='w-9 h-9 hover:text-white transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300    ' />
            </div>
            <IoLogOut className='w-9 h-9 hover:text-white transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300' />
        </div>
    )
}
