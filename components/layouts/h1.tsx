import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Cormorant_Infant } from 'next/font/google'

interface TitleH1Props {
    children: ReactNode;
}

const cormo = Cormorant_Infant({ subsets: ['latin'], weight: '700' })

const TitleH1: React.FC<TitleH1Props> = ({ children }) => {
    return (
        <h1 className={classNames('text-4xl xl:text-5xl py-8 xl:py-12 underline underline-offset-[11px] font-bold text-primary', cormo.className)}>
            {children}
        </h1>
    );
};

export default TitleH1;