import React from 'react'

export default function PageBody(props) {
  return (
    <div className={`flex-1 flex 
        gap-4 p-4 overflow-auto
        ${typeof props.class !== "undefined" ? props.class : 'flex-col md:flex-row'}
        `}>
    {props.children}
    </div>
  )
}
