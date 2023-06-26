'use client'
import React from 'react'
import { useRestaurantContext } from '../context';
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { GrApps, GrSort } from 'react-icons/gr'
const MenuHeader = () => {

    const { setInsideCategory, viewType, setViewType } = useRestaurantContext()
    return (
        <div
            className='bg-gray-50 z-20 w-full fixed md:relative top-[71px] md:top-[-10px] inset-x-0 shadow-md cursor-pointer flex'
            id='menu-header'
        >
            <div className="md:container mx-auto px-4 md:px-16 xl:px-32 w-full flex gap-10 py-4 xl:py-4">
                <div
                    onClick={() => {
                        setInsideCategory(false)
                    }}
                    className="w-full flex items-center gap-2 "
                >
                    <span>
                        <MdKeyboardArrowLeft />
                    </span>
                    <h3
                    >
                        Ana Sayfa
                    </h3>
                </div>
                <div className='flex items-center gap-4 mdlg:gap-6 text-xl'>
                    <button
                        onClick={() => setViewType(false)}
                    >
                        <GrApps />
                    </button>
                    <button
                        onClick={() => setViewType(true)}
                    >
                        <GrSort />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuHeader