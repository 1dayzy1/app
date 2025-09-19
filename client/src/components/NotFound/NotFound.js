import React from 'react'
import './NotFound.css'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className='Not'>
        <div class="container">
        <div class="code">404</div>
        <div class="title">Страница не найдена</div>
        <div class="subtitle">
        Ой! Похоже, ты заблудился 🚀<br/>
        Попробуй вернуться на главную страницу.
        </div>

        <NavLink to={'/'} className="btn">На главную</NavLink>
        
  </div>
    </div>
    
  )
}

export default NotFound