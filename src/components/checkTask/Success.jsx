import React from 'react'
import './suc.css'

function Success({cls}) {

    
    // console.log(cls)

  return (
    <div className={cls}>


    <div className="header-block">

        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
        </svg></div>

        <h3 className='fd-txt'>Верно! Отличная работа!</h3>

    </div>

    <p class="feedback-message">Верно! Отличная работа! 🎉 Вы правильно использовали цикл для перебора массива. Это классический подход к решению задачи.</p>

    </div>
  )
}

export default Success