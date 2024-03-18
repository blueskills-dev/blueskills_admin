import React from 'react'

export default function InputTextBox({inputAction, inputIcon, placeholder}) {
  return (
    <div className='w-full h-full bg-gray-100 rounded-[5px] flex flex-row '>
        {typeof inputIcon !== "undefined" &&
            <div className='w-[50px] h-full p-[8px]'>
                <img src={inputIcon} className='w-[25px]' />
            </div>
        }
        <textarea className='w-full bg-transparent p-2
        px-[10px]' placeholder={`${typeof placeholder !== "undefined" ? placeholder : 'Search'}`}
        onChange={(value)=>{
            inputAction(e.target.value)
        }}
        ></textarea>
    </div>
  )
}
