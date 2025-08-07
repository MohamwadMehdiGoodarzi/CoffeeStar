import "../styles/globals.css";
import Image from 'next/image';

export default function App({ Component, pageProps }) {
  return (

      <div dir="rtl" className="dark">
        
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            
            <div className="flex gap-6">
                <div className="flex items-center justify-between">
                <a href="#">
                    <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                </a>
            </div>

            <div className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'] absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                <div className="flex flex-col md:flex-row md:mx-6">
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">صفحه اصلی</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">فروشگاه</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">خدمات</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">مخاطبین</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">درباره ما</a>
                </div>
            </div>
            </div>

            <div className="flex justify-center md:block">
                <a className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                </a>
            </div>

            </div>
        </nav>


        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center">

                    <Image className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"  src="/service-1.jpg" alt="..." width={500} height={300} />

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                        <p className="text-5xl font-semibold text-blue-500 ">“</p>

                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                            Help us improve our productivity
                        </h1>

                        <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                            “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                            tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                            aperiam dolorum, obcaecati corrupti aspernatur a. ”
                        </p>

                        <h3 className="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                        <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>

                        <div className="flex items-center justify-between mt-12 lg:justify-start">
                            <button title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        <Component {...pageProps} />







        <footer className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <p className="font-semibold mb-5 text-gray-800 dark:text-white">درباره ما</p>

                        <p className="max-w-lg text-base tracking-tight text-gray-800 dark:text-gray-300">در باشگاه مشتریان کافی استور، از امتیازاتی که جمع آوری کردی میتوانی کوپن‌های تخفیف یا هدایای رایگان مرتبط با قهوه دریافت کنی! به صفحه کلاب برو و از امتیازات و قوانین کلاب باخبر شو!</p>

                        <p className="text-gray-700 text-sm mt-7">جهت اطلاع از تخفیف ها ایمیل خود را وارد نمایید </p>

                        <div className="flex flex-col mx-auto mt-4 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="ایمیل خود را وارد نمایید .." />
                    
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                ارسال
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">ساعت کاری</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">شنبه تا پنج شنبه</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">7:30 تا 22:00</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">جمعه ها</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">9:30 تا 20:00</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">پشتیبانی</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">HengamCoffeeSupport</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">شماره تماس: ۰۲۱۴۴۰۸۱۸۹۸</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">خرید کیلویی: ۰۹۱۲۳۰۱۹۹۵۹</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">آدزس فروشگاه</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">تهران، خیابان قائم مقام فراهانی، پلاک ۶۴، فروشگاه قهوه آرام</p>
                        </div>
                    </div>

                </div>
                
                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
                
                <div className="flex items-center justify-between flex-wrap gap-6">
                    <a href="#">
                        <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                    </a>

                    <div>
                      <p className="text-white text-sm">تمامی حقوق این وب‌سایت متعلق به قهوه آرام می‌باشد.</p>
                    </div>
                    
                    <div className="flex -mx-2">
                        <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>

                        <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>

                        <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

      </div>





  )
}
