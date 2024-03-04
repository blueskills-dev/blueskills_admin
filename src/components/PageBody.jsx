import React from 'react'

export default function PageBody(props) {
  return (
    <div className='flex-1 flex 
        flex-col md:flex-row 
        gap-4'>
    {props.children}
    </div>
  )
}
