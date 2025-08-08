import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import Image from 'next/image';



function slider() {
  
  return (

    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


        <SwiperSlide>
          <Image className='h-104' src="/images/cold-coffee-n.jpg" alt="..." width={1380} height={300} priority />
        </SwiperSlide>

        <SwiperSlide>
          <Image className='h-104' src="/images/filter-coffee-m.jpg" alt="..." width={1380} height={300} priority />
        </SwiperSlide>


      </Swiper>
    </>
    
  )
  
}






export default slider
