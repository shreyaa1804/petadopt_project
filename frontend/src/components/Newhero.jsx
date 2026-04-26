'use client';
import React from 'react'
import "../app/abc.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Newhero = () => {
  return (


    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide >
        <div className='h-[90vh]  bg-center' style={{ backgroundImage: `url("https://i.pinimg.com/1200x/5e/45/ea/5e45eaa218d4c8fab880c2c0f7ea0856.jpg")` }}>

        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className='h-[90vh] bg-cover bg-center' style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/07/07/71/34/360_F_707713497_APN992nLbsmSmBp86jTD0C51ecNCt1MG.jpg")` }}>

        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className='h-[90vh] bg-cover bg-center' style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/07/07/71/34/360_F_707713497_APN992nLbsmSmBp86jTD0C51ecNCt1MG.jpg")` }}>

        </div>
      </SwiperSlide>
     
     
    </Swiper>

  )
}

export default Newhero