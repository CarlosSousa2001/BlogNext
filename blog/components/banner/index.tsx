import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "swiper/css/navigation";
import "swiper/css/pagination"
import {Autoplay, Pagination } from 'swiper';

const Banner = () => {
    return (
        <div className='p-6'>
            <Swiper autoplay={{delay:1000, disableOnInteraction:false}} pagination={true} loop={true} modules={[Autoplay]} className="w-9/12 h-2/4">
                <SwiperSlide className='font-bold text-2xl text-slate-200'>Blog feito com next</SwiperSlide>
                <SwiperSlide className='font-bold text-2xl text-slate-200'>Apreda a programar</SwiperSlide>
                <SwiperSlide className='font-bold text-2xl text-slate-200'>C++ C# C JAVA PYTHON JAVASCRIT</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner