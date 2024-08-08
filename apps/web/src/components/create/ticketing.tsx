"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Deskripsi } from './deskripsi';
import CardTicketBerbayar from './cardTicketBerbayar';
import { CardTicketGratis } from './cardTicketGratis';

export const Ticketing = () => {
    const [isActive, setIsActive] = useState(false)

    const handleActive = () => {
        setIsActive(!isActive)
    }

    return (
        <div>
            <div className='w-full py-5 pb-24 bg-gray-200'>
                <div className=' gap-10 bg-gray-100 max-w-4xl mx-auto lg:rounded-lg border border-black'>
                    <div className='flex'>
                        <div className='w-1/2 relative'>
                            <h1 onClick={handleActive} className={`text-center ${isActive ? 'text-gray-400' : 'text-black'} py-3 border-b border-gray-300 font-bold`}>KATEGORI TIKET</h1>
                            <span className={` ${isActive ? 'h-0' : 'h-1'} bg-blue-400 absolute w-full rounded-t-lg  bottom-0`}></span>
                        </div>
                        <div className='w-1/2 relative'>
                            <h1 onClick={handleActive} className={`text-center ${isActive ? 'text-black' : 'text-gray-400'} py-3 border-b border-gray-300 font-bold`}>DESKRIPSI EVENT</h1>
                            <span className={` ${isActive ? 'h-1' : 'h-0'} bg-blue-400 absolute w-full rounded-t-lg  bottom-0`}></span>
                        </div>
                    </div>

                    {isActive ?
                        <div className='px-10'>
                            <Deskripsi />
                        </div>
                        :
                        <div className='flex flex-wrap md:gap-16 justify-around items-center'>
                            <CardTicketBerbayar />
                            <CardTicketGratis />
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}
