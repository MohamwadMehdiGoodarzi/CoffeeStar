import React from 'react'


function PageHeader() {



  return (

    <>
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
    </>

  )

}



export default PageHeader
