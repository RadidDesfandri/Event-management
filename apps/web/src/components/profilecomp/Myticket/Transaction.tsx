import { ITransaction, ResponseGet } from '@/components/types/transaction'
import ConvertToIDR from '@/components/utils/ConvertToIDR'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Transaction = ({ data }: { data: ITransaction }) => {
    // console.log(data);
    const finPrice = data.finalPrice == 0 ? "Gratis" : ConvertToIDR(data.finalPrice)

    return (
        <div className='w-[200px] bg-gray-100 shadow-md rounded-md overflow-hidden flex flex-col'>
            <Image src={`${data.event?.image}`} alt='photos' width={200} height={200} className='w-full h-24 object-cover' />
            <div className='px-3 py-3'>
                <p className='h-10 text-sm text-gray-950 ' >{data.event?.eventName}</p>
                <p className={`text-xs text-white rounded-md px-2 ${data.status == "Paid" ? "bg-green-600/80" : data.status == "Pending" ? "bg-yellow-500" : "bg-red-600"}`}>Status {data.status}</p>
                <p className='text-gray-600 text-xs'>Jumlah tiket {data.qty}</p>
                <p className='font-bold text-gray-950'>Total harga</p>
                <p className='text-sm'>{finPrice}</p>
                <Link href={data.paymentLink}><p className={`w-full bg-blue-400/50 rounded-md text-center py-1 font-semibold mt-4 text-gray-800 `}>{data.status == "Pending" ? "Bayar Sekarang" : data.status == "Paid" ? "Terbayar" : "Check pembayaran"}</p></Link>
            </div>
        </div>
    )
}

export default Transaction