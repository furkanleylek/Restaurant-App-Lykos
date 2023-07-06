import React from 'react'
import AllCategory from '@/components/menu/category'
import Image from 'next/image'
import Link from 'next/link'

export const Metadata = {
    title: 'Lykos | Menü ',
    description: 'Erbaa Lykos restorant cafe günün menüsü',
}

const MenuPage = () => {
    return (
        <section
            className="w-full h-full flex flex-col items-center justify-center relative"
        >
            <div className='fixed md:relative flex justify-center items-center py-4 top-0 z-20 bg-secondaryBg w-full'>
                <Link href="/">
                    <Image
                        src="/Logo.svg"
                        width={80}
                        height={80}
                        alt="Restaurant Logo"
                    />
                </Link>
            </div>
            <div className='w-full flex flex-col gap-16 xl:gap-32 '
            >
                <AllCategory />
            </div>
        </section>
    )
}

export default MenuPage