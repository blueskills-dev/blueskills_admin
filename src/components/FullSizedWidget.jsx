import React from 'react'

export default function FullSizedWidget(props) {
  return (
    <div className={`
    w-100 
    rounded-[5px]
    h-auto
    flex-1
    flex
    flex-col
    p-[20px]
    overflow-y-auto
    overflow-x-auto"
    ${typeof props.class !== "undefined" ? props.class : 'bg-white'}`}>
      {typeof props.title !== "undefined" && 
        <div className='mb-[20px] fontvariation-600'>
          {props.title} 
        </div>
      }
      {props.children}
    </div>
  )
}
