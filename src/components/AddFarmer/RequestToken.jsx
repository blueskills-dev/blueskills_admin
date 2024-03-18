import React from 'react'
import ButtonBox from '../ButtonBox'
import InputField from '../InputField'

export default function RequestToken({gotoNext}) {
  return (
    <div className='max-w-[350px] mx-auto'>

          <InputField
              title="Phone Number" 
              inputAction={(value)=>{
              console.log(value)
              }}  
              type="phone" 
              placeholder="+234 709 876 5432"
          />
        <ButtonBox
          title="Send Token"
          buttonAction={()=>{
            gotoNext()
          }}
        />
    </div>
  )
}
