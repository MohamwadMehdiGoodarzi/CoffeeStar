import Navbar from "../components/module/Navbar/Navbar";
import "../styles/globals.css";
import Image from 'next/image';

export default function App({ Component, pageProps }) {
  return (
    <div dir="rtl">


        <Navbar />




        {/* <section className="bg-white dark:bg-gray-900">
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
        </section> */}

        <Component {...pageProps} />















    </div>
  )
}
