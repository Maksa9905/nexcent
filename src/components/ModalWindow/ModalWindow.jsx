import { Children, useState } from "react"
import "./ModalWindow.css"
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import "./ModalWindowTransitionStyles.css"


export default function ModalWindow({onCloseModalWindow, children}) {
    return(
        <>{
            <div>
                <div onClick={onCloseModalWindow} className="modal-background"></div>
                <div className="modal-window">
                    {
                        children
                    }
                </div>
            </div>
        }</>
    )
}