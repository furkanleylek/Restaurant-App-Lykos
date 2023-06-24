import React from 'react'
import TitleH5 from '@/components/layouts/h5'
import Paragraph from '@/components/layouts/paragraph'
import Image from 'next/image'
interface SingleClientMessageProps {
    client: string,
    clientMessage: string,
    clientPhoto: string,
    isActive: boolean
}

export const SingleClientMessage: React.FC<SingleClientMessageProps> = ({
    client, clientMessage, clientPhoto, isActive
}) => {
    return (
        <div className={`p-4 py-6 bg-third rounded-md flex flex-col gap-6 ${isActive ? 'opacity-100' : 'brightness-[.60]'}`}>
            <div className='flex items-center gap-4 border-b-[1px] border-primary border-opacity-10 pb-6'>
                <Image
                    src={clientPhoto}
                    width={80}
                    height={40}
                    alt={`${client} photo`}
                    className='rounded-full object-cover'
                />
                <TitleH5>
                    {client}
                </TitleH5>
            </div>
            <p className='text-[12px] lg:text-[14px] text-primary'>
                {clientMessage}
            </p>
        </div>
    )
}
