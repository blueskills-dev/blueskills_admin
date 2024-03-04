import React from 'react'

export default function AnalyticsWidget({title, subtitle}) {
  return (
    <div className='
    w-full md:w-1/3 
    flex-none
    h-[100px]
    rounded-[10px]
    bg-white
    p-[20px]
    text-left
    '
    >
      <div className='saira-300 text-sm md:text-md'>{title}</div>
      <div className='saira-600 text-md md:text-lg'>{subtitle}</div>
    </div>
  )
}
