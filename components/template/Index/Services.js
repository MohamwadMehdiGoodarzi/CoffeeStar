import React from 'react'
import ServicesItem from '/components/module/ServicesItem/ServicesItem'


function Services() {
  
  return (
    
    <>

      <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-12 mx-auto">

              <div>
                  <p className="font-DanaMedium text-xl text-blue-500 dark:text-blue-400">خدمات  ما</p>
                  <p className="mt-2 text-2xl font-DanaDemiBold text-gray-800 dark:text-white">تعهد می‌دهیم که مناسب ترین قیمت را برای شما درنظر گرفته ایم</p>
              </div>

              <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <ServicesItem title="خالص و تازه" desc="محصولات دقیقا قبل از ارسال آسیاب شده تا بهترین طعم در اختیار شما گذاشته شود" icon="faTruck"/>
                <ServicesItem title="خالص و تازه" desc="محصولات دقیقا قبل از ارسال آسیاب شده تا بهترین طعم در اختیار شما گذاشته شود" icon="faAward"/>
                <ServicesItem title="خالص و تازه" desc="محصولات دقیقا قبل از ارسال آسیاب شده تا بهترین طعم در اختیار شما گذاشته شود" icon="faCoffee"/>
                <ServicesItem title="خالص و تازه" desc="محصولات دقیقا قبل از ارسال آسیاب شده تا بهترین طعم در اختیار شما گذاشته شود" icon="faTable"/>
              </div>

          </div>
      </section>

    </>
    
  )
  
}



export default Services
