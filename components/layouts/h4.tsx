import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Cormorant_Infant } from 'next/font/google'

interface TitleH4Props {
    children: ReactNode;
}

const cormo = Cormorant_Infant({ subsets: ['latin'], weight: '700' })

const TitleH4: React.FC<TitleH4Props> = ({ children }) => {
    return (
        <h4 className={classNames('text-3xl font-bold text-secondary', cormo.className)}>
            {children}
        </h4>
    );
};

export default TitleH4;