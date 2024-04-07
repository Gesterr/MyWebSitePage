import { useState } from 'react';
import '../components/HeaderSection.css'

export default function HeaderSection({onClick}){
    const [now,setNow] = useState(new Date())

    setInterval(function(){
        setNow(new Date());
      },1000)

    return(
    <>
      <div className='playCards' onClick={onClick}>
        <img src="../src/img/PlayCards.png" alt="" />
      </div>
      <header className="head">
        <section className="container head_mod">
          <div className="head__name">
                  <h1>NIKITA</h1>
          </div>
          <span className='head__time'>Время на данный момент: {now.toLocaleTimeString()}</span>
          <nav className="head__block-nav">
              <p className='head__nav-name'>&dArr; Навигация &dArr;</p>
              <div className="head__nav">
                  <div className="head__line1"></div>
                  <div className="head__line2"></div>
                  <div className="head__nav-about">
                      <a href="#about-me"><h3>Обо мне</h3></a>
                    </div>
                  <div className="head__nav-projects">
                      <a href="#projects"><h3>Проекты</h3></a>
                  </div>
                  <div className="head__nav-contacts">
                      <a href="#Contacts" ><h3>Контакты</h3></a>
                  </div>
              </div>
          </nav>
        </section>
        <div className="container head__line-head-block">
            <img src={'./src/img/Для Шапки.png'} alt="" className="head__img"/> 
        </div>
      </header>
    </>
    )
}