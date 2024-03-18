import React from 'react'
import InputBox from '../components/InputBox'

export default function InputField({title, inputAction, inputIcon, type, placeholder}) {
  return (
    <div className='fieldset mt-[15px] w-full'>
        <div className='text-lg fontvariation-500 mb-[5px] font-bold'>{title}</div>
        <div className='h-[50px]'>
        <InputBox
            type={type}
            placeholder={placeholder}
            inputIcon={inputIcon}
            inputAction={inputAction}
        ></InputBox>
        </div>
    </div>
  )
}
