import React from 'react'
import ButtonBox from './ButtonBox'

export default function OnboardInfo({action, status=2}) {
  return (
    <div className='mx-auto max-w-[350px]'>
      <div className='text-lg fontvariation-400 leading-[30px]'>Capture Selfie</div>
      <div className='text-lg fontvariation-400 leading-[30px]'>Upload ID</div>
      <div className='text-lg fontvariation-400 leading-[30px]'>Upload Bank Statement</div>
      <div className='text-lg fontvariation-400 leading-[30px]'>Upload CAC Document</div>
      <div className='text-lg fontvariation-400 leading-[30px]'>Upload Tax Document</div>
      <ButtonBox
        title="Start"
        status='active'
        buttonAction={()=>{
          console.log('here')
          action(1)
        }}
        ></ButtonBox>
    </div>
  )
}
