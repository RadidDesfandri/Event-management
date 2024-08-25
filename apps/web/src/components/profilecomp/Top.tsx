"use client"

import React from 'react'
import { IoPersonCircle } from 'react-icons/io5'
import { UserState } from '../types/user'
import { useAppSelector } from '@/redux/hooks'

const Top = () => {
  const user: UserState = useAppSelector((state) => state.user)
  const username = user.username.toUpperCase()
  return (
    <div className='w-full border-b-2 px-3 py-4 lg:px-8 lg:py-6 flex justify-between'>
        <p className='text-xl text-gray-700 font-semibold'>Profile Kamu</p>
        <main className='bg-blue-50 rounded-full px-3 py-1 items-center flex gap-3'>
            <IoPersonCircle className='w-5 h-5 text-blue-900'/>
            <p className='text-gray-900 font-light'>{username}</p>
        </main>
    </div>
  )
}

export default Top