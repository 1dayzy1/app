import React, { useState } from 'react'
import './Certificates.css'

function Certificates() {

    

    const[sertificates, setSertificates] = useState({
    react:false,
    js:false,
    front:false,
    fullstack:false

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

                React(Mimo)<br/>
                <img src='/Sertificates/react.png' width={300}  className={`img ${sertificates.react ? '' : 'hidden'}`} alt='sdf'/>
              </div>

              <div className="cert-btn" onClick={()=> toggleAccordion('fullstack')} data-cert="cert1">

                EasyUM(FULLSTACK)<br/>
                <img src='/Sertificates/fullstack.jpg' width={300} className={`img ${sertificates.fullstack ? '' : 'hidden'}`} alt='sdf'/>
              </div>

              <div className="cert-btn" onClick={()=> toggleAccordion('front')} data-cert="cert1">

                Frontend(Mimo)<br/>
                <img src='/Sertificates/frontend.png' width={300} className={`img ${sertificates.front ? '' : 'hidden'}`} alt='sdf'/>
              </div>

              <div className="cert-btn" onClick={()=> toggleAccordion('js')} data-cert="cert1">

                JavaScript(Mimo)<br/>
                <img src='/Sertificates/JS.png' width={300} className={`img ${sertificates.js ? '' : 'hidden'}`} alt='sdf'/>
              </div>
            
            </div>
        </div>
        </section>
        

            <a href="https://www.avito.ru/moskva/predlozheniya_uslug/repetitor_po_html_css_js_7391552161"  className="btn-sertificates" >Открыть Авито</a>


        
    </div>
  )
}

export default Certificates