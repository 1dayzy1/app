import React, { useState } from 'react'
import './Certificates.css'

function Certificates() {

    

    const[sertificates, setSertificates] = useState({
    react:false,
    js:false,
    front:false

    });

    const toggleAccordion = (cert) => {
        setSertificates(prev => ({
            ...prev,
            [cert]: !prev[cert]
        }));


    }
    

    

    
  return (
    <div className='block'>
      <h1 className='Logo'>FrontendByHeart</h1>
        <p className='desc'>Записывайся на уроки удобно</p>
        


        <section id="page-certificates" className="page hidden">
        <div className="card" >
            <div >Моё объявление на Авито</div>
            <div >
            Здесь можно узнать обо мне подробнее, посмотреть отзывы и связаться напрямую.
            </div>
        </div>

        <div className="card">
            <div >Мои сертификаты</div>

            <div className="cert-list">
            <div className="cert-btn" onClick={()=> toggleAccordion('react')} data-cert="cert1">

                Python (Stepik)<br/>
                <img src='./logo192.png' className={`img ${sertificates.react ? '' : 'hidden'}`} alt='sdf'/>
                </div>
            <button className="cert-btn" data-cert="cert2">Веб-разработчик (Яндекс Практикум)</button>
            <button className="cert-btn" data-cert="cert3">JavaScript (Coursera)</button>
            </div>
        </div>
        </section>
        

            <a href="https://www.avito.ru/moskva/predlozheniya_uslug/repetitor_po_html_css_js_7391552161"  className="btn-sertificates">Открыть Авито</a>


        
    </div>
  )
}

export default Certificates