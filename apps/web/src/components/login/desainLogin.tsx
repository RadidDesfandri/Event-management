import React from 'react'
import LogoLg from '../logoLg'
import Image from 'next/image'
import FormikLoginEO from './formikLogin'
import Link from 'next/link'

export default function DesainLogin({link} : {link : string}) {
  return (
    <section className='w-full bg-white py-5'>

      <div className='flex items-center flex-col mx-auto lg:px-16'>
        <LogoLg />

        <main className='flex items-center justify-around w-full lg:mt-8'>

          <section className='hidden items-center lg:flex-col lg:flex'>
            <Image src={'https://assets.loket.com/web/assets/img/auth.svg'} alt='Bg' width={500} height={500} className='w-[300px] h-[300px]' />
            <div className='w-[450px] text-center'>
              <h1 className='text-lg font-semibold'>Tidak lagi ketinggalan event favoritmu</h1>
              <p className='text-sm text-gray-600'>Gabung dan rasakan kemudahan bertransaksi dan mengelola event di tricket</p>
            </div>
          </section>

          <section className='flex flex-col items-center'>
            {/* Text akun tricket laptop start */}
            <div className='lg:block hidden text-sm text-gray-700 text-center'>
              <p className="font-bold text-lg text-gray-950">Masuk ke akun Tricket kamu</p>
              <p>belum punya akun? <Link href={`${link}`} className="text-blue-800 font-bold">Daftar</Link></p>
            </div>
            {/* Text akun tricket laptop end */}

            {/* Text akun tricket mobile start */}
            <div className='bg-white w-[350px] flex flex-col items-center mt-10 lg:mt-6 justify-center py-6 shadow-sm rounded-md shadow-gray-500'>
              <main className='text-sm text-gray-700 text-center block pb-1 lg:hidden'>
                <p className="font-bold text-lg text-gray-950">Masuk ke akun Tricket kamu</p>
                <p>belum punya akun? <Link href={`${link}`} className="text-blue-800 font-bold">Daftar</Link></p>
              </main>
              <FormikLoginEO />
            </div>
            {/* Text akun tricket mobile end */}
          </section>
        </main>
      </div>
    </section>
  )
}