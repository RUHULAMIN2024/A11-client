import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
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
        <SwiperSlide className='relative'>
          <img className='w-full h-60 md:h-[500px]' src="https://i.ibb.co/WKCBVpW/1.jpg" alt="image not found" />
          <div className='absolute top-1/2 -translate-y-1/2 text-center  left-1/2 -translate-x-1/2  text-white'>
            <h2 className='text-xl md:text-3xl font-bold mb-5'>Discover the Serenity of Pristine Beaches</h2>
            <p className='hidden md:block'>Welcome to a world of boundless exploration and enchantment! Step into a realm where pristine beaches stretch as far as the eye can see, inviting you to bask in the warmth of the sun</p>
          </div>
        </SwiperSlide >
        
        <SwiperSlide className='relative'>
          <img className='w-full h-60 md:h-[500px]' src="https://i.ibb.co/BTXyMbf/3.jpg" alt="image not found" />
          <div className='absolute top-1/2 -translate-y-1/2 text-center left-1/2 -translate-x-1/2  text-white'>
            <h2 className='text-xl md:text-3xl font-bold mb-5'>Discover the Serenity of Pristine Beaches</h2>
            <p className='hidden md:block'>Welcome to a world of boundless exploration and enchantment! Step into a realm where pristine beaches stretch as far as the eye can see, inviting you to bask in the warmth of the sun</p>
          </div>
          </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='w-full h-60 md:h-[500px]' src="https://i.ibb.co/TwHqbMX/4.jpg" alt="image not found" />
          <div className='absolute top-1/2 -translate-y-1/2 text-center left-1/2 -translate-x-1/2  text-white'>
            <h2 className='text-xl md:text-3xl font-bold mb-5'>Discover the Serenity of Pristine Beaches</h2>
            <p className='hidden md:block'>Welcome to a world of boundless exploration and enchantment! Step into a realm where pristine beaches stretch as far as the eye can see, inviting you to bask in the warmth of the sun</p>
          </div>
          </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='w-full h-60 md:h-[500px]' src="https://i.ibb.co/nQH9TD3/5.jpg" alt="image not found" />
          <div className='absolute top-1/2 -translate-y-1/2 text-center  left-1/2 -translate-x-1/2  text-white'>
            <h2 className='text-xl md:text-3xl  font-bold mb-5'>Discover the Serenity of Pristine Beaches</h2>
            <p className='hidden md:block'>Welcome to a world of boundless exploration and enchantment! Step into a realm where pristine beaches stretch as far as the eye can see, inviting you to bask in the warmth of the sun</p>
          </div>
          </SwiperSlide>
        <SwiperSlide className='relative'>
          <img className='w-full h-60 md:h-[500px]' src="https://i.ibb.co/W0rwM16/6.jpg" alt="image not found" />
          <div className='absolute top-1/2 -translate-y-1/2 text-center left-1/2 -translate-x-1/2  text-white'>
            <h2 className='text-xl md:text-3xl font-bold mb-5'>Discover the Serenity of Pristine Beaches</h2>
            <p className='hidden md:block'>Welcome to a world of boundless exploration and enchantment! Step into a realm where pristine beaches stretch as far as the eye can see, inviting you to bask in the warmth of the sun</p>
          </div>
          </SwiperSlide>

      </Swiper>
    </>
  );
}
