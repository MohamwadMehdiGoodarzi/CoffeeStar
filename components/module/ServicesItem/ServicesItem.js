import React from 'react'

function ServicesItem() {

  return (

    <>
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
    </>

  )

}



export default ServicesItem
