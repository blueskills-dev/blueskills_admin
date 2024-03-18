import React,{useState} from 'react'
import NavInner from './NavInner'
import menu from '../assets/icons/menu.svg'
import home from '../assets/home.svg'
import project from '../assets/icons/projects.svg'
import farmers from '../assets/icons/farmers.svg'

import { useNavigate, useLocation } from 'react-router-dom'

export default function SidebarFinancier() {
    const navigate = useNavigate()
    const [toggleNav, setToggleNav] = useState(false)
    const location = useLocation()
    return (
    <div className={`
        bg-primary 
        md:flex-none
        
        ${toggleNav? 
        'w-full md:w-[250px] md:h-full'
        :'w-full md:w-[70px] h-[70px] md:h-full'}
      `}>
        
        <div className='w-[50px] h-[50px] m-[10px] rounded-[5px] cursor-pointer'
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
            ${toggleNav ? 
            'visible'
            :'invisible md:visible'}
          `} >
            <NavInner iconImage={home} 
              toggleNav={toggleNav} 
              text="Home"
              active={location.pathname.toString().toLowerCase().indexOf('dashboard') > 0 ? true : false}
              action={()=>{
                navigate('/financier/dashboard')
              }}
            />
            <NavInner 
              iconImage={project} 
              toggleNav={toggleNav} 
              text="Projects"
              active={location.pathname.toString().toLowerCase().indexOf('project') > 0 ? true : false}
              action={()=>{
                navigate('/financier/projects')
              }}
            />
        </div>
      </div>
  )
}
