import React from 'react'

export default function OptionOne() {
  return (
     <div className='flex flex-row gap-4 h-full'>
      <div className={`bg-blue-100 rounded-[10px] flex-none h-full p-[10px]
        ${toggleNav ? 
        'w-[250px]'
        :'w-[70px]'}
      `}>
        
        <div className='w-[50px] h-[50px] bg-pink-100 rounded-[10px] cursor-pointer'
          onClick={()=>{
            setToggleNav(!toggleNav)
          }}
        ></div>


        <div className='nav mt-[50px]'>
          <div className='flex flex-row'>
            <div className='w-[50px] h-[50px] bg-black rounded-full cursor-pointer flex-none'></div>
            <div className={`saira-400 text-lg pl-[20px] pt-[10px] flex-none
                ${toggleNav ? 
                  'visible'
                  :'invisible'}
              `}>Home</div>
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-row gap-4'>
        <div className='flex-none rounded-[10px] h-100 w-[70%]'>
          <div className='flex flex-col gap-4 h-full'>
            <div className='flex-none w-full h-[100px] rounded-[10px]'></div>
            <div className='flex-none flex gap-4 w-full h-auto'>
              <div className='w-1/3 h-[150px] rounded-[10px] bg-orange-100'></div>
              <div className='w-1/3 h-[150px] rounded-[10px] bg-orange-100'></div>
              <div className='w-1/3 h-[150px] rounded-[10px] bg-orange-100'></div>
            </div>
            <div className='flex-1 w-100 bg-orange-100 rounded-[10px]'></div>
          </div>
        </div>
        <div className='rounded-[10px] h-100 flex-1'>
          <div className='flex flex-col gap-4 h-full'>
            <div className='flex-none w-full h-[270px] rounded-[10px] bg-orange-100'></div>
            <div className='flex-1 w-100 bg-orange-100 rounded-[10px]'></div>
          </div>
        </div>
      </div>
     </div>
  )
}
