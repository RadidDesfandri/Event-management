"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './logo'
import { IoIosSearch } from 'react-icons/io'
import { IoMenu } from 'react-icons/io5'
import ModalSearch from './modal/modalSearch'
import { Field, Form, Formik } from 'formik'
import { IoIosArrowRoundBack } from "react-icons/io";

interface SearchForm {
    search: string
}
export const NavTopMobile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const searchOpen = () => {
        setIsSearchOpen(true)
    }

    const closeSearch = () => {
        setIsSearchOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    };

    const closeModal = () => {
        setIsModalOpen(false)
    };

    const initialValues: SearchForm = {
        search: ''
    }
    return (
        <section className='lg:hidden block'>
                <div className='h-16 md:px-10 px-5 flex items-center justify-between'>
                        <Link href={'/beranda'}><Logo /></Link>

                        <div className='flex gap-2 items-center'>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values, action) => {
                                    alert(JSON.stringify(values))
                                    action.resetForm()
                                }}
                            >
                                <Form>

                                    {/* Search mobile start */}
                                    <div className='block lg:hidden z-50'>
                                        <IoIosSearch onClick={searchOpen} className='text-white w-5 h-5 md:w-7 md:h-7 cursor-pointer' />
                                        <ModalSearch isOpen={isSearchOpen} onClose={closeSearch}>
                                            <div className='mt-5 px-4'>
                                                <div className='flex items-center gap-2'>
                                                    <IoIosArrowRoundBack onClick={closeSearch} className='w-8 h-8 cursor-pointer text-blue-700' />
                                                    <div className='flex w-full bg-transparent border border-blue-700 rounded-lg h-8 pl-2'>
                                                        <Field
                                                            type="text"
                                                            name='search'
                                                            placeholder='Cari event seru di sini'
                                                            className='w-full bg-transparent focus:outline-none'
                                                        />
                                                        <button type='submit' className='bg-blue-700 rounded-r-md w-10 flex items-center justify-center'>
                                                            <IoIosSearch className='w-6 h-6 text-white cursor-pointer' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </ModalSearch>
                                    </div>
                                    {/* Search mobile end */}
                                </Form>
                            </Formik>

                            <IoMenu className='w-8 h-8 text-white lg:hidden block' />
                        </div>
                    </div>

                    {/* Coin */}
                    {/* <div className='gap-10 hidden md:flex items-center text-gray-100'>
                        <div className='flex items-center gap-2'>
                            <GrMoney className='w-6 h-6 text-[#FFC100]' />
                            <p className='text-gray-100 font-semibold'>0</p>
                        </div>
                    </div> */}

        </section>
    )
}
