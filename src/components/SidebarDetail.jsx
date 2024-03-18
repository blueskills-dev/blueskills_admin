import React from 'react'

export default function SidebarDetail(props) {
  return (
    <div className='w-full h-auto bg-white 
        rounded-[5px] pt-[10px] px-[20px] pb-[30px] 
        relative my-[10px] shadow-md'>
        <div className='fontvariation-600 text-gray-500 text-xs'>{props.subtitle}</div>
        <div className='text-lg fontvariation-600'>{props.title}</div>
        {/* <div className='flex flex-row-reverse absolute bottom-0 left-0 w-full cursor-pointer'>
            <div className='bg-primary hover:bg-secondary 
            px-[15px] py-[5px] 
            rounded-tl-[5px] text-white 
            font-semibold'
            onClick={()=>{
                if(typeof action !== "undefined"){
                  props.action()
                }
            }}
            >More</div>
        </div> */}
        <div>{
          props.children
        }</div>

    </div>
  )
}
