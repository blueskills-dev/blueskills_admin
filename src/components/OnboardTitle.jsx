import React from 'react'
import logotitle from '../assets/logofull.svg'
export default function OnboardTitle(
    {
        title,
        stepCount,
        currentStep,
        currentStepTitle
    }
) {


  return (
    <div className='flex flex-row justify-between w-full max-h-[80px]'>
        <div className='w-[150px] h-[50px]'>
            <img 
                src={logotitle} />
        </div>
        <div className='w-[250px] h-auto text-right'>
        <div className='text-2xl fontvariation-600 w-full'>{title}</div>
        <div className='text-lg fontvariation-400'>{currentStepTitle} (Step {currentStep+1} of {stepCount})</div>
        <div className='mt-[10px] flex flex-row flex-row-reverse 
                        justify-right gap-3 w-full'>
            {Array.from(Array(stepCount).keys()).reverse().map((this_step, index)=>{
                return(
                    <div 
                    key={`state_${index}`}
                    className={`w-[12px] h-[12px] rounded-full
                    ${(this_step) < currentStep ? 'bg-secondary': 
                        (this_step) === currentStep ? 'bg-primary'
                        : 'bg-gray-400'
                    }
                    `}></div>
                )
            })}
        </div>
        </div>
    </div>
  )
}
