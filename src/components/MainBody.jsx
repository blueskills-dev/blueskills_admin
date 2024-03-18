import React from 'react'

export default function MainBody(props) {
  return (
    <div className='w-full bg-white rounded-[10px] overflow-auto pb-[50px]'>
          <div className='text-center p-[20px] text-xl fontvariation-500 border-solid border-b-[1px]'>  
              {props.title}
          </div>
          <div>
            <div className='px-[30px] mx-auto mt-[50px] '>
              {props.children}
            </div>
          </div>
        </div>

  )
}