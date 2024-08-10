import React from 'react'
import { MdAccessTimeFilled } from "react-icons/md";

const BuyTiket = () => {
    const tiket = [
        { judul: 'Festival (General admission)', jenis: 'Price exclude tax', date: '27 September 2024 17:00 WIB', price: '700.000,00', ket: 'TERSEDIA' },
        { judul: '[Weekend Pass] Regular Grandstand - Zone C', jenis: 'Price exclude tax', date: '27 September 2024 17:00 WIB', price: '1.500.000,00', ket: 'TERSEDIA' },
    ]
    return (
        <section className='flex flex-col gap-5'>

            {tiket.map((item, key) => {
                return (
                    <div key={key} className='w-full bg-blue-100/60 border border-blue-800 py-4 px-8 h-[210px] rounded-lg relative'>
                        <div className='w-10 h-10 rounded-full bottom-12 left-[-15px] border-r border-t border-r-blue-700 border-t-blue-700 bg-white rotate-45 absolute '></div>
                        <div className='w-10 h-10 rounded-full bottom-12 right-[-15px] border-l border-t border-l-blue-700 border-t-blue-700 bg-white -rotate-45 absolute '></div>

                        <div className='w-full pb-5'>
                            <h1 className='text-lg text-gray-900'>{item.judul}</h1>
                            <h2 className='text-sm text-gray-600 py-2'>{item.jenis}</h2>
                            <div className='flex items-center text-sm gap-2 text-blue-700 pt-5'>
                                <MdAccessTimeFilled className='text-lg' />
                                <p>{`Berakhir ${item.date}`}</p>
                            </div>
                        </div>

                        <div className='border-t-black font-semibold border-t border-dashed flex justify-between pt-5'>
                            <p>{`Rp. ${item.price}`}</p>
                            <p className='text-blue-800'>{item.ket}</p>
                        </div>
                    </div>
                )
            })}


        </section>
    )
}

export default BuyTiket