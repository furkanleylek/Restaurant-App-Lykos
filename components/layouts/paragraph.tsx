import React, { ReactNode } from 'react';

interface ParagraphProps {
    children: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
    return (
        <p className='text-sm md:text-base'>
            {children}
        </p>
    );
};

export default Paragraph;