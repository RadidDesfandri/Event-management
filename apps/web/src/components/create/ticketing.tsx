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
                    <div className='flex w-full'>

                        <div onClick={handleActive} className='w-1/2 relative'>
                            <button disabled={!isActive} type='submit' className={`text-center ${isActive ? 'font-normal' : 'font-bold'} h-10 border-b w-full border-gray-400 `}>KATEGORI TIKET</button>
                            <span className={`w-full ${isActive ? 'h-0 ' : 'h-1'}  bg-blue-700 absolute left-0 bottom-0 rounded-t-lg`}></span>
                        </div>
                        <div onClick={handleActive} className='w-1/2 relative'>
                            <button disabled={isActive} type='submit' className={`text-center ${isActive ? 'font-bold' : 'font-normal'} h-10 border-b w-full border-gray-400 `}>DESKRIPSI EVENT</button>
                            <span className={`w-full ${isActive ? 'h-1 ' : 'h-0'}  bg-blue-700 absolute left-0 bottom-0 rounded-t-lg`}></span>
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
