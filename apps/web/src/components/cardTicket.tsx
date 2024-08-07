import Image from 'next/image'
import React from 'react'

const CardTicket = () => {
    return (
        <div className='bg-gray-950 w-full py-10'>
            <div className='flex justify-center mx-auto max-w-7xl'>
                <div className='flex bg-white hover:bg-blue-200 duration-100 rounded-lg'>
                    <div className='w-[95px] h-[145px] md:w-[130px] md:h-[160px] relative border-dashed border-black border-r-2'>
                        <Image src={'https://assets.loket.com/images/icon/icon-barcode.svg'} alt='barcode' width={15} height={15} className=' absolute top-[20%] left-[40%]' />
                        <div className='absolute top-[-25px] right-[-20px] bg-gray-950 rounded-full w-10 h-10'></div>
                        <div className='absolute bottom-[-25px] right-[-20px] bg-gray-950 rounded-full w-10 h-10'></div>
                        <div className='absolute left-[-25px] bg-gray-950 w-10 h-10 rounded-full top-[40%]'></div>
                    </div>
                    <div className='w-[295px] h-[145px]  md:w-[330px] md:h-[160px]'></div>
                </div>
            </div>
        </div>
    )
}

export default CardTicket