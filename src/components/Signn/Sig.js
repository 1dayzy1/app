import React, { useEffect, useState } from 'react'
import './sign.css'
// import axios from 'axios';

function Sig() {


    const[time, setTime] = useState([]);

   useEffect(() => {
      fetch('https://7562c252d0300d5e.mokky.dev/items')
        .then(res => res.json())
        .then(data => {
          
          setTime(data);
        });
    }, []);

    const today = new Date().toISOString().split('T')[0];

    const[date, setDate] = useState('')
    const[times, setTimes] = useState('')
    const[comment, setComment] = useState('')


    const changedate = (e) =>{
        setDate(e.target.value);
        
    }
    
    const changecomment = (e) =>{
        setComment(e.target.value);
        
    }

     const changetime = (e) =>{
        setTimes(e.target.value);
        
    }
    
    const modal = document.querySelector('.modal');  
    

    const closeModal = () =>{
        modal.classList.toggle('hidden')
        
        
    }

    const submitBtn = () =>{
        
        if((times && date) || (times && date && comment)){
            modal.classList.toggle('hidden');
           
            
        }else{
            
            
        }
       


    }

  return (


    


    <div className='block'>
      <h1 className='Logo'>FrontendByHeart</h1>
        <p className='desc'>Записывайся на уроки удобно</p>
        <div className='sign-block'>
          

          <div>

            <p className='sign-text1'>Записаться на урок</p>
            
            <p className='sign-text2'>Выберите время и дату записи</p>
          
          </div>

          <div>

            <p className='page-text'>Шаг 1/1</p>

          </div>
          

          
        </div>

        <div className='select-time'>

            <p  className='date'>📅 Выберите дату:</p>

            <input type='date'
            id='date'
            onChange={changedate}
            min={today}
            required

            
                />

            <p  className='date'>⏰ Выберите время:</p>


                <select className='list' 
                onChange={changetime}
                required
                >
                <option value="">--  Выберите время  --</option>
                            {
                time.map(item => (

                    <option key={item.id} className='list'>{item.time}</option>

                ))
            }
                            

                    </select>


            


            <p  className='date'>Комментарий(необязательно)</p>

            <textarea placeholder='Например: хочу выполнить повторение' className='comment' onChange={changecomment}></textarea>

                <br/>

            <button 
            className='btn-zapis'
            onClick={submitBtn}
            >
                Записаться</button>
        </div>


        <div id="modal" class="modal hidden">
  <div class="modal-backdrop"></div>
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-icon">🗓️</div>
      <div>
        <div class="modal-title">Ваша запись</div>
        <div class="modal-subtitle">Детали урока</div>
      </div>
      <button class="modal-close" onClick={closeModal} id="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <div class="modal-row">
        <span class="modal-label">Дата:</span>
        <span id="modal-datetime" class="modal-value">{date}</span>
      </div>

      <div class="modal-row">
        <span class="modal-label">Время:</span>
        <span id="modal-datetime" class="modal-value">{times}</span>
      </div>
      <div class="modal-row">
        <span class="modal-label">Комментарий:</span>
        <span id="modal-notes" class="modal-value">{comment}</span>
      </div>
    </div>
    
  </div>
</div>



        
    </div>
  )
}

export default Sig