import React from 'react'

export default function InputBox({inputAction, inputIcon}) {
  return (
    <div className='w-full h-full bg-gray-100 rounded-[5px] flex flex-row '>
        {typeof inputIcon !== "undefined" &&
            <div className='w-[50px] h-full p-[8px]'>
                <img src={inputIcon} className='w-[25px]' />
            </div>
        }
        <input className='w-full bg-transparent 
        px-[10px]' placeholder='Search'
        onChange={(e)=>{
            inputAction(e.target.value)
        }}
        />
    </div>
  )
}
