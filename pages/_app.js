import "../styles/globals.css";
import Image from 'next/image';

export default function App({ Component, pageProps }) {
  return (

      <div dir="rtl">

        
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
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">تماس با ما</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">درباره ما</a>
                </div>
            </div>
            </div>

            <div className="flex justify-center md:block">
                <a className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                            <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">تجهیزات تخصصی</a>
                            <p className="mt-3 text-sm text-gray-500 line-clamp-2 dark:text-gray-300 md:text-sm">در مورد ادوات و تجهیزات دم آوری هم سعی می کنیم از بهترین برند ها و تولید کننده ها تهیه و عرضه کنیم.</p>
                            <p className="mt-3 text-sm text-blue-500">14 خرداد ماه 1403</p>
                        </div>
                    </div>

                    <div>
                    <Image className="relative z-10 object-cover w-full rounded-md h-96" src="/images/images.jpg" alt="" width={500} height={300} />
                        {/* <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" /> */}

                        <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                            <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">بهترین نژاد های قهوه</a>

                            <p className="mt-3 text-sm line-clamp-2 text-gray-500 dark:text-gray-300 md:text-sm"> ما چند لاین قهوه ترکیبی که به صورت اختصاصی آماده سازی شده نیز عرضه می کنیماینجا قهوه های سینگل اوریجین با بالاترین تنوع را می توانید امتحان کنید</p>

                            <p className="mt-3 text-sm text-blue-500">2 مهر ماه 1403</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <div>
                    <p class="font-medium text-blue-500 dark:text-blue-400">خدمات  ما</p>

                    <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">تعهد می‌دهیم که مناسب ترین قیمت را برای شما درنظر گرفته ایم</h1>

                    <p class="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
                </div>

                <div class="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                        <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee-icon lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
                        </span>

                        <h2 class="mt-4 text-xl font-medium text-gray-800 dark:text-white">خالص و تازه</h2>
                        <p class="mt-2 text-base text-gray-500 line-clamp-2 dark:text-gray-400">محصولات دقیقا قبل از ارسال آسیاب شده تا بهترین طعم در اختیار شما گذاشته شود.</p>
                    </div>

                    <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                        <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                        </span>
                        
                        <h2 class="mt-4 text-xl font-medium text-gray-800 dark:text-white">ارسال رایگان</h2>
                        <p class="mt-2 text-base text-gray-500 line-clamp-2 dark:text-gray-400">ارسال سریع و رایگان به سراسر تهران (سفارشات بالای ۲،۵۰۰،۰۰۰ تومان)</p>
                    </div>

                    <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                        <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                        </span>
                        
                        <h2 class="mt-4 text-xl font-medium text-gray-800 dark:text-white">گارانتی بهترین قیمت</h2>
                        <p class="mt-2 text-base text-gray-500 line-clamp-2 dark:text-gray-400">تعهد می‌دهیم که مناسب ترین قیمت را برای شما درنظر گرفته ایم.</p>
                    </div>

                    <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                        <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-check-icon lucide-list-check"><path d="M11 18H3"/><path d="m15 18 2 2 4-4"/><path d="M16 12H3"/><path d="M16 6H3"/></svg>
                        </span>
                        <h2 class="mt-4 text-xl font-medium text-gray-800 dark:text-white">برشته شده در ایران</h2>
                        <p class="mt-2 text-base text-gray-500 line-clamp-2 dark:text-gray-400">قهوه ای منحصر به فرد و تهیه شده در ایران مناسب با ذائقه ایرانی</p>
                    </div>
                </div>
            </div>
        </section>



        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">

                    <div class="flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div class="p-4 md:p-4">
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">قهوه روبوستا</h1>
                            <p class="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">بهتر است بدانید قیمت قهوه روبوستا بسته به کیفیت، برند و نوع فرآوری و رست آن متفاوت می‌باشد.</p>
                            <div class="flex justify-between mt-3 item-center">
                                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200">225,000 تومان</h1>
                                <button class="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>

                    </div>

                    <div class="flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div class="p-4 md:p-4">
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">قهوه ترک</h1>
                            <p class="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">خرید پودر قهوه ترک اصل | طعم اصیل، کیفیت بی‌نظیر!</p>
                            <div class="flex justify-between mt-3 item-center">
                                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200">178,000 تومان</h1>
                                <button class="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>
                    </div>

                    <div class="flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div class="p-4 md:p-4">
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">قهوه سبز</h1>
                            <p class="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">قهوه سبز یکی از سالم‌ترین و طبیعی‌ترین نوشیدنی‌هاست که می‌تواند بخشی از سبک زندگی سالم شما باشد.</p>
                            <div class="flex justify-between mt-3 item-center">
                                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200">310,000 تومان</h1>
                                <button class="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>
                    </div>

                    <div class="flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div class="p-4 md:p-4">
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">قهوه عمده</h1>
                            <p class="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">همین طور که حتما میدونید هیچ قهوه ای بد نیست البته اگر تازه باشه! فقط باید قهوه ای رو بیابید که طعم و ویژگی های</p>
                            <div class="flex justify-between mt-3 item-center">
                                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200">310,000 تومان</h1>
                                <button class="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>
                    </div>

                    <div class="flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div class="p-4 md:p-4">
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">قهوه برزیلی</h1>
                            <p class="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">کل ایران… برای خرید قهوه شک نکن! از بین این همه محصول جذاب “تو فقط انتخاب کن”</p>
                            <div class="flex justify-between mt-3 item-center">
                                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200">310,000 تومان</h1>
                                <button class="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>
                    </div>

                    <div class="flex overflow-hidden gap-10 bg-white rounded-lg shadow-lg p-2 dark:bg-gray-800">
                        <Image className="object-cover object-center rounded-lg"  src="/images/service-1.jpg" alt="..." width={160} height={160}/>
                        <div class="p-4 md:p-4">
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">قهوه کلمبیایی</h1>
                            <p class="my-5 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">توی این بخش تعدادی گیفت جذاب، فانتزی، یا کاربردی برای قهوه نوش ها و عاشقان قهوه تدارک دیدیم. میتونید با امتیازهای باشگاه این گیفت های کاربردی رو رایگان دریافت کنید </p>
                            <div class="flex justify-between mt-3 item-center">
                                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200">310,000 تومان</h1>
                                <button class="px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">خرید</button>
                            </div>
                        </div>
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


        <footer className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">

                    <div className="sm:col-span-2">
                        <p className="font-semibold text-2xl mb-5 text-gray-800 dark:text-white">درباره ما</p>
                        <p className="max-w-lg text-base tracking-tight text-gray-800 dark:text-gray-300">مجموعه‌ی به کافی به مدیریت مهندس علی رهنما ار سال 1395 شروع به فعالیت کرده است. در ابتدا، این مجموعه با نام قهوه‌ی بلوت و در خیابان انقلاب تهران، راه اندازی شد.با هدف افزایش کیفیت و کاهش قیمت، در بهار سال 97 تولیدی قهوه به کافی نیز راه اندازی گردید و پس از آن بنا به تشخیص هیات مدیره، نام فروشگاه بلوت، به فروشگاه به کافی تغییر یافت.</p>
                        <p className="text-gray-700 text-sm mt-7">جهت اطلاع از تخفیف ها ایمیل خود را وارد نمایید </p>

                        <div className="flex flex-col mx-auto mt-4 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="ایمیل خود را وارد نمایید .." />
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                ارسال
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-2xl text-gray-800 dark:text-white">ساعت کاری</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">شنبه تا پنج شنبه</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">7:30 تا 22:00</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">جمعه ها</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">9:30 تا 20:00</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-2xl text-gray-800 dark:text-white">پشتیبانی</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">HengamCoffeeSupport</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500"> تماس : ۰۲۱۴۴۰۸۱۸۹۸</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">خرید عمده : ۰۹۱۲۳۰۱۹۹۵۹</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-2xl text-gray-800 dark:text-white">دسترسی سریع</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">ثبت شکایات</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">حفظ حریم شخصی</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">شرایط و قوانین</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-2xl text-gray-800 dark:text-white">آدزس فروشگاه</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors  dark:text-gray-300 ">تهران، سهروردی شمالی، نرسیده به خیابان بهشتی، خیابان میرزای زینالی غربی، پلاک 101، طبقه اول، واحد 3</p>
                        </div>
                    </div>

                </div>
                
                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
                
                <div className="flex items-center justify-between flex-wrap gap-6">
                    <a href="#">
                        <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                    </a>

                    <div>
                      <p className="text-gray-700 text-base">تمامی حقوق این وب‌سایت متعلق به قهوه آرام می‌باشد.</p>
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
