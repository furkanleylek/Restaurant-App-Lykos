import React from 'react'
import Image from 'next/image';
import TitleH5 from '../layouts/h5';
import TitleH4 from '../layouts/h4';
import { useRestaurantContext } from '../context';
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

    const { viewType } = useRestaurantContext()

    return (
        <div className={`flex ${viewType ? 'justify-between items-start p-2 pb-4 pr-4 shadow-b-xl gap-6  ' : 'flex-col  border-[1px] shadow-md gap-2'} border-b-[1px]  `}>
            <Image
                src={dishImageSrc}
                width={viewType ? 70 : 120}
                height={70}
                alt={dishTitle}
                className={`object-cover ${viewType ? 'rounded-full' : 'rounded-sm w-full max-w-xl'}`}
            />
            <div className={`flex flex-col gap-2 ${viewType ? 'px-0' : 'px-2'}`}>
                <TitleH5>
                    {dishTitle}
                </TitleH5>
                <p className='text-[11px] mdlg:text-sm'>
                    {dishDescription}
                </p>
            </div>
            <span className={`text-primary font-semibold ${viewType ? 'px-0' : 'p-2'}`}>
                {dishPrice}₺
            </span>
        </div>
    )
}

const Food: React.FC<MenuProps> = ({ dishData, dishCategoryTitle }) => {

    const { viewType } = useRestaurantContext()

    return (
        <div
            className='flex flex-col w-full mt-36 md:mt-2 gap-6 container mx-auto xl:pb-32 md:px-16 xl:px-32 relative pb-4'
        >
            <TitleH4
                className='underline underline-offset-4 text-3xl text-center'
            >
                {dishCategoryTitle}
            </TitleH4>
            <div className={`grid ${viewType ? 'grid-cols-1 ' : 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4'} md:grid-cols-2 w-full gap-4`}>
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