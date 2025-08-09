import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-12 mx-auto">

              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">

                  <div className="sm:col-span-2">
                      <p className="font-DanaMedium text-2xl mb-5 text-gray-800 dark:text-white">درباره ما</p>
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
                      <p className="font-DanaMedium text-2xl text-gray-800 dark:text-white">ساعت کاری</p>
                      <div className="flex flex-col items-start mt-5 space-y-2">
                          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">شنبه تا پنج شنبه</p>
                          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">7:30 تا 22:00</p>
                          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">جمعه ها</p>
                          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">9:30 تا 20:00</p>
                      </div>
                  </div>

                  <div>
                      <p className="font-DanaMedium text-2xl text-gray-800 dark:text-white">پشتیبانی</p>
                      <div className="flex flex-col items-start mt-5 space-y-2">
                          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">HengamCoffeeSupport</p>
                          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500"> تماس : ۰۲۱۴۴۰۸۱۸۹۸</p>
                          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">خرید عمده : ۰۹۱۲۳۰۱۹۹۵۹</p>
                      </div>
                  </div>

                  <div>
                      <p className="font-DanaMedium text-2xl text-gray-800 dark:text-white">دسترسی سریع</p>
                      <div className="flex flex-col items-start mt-5 space-y-2">
                          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">ثبت شکایات</p>
                          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">حفظ حریم شخصی</p>
                          <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer hover:text-blue-500">شرایط و قوانین</p>
                      </div>
                  </div>

                  <div>
                      <p className="font-DanaMedium text-2xl text-gray-800 dark:text-white">آدرس فروشگاه</p>
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
                    <p className="text-gray-700 font-DanaMedium text-base">تمامی حقوق این وب‌سایت متعلق به قهوه آرام می‌باشد.</p>
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
    </>
  )
}

export default Footer;