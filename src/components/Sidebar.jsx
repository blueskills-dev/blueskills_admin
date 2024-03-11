import React,{useState} from 'react'
import NavInner from './NavInner'
import menu from '../assets/icons/menu.svg'
import home from '../assets/home.svg'
import Invoice from '../assets/icons/projects.svg'
import Users from '../assets/icons/farmers.svg'

export default function Sidebar() {
    const [toggleNav, setToggleNav] = useState(false)
    return (
    <div className={`
        bg-primary 
        rounded-[10px] 
        p-[10px]
        md:flex-none
        ${toggleNav? 
        'w-full md:w-[250px] md:h-screen'
        :'w-full md:w-[70px] h-[70px] md:h-screen'}
      `}>
        
        <div className='w-[50px] h-[50px] rounded-[10px] cursor-pointer'
          onClick={()=>{
            setToggleNav(!toggleNav)
          }}
        >
          <img src={menu} className='w-[70px] h-[30px] pt-[10px]'/>
        </div>


        <div className={`
            nav 
            mt-[20px]
            flex
            flex-col
            gap-4
            ${toggleNav ? 
            'visible'
            :'invisible md:visible'}
          `} >
            <NavInner iconImage={home} toggleNav={toggleNav} text="Home"/>
            <NavInner iconImage={Invoice} toggleNav={toggleNav} text="Invoice"/>
            <NavInner iconImage={Users} toggleNav={toggleNav} text="Users"/>
        </div>
      </div>
  )
}
