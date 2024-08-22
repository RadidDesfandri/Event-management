import Image from 'next/image'
import React from 'react'
import LogoLg from '../logoLg'
import Link from 'next/link'
import FormikRegister from './formikRegister'

export default function DesainRegisterEO({link} : {link : string}) {
    return (
        <section className='w-full bg-white py-5'>

            <div className='max-w-7xl flex items-center lg:px-16 flex-col mx-auto'>
                <LogoLg />

                <main className='flex items-center justify-around w-full lg:mt-8'>
                    <section className='hidden lg:flex items-center lg:flex-col'>
                        <Image src={'https://assets.loket.com/web/assets/img/auth.svg'} alt='Bg' width={500} height={500} className='w-[300px] h-[300px]' />
                        <div className='w-[450px] text-center'>
                            <h1 className='text-lg font-semibold'>Tidak lagi ketinggalan event favoritmu</h1>
                            <p className='text-sm text-gray-600'>Gabung dan rasakan kemudahan bertransaksi dan mengelola event di tricket</p>
                        </div>
                    </section>

                    <section className='flex flex-col items-center'>
                        {/* Text akun tricket laptop start */}
                        <div className='lg:block hidden text-sm text-gray-700 text-center'>
                            <p className="font-bold text-lg text-gray-950">Buat akun Tricket kamu</p>
                            <p>sudah punya akun? <Link href={`${link}`} className="text-blue-800 font-bold">Masuk</Link></p>
                        </div>
                        {/* Text akun tricket laptop end */}

                        {/* Text akun tricket mobile start */}
                        <div className='bg-white w-[350px] flex flex-col items-center mt-10 lg:mt-6 justify-center py-6 shadow-sm rounded-md shadow-gray-500'>
                            <main className='block lg:hidden text-sm text-gray-700 text-center pb-2'>
                                <p className="font-bold text-lg text-gray-950">Buat akun Tricket kamu</p>
                                <p>sudah punya akun? <Link href={`${link}`} className="text-blue-800 font-bold">Masuk</Link></p>
                            </main>
                            <FormikRegister/>
                        </div>
                        {/* Text akun tricket mobile end */}
                    </section>
                </main>
            </div>
        </section>
    )
}
