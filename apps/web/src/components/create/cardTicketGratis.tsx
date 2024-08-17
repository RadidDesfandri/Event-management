"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import ModalTicketing from '../modal/ModalTicketing';
import { ErrorMessage, Field, Form, Formik, useField, validateYupSchema } from 'formik';
import * as yup from "yup"
import Button from '../button';
import { DatePickers } from './calendar';
import { TicketProps } from './ticketing';
import { ITicket } from '../types/event';

const dataSchema = yup.object().shape({
    ticketName: yup.string().required('Harap diisi').max(50, "Maksimal 50 karakter"),
    quota: yup.number().required("Harap diisi"),
    date: yup.string().required('Harap diisi')
})

const CardTicketGratis = ({ ticket, setTicket }: TicketProps) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const initialValue: ITicket = {
        ticketName: '',
        quota: '',
        price: '0',
        date: ''
    }

    const handleActive = () => {
        setIsActive(!isActive)
    }

    const openModal = () => {
        setIsOpenModal(true)
    };

    const closeModal = () => {
        setIsOpenModal(false)
    };


    return (
        <div className='bg-gray-100  py-8'>
            <div className='flex justify-center mx-auto max-w-xl'>

                {/* Tiket start */}
                <div onClick={openModal} className={`flex bg-white hover:bg-blue-400 shadow-sm border border-gray-200 rounded-lg`}>
                    <div className='w-[70px] h-[90px] relative border-dashed border-black border-r-2'>
                        <Image src={'https://assets.loket.com/images/icon/icon-barcode.svg'} alt='barcode' width={8} height={8} className=' absolute top-[20%] left-[40%]' />
                        <div className='absolute top-[-20px] border-b-2 border-gray-200 right-[-18px] bg-gray-100 rounded-full w-8 h-8'></div>
                        <div className='absolute bottom-[-20px] border-t-2 border-gray-200 right-[-18px] bg-gray-100 rounded-full w-8 h-8'></div>
                        <div className='absolute left-[-25px] border-r-2 border-gray-200 bg-gray-100 w-9 h-8 rounded-full top-[30%]'></div>
                    </div>
                    <div className='w-[235px] h-[90px] relative'>
                        <div className='w-full h-full flex flex-col px-8 justify-center'>
                            <h1 className='text-sm'>Buat Tiket</h1>
                            <h1 className='font-semibold'>Berbayar</h1>
                        </div>
                        <div className='absolute flex items-center justify-center text-xl h-[35px] w-[35px] rounded-full border-2 border-gray-400 text-gray-400 top-[30%] right-4'>
                            <FaPlus />
                        </div>
                    </div>
                </div>
                {/* Tiket end */}


                <ModalTicketing isOpen={isOpenModal} onClose={closeModal}>
                    <div className='pt-4'>
                        <div className='flex'>

                            <div className='w-1/2 relative'>
                                <h1 className={`text-center ${isActive ? 'text-gray-400' : 'text-black'} py-3 border-b border-gray-300 font-semibold`}>DETAIL TIKET</h1>
                                <span className={` ${isActive ? 'h-0' : 'h-1'} bg-blue-400 absolute w-full rounded-t-lg  bottom-0`}></span>
                            </div>

                            <div className='w-1/2 relative'>
                                <h1 className={`text-center ${isActive ? 'text-black' : 'text-gray-400'} py-3 border-b border-gray-300 font-semibold`}>TANGGAL EVENT</h1>
                                <span className={` ${isActive ? 'h-1' : 'h-0'} bg-blue-400 absolute w-full rounded-t-lg  bottom-0`}></span>
                            </div>
                        </div>


                        <Formik
                            initialValues={initialValue}
                            validationSchema={dataSchema}
                            onSubmit={(values, action) => {
                                alert(JSON.stringify(values));
                                setTicket([...ticket, values])
                                action.resetForm()

                            }}
                        >
                            {({ isSubmitting, errors, dirty }) => {
                                // console.log(errors);
                                return (
                                    <Form >

                                        {isActive ?
                                            <div className='pt-7 flex flex-col gap-44'>
                                                <div>
                                                    <label htmlFor="" className='font-semibold text-gray-700'>Tanggal mulai<span className='text-red-700'>*</span></label>
                                                    <div className='flex flex-col pb-6'>
                                                        <DatePickers name="date" placeholder='12/12/2024' />
                                                        <ErrorMessage
                                                            name='date'
                                                            component='div'
                                                            className='text-xs text-red-700'
                                                        />

                                                    </div>
                                                    <h1 className='text-[10px] text-gray-700'>Tanggal maksimal penjualan bergantung pada tanggal berakhirnya event.</h1>
                                                </div>
                                                <div className='flex gap-2'>
                                                    <div onClick={handleActive}>
                                                        <Button props='<' />
                                                    </div>
                                                    <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 transition-all duration-150 py-2 rounded-md font-semibold shadow-lg shadow-blue-500/50 '>Buat Tiket</button>
                                                </div>
                                            </div>
                                            :
                                            <div className='flex flex-col pt-7'>
                                                {/* NAMA TIKET */}
                                                <label htmlFor="" className='font-semibold text-gray-700'>Nama tiket <span className='text-red-700'>*</span></label>
                                                <Field
                                                    type='text'
                                                    name='ticketName'
                                                    placeholder='Maksimal 50 karakter'
                                                    className='w-full border-b  focus:border-blue-700 border-gray-500 outline-none h-10 pb-3'
                                                />
                                                <ErrorMessage
                                                    name='ticketName'
                                                    component='div'
                                                    className='text-xs text-red-700'
                                                />

                                                {/* JUMLAH TIKET */}
                                                <label htmlFor="" className='font-semibold text-gray-700 pt-5'>Jumlah tiket</label>
                                                <Field
                                                    type='number'
                                                    name='quota'
                                                    placeholder='0'
                                                    className='w-full border-b py-5 focus:border-blue-700 border-gray-500 outline-none h-10 pb-5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                                                />
                                                <ErrorMessage
                                                    name='quota'
                                                    component='div'
                                                    className='text-xs text-red-700'
                                                />

                                                {/* HARGA */}
                                                <label htmlFor="" className='font-semibold text-gray-700 pt-5'>Harga tiket</label>
                                                <Field
                                                    type='number'
                                                    name='price'
                                                    disabled
                                                    placeholder='Rp 0'
                                                    className='w-full border-b py-5 focus:border-blue-700 border-gray-500 outline-none h-10 pb-5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                                                />
                                                <div className='pt-10'>
                                                    <button type='submit' disabled={!!errors.quota || !!errors.ticketName || !!isSubmitting || !dirty} onClick={handleActive} className=' bg-blue-500 w-full disabled:bg-blue-500/40 disabled:text-gray-600 disabled:shadow-none hover:bg-blue-600 transition-all duration-150 py-2 rounded-md font-semibold shadow-lg shadow-blue-500/50'>Selanjutnya</button>
                                                </div>
                                            </div>
                                        }
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </ModalTicketing>
            </div>
        </div>
    )
}

export default CardTicketGratis