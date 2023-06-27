'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMenu } from 'react-icons/ai'
import UnderlineAnimation from '../layouts/underlineAnimation'
import NavbarModal from '@/components/modals/navbarModal'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header
            className="md:container mx-auto px-4 md:px-16 xl:px-32 w-full flex flex-col py-4 xl:py-8 gap-10 "
        >
            <div className='flex justify-between items-center text-white mdlg:hidden'>
                <Link href="/">
                    <Image
                        src="/Logo.svg"
                        width={80}
                        height={80}
                        alt="Restaurant Logo"
                        className='object-cover'
                        priority
                    />
                </Link>
                <button
                    className={`h-[24px] flex mdlg:hidden flex-col items-center justify-center cursor-pointer z-[999] hover:scale-110 transition-all `}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`${isOpen ? 'rotate-[-45deg] translate-x-[-5px] translate-y-[10px] border-secondary' : 'border-white'} h-2 w-[32px] border-b-[2px]  rounded-sm transform transition ease-in-out `}></span>
                    <span className={`${isOpen ? 'opacity-0  border-secondary' : 'opacity-100  border-white'} h-2 w-[32px] border-b-[2px] rounded-sm transition-all  ease-in-out `}></span>
                    <span className={`${isOpen ? '-rotate-[-45deg]  translate-y-[-6px]  border-secondary' : ' border-white'} h-2 w-[32px] border-b-[2px] rounded-sm transform transition ease-in-out `}></span>
                </button>
            </div>
            {/* <div className='hidden mdlg:flex items-center justify-between'>
                <p className='border-[1px]  py-3 px-5 border-stroke text-third'>
                    Call - 987 654 321
                </p>
                <Image
                    src="/Logo.svg"
                    width={300}
                    height={300}
                    alt="Restaurant Logo"
                />
                <button
                    className='py-3 px-10 bg-stroke text-secondary font-semibold'
                >
                    Reservation
                </button>
            </div> */}
            <div className='text-third hidden mdlg:flex justify-between items-center'>
                <Link href="/">
                    <Image
                        src="/Logo.svg"
                        width={125}
                        height={125}
                        alt="Restaurant Logo"
                    />
                </Link>
                <div className='flex items-center p-2 mt-1 gap-16'>
                    <UnderlineAnimation linkHref='/'>
                        Hakkımızda
                    </UnderlineAnimation>
                    <UnderlineAnimation linkHref='/menu'>
                        Menü
                    </UnderlineAnimation>
                    <UnderlineAnimation linkHref='/'>
                        İletişim
                    </UnderlineAnimation>
                    <UnderlineAnimation linkHref='/giris'>
                        Giriş Yap
                    </UnderlineAnimation>
                </div>
                {/* <div
                    className='flex items-center gap-4 text-third text-2xl'
                >
                    <Link href="https://www.twitter.com" passHref target='_blank'>
                        <AiOutlineTwitter />
                    </Link>
                    <Link href="https://www.instagram.com" passHref target='_blank'>
                        <AiOutlineInstagram />
                    </Link>
                </div> */}
            </div>
            {isOpen && (
                <NavbarModal setIsOpen={setIsOpen} />
            )}
        </header>
    )
}

export default Header