"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5';

interface ImagePreviewProps {
    image?: File | null;
    setFieldValue: (field: string, values: any, shouldValidate?: boolean) => void
    imageRef: React.RefObject<HTMLInputElement>
    setSelectedImage: React.Dispatch<React.SetStateAction<boolean>>
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ image, setFieldValue, imageRef, setSelectedImage }) => {
    const [imageUrl, setImageUrl] = React.useState<string | null>(null)
    const onRemove = () => {
        setFieldValue('image', null)
        setSelectedImage(false)
        if (imageRef.current) {
            imageRef.current.value = ''
        }
    }
    console.log(image);

    React.useEffect(() => {
        if (image) {
            const objectUrl = URL.createObjectURL(image);
            setImageUrl(objectUrl)

            return () => URL.revokeObjectURL(objectUrl)
        } else {
            setImageUrl(null)
        }

    }, [image])

    if (!imageUrl) return null

    return (
        <div className='relative'>
            <Image
                src={imageUrl}
                alt='Preview'
                width={200}
                height={200}
                className='w-full h-64 border-2 border-dashed lg:rounded-lg cursor-pointer hover:bg-gray-800 bg-gray-700 border-gray-600 hover:border-gray-500 object-cover'
                style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }}
            />

            <button
                onClick={onRemove}
                className="absolute top-2 right-2 bg-black bg-opacity-60 text-xl hover:bg-opacity-45 text-white rounded-full p-1"
            >
                <IoCloseOutline />
            </button>

        </div>
    )
}
