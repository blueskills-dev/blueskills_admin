import React from 'react'

export default function ButtonBox(
    {title, buttonAction, status='active'}
) {
  return (
    <div className={`w-full 
        h-[50px] mt-[15px] rounded-[5px]
         cursor-pointer
        ${ status === 'inactive' ? 'bg-gray-300' :
        status === 'loading' ? 'bg-secondary' :
        'bg-primary hover:bg-secondary'}
        `}

        onClick={()=>{
          if(status === 'active'){ buttonAction() }
        }}
        >
          <div className='text-center text-white text-xl pt-[15px]'>
            {title}
          </div>
    </div>
  )
}
