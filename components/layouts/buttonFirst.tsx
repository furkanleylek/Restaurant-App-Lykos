import React, { ReactNode } from 'react';
import Link from 'next/link';
interface ButtonFirstProps {
    children: ReactNode;
    linkHref: string
}

const ButtonFirst: React.FC<ButtonFirstProps> = ({ children, linkHref }) => {
    return (
        <Link href={linkHref}>
            <button className='button h-10 text-[15x] mdlg:h-14 bg-auto overflow-hidden relative before:bg-stroke border-[1px] border-stroke py-2 md:py-3 xl:py-4 rounded-sm px-8 md:px-12 xl:px-16 text-white justify-start self-start'>
                <span className='relative z-10'>
                    {children}
                </span>
            </button>
        </Link>

    );
};

export default ButtonFirst;