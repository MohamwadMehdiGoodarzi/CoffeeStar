import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'



function ServicesItem({ title, desc, img, icon }) {
  return (
    <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
      <span className="inline-block p-3 rounded-lg bg-blue-100/80 text-blue-500 dark:bg-gray-700">
        <FontAwesomeIcon icon={Icons[icon]} className="w-6 h-6" />
      </span>
      <h2 className="mt-4 text-xl font-DanaMedium text-gray-800 dark:text-white">{title}</h2>
      <p className="mt-2 text-base text-gray-500 line-clamp-2 dark:text-gray-400">{desc}</p>
    </div>
  )
}


export default ServicesItem;
