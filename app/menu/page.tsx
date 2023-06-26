import React from 'react'
import Menu from '@/components/home/sectionThree/menu'
import data from '@/data.json'
import AllCategory from '@/components/menu/category'
import TitleH1 from '@/components/layouts/h1'
const MenuPage = () => {
    return (
        <section
            className="w-full h-full bg-primaryBg flex flex-col items-center justify-center gap-6 pt-2"
        >
            <TitleH1>
                Menü
            </TitleH1>
            <div className='w-full flex flex-col gap-16 xl:gap-32 container mx-auto pb-12 xl:pb-32 md:px-16 xl:px-32 relative '
            >
                <AllCategory />
            </div>
        </section>
    )
}

export default MenuPage