import React from 'react'

export default function Content(props) {
  return (
    <div className='
    flex 
    flex-col 
    md:flex-row
    h-auto md:h-screen 
    gap-4'>
        {props.children}
    </div>
  )
}
