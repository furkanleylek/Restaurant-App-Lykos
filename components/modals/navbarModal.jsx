import React from 'react'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import { BiSolidFoodMenu } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import Image from 'next/image'
function NavbarModal({ setIsOpen }) {
    return (
        <div className="fixed mdlg:hidden w-full h-full inset-0 z-50 overflow-y-hidden 
    ">
            <div className='flex flex-col items-center justify-start pt-12 w-full animate-modal h-full  bg-[#F1F1E8] relative z-50'>
                <Image
                    src='/Logo.svg'
                    width={200}
                    height={120}
                    alt='logo'
                    className='py-16'
                />
                <Link className='text-2xl  text-gray-700 hover:bg-sky-500 hover:text-white font-bold flex items-center justify-start w-3/4 gap-8 h-20 ' onClick={() => setIsOpen(false)} href="/"><FaHome className=' text-[40px]' />Ana Sayfa</Link>
                <span className='w-3/4 h-1 border-b-4'></span>
                <Link className='text-2xl text-gray-700 hover:bg-sky-500 hover:text-white font-bold flex  items-center justify-start w-3/4 gap-8 h-20' onClick={() => setIsOpen(false)} href="/menu"><BiSolidFoodMenu className=' text-[40px] ' /> Menü</Link>
                <span className='w-3/4 h-1 border-b-4 '></span>
                <Link className='text-2xl text-gray-700 hover:bg-sky-500 hover:text-white font-bold flex items-center justify-start  w-3/4 gap-8 h-20 ' onClick={() => setIsOpen(false)} href="/giris"><CgProfile className='text-[40px]' />Giriş Yap</Link>
                <span className='w-3/4 h-1 border-b-4'></span>
            </div>
        </div>
    )
}

export default NavbarModal
