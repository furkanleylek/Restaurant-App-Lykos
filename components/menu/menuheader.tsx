'use client'
import React from 'react'
import { useRestaurantContext } from '../context';
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { GrApps, GrSort } from 'react-icons/gr'
const MenuHeader = () => {

    const { setInsideCategory, viewType, setViewType } = useRestaurantContext()
    return (
        <div
            className='bg-gray-50 z-10 w-full fixed md:relative top-[71px] md:top-[-10px] inset-x-0 shadow-md cursor-pointer flex'
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
                        Menü
                    </h3>
                </div>
                <div className='flex items-center border-[1px] rounded-xl text-xl'>
                    <button
                        onClick={() => setViewType(false)}
                        className={`border-r-[1px] rounded-l-xl p-2 ${viewType ? '' : 'bg-orange-200'}`}
                    >
                        <GrApps />
                    </button>
                    <button
                        onClick={() => setViewType(true)}
                        className={`p-2 rounded-r-xl ${viewType ? 'bg-orange-200' : ''}`}
                    >
                        <GrSort />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuHeader