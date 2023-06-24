import React, { ReactNode } from 'react';

interface ButtonTwoProps {
    children: ReactNode;
}

const ButtonTwo: React.FC<ButtonTwoProps> = ({ children }) => {
    return (
        <button className='button h-14 bg-auto overflow-hidden relative before:bg-stroke before:text-white border-[1px] border-stroke py-2 md:py-3 xl:py-4 rounded-sm px-8 md:px-12 xl:px-16 text-stroke hover:text-white justify-start self-start'>
            <span className='relative z-10'>
                {children}
            </span>
        </button>
    );
};

export default ButtonTwo;