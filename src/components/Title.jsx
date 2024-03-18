import React from 'react'

export default function Title(props) {
  return (
    <div className='
              flex-none
              flex
              flex-row
              w-full'>

    {typeof props.back !== "undefined" 
    && <div className='w-[70px] h-[25px] text-white text-center
    bg-gray-600 hover:bg-gray-500 rounded-[15px] mr-[15px] 
    text-md py-[3px] cursor-pointer'   
    onClick={props.back}
    >Back</div> }

    {typeof props.title !== "undefined" &&
      <div className='text-sm md:text-xl
      mt-[3px] font-semibold text-gray-800'>{props.title}</div>
    }

    </div>
  )
}
