import React from 'react'

export default function HarvestSlides(props) {
  return (
    <div className='w-100 h-auto bg-white text-left py-[10px] px-[20px] rounded-[5px]'>
        <div className='fontvariation-300 text-sm md:text-sm'>{props.title}</div>
        <div className='fontvariation-600 text-md md:text-md'>{props.value}</div>
    </div>
  )
}
