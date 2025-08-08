import "../styles/globals.css";
import Image from 'next/image';
import Footer from "/components/template/index/Footer";
import Header from "/components/template/index/Header";

export default function App({ Component, pageProps }) {
  return (

      <div dir="rtl">

        
        <Header /> 


        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:-mx-6 lg:flex lg:items-center">

                    <Image className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-104"  src="/images/service-1.jpg" alt="..." width={500} height={300} priority />

                    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                        <p className="text-5xl font-semibold text-blue-500 ">“</p>

                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl lg:w-full">
                            انواع قـهوه عربیکا و روبوستا و مواد اولیه کافـی شاپ
                        </h1>

                        <p className="max-w-lg text-lg mt-6 text-gray-500 dark:text-gray-400 ">
                          Genio یک روستر قهوه تخصصی 15 کیلوگرمی است که برای برشته‌کاری‌هایی ایده‌آل است که برای همگام شدن با تجارت در حال گسترش خود به ظرفیت تولید بیشتری نیاز دارند. پایداری کامل دارد و می تواند 60 کیلوگرم قهوه را در ساعت برشته کند. 
                        </p>

                        <h3 className="mt-6 text-xl font-medium text-blue-500">فروشگاه و رُستری قهوه به کافی</h3>
                        <p className="text-gray-600 text-lg dark:text-gray-300"> مرجع تخصصی فروش انواع قهوه های سینگل اوریجین و پودرهای فوری </p>

                        <div className="flex items-center justify-between mt-12 lg:justify-start">
                            <button title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:text-white hover:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 **:hover:text-white hover:bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">درباره بِه کافی</h1>

                    <p className="max-w-lg mx-auto mt-4 line-clamp-2 text-gray-500">مجموعه‌ی به کافی به مدیریت مهندس علی رهنما ار سال 1395 شروع به فعالیت کرده است. در ابتدا، این مجموعه با نام قهوه‌ی بلوت و در خیابان انقلاب تهران، راه اندازی شد.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                    <div>
                        <Image  className="relative z-10 object-cover w-full rounded-md h-96"  src="/images/coffee-shop-setup-advice-2.jpg" alt="..." width={500} height={300} priority />
                        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white transition-all duration-75 hover:outline-3 hover:outline-blue-600  rounded-md shadow dark:bg-gray-900">
                            <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">تجهیزات تخصصی</a>
                            <p className="mt-3 text-sm text-gray-500 line-clamp-2 dark:text-gray-300 md:text-sm">در مورد ادوات و تجهیزات دم آوری هم سعی می کنیم از بهترین برند ها و تولید کننده ها تهیه و عرضه کنیم.</p>
                            <p className="mt-3 text-sm text-blue-500">14 خرداد ماه 1403</p>
                        </div>
                    </div>

                    <div>
                    <Image className="relative z-10 object-cover w-full rounded-md h-96" src="/images/images.jpg" alt="" width={500} height={300} />
                        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white transition-all duration-75 hover:outline-3 hover:outline-blue-600 rounded-md shadow dark:bg-gray-900">
                            <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">بهترین نژاد های قهوه</a>
                            <p className="mt-3 text-sm line-clamp-2 text-gray-500 dark:text-gray-300 md:text-sm"> ما چند لاین قهوه ترکیبی که به صورت اختصاصی آماده سازی شده نیز عرضه می کنیماینجا قهوه های سینگل اوریجین با بالاترین تنوع را می توانید امتحان کنید</p>
                            <p className="mt-3 text-sm text-blue-500">2 مهر ماه 1403</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">منو و قیمت گذاری</h1>

                    <p className="max-w-lg mx-auto mt-4 line-clamp-2 text-gray-500">مجموعه‌ی به کافی به مدیریت مهندس علی رهنما ار سال 1395 شروع به فعالیت کرده است. در ابتدا، این مجموعه با نام قهوه‌ی بلوت و در خیابان انقلاب تهران، راه اندازی شد.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    <div className="flex-col lg:flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover w-full object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div className="p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">قهوه روبوستا</h1>
                            <p className="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">بهتر است بدانید قیمت قهوه روبوستا بسته به کیفیت، برند و نوع فرآوری و رست آن متفاوت می‌باشد.</p>
                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200">225,000 تومان</h1>
                                <button className="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>

                    </div>

                    <div className="flex-col lg:flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover w-full object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div className="p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">قهوه روبوستا</h1>
                            <p className="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">بهتر است بدانید قیمت قهوه روبوستا بسته به کیفیت، برند و نوع فرآوری و رست آن متفاوت می‌باشد.</p>
                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200">225,000 تومان</h1>
                                <button className="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col lg:flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover w-full object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div className="p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">قهوه روبوستا</h1>
                            <p className="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">بهتر است بدانید قیمت قهوه روبوستا بسته به کیفیت، برند و نوع فرآوری و رست آن متفاوت می‌باشد.</p>
                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200">225,000 تومان</h1>
                                <button className="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col lg:flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover w-full object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div className="p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">قهوه روبوستا</h1>
                            <p className="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">بهتر است بدانید قیمت قهوه روبوستا بسته به کیفیت، برند و نوع فرآوری و رست آن متفاوت می‌باشد.</p>
                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200">225,000 تومان</h1>
                                <button className="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col lg:flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover w-full object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div className="p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">قهوه روبوستا</h1>
                            <p className="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">بهتر است بدانید قیمت قهوه روبوستا بسته به کیفیت، برند و نوع فرآوری و رست آن متفاوت می‌باشد.</p>
                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200">225,000 تومان</h1>
                                <button className="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col lg:flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover w-full object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div className="p-4 md:p-4">
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">قهوه روبوستا</h1>
                            <p className="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">بهتر است بدانید قیمت قهوه روبوستا بسته به کیفیت، برند و نوع فرآوری و رست آن متفاوت می‌باشد.</p>
                            <div className="flex justify-between mt-3 item-center">
                                <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200">225,000 تومان</h1>
                                <button className="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div>
                    <p className="font-medium text-blue-500 dark:text-blue-400">خدمات  ما</p>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">تعهد می‌دهیم که مناسب ترین قیمت را برای شما درنظر گرفته ایم</h1>

                    <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-coffee-icon lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
                        </span>

                        <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-white">خالص و تازه</h2>
                        <p className="mt-2 text-base text-gray-500 line-clamp-2 dark:text-gray-400">محصولات دقیقا قبل از ارسال آسیاب شده تا بهترین طعم در اختیار شما گذاشته شود.</p>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                        </span>
                        
                        <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-white">ارسال رایگان</h2>
                        <p className="mt-2 text-base text-gray-500 line-clamp-2 dark:text-gray-400">ارسال سریع و رایگان به سراسر تهران (سفارشات بالای ۲،۵۰۰،۰۰۰ تومان)</p>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                        </span>
                        
                        <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-white">گارانتی بهترین قیمت</h2>
                        <p className="mt-2 text-base text-gray-500 line-clamp-2 dark:text-gray-400">تعهد می‌دهیم که مناسب ترین قیمت را برای شما درنظر گرفته ایم.</p>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                        <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-list-check-icon lucide-list-check"><path d="M11 18H3"/><path d="m15 18 2 2 4-4"/><path d="M16 12H3"/><path d="M16 6H3"/></svg>
                        </span>
                        <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-white">برشته شده در ایران</h2>
                        <p className="mt-2 text-base text-gray-500 line-clamp-2 dark:text-gray-400">قهوه ای منحصر به فرد و تهیه شده در ایران مناسب با ذائقه ایرانی</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">مشتری های ما</h1>
                <p className="max-w-2xl mx-auto my-6 text-center line-clamp-2 text-gray-500 dark:text-gray-300">اگر به دنبال یک خرید آنلاین راحت قهوه یا اکسسوری آن هستید، ما به شما قهوه واکا را پیشنهاد می‌کنیم. در فروشگاه ما انواع دان قهوه عربیکا و روبوستا و انواع تجهیزات قهوه مانند فیلتر و کپسول موجود هستند که می‌توانید به راحتی سفارش دهید و قهوه خود را در درب منزل دریافت کنید</p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">

                    <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">زیبا رحمتی</h1>
                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">کاربر</p>
                            </div>
                        </div>
                        <p className="mt-4 line-clamp-3 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">قهوه واکا یکی از بهترین برندهای قهوه در تهران است که با ۶ شعبه در تهران مرغوب‌ترین قهوه‌ها را عرضه می‌کند. اگر به دنبال قهوه فروشی معتبر و با اصالت می‌گردید بدون شک قهوه واکا بهترین انتخاب شما است. قهوه واکا فروشگاه انواع دان و پودر قهوه های فوری و ترکیبی، انواع نوشیدنی‌های قهوه و همچنین انواع لوازم جانبی قهوه و دستگاه های مرتبط با آن است.</p>
                    </div>

                    <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">امیر یاوری</h1>
                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">کاربر</p>
                            </div>
                        </div>
                        <p className="mt-4 line-clamp-3 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">قهوه واکا یکی از بهترین برندهای قهوه در تهران است که با ۶ شعبه در تهران مرغوب‌ترین قهوه‌ها را عرضه می‌کند. اگر به دنبال قهوه فروشی معتبر و با اصالت می‌گردید بدون شک قهوه واکا بهترین انتخاب شما است. قهوه واکا فروشگاه انواع دان و پودر قهوه های فوری و ترکیبی، انواع نوشیدنی‌های قهوه و همچنین انواع لوازم جانبی قهوه و دستگاه های مرتبط با آن است.</p>
                    </div>

                    <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">سارا محمدی</h1>
                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">کاربر</p>
                            </div>
                        </div>
                        <p className="mt-4 line-clamp-3 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">قهوه واکا یکی از بهترین برندهای قهوه در تهران است که با ۶ شعبه در تهران مرغوب‌ترین قهوه‌ها را عرضه می‌کند. اگر به دنبال قهوه فروشی معتبر و با اصالت می‌گردید بدون شک قهوه واکا بهترین انتخاب شما است. قهوه واکا فروشگاه انواع دان و پودر قهوه های فوری و ترکیبی، انواع نوشیدنی‌های قهوه و همچنین انواع لوازم جانبی قهوه و دستگاه های مرتبط با آن است.</p>
                    </div>

                    <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">بهنوش آقایی</h1>
                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">کاربر</p>
                            </div>
                        </div>
                        <p className="mt-4 line-clamp-3 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">قهوه واکا یکی از بهترین برندهای قهوه در تهران است که با ۶ شعبه در تهران مرغوب‌ترین قهوه‌ها را عرضه می‌کند. اگر به دنبال قهوه فروشی معتبر و با اصالت می‌گردید بدون شک قهوه واکا بهترین انتخاب شما است. قهوه واکا فروشگاه انواع دان و پودر قهوه های فوری و ترکیبی، انواع نوشیدنی‌های قهوه و همچنین انواع لوازم جانبی قهوه و دستگاه های مرتبط با آن است.</p>
                    </div>

                </div>
            </div>
        </section>

        <Component {...pageProps} />

        <div className="flex items-center justify-between">
            <div className="w-80 h-1 mx-auto bg-emerald-500 my-20"></div>
            <h3 className="text-7xl font-extrabold text-black">FOOTER</h3>
            <div className="w-80 h-1 mx-auto bg-emerald-500 my-20"></div>
        </div>

        <Footer /> 


      </div>





  )
}
