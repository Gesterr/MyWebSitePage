export default function AboutMeSection(){
    return (
        <section className='About-me'>
            <h2 id="about-me">Обо мне</h2>
                <div className="main__about-me">
                    <div className="main__about-me-text-block">
                        <p className='main__text-about-me'>Моё имя Никита и добро пожаловать на мой сайт. Здесь представлены мои контакты и проекты.
                        На данный момент, являюсь студентом 5-го курса, по окончанию университета хочу стать программистом, т.к. мечтал об этом ещё с детства.
                        </p>
                    </div>
                    <div className="main__img-me">
                        <img src={"../src/img/me.jpg"} alt=""/>
                        <h4 style={{padding:'10px 0 20px 0'}}>Да это я</h4>
                    </div>
                </div>
        </section>
    )
}