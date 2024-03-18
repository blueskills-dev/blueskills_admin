import React from 'react'

export default function DetailsList(props) {
  return (
    <div className='flex flex-row py-[5px]'>
        <div className='fontvariation-500 text-sm text-primary'>{props.title}:</div>
        <div className='fontvariation-500 text-sm text-black pl-[10px]'>{props.value}</div>
    </div>
  )
}
