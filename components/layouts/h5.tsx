import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Cormorant_Infant } from 'next/font/google'

interface TitleH5Props {
    children: ReactNode;
}

const cormo = Cormorant_Infant({ subsets: ['latin'], weight: '700' })

const TitleH5: React.FC<TitleH5Props> = ({ children }) => {
    return (
        <h5 className={classNames('text-xl xl:text-2xl font-bold text-secondary', cormo.className)}>
            {children}
        </h5>
    );
};

export default TitleH5;