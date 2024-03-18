import '../components/MainSection.css'
import AboutMeSection from './Main/AboutMeSection';
import ContactsSection from './Main/ContactsSection';
import ProjectSection from './Main/ProjectsSection';



export default function MainSection(){

    return(
        <main className='container main'>
        <AboutMeSection/>

        <h2 id="Contacts">Контакты</h2>
        <span className='main__text-contacts'>Ниже указаны, на данный момент, доступные способы контакта со мной</span>

        <ContactsSection/>

        <h2 id="projects">Проекты</h2>
        <span style={{fontWeight:'450', fontSize:'20px'}}>Ниже указаны мои законченные проекты</span>

        <ProjectSection/>
      </main>
    )
}