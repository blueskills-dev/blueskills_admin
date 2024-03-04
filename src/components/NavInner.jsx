import React from 'react'

export default function NavInner({toggleNav, text, iconImage}) {
  return (
    <div className='pl-[10px] flex flex-row cursor-pointer'>
            <div className={`
            w-[30px] 
            h-[30px]
            rounded-full
            wl-[40px]
            flex-none
            ${toggleNav ? 
                'visible'
                :'invisible md:visible'}
            `}>
              {typeof iconImage !== "undefined" &&
              <img src={iconImage} className='w-[30px] margin-auto h-[30px] p-[5px]'/>
            }
            </div>
          
            <div className={`saira-400 
                text-md
                saira-600 
                pl-[20px] pt-[6px] 
                text-white
                flex-none
                ${toggleNav ? 
                  'visible'
                  :'invisible'}
            `}>{text}</div>
          </div>
  )
}
