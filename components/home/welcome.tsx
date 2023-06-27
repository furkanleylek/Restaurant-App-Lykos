import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { Cormorant_Infant } from 'next/font/google'
import ButtonFirst from '../layouts/buttonFirst'
const Cormo = Cormorant_Infant({ subsets: ['latin'], weight: ['600'] })

const WelcomeSection = () => {
    return (
        <>
            <div
                className='flex flex-col justify-center gap-10 z-10'
            >
                <h1 className={classNames(
                    "text-white text-4xl md:text-6xl xl:text-8xl font-semibold", Cormo.className)}>
                    Lykos&lsquo;a Hoşgeldiniz
                </h1>
                <p className='text-third text-sm md:text-base xl:w-[70%]'>
                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy .
                </p>
                <ButtonFirst linkHref="/menu">
                    View Menü
                </ButtonFirst>
            </div>
            <Image
                src="/main.png"
                width={600}
                height={300}
                alt="Restaurant İçi"
                className='object-cover'
                priority
            />
        </>
    )
}

export default WelcomeSection