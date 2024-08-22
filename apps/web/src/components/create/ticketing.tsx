"use client"

import React, { } from 'react';
import CardTicketGratis from './cardTicketGratis';
import CardTicketBerbayar from './cardTicketBerbayar';
import { ITicket } from '../types/event';

export interface TicketProps {
    ticket: ITicket[]
    setTicket: React.Dispatch<React.SetStateAction<ITicket[]>>
}

export const Ticketing = ({ ticket, setTicket }: TicketProps) => {

    return (
        <section className='max-w-4xl mt-3 mb-16 mx-auto h-full  bg-gray-100 border border-gray-300 lg:rounded-t-xl lg:rounded-lg'>
            <div className='w-full relative'>
                <button type='button' className={`text-center font-bold h-10 border-b w-full border-gray-400 `}>KATEGORI EVENT</button>
                <span className={`w-full h-1 bg-blue-700 absolute left-0 bottom-0 rounded-t-lg`}></span>
            </div>
            <div className='flex gap-14 items-center justify-center'>
                <CardTicketBerbayar ticket={ticket} setTicket={setTicket} />
                <CardTicketGratis ticket={ticket} setTicket={setTicket} />
            </div>
        </section>
    )
}
