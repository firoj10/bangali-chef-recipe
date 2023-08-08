import img1 from './../../assets/bannar/w1.jpg'
import img2 from './../../assets/bannar/w2.jpg'
import img3 from './../../assets/bannar/w3.jpg'
import img4 from './../../assets/bannar/w4.jpg'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';




 const TopSlider=()=> {

   return (
    <>
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" className='d-block w-100' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt=""  className='d-block w-100'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className='d-block w-100'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" className='d-block w-100'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" className='d-block w-100'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default TopSlider 