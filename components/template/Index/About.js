import React from 'react'
import Image from 'next/image'

function About() {
  
  return (
    
    <>
         
      <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
              {/* <div className="text-center">
                  <p className="text-2xl font-DanaDemiBold text-gray-800 capitalize lg:text-4xl dark:text-white">درباره بِه کافی</p>
                  <p className="max-w-lg text-lg mx-auto mt-4 line-clamp-2 text-gray-500">مجموعه‌ی به کافی به مدیریت مهندس علی رهنما ار سال 1395 شروع به فعالیت کرده است. در ابتدا، این مجموعه با نام قهوه‌ی بلوت و در خیابان انقلاب تهران، راه اندازی شد.</p>
              </div> */}

              <div className='lg:mt-20 lg:mb-10'>
                <Image src="/images/title/product.png" width={600} height={60}/>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                  <div>
                    <Image  className="relative z-10 object-cover w-full rounded-md h-120"  src="/images/cafe-menu-items-sh.jpg" alt="..." width={500} height={300} priority />
                    <div className="relative z-20 w-full text-white p-6 mx-auto -mt-50 bg-white/10 backdrop-blur-md rounded-md shadow dark:bg-gray-900/60 dark:backdrop-blur-md">
                        <a href="#" className="font-DanaDemiBold dark:text-white md:text-2xl"> تجهیزات تخصصی </a>
                        <p className="mt-3 text-sm line-clamp-2 dark:text-gray-300 md:text-base"> و تولید کننده ها تهیه و عرضه کنی در مورد ادوات و تجهیزات دم آوری هم سعی می کنیم از بهترین برند ها و تولید کننده ها تهیه و عرضه کنیم. </p>
                        <p className="mt-3 text-base">14 خرداد ماه 1403</p>
                    </div>
                  </div>

                  <div>
                    <Image className="relative z-10 object-cover w-full rounded-md h-120" src="/images/most-expensive-coffees-sh.jpg" alt="" width={500} height={300} />
                    <div className="relative z-20 w-full text-white p-6 mx-auto -mt-50 bg-white/10 backdrop-blur-md rounded-md shadow dark:bg-gray-900/60 dark:backdrop-blur-md">
                        <a href="#" className="font-DanaDemiBold dark:text-white md:text-2xl">بهترین نژاد های قهوه</a>
                        <p className="mt-3 text-sm line-clamp-2 dark:text-gray-300 md:text-base"> ما چند لاین قهوه ترکیبی که به صورت اختصاصی آماده سازی شده نیز عرضه می کنیماینجا قهوه های سینگل اوریجین با بالاترین تنوع را می توانید امتحان کنید</p>
                        <p className="mt-3 text-smbase">2 مهر ماه 1403</p>
                    </div>
                  </div>
              </div>
          </div>
      </section>

    </>
    
  )
  
}



export default About
