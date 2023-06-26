import React from 'react'
import MenuData from '@/menu.json'
import Image from 'next/image'
import classNames from 'classnames';
import { Cormorant_Infant } from 'next/font/google'

interface SingleCategoryProps {
    categoryTitle: string,
    categoryImageSource: string
}

const cormo = Cormorant_Infant({ subsets: ['latin'], weight: '700' })


const SingleCategory: React.FC<SingleCategoryProps> = ({ categoryTitle, categoryImageSource }) => {
    return (
        <div className='relative w-full h-24 md:h-32 xl:h-44 flex items-center justify-center shadow-md shadow-secondary'>
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
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-1'>
            {
                MenuData.category.map((e, index) => {
                    return (
                        <SingleCategory key={index} categoryTitle={e.categoryTitle} categoryImageSource={e.categoryImageSource} />
                    )
                })
            }
        </div>
    )
}

export default AllCategory