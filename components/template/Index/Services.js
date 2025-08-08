import React from 'react'
import ServicesItem from '/components/module/ServicesItem/ServicesItem'


function Services() {
  
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
                <ServicesItem title="خالص و تازه" desc="محصولات دقیقا قبل از ارسال آسیاب شده تا بهترین طعم در اختیار شما گذاشته شود" icon=""/>
                <ServicesItem title="خالص و تازه" desc="محصولات دقیقا قبل از ارسال آسیاب شده تا بهترین طعم در اختیار شما گذاشته شود" icon=""/>
                <ServicesItem title="خالص و تازه" desc="محصولات دقیقا قبل از ارسال آسیاب شده تا بهترین طعم در اختیار شما گذاشته شود" icon=""/>
                <ServicesItem title="خالص و تازه" desc="محصولات دقیقا قبل از ارسال آسیاب شده تا بهترین طعم در اختیار شما گذاشته شود" icon=""/>
              </div>

          </div>
      </section>

    </>
    
  )
  
}



export default Services
