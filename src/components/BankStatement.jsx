import React, { useState } from 'react'
import ButtonBox from './ButtonBox'
import bank from '../assets/bank.png'

export default function BankStatement({gotoNext}) {
  const [status, setStatus] = useState(1)
  const gotomono = () =>{
    console.log('here')
    gotoNext()
  }
  return (
    <div className='w-[350px] mx-auto mt-[30px] '>
        <div className='h-[200px] w-full rounded-[5px] bg-gray-300'>
            <img src={bank} className="w-full h-full object-cover rounded-[5px]" />
        </div>
        <div
        className='bg-secondary hover:bg-primary 
        mt-[20px] rounded-[5px] cursor-pointer 
        text-white saira-600 p-[10px] text-center' 
        onClick={()=>{
          console.log("this")
          gotomono()        
        }}  
        >
        {`${status === 0 ? 'Loading' :
        status === 1 ? 'Get bank statement' :
        'Next'}`}
        </div>
    </div>
  )
}
