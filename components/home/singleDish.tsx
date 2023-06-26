import React from 'react'
import Image from 'next/image'
import TitleH5 from '../layouts/h5'
import { BsCurrencyDollar } from 'react-icons/bs'
interface SingleDishProps {
    dishImageSrc: string,
    dishTitle: string,
    dishDescription: string,
    dishPrice: number,
}

const SingleDish: React.FC<SingleDishProps> = ({ dishImageSrc, dishTitle, dishDescription, dishPrice }) => {
    return (
        <div className='flex gap-6 w-full items-center'>
            <Image
                src={dishImageSrc}
                width={30}
                height={30}
                alt="dish"
                className='w-12 xl:w-20 h-12 xl:h-20 object-cover rounded-full'
            />
            <div className='flex flex-col justify-center items-start w-full gap-1'>
                <TitleH5>
                    {dishTitle}
                </TitleH5>
                <div className='flex items-center justify-between w-full'>
                    <p className='text-[12px] text-gray-700'>{dishDescription}</p>
                    <div className='divider'></div>
                </div>
            </div>
            <div className='flex items-center gap-0  text-white bg-stroke bottm-0 p-2  rounded-xl '>
                <BsCurrencyDollar className='text-base xl:text-2xl mb-1' />
                <span className='text-base xl:text-2xl '>
                    {dishPrice}
                </span>
            </div>
        </div>
    )
}

export default SingleDish