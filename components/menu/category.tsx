'use client'
import React, { useState } from 'react'
import MenuData from '@/menu.json'
import Image from 'next/image'
import classNames from 'classnames';
import { Cormorant_Infant } from 'next/font/google'
import Food from './food';
import { useRestaurantContext } from '../context';
import TitleH1 from '../layouts/h1';
import MenuHeader from './menuheader';

interface SingleCategoryProps {
    categoryTitle: string,
    categoryImageSource: string,
    categoryIndex: number,
    setCategoryIndex: (index: number) => void;
    setInsideCategory: (inside: boolean) => void;
}

const cormo = Cormorant_Infant({ subsets: ['latin'], weight: '700' })


const SingleCategory: React.FC<SingleCategoryProps> = ({ categoryTitle, categoryImageSource, categoryIndex, setCategoryIndex, setInsideCategory }) => {
    return (
        <div
            onClick={() => {
                setCategoryIndex(categoryIndex)
                setInsideCategory(true)
            }}
            className='relative w-full h-36 md:h-40 xl:h-52 flex items-center justify-center shadow-md shadow-third '
        >
            <h3 className={classNames('text-white font-semibold text-xl xl:text-3xl absolute z-10', cormo.className)}>
                {categoryTitle}
            </h3>
            <Image
                src={categoryImageSource}
                fill
                alt={categoryTitle}
                className='object-cover brightness-[.6]'
            />
        </div>
    )
}


const AllCategory = () => {

    const { categoryIndex, setCategoryIndex, insideCategory, setInsideCategory } = useRestaurantContext()

    return (
        <>
            {
                insideCategory ?
                    (
                        <div>
                            <MenuHeader />
                            <Food dishData={MenuData.category[categoryIndex].Menu} />
                        </div >
                    )
                    :
                    (
                        <div className='flex flex-col items-center justify-center gap-9 mdlg:gap-12 py-4'>
                            <TitleH1>
                                Lykos Menü
                            </TitleH1>
                            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-1'>
                                {
                                    MenuData.category.map((e, index) => {
                                        return (
                                            <SingleCategory key={index} categoryTitle={e.categoryTitle} categoryImageSource={e.categoryImageSource} categoryIndex={index} setCategoryIndex={setCategoryIndex} setInsideCategory={setInsideCategory} />
                                        )
                                    })
                                }
                            </div>

                        </div>
                    )
            }
        </>
    )
}

export default AllCategory