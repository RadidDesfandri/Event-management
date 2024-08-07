import Image from 'next/image'
import React, { FC } from 'react'

interface IData {
    img: string;
    title: string;
}

const CardRecomend = () => {
    const data: IData[] = [
        { img: '/pameran1.jpg', title: "Event Kesenian" },
        { img: '/kultural1.jpg', title: "Event Kebudayaan" },
        { img: '/konser1.jpg', title: "Event Konser" },
    ]
    return (
        <div >
            {data.map((item, key) => (
                <div className='relative hover:scale-95 transition-all duration-200'>
                    <Image src={item.img} alt='rekomend' width={200} height={200} className='object-cover rounded-sm w-64 h-24 mb-4' />
                    <p className='text-gray-300 absolute bottom-2 left-2 font-semibold'>{item.title}</p>
                </div>
            ))}

        </div>
    )
}

export default CardRecomend;
