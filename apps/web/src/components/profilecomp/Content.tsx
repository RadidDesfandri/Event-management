"use client"

import Image from 'next/image'
import React from 'react'
import { UserState } from '../types/user'
import { useAppSelector } from '@/redux/hooks'

const Content = () => {
    const user: UserState = useAppSelector((state) => state.user)

    return (
        <div>
            <p className='font-semibold text-gray-700'>Gambar Profile</p>
            <p className='text-gray-600'>Avatar dan foto sampul adalah gambar pertama yang akan dilihat di akun profilmu.</p>
            <main className='flex items-center gap-10 mt-5'>
                <Image src={'/profile.svg'} alt='Profile' width={100} height={100} className='w-28 h-28 rounded-full bg-blue-950 object-cover' />
                <div>
                    <p className='text-gray-700 font-semibold'>Avatar</p>
                    <p className='text-gray-600 text-sm'>Gunakan gambar persegi beresolusi tinggi maksimal 1MB</p>
                </div>
            </main>
            <div className='mt-10'>
                <p className='text-gray-700 font-semibold'>Email</p>
                <p className='mt-3 text-sm text-gray-600 border-b pb-2'>{user.email}</p>
            </div>
        </div>
    )
}

export default Content