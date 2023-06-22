import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Cormorant_Infant } from 'next/font/google'

interface TitleH3Props {
    children: ReactNode;
}

const cormo = Cormorant_Infant({ subsets: ['latin'], weight: '700' })

const TitleH3: React.FC<TitleH3Props> = ({ children }) => {
    return (
        <h4 className={classNames('text-3xl xl:text-4xl underline underline-offset-8 font-bold text-secondary', cormo.className)}>
            {children}
        </h4>
    );
};

export default TitleH3;