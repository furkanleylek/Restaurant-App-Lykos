import React from 'react'
import classNames from 'classnames'
import { Josefin_Sans } from 'next/font/google'
import Logo from '@/public/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMenu } from 'react-icons/ai'
import UnderlineAnimation from '../layouts/underlineAnimation'
const josefin = Josefin_Sans({ subsets: ['latin'] })


const Header = () => {
    return (
        <header
            className="md:container mx-auto px-4 md:px-16 xl:px-32 w-full flex flex-col py-8 gap-10"
        >
            <div className='flex justify-between items-center text-white mdlg:hidden'>
                <Image
                    src="/Logo.svg"
                    width={80}
                    height={80}
                    alt="Restaurant Logo"
                    className='object-cover'
                    priority
                />
                <AiOutlineMenu className='text-third text-3xl' />
            </div>
            <div className='hidden mdlg:flex items-center justify-between'>
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
            </div>
            <div className='border-y-[1px] border-primary text-third hidden mdlg:flex justify-between items-center'>
                <div className='flex items-center p-2 mt-1 gap-16'>
                    <UnderlineAnimation linkHref='/'>
                        Home
                    </UnderlineAnimation>
                    <UnderlineAnimation linkHref='/'>
                        Hakkımızda
                    </UnderlineAnimation>
                    <UnderlineAnimation linkHref='/'>
                        Galeri
                    </UnderlineAnimation>
                    <UnderlineAnimation linkHref='/'>
                        İletişim
                    </UnderlineAnimation>
                </div>
                <div
                    className='flex items-center gap-4 text-third text-2xl'
                >
                    <Link href="https://www.twitter.com" passHref target='_blank'>
                        <AiOutlineTwitter />
                    </Link>
                    <Link href="https://www.instagram.com" passHref target='_blank'>
                        <AiOutlineInstagram />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header