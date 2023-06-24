import React from 'react'
import TitleH2 from '@/components/layouts/h2'
import TitleH5 from '@/components/layouts/h5'
import Paragraph from '@/components/layouts/paragraph'
import Image from 'next/image'

const populerDishes = [
    {
        populerDishName: 'Chicken Manjoori ',
        populerDishPrice: 15,
        populerDishDescription: 'Lorem Ipsum is that it has a more-or-less normal',
        populerDishImage: '/Popular/First.jpg'
    },
    {
        populerDishName: 'Chicken Manjoori ',
        populerDishPrice: 20,
        populerDishDescription: 'Lorem Ipsum is that it has a more-or-less normal',
        populerDishImage: '/Popular/Two.jpg'
    },
    {
        populerDishName: 'Chicken Manjoori ',
        populerDishPrice: 25,
        populerDishDescription: 'Lorem Ipsum is that it has a more-or-less normal',
        populerDishImage: '/Popular/Three.jpg'
    },
    {
        populerDishName: 'Chicken Manjoori ',
        populerDishPrice: 15,
        populerDishDescription: 'Lorem Ipsum is that it has a more-or-less normal',
        populerDishImage: '/Popular/Four.jpg'
    }
]

interface singlePopulerDishProps {
    populerDishName: string,
    populerDishPrice: number,
    populerDishDescription: string,
    populerDishImage: string
}

const SınglePopulerDısh: React.FC<singlePopulerDishProps> = ({
    populerDishName, populerDishPrice, populerDishDescription, populerDishImage
}) => {
    return (
        <div className='flex flex-col '>
            <div className='w-full h-60 relative my-4'>
                <Image
                    src={populerDishImage}
                    fill
                    alt={populerDishName}
                    className='object-cover rounded'
                />
            </div>
            <div className='flex items-center justify-between my-2 border-b-[1px] pb-1 border-primary border-opacity-20'>
                <TitleH5>
                    {populerDishName}
                </TitleH5>
                <span>${populerDishPrice}</span>
            </div>
            <Paragraph>
                {populerDishDescription}
            </Paragraph>
        </div>
    )
}


const PopulerDishes = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 xl:gap-12'>
            <div className='flex flex-col xl:items-center xl:justify-center gap-3'>
                <span className='py-1 text-center border-y-[1px] border-rose-200 tracking-widest w-14 mb-2'>MENU</span>
                <TitleH2>
                    Popular Dishes
                </TitleH2>
                <Paragraph>
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content making.
                </Paragraph>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full'>
                {
                    populerDishes.map((e, index) => {
                        return <SınglePopulerDısh key={index} populerDishName={e.populerDishName} populerDishImage={e.populerDishImage} populerDishDescription={e.populerDishDescription} populerDishPrice={e.populerDishPrice} />
                    })
                }
            </div>
        </div>
    )
}

export default PopulerDishes