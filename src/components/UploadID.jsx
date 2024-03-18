import React, { useState } from 'react'
import { useEffect } from 'react'
import UploadFile from './UploadFile'

export default function UploadID({gotoNext, currentStep}) {
  
  const [idType, setIdType] = useState('')
  useEffect(()=>{

  },[])
  return (
    <div className='w-[350px] mx-auto mt-[30px]'>
      <select 
      className='w-full h-[40px] rounded-[5px] 
      bg-gray-200 px-[10px]'
      onChange={(e)=>setIdType(e.target.value)}
      defaultValue=''
      >
        <option value='' disabled>Select ID type</option>
        <option value='passport'>International Passport</option>
        <option value='drivers_license'>Drivers License</option>
        <option value='nin'>NIN</option>
      </select>
      <UploadFile 
        currentStep={currentStep}
        gotoNext={(file)=>{
            gotoNext()
        }}
        ready={idType !== '' ? true : false}
      />
    </div>
  )
}
