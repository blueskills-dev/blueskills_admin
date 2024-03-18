import React from 'react'

export default function SideBarWidget(props) {
  return (
    <div className='
    flex-none 
    flex
    flex-col
    w-full md:w-[300px] 
    h-[400px] md:h-screen 
    rounded-[10px] 
    bg-white'>
      {props.children}
    </div>
  )
}
