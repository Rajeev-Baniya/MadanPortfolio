"use client";

import Image from "next/image";
import { testimonials } from "../../../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
// import { Swiper as SwiperType } from 'swiper';


export default function Testimonial() {
    return (
        <section className="common-padding_small text-center !bg-fixed !bg-center !bg-cover slider" style={{ background: `linear-gradient(to right top, rgba(18, 17, 14, 0.3), rgba(18, 17, 14, 0.7) , rgba(18, 17, 14, 0.3)), url('bg.jpg')` }}>
            <Swiper
                speed={900}
                loop={true}
                className='mySwiper'
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ dynamicBullets: true, clickable: true }}

            >
                {testimonials.map((each) => (
                    <SwiperSlide key={each.id}>
                        <div className="text-center" >
                            <Image src="https://res.cloudinary.com/dg5ku2nbh/image/upload/v1679218402/cld-sample-4.jpg" width={20} height={20} alt="Rajeev" className=" object-cover h-[8rem] w-[8rem] rounded-[50%] brightness-[70%] mx-auto mb-[3rem]" />
                            <p className="italic text-[2.4rem] font-sans mb-4 font-bold"> &quot; Rajeev Baniya &quot;</p>
                            <p className="italic text-grey font-sans font-semibold mb-[4rem]">- Rajeev Baniya</p>
                        </div>
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </section>
    )
}