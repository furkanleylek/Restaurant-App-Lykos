'use client'
import React from 'react'
import { useRestaurantContext } from '../context';
import { MdKeyboardArrowLeft } from 'react-icons/md'

const MenuHeader = () => {

    const { setInsideCategory } = useRestaurantContext()

    return (
        <div
            className=' bg-rose-50 w-full fixed top-[71px] mdlg:top-[272px] xl:top-[303px] inset-x-0'
        >
            <div
                onClick={() => {
                    setInsideCategory(false)
                }}
                className="md:container mx-auto px-4 md:px-16 xl:px-32 w-full py-4 xl:py-4 flex items-center gap-2 p-2"
            >
                <span>
                    <MdKeyboardArrowLeft />
                </span>
                <h3
                >
                    Ana Sayfa
                </h3>
            </div>

        </div>
    )
}

export default MenuHeader