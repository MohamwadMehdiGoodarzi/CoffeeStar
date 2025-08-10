import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // بستن منو وقتی کلیک بیرون شد
  useEffect(() => {
    function handleClickOutside(event) {
      if ( isOpen && menuRef.current && !menuRef.current.contains(event.target) ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {document.removeEventListener("mousedown", handleClickOutside)};
  }, [isOpen]);


  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800 relative z-50">
        <div className="max-w-5xl xl:max-w-7xl mx-auto px-4 py-1.5 md:py-3 flex items-center justify-between">
          {/* دکمه همبرگری فقط زیر 1024 */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-700 dark:text-gray-200" aria-label="Toggle menu" >
            {isOpen ? ( <XMarkIcon className="w-6 h-6" /> ) : ( <Bars3Icon className="w-6 h-6" /> )}
          </button>

          {/* لوگو وسط */}
          <Link href="/" className="mx-auto lg:mr-0 lg:ml-10">
            <Image src="/images/coffeelog.png" alt="لوگو" width={60} height={60} />
          </Link>

          {/* آیکون سبد خرید در موبایل */}
          <button className="lg:hidden relative flex items-center justify-center text-gray-700 dark:text-gray-200" aria-label="سبد خرید" >
            <ShoppingCartIcon className="w-6 h-6" />
          </button>

          {/* بالای 1024: منو اصلی */}
          <div className="hidden lg:flex lg:items-center ml-auto lg:space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400" >
              صفحه اصلی
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400" >
              فروشگاه
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400" >
              خدمات
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400" >
              تماس با ما
            </Link>
            <Link href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400" >
              درباره ما
            </Link>
          </div>

          {/* بالای 1024: سبد خرید + تم + ورود */}
          <div className="hidden lg:flex lg:items-center lg:space-x-5">

            <button className="relative flex items-center justify-center size-12 text-gray-700 dark:text-gray-200" aria-label="سبد خرید" >
              <ShoppingCartIcon className="w-6 h-6" />
            </button>

            <ThemeToggle />

            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl flex items-center gap-2">
              ورود / عضویت
              <UserIcon className="w-6 h-6"/>
            </button>

          </div>

        </div>

        {/* منوی همبرگری موبایل */}
        <div ref={menuRef}
          className={`fixed top-0 right-0 h-full w-3/4 max-w-64 inset-shadow-sm inset-shadow-blue-500 bg-gray-100 dark:bg-gray-800 p-6 transition-transform duration-300 z-50 lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`} style={{ direction: "rtl" }} onClick={(e) => e.stopPropagation()} >

          {/* دکمه بستن */}
          <button onClick={() => setIsOpen(false)} className="mb-6 text-gray-700 dark:text-gray-200 focus:outline-none" aria-label="Close menu" >
            <XMarkIcon className="w-6 h-6" />
          </button>

          {/* دکمه ورود + تم */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <button className="flex items-center justify-between w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl">
              ورود و ثبت نام
              <UserIcon className="w-5 h-5" />
            </button>
            <ThemeToggle />
          </div>

          {/* لینک‌های منو */}
          <nav className="flex flex-col gap-4 text-gray-700 dark:text-gray-200">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-500" >
              صفحه اصلی
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-blue-500" >
              فروشگاه
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-blue-500" >
              خدمات
            </Link>
            <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-blue-500" >
              تماس با ما
            </Link>
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-500" >
              درباره ما
            </Link>
          </nav>
        </div>

      </nav>

      {/* Overlay وقتی منو باز است */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/10 bg-opacity-50 backdrop-blur-xs z-40 lg:hidden" ></div>
      )}
    </>
  );
}

export default Navbar;
