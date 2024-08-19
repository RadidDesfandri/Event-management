import React from 'react'
import BuyTiket from './buyTiket'
import { IEvent } from '../types/event'
import { getEventById } from '../libs/action/event'
import { formatDateID, formatTimeID } from '../utils/FormatDate'
import ConvertToIDR from '../utils/ConvertToIDR'

export default function ListBuyTicket({ data }: { data: IEvent }) {
    // console.log(data);
    const event = data.Ticketing

    return (
        <div>
            {event.map((item) => {
                return (
                    <BuyTiket data={item}/>
                )
            })}
        </div>
    )
}