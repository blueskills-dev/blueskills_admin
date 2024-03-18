import React from 'react'
import ButtonBox from '../ButtonBox'
import InputField from '../InputField'

export default function ConfirmToken({gotoNext}) {
  return (
    <div className='max-w-[350px] mx-auto'>
        <div className='fontvariation-600 text-2xl text-primary'>
          +234 706 6315 488
        </div>
        <InputField
            title="Token" 
            inputAction={(value)=>{
            console.log(value)
            }}  
            type="text" 
            placeholder="111111"
        />
        <ButtonBox
          title="Confirm Token"
          buttonAction={()=>{
            gotoNext()
          }}
        />
    </div>
  )
}
