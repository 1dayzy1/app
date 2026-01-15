import React from 'react'
import './error.css'

function Error({cls}) {
   
    // console.log(cls);
  return (
    <div className={cls}>


    <div className="header-block">

        <div className="icon-err"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg></div>

        <h3 className='fd-txt-er'>Пока неверно</h3>

    </div>

     <div className="container-info-err">

        <p class="feedback-message-er">
      Проверьте правильность вашего решения. Убедитесь, что:
    </p>
    <ul class="feedback-list">
      <li className='item-list'>Выполнены все требования задачи</li>
      <li className='item-list'>Корректно использованы синтаксис и методы</li>
      <li className='item-list'>Учтены все граничные случаи</li>
    </ul>
     </div>

    

    </div>
  )
}

export default Error