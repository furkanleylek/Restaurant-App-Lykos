'use client'
import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
interface UnderlineAnimationProps {
    children: ReactNode;
    linkHref: string
}

const UnderlineAnimation: React.FC<UnderlineAnimationProps> = ({ children, linkHref }) => {

    const [isHovered, setIsHovered] = useState(false);
    const lineStyle = {
        width: isHovered ? '100%' : '0',
        backgroundColor: 'orange',
        height: '1.7px',
        transition: 'width 0.5s',
    };
    return (
        <Link
            href={linkHref}
        >
            <span
                className="font-semibold text-third opacity-80 hover:opacity-100 transition-all"
                onMouseEnter={() => { setIsHovered(true) }}
                onMouseLeave={() => { setIsHovered(false) }}
            >
                {children}
            </span>
            <div style={lineStyle}></div>
        </Link>
    );
};

export default UnderlineAnimation;
