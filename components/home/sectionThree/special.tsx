import React from 'react'
import TitleH3 from '@/components/layouts/h3'
import Image from 'next/image'
import ButtonTwo from '@/components/layouts/buttonTwo'
const Special = () => {
    return (
        <div className='flex flex-col gap-6 '>
            <span className='py-2 border-y-[1px] border-rose-200 tracking-widest w-14'>MENU</span>
            <TitleH3>
                Try Our Special Offers
            </TitleH3>
            <p>
                Lorem Ipsum is that it has a more-or-less normal distribution of letterrr letters, as opposed to using content making it look like readable English.
            </p>
            <Image
                src="/Food/Special.png"
                width={420}
                height={420}
                alt="Special Food"
                className='h-64 xl:h-96 w-full object-cover'
            />
            <ButtonTwo>
                See All Dishes
            </ButtonTwo>
        </div>
    )
}

export default Special