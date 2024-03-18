import React from 'react'

export default function AnalyticsWidget({title, subtitle}) {
  return (
    <div className='
    w-full md:w-1/3 
    flex-none
    h-[100px]
    rounded-[5px]
    bg-white
    p-[20px]
    text-left
    shadow-sm
    '
    >
      <div className='fontvariation-400 text-sm md:text-md'>{title}</div>
      <div className='fontvariation-600 text-md md:text-3xl'>{subtitle}</div>
    </div>
  )
}
