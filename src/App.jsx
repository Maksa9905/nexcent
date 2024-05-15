import { useState } from 'react'
import { useContext } from 'react'
import './App.css'
import illustration from "./assets/Illustration.svg"
import Slider from './components/Main/Slider/Slider'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ModalWindow from './components/ModalWindow/ModalWindow'
import LoginModalWindow from "./components/ModalWindow/LoginModalWindow"
import RegisterModalWindow from './components/ModalWindow/RegisterModalWindow'

import React from 'react'
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";


export default function App() {
  const [modalWindowContent, setModalWindowContent] = useState(null);

  const modalWindowsList = {
    'login': <ModalWindow onCloseModalWindow={() => setModalWindowContent(null)}><LoginModalWindow/></ModalWindow>,
    'register': <ModalWindow onCloseModalWindow={() => setModalWindowContent(null)}><RegisterModalWindow/></ModalWindow>,
    null: <></>
  }

  const changeModalWindowState = (buttonId) => {
    setModalWindowContent(buttonId);
  }


  return (
    <React.Fragment>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={modalWindowContent}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='modal-window-fade'
        >
          {modalWindowsList[modalWindowContent]}
        </CSSTransition>
      </SwitchTransition>
      <Header changeModalWindowState={changeModalWindowState}></Header>
      <Main></Main>
      <Footer></Footer>
    </React.Fragment>
  )
}
