import React from 'react'
import './nav.css'
import { NavLink } from "react-router";


function Navigation() {
  return (
    <div className='nav-inner'>

        <NavLink 
          to={'/'}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          <button className='nav-btn'>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" width={30} height={30} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11.5L12 4l9 7.5"></path>
              <path d="M5 21V11h14v10"></path>
            </svg>
            <div>Главная</div>
          </button>
        </NavLink>
        

        <NavLink to={'/sign'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>

<button className='nav-btn  '>

        <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
  <line x1="16" y1="2" x2="16" y2="6"></line>
  <line x1="8" y1="2" x2="8" y2="6"></line>
  <line x1="3" y1="10" x2="21" y2="10"></line>
  <line x1="10" y1="14" x2="14" y2="14"></line>
</svg>
          <div>Записаться</div>

        </button>

        </NavLink>


        <NavLink to={'/listen'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>


<button className='nav-btn '>

    <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" width={30} height={30} viewBox="0 0 24 24" fill="currentColor">
  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
</svg>
          <div>Мои записи</div>

        </button>

        </NavLink>

        <NavLink to={'/sertificates'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>


<button className='nav-btn '>

    <svg class="nav-icon" viewBox="0 0 24 24" fill="none" width={30} height={30} stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z"></path>
        </svg>
        <div>Достижения</div>

        </button>

        </NavLink>


    </div>
  )
}

export default Navigation;