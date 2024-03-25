import React,{useState} from 'react'
import NavInner from './NavInner'
import menu from '../assets/icons/menu.svg'
import home from '../assets/home.svg'
import users from '../assets/icons/farmers.svg'
import category from '../assets/icons/View-Medium-Icons-01-256.png'
import invoice from '../assets/icons/Bill-256.png'
import booking from '../assets/icons/Date-256.png'
import payment from '../assets/icons/Donate-256.png'
import partner from  '../assets/icons/People-256.png'

import { useNavigate, useLocation } from 'react-router-dom'

export default function Sidebar() {
    const navigate = useNavigate()
    const [toggleNav, setToggleNav] = useState(false)
    const location = useLocation()
    return (
    <div className={`
        bg-black 
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
                navigate('/dashboard')
              }}
            />
            <NavInner iconImage={users} 
            toggleNav={toggleNav}
            active={location.pathname.toString().toLowerCase().indexOf('user') > 0 ? true : false}
            action={()=>{
                navigate('/users')
              }}
            text="Users"/>
            <NavInner iconImage={category} 
            toggleNav={toggleNav}
            active={location.pathname.toString().toLowerCase().indexOf('category') > 0 ? true : false}
            action={()=>{
                navigate('/category')
              }}
            text="Category"/>
            <NavInner className="w-full" iconImage={partner} 
            toggleNav={toggleNav}
            active={location.pathname.toString().toLowerCase().indexOf('partners') > 0 ? true : false}
            action={()=>{
                navigate('/partners')
              }}
            text="Partners"/>
            <NavInner iconImage={booking} 
            toggleNav={toggleNav}
            active={location.pathname.toString().toLowerCase().indexOf('bookings') > 0 ? true : false}
            action={()=>{
                navigate('/bookings')
              }}
            text="Bookings"/>
            <NavInner iconImage={invoice} 
            toggleNav={toggleNav}
            active={location.pathname.toString().toLowerCase().indexOf('invoice') > 0 ? true : false}
            action={()=>{
                navigate('/invoice')
              }}
            text="Invoice"/>
            <NavInner iconImage={payment} 
            toggleNav={toggleNav}
            active={location.pathname.toString().toLowerCase().indexOf('payments') > 0 ? true : false}
            action={()=>{
                navigate('/payments')
              }}
            text="Payments"/>
        </div>
      </div>
  )
}
