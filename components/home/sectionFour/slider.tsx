'use client'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid'
import TitleH4 from '@/components/layouts/h4';
import Paragraph from '@/components/layouts/paragraph';
import { EffectCoverflow, EffectCreative, Pagination, Navigation } from 'swiper';
import slide_image_1 from '../../../public/Photo.jpg';
import { SingleClientMessage } from './clientMessage';

const Messages = [
    {
        client: 'Daniyal Sppra',
        clientMessage: '"It is professional, considers everyones time, can think about the  There are many variations of passages whole probls small niche, friendly.',
        clientPhoto: '/Profil/Daniyal.jpg',
    },
    {
        client: 'Natasha D',
        clientMessage: '"It is professional, considers everyones time, can think about the  There are many variations of passages small niche, friendly.',
        clientPhoto: '/Profil/Natasha.jpg',
    },
    {
        client: 'Jack Sparrow',
        clientMessage: '"It is professional, considers everyones time, can think about the  There are many  passages whole probls small niche, friendly.',
        clientPhoto: '/Profil/Jack.jpg',
    },
    {
        client: 'Didier Drogba',
        clientMessage: '"It is professional, considers everyones time, can think about the  There are many variations of passages whole probls small niche, friendly.',
        clientPhoto: '/Profil/Daniyal.jpg',
    },
    {
        client: 'Francesco Totti',
        clientMessage: '"It is professional, considers everyones time, can think about the  There are many variations of passages whole probls small niche, friendly.',
        clientPhoto: '/Profil/Natasha.jpg',
    }
]

function Slider() {
    const [slidesPerView, setSlidesPerView] = useState(3); // Varsayılan olarak 3 slayt görüntülenecek şekilde ayarladım

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 640) {
                setSlidesPerView(1);
            } else if (screenWidth < 1024) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };

        // İlk render'da ve ekran boyutunda herhangi bir değişiklik olduğunda handleResize fonksiyonunu çağırın
        handleResize();

        window.addEventListener('resize', handleResize);

        // Komponent temizlendiğinde event listener'ı kaldırın
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col justify-start gap-12 xl:gap-16">
            <div className='flex flex-col gap-6 xl:gap-10 text-white'>
                <span className='py-2 border-y-[1px] border-rose-200 tracking-widest w-32'>GERİ DÖNÜŞ</span>
                <div className='flex flex-col gap-2'>
                    <TitleH4
                    >
                        <span className='text-white'>
                            What our clients say
                        </span>
                    </TitleH4>
                    <p className='text-[12px] lg:text-[14px] text-third'>
                        We love to hear from customers, so please leave a comment or say hello in an email.
                    </p>
                </div>
            </div>
            <div className='w-full h-full'>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={0}
                    loop={true}
                    slidesPerView={slidesPerView}
                    coverflowEffect={{
                        rotate: 20,
                        stretch: 0,
                        depth: 70,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true, type: 'bullets' }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, EffectCreative, Pagination, Navigation]}
                    className="swiper_container "
                >
                    <div>
                        {
                            Messages.map((e, index) => {
                                return (
                                    <SwiperSlide key={index} >
                                        {({ isActive }) => (
                                            <SingleClientMessage client={e.client} clientMessage={e.clientMessage} clientPhoto={e.clientPhoto} isActive={isActive} />
                                        )}
                                    </SwiperSlide>
                                )
                            })
                        }
                    </div>
                    {/* <SwiperSlide>
                        {({ isActive }) => (
                            <Image width={500} height={400} src={slide_image_1} alt="slide_image" className={`rounded-md z-10 ${isActive ? 'opacity-100' : 'opacity-70'}`} />
                        )}
                    </SwiperSlide> */}
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                        </div>
                        <div className="swiper-button-next slider-arrow">
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}
export default Slider;