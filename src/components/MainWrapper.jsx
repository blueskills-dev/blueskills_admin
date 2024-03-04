import React from 'react'

export default function MainWrapper(props) {
  return (
    <div className='
        flex-1 
        h-[700px] md:h-screen
        w-full'>
            <div className='
            flex 
            flex-col
            h-[700px] md:h-screen
            gap-4'>
            {props.children}
        </div>
    </div>
  )
}
