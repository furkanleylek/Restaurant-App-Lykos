import React from 'react'
import AllCategory from '@/components/menu/category'
import Header from '@/components/header/header'
import MenuHeader from '@/components/menu/menuheader'
const MenuPage = () => {
    return (
        <section
            className="w-full h-full bg-white flex flex-col items-center justify-center "
        >
            <div className='fixed md:relative top-0 z-20 bg-secondaryBg w-full'>
                <Header />
            </div>
            <div className='w-full flex flex-col gap-16 xl:gap-32 mt-20 md:mt-4 container mx-auto  xl:pb-32 md:px-16 xl:px-32 relative '
            >
                <AllCategory />
            </div>
        </section>
    )
}

export default MenuPage