"use client"; // اگر در Next.js هستی حتماً اضافه کن

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);
  useEffect(() => {
    setNavigationReady(true);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container md:px-6 md:py-7 mx-auto">
        <div className="lg:flex lg:items-center lg:gap-10">
          <div className="w-full lg:w-1/2 h-64 md:h-104 relative">

            {navigationReady && (
              <Swiper loop={true} modules={[Autoplay,Navigation]} navigation={{ prevEl: prevRef.current, nextEl: nextRef.current, }}  autoplay={{ delay: 2800, disableOnInteraction: false }} onBeforeInit={(swiper) => { swiper.params.navigation.prevEl = prevRef.current; swiper.params.navigation.nextEl = nextRef.current; }} className="h-full">
                <SwiperSlide style={{ backgroundImage: 'url("/images/coffee-shop-setup-advice-2.JPG")', backgroundSize: "cover",width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", }} ></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url("/images/turkish-coffee-s.JPG")',backgroundSize: "cover",width: "100%", height: "100%",  backgroundRepeat: "no-repeat", backgroundPosition: "center", }} ></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url("/images/cold-coffee-n.JPG")', backgroundSize: "cover",width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", }} ></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url("/images/images.JPG")', backgroundSize: "cover",width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", }} ></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url("/images/service-1.JPG")', backgroundSize: "cover",width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", }} ></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: 'url("/images/most-expensive-coffees-sh.JPG")', backgroundSize: "cover",width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", }} ></SwiperSlide>
              </Swiper>
            )}

            <button ref={nextRef} aria-label="Previous Slide" title="left arrow" className="absolute top-85 left-2 z-10 p-2 text-white transition-colors duration-300 border rounded-full dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:text-white hover:bg-blue-500 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button ref={prevRef} aria-label="Next Slide" title="right arrow" className="absolute top-85 right-2 z-10 p-2 text-white transition-colors duration-300 border rounded-full dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:text-white hover:bg-blue-500 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0 px-2.5 md:px-0">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl"> انواع قـهوه عربیکا و روبوستا و مواد اولیه کافـی شاپ </h1>
            <p className="max-w-lg text-lg mt-6 text-gray-500 dark:text-gray-400"> Genio یک روستر قهوه تخصصی 15 کیلوگرمی است که برای برشته‌کاری‌هایی ایده‌آل است که برای همگام شدن با تجارت در حال گسترش خود به ظرفیت تولید بیشتری نیاز دارند. پایداری کامل دارد و می تواند 60 کیلوگرم قهوه را در ساعت برشته کند. </p>
            <h3 className="mt-6 text-xl font-medium text-blue-500">فروشگاه و رُستری قهوه به کافی</h3>
            <p className="text-gray-600 text-lg dark:text-gray-300"> مرجع تخصصی فروش انواع قهوه های سینگل اوریجین و پودرهای فوری </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;



