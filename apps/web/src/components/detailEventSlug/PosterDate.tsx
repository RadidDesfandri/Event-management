import Image from 'next/image'
import React from 'react'
import { IconType } from 'react-icons';
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IEvent } from '../types/event';
import { formatDateID, formatTimeID } from '../utils/FormatDate';
import { getEventById } from '../libs/action/event';
import DescHarga from './descHarga';

interface ICons {
    icon: IconType;
    text: any
}

export interface PropsEvent {
    event: IEvent
}

export default async function PosterDate({ data }: { data: PropsEvent }) {
    const event = await getEventById(data.event.id)
    // console.log(event);
    

    const icons: ICons[] = [
        { icon: BsFillCalendarDateFill, text: formatDateID(data.event.date) },
        { icon: IoTime, text: formatTimeID(data.event.date) },
        { icon: FaLocationDot, text: data.event.location }
    ]

    return (
        <section className='w-full bg-white lg:pt-16'>
            <div className='max-w-7xl mx-auto lg:px-20 '>

                <div className='flex flex-col lg:flex-row lg:justify-between'>
                    <Image src={data.event.image} alt='Image' width={500} height={500} className='w-[100%] h-[195px] object-cover lg:rounded-lg lg:w-[720px] lg:h-[338px] ' />

                    <div className='pt-8 px-5 bg-white lg:shadow-md lg:shadow-gray-400 lg:h-[338px] lg:rounded-lg lg:w-[360px] '>
                        <div className='pb-5 lg:pb-16'>
                            <h1 className='text-2xl font-semibold text-gray-800 text-wrap pb-3'>{data.event.eventName}</h1>
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
                                <p className='font-semibold text-base'>{data.event.eo.username}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section>
                    <DescHarga data={event.event}/>
                </section>
            </div>
        </section>
    )
}
