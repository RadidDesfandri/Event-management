import Image from 'next/image'
import React from 'react'
import { IconType } from 'react-icons';
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { DescHarga } from './descHarga';

interface ICons {
    icon: IconType;
    text: string
}

export default function PosterDate() {
    const icons: ICons[] = [
        { icon: BsFillCalendarDateFill, text: '27 Sep 2024' },
        { icon: IoTime, text: '17:00 - 18:00' },
        { icon: FaLocationDot, text: 'Pertamina mandalika, Indonesia' }
    ]

    return (
        <section className='w-full bg-white lg:pt-16'>
            <div className='max-w-7xl mx-auto lg:px-20 '>

                <div className='flex flex-col lg:flex-row lg:justify-between'>
                    <Image src={'/konser1.jpg'} alt='Image' width={500} height={500} className='w-[100%] h-[195px] object-cover lg:rounded-lg lg:w-[720px] lg:h-[338px] ' />

                    <div className='pt-8 px-5 bg-white lg:shadow-md lg:shadow-gray-400 lg:h-[338px] lg:rounded-lg lg:w-[360px] '>
                        <div className='pb-5 lg:pb-16'>
                            <h1 className='text-2xl font-semibold text-gray-800 text-wrap pb-3'>Konser asmara 2024</h1>
                            {icons.map((item, key) => (
                                <div key={key} className='flex text-base items-center gap-5 pb-1 text-gray-500'>
                                    <item.icon className='text-blue-700' />
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className='border-t border-dashed py-4 border-gray-300 flex gap-5'>
                            <Image src={'/kultural1.jpg'} alt='avatar' width={100} height={100} className='w-[50px] h-[50px] rounded-full object-cover' />
                            <div className='text-sm'>
                                <p className='text-gray-500'>Diselenggarakan oleh</p>
                                <p className='font-semibold'>MANDALIKA GRAND PRIX ASSOCIATIOAN</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <DescHarga />
                </section>
            </div>
        </section>
    )
}
