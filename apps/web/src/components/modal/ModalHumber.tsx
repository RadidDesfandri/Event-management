import React, { useEffect } from 'react'
import { ModalProps } from './modalSearch'


export const ModalHumber: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <div className='bg-white w-full z-50 inset-0 fixed h-screen'>
            <div className='relative'>
                {children}
            </div>
        </div>
    )
}
