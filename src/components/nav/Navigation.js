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

        <svg class="nav-icon" viewBox="0 0 24 24" width={30} height={30} fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v20"></path>
            <path d="M5 9h14"></path>
            <path d="M7 5h10"></path>
          </svg>
          <div>Записаться</div>

        </button>

        </NavLink>


        <NavLink to={'/listen'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>


<button className='nav-btn '>

    <svg class="nav-icon" viewBox="0 0 24 24" fill="none" width={30} height={30} stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 6h18"></path>
            <path d="M7 6v14"></path>
            <path d="M17 6v14"></path>
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