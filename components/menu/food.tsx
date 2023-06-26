import React from 'react'
import Image from 'next/image';
import TitleH5 from '../layouts/h5';
import Paragraph from '../layouts/paragraph';
import MenuHeader from './menuheader';
import TitleH4 from '../layouts/h4';
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
    dishCategoryTitle: string
}


const SingleFood: React.FC<SingleFoodProps> = ({ dishTitle, dishDescription, dishImageSrc, dishPrice }) => {
    return (
        <div className='flex justify-between items-start gap-6 border-b-[1px] shadow-b-xl p-2 pb-4 pr-4 '>
            <div className='flex gap-4'>
                <Image
                    src={dishImageSrc}
                    width={70}
                    height={70}
                    alt={dishTitle}
                    className='object-cover rounded-full'
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
            <span className='text-primary font-semibold'>
                {dishPrice}₺
            </span>
        </div>
    )
}

const Food: React.FC<MenuProps> = ({ dishData, dishCategoryTitle }) => {
    return (
        <div className='flex flex-col w-full mt-16 gap-6'>
            <TitleH4
                className='underline underline-offset-4 text-3xl text-center'
            >
                {dishCategoryTitle}
            </TitleH4>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full  gap-4'>
                {
                    dishData.map((e, index) => {
                        return (
                            <SingleFood key={index} dishTitle={e.dishTitle} dishImageSrc={e.dishImageSrc} dishDescription={e.dishDescription} dishPrice={e.dishPrice} />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Food