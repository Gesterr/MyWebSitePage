import App1 from '../src/projects/21/src/App';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import HeaderSection from './components/HeaderSection';
import MainSection from './components/MainSection';
import FooterSection from './components/FooterSection';
import { useState } from 'react';



export default function App() {
  let [cards,setCards] = useState(false)

  return (
    <>
      {cards ? <App1 onClick={() => setCards(false)}/> : <><HeaderSection onClick={() => setCards(true)}/>

      <MainSection/>

      <FooterSection/></>
}

      
    </>
  )
}
