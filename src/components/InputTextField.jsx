import React from 'react'
import InputTextBox from './InputTextBox'

export default function InputTextField({title, inputAction, inputIcon, placeholder}) {
  return (
    <div className='fieldset mt-[15px]'>
        <div className='text-lg fontvariation-500 mb-[5px] font-bold'>{title}</div>
        <div className='h-[70px]'>
        <InputTextBox
            placeholder={placeholder}
            inputIcon={inputIcon}
            inputAction={inputAction}
        ></InputTextBox>
        </div>
    </div>
  )
}
