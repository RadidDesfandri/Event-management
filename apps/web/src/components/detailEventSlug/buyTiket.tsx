import React from 'react'
import { MdAccessTimeFilled } from "react-icons/md";
import { IEvent, ITicketing } from '../types/event';
import ConvertToIDR from '../utils/ConvertToIDR';
import { formatDateID, formatTimeID } from '../utils/FormatDate';

const BuyTiket = ({ data }: { data: ITicketing }) => {
    const free: any = data?.price == 0 ? "Gratis" : ConvertToIDR(data?.price)
    const type = data?.price == 0 ? "Gratis" : "Berbayar"
    const date = formatDateID(data?.endDate!)
    const time = formatTimeID(data?.endDate!)
    return (
        <section className='flex flex-col gap-5'>
            <div className='w-full bg-blue-100/60 border border-blue-800 py-4 px-8 h-[210px] rounded-lg relative'>
                <div className='w-10 h-10 rounded-full bottom-12 left-[-15px] border-r border-t border-r-blue-700 border-t-blue-700 bg-white rotate-45 absolute '></div>
                <div className='w-10 h-10 rounded-full bottom-12 right-[-15px] border-l border-t border-l-blue-700 border-t-blue-700 bg-white -rotate-45 absolute '></div>
                <div className='w-full pb-5'>
                    <h1 className='text-lg text-gray-900'>{data.nameTicket}</h1>
                    <h2 className='text-sm text-gray-600 py-2'>{type}</h2>
                    <div className='flex items-center text-sm gap-2 text-blue-700 pt-5'>
                        <MdAccessTimeFilled className='text-lg' />
                        <p>{`Berakhir Dalam ${date} ${time}`}</p>
                    </div>
                </div>
                <div className='border-t-black font-semibold border-t border-dashed flex justify-between pt-5'>
                    <p>{free}</p>
                    <div className='flex items-center gap-1 text-blue-800'>
                        <p>Kuota</p>
                        <p>{data.quota}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuyTiket