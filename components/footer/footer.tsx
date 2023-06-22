import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer
            className="md:container mx-auto px-4 md:px-16 xl:px-32 w-full flex flex-col py-8 gap-10"
        >
            <div className='text-white flex items-center justify-between'>
                <Image
                    src="/Logo.svg"
                    width={150}
                    height={300}
                    alt="Restaurant Logo"
                    className='object-cover'
                />
                <div className='flex items-center gap-4 text-2xl'>
                    <Link href="https://www.twitter.com" passHref target='_blank'>
                        <AiOutlineTwitter />
                    </Link>
                    <Link href="https://www.instagram.com" passHref target='_blank'>
                        <AiOutlineInstagram />
                    </Link>
                </div>
            </div>
            <div className='flex flex-col mdlg:flex-row mdlg:items-center mdlg:justify-between text-[12px] mdlg:text-sm gap-8'>
                <div className='text-white flex flex-col gap-4'>
                    <span className='tracking-widest border-y-[1px] border-stroke py-1 w-[76px]'>CONTACT</span>
                    <p>
                        5 Rue Dalou, 75015 Paris<br />
                        <span className='text-stroke my-1'>Call</span> + 33 156 78 89 56<br />
                        <span className='text-stroke'>benoit@gmail.com</span>
                    </p>
                </div>
                <div className='text-white flex flex-col gap-4'>
                    <p className='mdlg:text-center'>
                        Join our mailing list for updates , <br />
                        Get news & offers events .
                    </p>
                    <div className='flex'>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className='bg-secondaryBg border-third border-[1px] py-2 px-3'
                        />
                        <button className='bg-white text-secondary px-6'>
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-4 text-white'>
                    <span className='tracking-widest border-y-[1px] border-stroke py-1 w-[144px] text-sm'>WORKING HOURS</span>
                    <p>
                        <span className='text-stroke'>Mon - Fri : </span>7.00am - 6.00pm <br />
                        <span className='text-stroke'>Sat : </span>7.00am - 6.00pm <br />
                        <span className='text-stroke'>Sun : </span>8.00am - 6.00pm <br />
                    </p>
                </div>
            </div>
            <div
                className='border-t-[1px] border-third border-opacity-40 flex items-center justify-between text-third pt-4 text-[12px] xl:text-sm'
            >
                <span>@Copyright | Designed by <span className='text-stroke'>Victor Flow</span> , Coded by <span className='text-stroke'>Furkan Leylek</span> </span>
                <span>StyleGuide / Licenses </span>
            </div>

        </footer>
    )
}

export default Footer