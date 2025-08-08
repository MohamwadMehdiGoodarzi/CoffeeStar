import React from 'react'



function ServicesItem({ title, desc, img, icon }) {

  return (
    <>
        <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <img src="" alt="" />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-coffee-icon lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
            </span>
            <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-white">{title}</h2>
            <p className="mt-2 text-base text-gray-500 line-clamp-2 dark:text-gray-400">{desc}</p>
        </div>
    </>
  )

}



export default ServicesItem
