import React from 'react'
import './main.css'
import { NavLink } from "react-router";
function Main() {


  let tg = window.Telegram.WebApp;

  let username = tg.initDataUnsafe?.user?.username || "Гость";


  return (
    <div className='block'>
      <div className='Logo'>
        
        <img src='/logo.png' width={70} alt='Logo'/>
FrontendByHeart
      </div>
        
        <p className='desc'>Записывайся на уроки удобно</p>
        <div className='firstBlock'>

          
          <h1 className='welcome'>Добро пожаловать 👋  {username}</h1>
          <p className='firstText'>Меня зовут Дмитрий, я разработчик и репетитор по программированию.<br/> Работаю как с абсолютными<br/>  новичками, так и помогаю тем, кто уже пишет код, но<br/>  застрял и хочет двигаться дальше.</p>
          

          <p className='firstText'>📚 Чему обучаю: основы  JavaScript, веб-<br/>разработка (HTML, CSS, React), работа с базами данных,<br/> алгоритмы. Объясняю простыми словами и с примерами из<br/> практики.</p>
          

          <p className='firstText'>🛠️ Помимо репетиторства я занимаюсь разработкой сайтов<br/> под ключ — от идеи и дизайна до готового продукта.</p>
          

          <p className='firstText'>🧑‍💻 У меня есть объявление на Авито, где ученики находят<br/> меня для занятий и проектов. Поэтому если ты хочешь<br/> разобраться в коде, подтянуть знания или создать сайт —<br/> ты в правильном месте.</p>
          

          <NavLink to={'/sign'}>

          <button className='btn-main'>Записаться на урок</button>

          </NavLink>
          

          
        </div>
    </div>
  )
}

export default Main