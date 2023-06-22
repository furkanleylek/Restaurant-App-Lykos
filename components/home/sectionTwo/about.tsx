import React from 'react'
import Image from 'next/image'
import TitleH4 from '@/components/layouts/h4'
import Paragraph from '@/components/layouts/paragraph'
const About = () => {
    return (
        <div className='flex flex-col xl:flex-row justify-between gap-8 xl:gap-20'>
            <Image
                src="/Photo.svg"
                width={420}
                height={420}
                alt="Restaurant İçi"
                className='hidden xl:flex xl:w-fit h-60 xl:h-96 object-cover rounded-sm'
            />
            <span className='xl:h-full xl:w-1 bg-rose-200'></span>
            <div
                className='flex flex-col gap-6'
            >
                <div className='flex flex-col gap-3'>
                    <TitleH4>
                        The Story
                    </TitleH4>
                    <Paragraph>
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using makinlook like readable English. Many desktop publishing packages.
                    </Paragraph>
                </div>
                <div className='flex items-center gap-6 xl:gap-16'>
                    <div className='flex flex-col gap-3'>
                        <TitleH4>
                            1996
                        </TitleH4>
                        <Paragraph>
                            Lorem Ipsum is that it has a more-or-less normal distribution
                        </Paragraph>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <TitleH4>
                            2021
                        </TitleH4>
                        <Paragraph>
                            Lorem Ipsum is that it has a more-or-less normal distribution
                        </Paragraph>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <span>JOSEFINE</span>
                    <Image
                        src="/Josefine.png"
                        width={120}
                        height={120}
                        alt="Restaurant İçi"
                        className='object-cover rounded-sm'
                    />
                </div>
            </div>

        </div>
    )
}

export default About