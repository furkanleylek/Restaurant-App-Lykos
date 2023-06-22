import React from 'react'
import SingleDish from '../singleDish'
import TitleH3 from '@/components/layouts/h3'

interface MenuProps {
    dishData: {
        dishImageSrc: string;
        dishTitle: string;
        dishDescription: string;
        dishPrice: number;
    }[];
    title: string
}


const Menu: React.FC<MenuProps> = ({ dishData, title }) => {
    return (
        <div className='flex flex-col gap-16 w-full'>
            <div className='flex flex-col gap-12'>
                <TitleH3>
                    {title}
                </TitleH3>
                {
                    dishData.map((food, index) => {
                        return (
                            <SingleDish key={index} dishImageSrc={food.dishImageSrc} dishTitle={food.dishTitle} dishDescription={food.dishDescription} dishPrice={food.dishPrice} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu

