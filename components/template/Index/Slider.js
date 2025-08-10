import React from "react";
import Image from "next/image";

function Slider() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:container mx-auto lg:px-4">
        {/* تصویر موبایل - فقط نمایش در صفحه‌های کوچک */}
        <Image
          className="block md:hidden w-full h-auto mx-auto object-contain"
          src="/images/turkish-coffee-s.jpg"  // عکس مخصوص موبایل
          alt="لوگو موبایل"
          width={768}
          height={400}
        />

        {/* تصویر دسکتاپ - فقط نمایش در صفحه‌های بزرگ */}
        <Image
          className="hidden md:block w-full h-auto mx-auto object-cover"
          src="/images/cover-1.webp"
          alt="لوگو دسکتاپ"
          width={1280}
          height={500}
        />
      </div>
    </section>
  );
}

export default Slider;




