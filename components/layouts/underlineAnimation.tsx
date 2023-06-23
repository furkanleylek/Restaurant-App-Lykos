'use client'
import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'
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
            <motion.button
                className="font-semibold text-third opacity-80 hover:opacity-100 transition-all rounded-md"
                onMouseEnter={() => { setIsHovered(true) }}
                onMouseLeave={() => { setIsHovered(false) }}
                whileTap={{ scale: 1.1 }}
            >
                {children}
            </motion.button>
            <div style={lineStyle}></div>
        </Link>
    );
};

export default UnderlineAnimation;
