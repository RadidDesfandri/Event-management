import Image from 'next/image';
import React from 'react'
import { IEvent } from '../types/event';
import formatDateM, { formatDateID } from '../utils/FormatDate';
import Link from 'next/link';
import ConvertToIDR from '../utils/ConvertToIDR';

export default function CardEvent({ data }: { data: IEvent }) {
  const free: any = data?.Ticketing[0]?.price == "0" ? "Gratis" : ConvertToIDR(data?.Ticketing[0]?.price)

  return (
    <Link href={`/detailevent/${data.id}`}>
      <div className='h-full w-[350px] md:w-[320px] lg:w-[260px] pb-2 bg-gray-800 backdrop-blur-2xl mb-5 md:mb-0 rounded-lg overflow-hidden relative hover:scale-95 transition-all duration-200 shadow-sm shadow-blue-500/50'>
        <Image src={data.image} alt='picture event' width={500} height={500} className='w-full h-36 object-cover' />
        <p className='text-white text-[10px] absolute top-3 right-3'>{`${formatDateM(data.createdAt)} yang lalu`}</p>
        <div className='px-4 py-3'>
          <h1 className='text-base pb-2 font-extralight text-gray-100 truncate'>{data.eventName}</h1>
          <h2 className='font-semibold text-gray-400'>{formatDateID(data.date)}</h2>
          <h3 className='text-white font-bold'>{free}</h3>
          <div className='py-4 w-auto text-center'>
            <h4 className='bg-blue-500/50 py-2 rounded-md text-xs text-white'>{data.category}</h4>
          </div>
          <span className='w-full h-[1px] bg-gray-400 block'></span>
          <div className='flex items-center gap-3 pt-3'>
            <Image src="/sport1.jpg" alt='avatar' width={100} height={100} className='w-8 h-8 rounded-full object-cover ' />
            <h4 className='text-white font-semibold'>{data.eo?.username}</h4>
          </div>
        </div>
      </div>
    </Link>
  )
}
