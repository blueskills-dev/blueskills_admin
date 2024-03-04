import React from 'react'

export default function FullSizedWidget(props) {
  return (
    <div className={`
    w-100 
    rounded-[10px]
    h-auto
    flex-1
    flex
    flex-col
    p-[20px]
    overflow-y-auto
    overflow-x-auto 
    ${typeof props.color !== "undefined" ? props.color : 'bg-white'}`}>
      {props.children}
    </div>
  )
}
