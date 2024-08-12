"use client"

import React, { useEffect } from 'react'

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const ModalPayTiket: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className='fixed overflow-y-scroll w-full inset-0 z-50 bg-gray-100'>
            <div className='max-w-7xl mx-auto relative'>
                {children}
            </div>
        </div>
    )
}
