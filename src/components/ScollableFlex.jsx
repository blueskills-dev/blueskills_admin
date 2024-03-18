import React from 'react'

export default function ScollableFlex(props) {
  return (
    <div className='
    overflow-x-auto
    w-full
    '>
        <div className='
        flex-none 
        flex gap-2 
        w-100
        m-auto
        h-[100px]
        pb-[10px]
        pr-[17px]
        '>
            {props.children}
        </div>
    </div>
  )
}
