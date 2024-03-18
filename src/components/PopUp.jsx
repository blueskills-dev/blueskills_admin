import React from 'react'
import close from '../assets/icons/close.svg'
export default function PopUp(props) {
  return (
    <div className='absolute w-full h-full bg-[#00000033] left-0 top-0 flex justify-center'>
        <div className='overflow-auto pb-[50px] bg-white h-auto min-h-[100px] max-h-[80%] w-[90%] md:w-[350px] mt-[40px] rounded-[5px] relative'>
            
            {typeof props.setClose !== "undefined" && 
            <div className='w-[20px] h-[20px] absolute right-[20px] top-[20px] cursor-pointer'
            onClick={()=>props.setClose(false)}
            >
              <img src={close} className="w-full h-full"/>
            </div>
            }

            {typeof props.title !== "undefined" && 
            <div className='text-center p-[20px] text-xl fontvariation-500 border-solid border-b-[1px]'>
                {props.title}
            </div>
            }
            {props.children}
        </div>
    </div>
  )
}
