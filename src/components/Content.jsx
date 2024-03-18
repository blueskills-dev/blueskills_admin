import React from 'react'
import logo from '../assets/icons/blueskillslogo.svg'

export default function Content(props) {
  return (
    <div 
    className='flex 
    flex-col
    h-auto md:h-full
    overflow-auto'
    >
      <div className='h-[70px] w-full bg-primary p-[20px]'>
        <div className='h-[30px] w-[100px]'>
          <img src={logo} className="w-full h-full" />
        </div>
      </div>
    
    <div className='
    flex 
    flex-col 
    md:flex-row
    h-auto md:h-full
    overflow-auto
    '>
      
        {props.children}
    </div>
  </div>
  )
}
