import React from 'react'

export default function NavInner({toggleNav, text, iconImage, action, active=false}) {
  return (
    <div className={`px-[19px] py-[10px] flex 
    flex-row cursor-pointer
    ${active ? 'bg-white shadow-sm' : 'text-white'}
    `}
    onClick={()=>{
      if(typeof action !== "undefined"){
        action()
      }
    }}
    >
      <div className={`
      w-[30px] 
      h-[30px]
      rounded-full
      wl-[40px]
      flex-none
      ${toggleNav ? 
          'visible'
          :'invisible md:visible'}
      ${active ? 'bg-black' : 'text-white'}
      `}>
        {typeof iconImage !== "undefined" &&
        <img src={iconImage} className='w-[30px] margin-auto h-[30px] p-[5px]'/>
      }
      </div>
      <div className={`fontvariation-400 
          text-md
          fontvariation-600 
          pl-[20px] pt-[6px] 
          ${active ? 'text-primary' : 'text-white'}
          flex-none

          ${toggleNav ? 
            'visible'
            :'invisible'}
      `}>{text}</div>
    </div>
  )
}
