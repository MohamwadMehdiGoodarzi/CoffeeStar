import React from "react";
import ServicesItem from "/components/module/ServicesItem/ServicesItem";
import Image from "next/image";
function Services({ services }) {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
              <div className='mt-20 mb-10 flex justify-end'>
                <Image src="/images/title/services.png" width={600} height={60}/>
              </div>

          <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServicesItem
                key={service.id}
                title={service.title}
                img={service.img}
                desc={service.desc}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
