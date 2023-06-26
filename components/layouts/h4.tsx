import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Cormorant_Infant } from 'next/font/google'

interface TitleH4Props {
    children: ReactNode;
    className?: string; // Eklenen prop
}

const cormo = Cormorant_Infant({ subsets: ['latin'], weight: '700' })

const TitleH4: React.FC<TitleH4Props> = ({ children, className }) => {
    return (
        <h4 className={classNames(`text-2xl lg:text-3xl font-bold text-secondary ${className}`, cormo.className)}>
            {children}
        </h4>
    );
};

export default TitleH4;