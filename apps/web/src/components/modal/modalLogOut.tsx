"use client"

import React, { useEffect } from 'react'
import { ModalProps } from './ModalProfile'


const ModalLogOut: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    if (!isOpen) return null;

    return (
        <div onClick={onClose} className='fixed h-screen inset-0 z-50 bg-gray-800/80'>
            <div className='max-w-7xl h-screen mx-auto relative'>
                <div onClick={e => e.stopPropagation()} className='absolute left-7 bottom-32 w-[130px] h-12 rounded-md bg-white shadow-lg p-2'>
                    {children}
                </div>
            </div>
        </div>
    )
}


export default ModalLogOut