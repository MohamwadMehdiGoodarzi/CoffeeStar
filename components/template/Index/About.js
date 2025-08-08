import React from 'react'
import Image from 'next/image'

function About() {
  
  return (
    
    <>
         
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

    </>
    
  )
  
}



export default About
