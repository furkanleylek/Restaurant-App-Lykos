import React from 'react'
import { SlLocationPin } from 'react-icons/sl'
import { TbClockHour10 } from 'react-icons/tb'
import { MdEditCalendar } from 'react-icons/md'

interface SectionItemProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

const SectionItem: React.FC<SectionItemProps> = ({ icon, title, content }) => {
    return (
        <div className='flex gap-4'>
            <div className='border-2 bg-secondaryBg flex items-center h-[52px] self-center justify-center rounded-full p-3'>
                {icon}
            </div>
            <div className='flex flex-col'>
                <h4 className='text-secondary font-bold text-[18px] '>{title}</h4>
                <p className='text-gray-600'>{content}</p>
            </div>
        </div>
    );
};
const Icons = () => {
    return (
        <div
            className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between w-full'
        >
            <SectionItem
                icon={<SlLocationPin className='text-white text-2xl' />}
                title='Locate Us'
                content='Riverside 25, San Francisco, California'
            />
            <SectionItem
                icon={<TbClockHour10 className='text-white text-2xl' />}
                title='Opening Hours'
                content='Monday to Friday: 9am-6pm'
            />
            <SectionItem
                icon={<MdEditCalendar className='text-white text-2xl' />}
                title='Upcoming Events'
                content='Check our calendar for upcoming events'
            />
        </div>
    )
}


export default Icons