import Image from 'next/image'
import React from 'react'
import ListPayTicket from './ListPayTicket';
import { IEvent } from '../types/event';

export const PayTiket = ({ data }: { data: IEvent }) => {
    // console.log(data);

    return (
        <section className='my-3 bg-white overflow-hidden lg:rounded-lg'>
            <Image src={data.image} alt={data.eventName} width={200} height={200} className='w-full h-[120px] md:h-[182px] object-cover object-center' />

            <main className='flex py-3 px-5 items-center'>
                <span className='w-1/2 h-[0.1px] bg-gray-600'></span>
                <h1 className='font-extrabold text-[16px] mx-4 text-gray-900 text-wrap w-28 lg:w-[300px] text-center'>{data.eventName}</h1>
                <span className='w-1/2 h-[0.1px] bg-gray-600'></span>
            </main>

            <ListPayTicket data={data}/>

        </section>
    )
}