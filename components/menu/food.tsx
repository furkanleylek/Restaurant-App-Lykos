import React from 'react'
import Image from 'next/image';
import TitleH5 from '../layouts/h5';
import Paragraph from '../layouts/paragraph';
import MenuHeader from './menuheader';
interface SingleFoodProps {
    dishImageSrc: string;
    dishTitle: string;
    dishDescription: string;
    dishPrice: number;
}


interface MenuProps {
    dishData: {
        dishImageSrc: string;
        dishTitle: string;
        dishDescription: string;
        dishPrice: number;
    }[];
}


const SingleFood: React.FC<SingleFoodProps> = ({ dishTitle, dishDescription, dishImageSrc, dishPrice }) => {
    return (
        <div className='flex justify-between gap-6 border-b-[1px] shadow-b-xl pr-2'>
            <div className='flex gap-2'>
                <Image
                    src={dishImageSrc}
                    width={80}
                    height={80}
                    alt={dishTitle}
                    className='object-cover rounded-sm'
                />
                <div className='flex flex-col gap-2'>
                    <TitleH5>
                        {dishTitle}
                    </TitleH5>
                    <p className='text-[11px] mdlg:text-sm'>
                        {dishDescription}
                    </p>
                </div>
            </div>
            <span className='flex justify-self-end'>
                {dishPrice}₺
            </span>
        </div>
    )
}

const Food: React.FC<MenuProps> = ({ dishData }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full mt-20 gap-4'>
            {
                dishData.map((e, index) => {
                    return (
                        <SingleFood key={index} dishTitle={e.dishTitle} dishImageSrc={e.dishImageSrc} dishDescription={e.dishDescription} dishPrice={e.dishPrice} />
                    )
                })
            }
        </div>
    )
}

export default Food