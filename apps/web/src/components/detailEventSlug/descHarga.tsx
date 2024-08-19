"use client"

import React, { useState } from 'react'
import DeskripsiDetailEvent from './deskripsiDetailEvent'
import BuyTiket from './buyTiket'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaArrowLeftLong, FaXTwitter } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { PayTiket } from './PayTiket'
import { ModalPayTiket } from '../modal/ModalPayTiket'
import { IEvent } from '../types/event'

const DescHarga = ({data} : {data : IEvent}) => {
    const [isActive, setIsActive] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const handleActive = () => {
        setIsActive(!isActive)
    }

    return (
        <section className='pt-10 flex justify-between'>

            <main className='w-full lg:w-[720px] flex flex-wrap items-center'>
                <div onClick={handleActive} className='w-1/2 relative'>
                    <button disabled={!isActive} type='submit' className={`text-center ${isActive ? 'font-normal' : 'font-bold'} h-10 border-b w-full border-gray-400 `}>DESKRIPSI</button>
                    <span className={`w-full ${isActive ? 'h-0 ' : 'h-1'}  bg-blue-700 absolute left-0 bottom-0 rounded-t-lg`}></span>
                </div>
                <div onClick={handleActive} className='w-1/2 relative'>
                    <button disabled={isActive} type='submit' className={`text-center ${isActive ? 'font-bold' : 'font-normal'} h-10 border-b w-full relative border-gray-400 `}>TIKET</button>
                    <span className={`w-full ${isActive ? 'h-1' : 'h-0'} bg-blue-700 absolute left-0 bottom-0 rounded-t-lg`}></span>
                </div>

                {isActive ?
                    <div className=' w-full flex flex-col gap-6 my-10 px-5 lg:px-0'>
                        <div className='flex justify-end'>
                            <button onClick={openModal} className=' bg-blue-500 text-gray-100 hover:bg-blue-600 transition-all duration-150 py-3 px-8 rounded-md font-semibold shadow-lg shadow-blue-500/50'>Beli Tiket</button>

                            {/* Active modal pay start */}
                            <ModalPayTiket isOpen={isOpenModal} onClose={closeModal}>
                                <div className=' max-w-5xl mx-auto'>
                                    <div className='px-5 py-5 lg:px-0'>
                                        <FaArrowLeftLong onClick={closeModal} className='w-7 h-7 text-gray-800' />
                                    </div>
                                    <PayTiket />
                                </div>
                            </ModalPayTiket>
                            {/* Active modal pay end */}

                        </div>
                        <BuyTiket data={data}/>
                        <BuyTiket data={data}/>
                    </div>
                    :
                    <div className='w-full my-10 px-5 lg:px-0'>
                        <DeskripsiDetailEvent data={data}/>
                    </div>
                }
            </main>

            <main className='lg:w-[360px] hidden lg:flex lg:flex-col gap-5'>
                <p className='text-sm text-gray-800'>Bagikan event</p>

                <div className='flex gap-5'>
                    <Link href={'https://www.facebook.com/'} target='_blank'>
                        <div className='border border-black p-2 rounded-full'>
                            <FaFacebookF className='w-5 h-5' />
                        </div>
                    </Link>

                    <Link href={'https://x.com/'} target='_blank'>
                        <div className='border border-black p-2 rounded-full'>
                            <FaXTwitter className='w-5 h-5' />
                        </div>
                    </Link>

                    <Link href={'#'}>
                        <div className='border border-black p-2 rounded-full'>
                            <IoMdShare className='w-5 h-5' />
                        </div>
                    </Link>
                </div>
            </main>


        </section>
    )
}

export default DescHarga
