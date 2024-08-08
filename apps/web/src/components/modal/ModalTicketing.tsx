import React, { useEffect } from 'react'
import { IoIosClose } from "react-icons/io";
import { ModalProps } from './ModalProfile';


const ModalTicketing: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div onClick={onClose} className='fixed inset-0 bg-gray-700/30 z-50'>
            <div className='h-screen mx-auto flex items-center justify-center'>
                <div onClick={e => e.stopPropagation()} className=' bg-white px-8 py-5 rounded-md w-[500px] h-[490px] relative'>
                    <IoIosClose onClick={onClose} className='absolute right-5 top-4 w-7 h-7 cursor-pointer' />
                        {children}
                </div>
            </div>
        </div>
    )
}

export default ModalTicketing