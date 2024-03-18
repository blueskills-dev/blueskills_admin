import React from 'react'

export default function Title(props) {
  return (
    <div className='
              flex-none 
              w-full 
              h-[30px] 
              rounded-[10px]'>
    {props.children}
    </div>
  )
}
