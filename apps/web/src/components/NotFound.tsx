"use client"

import Image from "next/image"

const NotFound = ({ text, background, width, height }: { text: string, background?: string, width: number, height: number }) => {
    return (
        <div className={`${background} text-center px-5 rounded-md`}>
            <Image src={'/notfound.svg'} alt='Not found' width={width} height={height} className='mx-auto' />
            <p className='text-xl font-bold pb-3 text-blue-950'>{text}</p>
        </div>
    )
}

export default NotFound