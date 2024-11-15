"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';
import { ArrowNext, ArrowPrev } from '../icons';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';


export default function Slider() {
    const swiperRef = useRef<SwiperType>();
    return (
        <div className='slider'>
            <Swiper
                speed={900}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
                className='mySwiper'
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide>
                    <div className="h-screen relative"
                        style={{ backgroundImage: "linear-gradient(to right top, rgba(18, 17, 14, 0.6), rgba(18, 17, 14, 0.3)), url('madan.jpg')", backgroundSize: 'cover', backgroundPosition: "center" }}
                    >
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen relative"
                        style={{ backgroundImage: "linear-gradient(to right top, rgba(18, 17, 14, 0.6), rgba(18, 17, 14, 0.3)), url('dp.jpg')", backgroundSize: 'cover', backgroundPosition: "center" }}
                    >
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='absolute top-1/2 -translate-y-1/2 z-20 hero-content-padding text-white'>
                <p className='text-primary font-semibold text-[3rem]'>Hello, I&apos;m</p>
                <h1 className='text-white text-[4.8rem] mb-[1rem] font-semibold name'>Madan Pokhrel</h1>
                <p className='text-white text-[2rem] mb-[2rem]'>A <span className='text-secondary font-semibold'>Professional Photographer</span> From <span className='text-tertiary font-semibold'>Pokhara </span></p>
                <p className='text-[1.8rem]'>I am a professional photographer based in Pokhara and I am very<br />  passionate and dedicated to my work </p>
                <div className='mt-[3rem] flex gap-[3.2rem] items-center'>
                    <Link href='/about' className='button_primary'>About Me</Link>
                    <div className='flex justify-center gap-[1.6rem]'>
                        <a href='#'>  <FaFacebookF className='text-[1.8rem]' /> </a>
                        <a href='#'><FaInstagram className='text-[1.8rem]' /></a>
                        <a href='#'> <FaTwitter className='text-[1.8rem]' /></a>
                        <a href='#'> <FaLinkedin className='text-[1.8rem]' /></a>

                    </div>
                </div>
            </div>
            <div className='slider_nav  md:block hidden'>
                <button className='absolute top-1/2 -translate-y-1/2 z-20 left-[1.6rem]' onClick={() => swiperRef.current?.slidePrev()}><ArrowPrev width={35} color="white" /></button>
                <button className='absolute top-1/2 -translate-y-1/2 z-20 right-[1.6rem]' onClick={() => swiperRef.current?.slideNext()}><ArrowNext width={35} color="white" /></button>
            </div>
        </div>
    )

}