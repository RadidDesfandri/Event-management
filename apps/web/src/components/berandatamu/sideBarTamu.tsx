import Link from 'next/link'
import React from 'react'
import { IoIosCreate, IoIosNotifications } from 'react-icons/io'
import { MdHome } from 'react-icons/md'

export default function SideBarTamu() {
    return (
        <div className='hidden sticky top-20 md:flex flex-col justify-between w-1/12 h-full'>
            <div className='flex flex-col gap-8'>
                <Link href={'/'}><MdHome className='w-9 h-9 hover:text-white transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300' /></Link>
                <Link href={'/'}><IoIosCreate className='w-9 h-9 hover:text-white cursor-not-allowed transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300' /></Link>
                <Link href={'/'}><IoIosNotifications className='w-9 h-9 hover:text-white cursor-not-allowed transition-all duration-200 hover:bg-gray-800 rounded-md p-1 text-gray-300' /></Link>
            </div>
        </div>
    )
}
