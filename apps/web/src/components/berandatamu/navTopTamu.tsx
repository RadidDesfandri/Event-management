import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Logo from '../logo';
import { Navbar } from '@nextui-org/navbar';
import Link from 'next/link';
import Button from '../button';

export default function NavTopTamu() {
    return (
        <Navbar shouldHideOnScroll className='z-50'>
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
                    <div className='gap-3 hidden md:flex text-gray-100'>
                        <Button props='Daftar'/>
                        <Button props='Masuk' />
                    </div>
                </div>
            </section>
        </Navbar>
    )
}