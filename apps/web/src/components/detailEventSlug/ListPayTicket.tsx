import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { MdAccessTimeFilled } from 'react-icons/md';
import * as yup from 'yup';
import { IEvent } from '../types/event';
import ConvertToIDR from '../utils/ConvertToIDR';
import { formatDateID, formatTimeID } from '../utils/FormatDate';

interface JumlahTiket {
    jumlah: string;
}

const validationShema = yup.object().shape({
    jumlah: yup.number().required('Minimal 1 tiket')
})

const initialValue: JumlahTiket = {
    jumlah: ''
}

const ListPayTicket = ({ data }: { data: IEvent }) => {
    const event = data.Ticketing
    console.log(event);

    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationShema}
            onSubmit={(values, action) => {
                alert(JSON.stringify(values))
                action.resetForm()
            }}
        >
            {() => {
                return (
                    <Form>
                        <main className='flex flex-col items-center justify-between lg:items-start gap-6 lg:flex-row px-5 py-5'>
                            {/* Section tiket start */}
                            <section className='flex flex-col items-center gap-4 lg:w-[550px] w-full'>

                                {event.map((item) => {
                                    const free = item?.price == 0 ? "Gratis" : ConvertToIDR(item.price)
                                    const type = item?.price == 0 ? "Gratis" : "Berbayar"
                                    const date = formatDateID(item?.endDate!)
                                    const time = formatTimeID(item?.endDate!)
                                    return (
                                        <div className='w-full border border-blue-800 py-4 px-8 h-[190px] rounded-lg relative'>
                                            <div className='w-8 h-8 rounded-full bottom-12 left-[-8px] border-r border-t border-r-blue-700 border-t-blue-700 bg-white rotate-45 absolute '></div>
                                            <div className='w-8 h-8 rounded-full bottom-12 right-[-8px] border-l border-t border-l-blue-700 border-t-blue-700 bg-white -rotate-45 absolute '></div>

                                            <div className='w-full pb-5'>
                                                <h1 className='text-lg text-gray-900'>{item.nameTicket}</h1>
                                                <h2 className='text-sm text-gray-600 pb-5'>{type}</h2>
                                                <div className='flex items-center text-sm gap-2 text-blue-700'>
                                                    <MdAccessTimeFilled className='text-lg' />
                                                    <p>{`Berakhir dalam ${date} ${time}`}</p>
                                                </div>
                                            </div>

                                            <div className='border-t-black font-semibold border-t border-dashed flex justify-between pt-5'>
                                                <p>{free}</p>
                                                <div className='flex flex-col items-center'>
                                                    <Field
                                                        name='jumlah'
                                                        type='number'
                                                        className='border-2 focus:outline-none text-center rounded-md placeholder:text-center w-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                                                        placeholder='0'
                                                    />
                                                    <ErrorMessage
                                                        name='jumlah'
                                                        component='div'
                                                        className='text-red-600 text-[8px]'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}



                            </section>
                            {/* Section tiket end */}

                            {/* Section Pesan tiket laptop start */}
                            <section className='bg-white shadow-md rounded-lg h-[150px] w-[310px] p-6 hidden lg:block'>
                                <div className='flex items-center justify-between pb-4'>
                                    <p className='text-sm text-gray-500'>{`Jumlah (0 tiket)`}</p>
                                    <p className='text-lg text-black font-bold'>Rp0</p>
                                </div>
                                <button type='submit' className=' bg-blue-500 hover:bg-blue-600 transition-all duration-150 py-2 px-3 rounded-md font-semibold shadow-lg shadow-blue-500/50 text-white w-full'>Pesan Sekarang</button>
                            </section>
                            {/* Section Pesan tiket laptop end */}

                            {/* Section Pesan tiket mobile start */}
                            <section className='bg-white shadow-md rounded-lg h-[150px] w-full p-6 block lg:hidden'>
                                <div className='flex items-center justify-between pb-4'>
                                    <p className='text-sm text-gray-500'>{`Jumlah (0 tiket)`}</p>
                                    <p className='text-lg text-black font-bold'>Rp0</p>
                                </div>
                                <button type='submit' className=' bg-blue-500 hover:bg-blue-600 transition-all duration-150 py-2 px-3 rounded-md font-semibold shadow-lg shadow-blue-500/50 text-white w-full'>Pesan Sekarang</button>
                            </section>
                            {/* Section Pesan tiket mobile end */}

                        </main>
                    </Form>
                )
            }}

        </Formik>
    )
}

export default ListPayTicket