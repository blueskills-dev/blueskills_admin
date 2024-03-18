import React from 'react'

export default function MainWrapper(props) {
  return (
          <div className={`
              flex 
              flex-col
              w-full h-[700px] md:h-full py-4
              gap-4 ${typeof props.class !== "undefined" ? props.class : ''}`}>
              
              {props.children}
          </div>
  )
}
