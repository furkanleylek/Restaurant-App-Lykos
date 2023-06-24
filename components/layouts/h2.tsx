import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Cormorant_Infant } from 'next/font/google'

interface TitleH2Props {
    children: ReactNode;
}

const cormo = Cormorant_Infant({ subsets: ['latin'], weight: '700' })

const TitleH2: React.FC<TitleH2Props> = ({ children }) => {
    return (
        <h2 className={classNames('text-3xl xl:text-4xl underline underline-offset-[11px] font-bold text-secondary', cormo.className)}>
            {children}
        </h2>
    );
};

export default TitleH2;