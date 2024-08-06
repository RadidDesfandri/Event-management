import Image from 'next/image';
import React from 'react'
import Button from '../button';

interface IEvent {
  img: string;
  create: string;
  avatar: string;
  tittle: string;
  date: string;
  price: number;
}

export default function CardEvent() {
  const dataEvent: IEvent[] = [
    { img: '/konser1.jpg', avatar: "/konser1.jpg", create: "Band asmara", tittle: "Konser asmara", date: "22 Agustus 2024", price: 500000 },
    { img: '/kultural1.jpg', avatar: "/kultural1.jpg", create: "Teaters BSD", tittle: "Pengajian subuh bersama ustad somad", date: "20 Agustus 2024", price: 500000 },
    { img: '/sport1.jpg', avatar: "/sport1.jpg", create: "Teaters BSD", tittle: "Konser asmara", date: "20 Agustus 2024", price: 500000 },
    { img: '/pameran1.jpg', avatar: "/pameran1.jpg", create: "Teaters BSD", tittle: "Konser asmara", date: "20 Agustus 2024", price: 500000 },
    { img: '/konser1.jpg', avatar: "/konser1.jpg", create: "Band asmara", tittle: "Konser asmara", date: "22 Agustus 2024", price: 500000 },
    { img: '/kultural1.jpg', avatar: "/kultural1.jpg", create: "Teaters BSD", tittle: "Pengajian subuh bersama ustad somad", date: "20 Agustus 2024", price: 500000 },
    { img: '/sport1.jpg', avatar: "/sport1.jpg", create: "Teaters BSD", tittle: "Konser asmara", date: "20 Agustus 2024", price: 500000 },
    { img: '/pameran1.jpg', avatar: "/pameran1.jpg", create: "Teaters BSD", tittle: "Konser asmara", date: "20 Agustus 2024", price: 500000 },
    { img: '/sport1.jpg', avatar: "/sport1.jpg", create: "Teaters BSD", tittle: "Konser asmara", date: "20 Agustus 2024", price: 500000 },
  ]

  return (

    <div className=' md:justify-between md:flex md:flex-wrap gap-2  '>
      {dataEvent.map((item, key) => (
        <div key={key} className='h-full md:w-[260px] pb-2 bg-gray-800 backdrop-blur-2xl mb-5 md:mb-0 rounded-lg overflow-hidden relative hover:scale-95 transition-all duration-200 shadow-sm shadow-blue-500/50'>
          <Image src={item.img} alt='picture event' width={500} height={500} className='w-full h-36 object-cover' />
          <div className='px-4 py-3'>
            <h1 className='text-base pb-2 font-extralight text-gray-100 truncate'>{item.tittle}</h1>
            <h2 className=' font-semibold pb-2 text-gray-400'>{item.date}</h2>
            <h3 className=' text-white pb-8 font-bold'>{`Rp. ${item.price}`}</h3>
            <span className='w-full h-[1px] bg-gray-400 block'></span>
            <div className='flex items-center gap-3 pt-3'>
              <Image src={item.avatar} alt='avatar' width={100} height={100} className='w-8 h-8 rounded-full object-cover ' />
              <h4 className='text-white font-semibold'>{item.create}</h4>
              {/* <Button props='Beli'/> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
