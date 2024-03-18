import React from 'react'
import InputBox from '../components/InputBox'

export default function SelectField(
  {title, values, inputAction,  placeholder}) {
  return (
    <div className='fieldset mt-[15px]'>
      <div className='text-lg fontvariation-500 mb-[5px] font-bold'>
        {title}</div>
      <div className='h-[50px]'>
        <div className='w-full h-full bg-gray-100 rounded-[5px] flex flex-row '>
          <select className='w-full bg-transparent p-2
          px-[10px]' placeholder={`${typeof placeholder !== "undefined" ? placeholder : 'Select'}`}
          onChange={(value)=>{
              inputAction(e.target.value)
          }}
          >
            {values.map((this_value, index)=>{
              return(
                <option
                  key={index}
                  value={this_value.value}
                >{this_value.name}</option>
              )})}
          </select>
        </div>
      </div>
    </div>
  )
}
