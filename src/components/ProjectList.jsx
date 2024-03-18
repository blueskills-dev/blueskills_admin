import React from 'react'

export default function ProjectList() {
  return (
    <div className='flex flex-row gap-4'>
        <div className='h-[80px] w-[80px] bg-gray-200 rounded-[5px]'></div>
        <div className='flex flex-col'>
        <div className="text-2xl font-semibold">Green wheat project</div>
        <div className='mt-[10px]'>
            <span className='text-gray-400'>Funding: </span>
            <span className='text-black fontvariation-600'>N10,000,000</span></div>
        </div>
    </div>
  )
}
