import { useEffect, useState } from "react";
import PaginationButton from "./PaginationButton";
import SliderContent from "./SliderContent";
import "./Slider.css"
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import "./SliderTransitionStyles.css"

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const OnChangeSlideHander = (nextSlide) => {
        setCurrentSlide(nextSlide);
    };


    // SlideTransition 

    const transitionMode = "out-in";

    return(
        <div className='main-slider'>
            <div className="main-slider__inner container">
                <SwitchTransition mode={transitionMode}>
                    <CSSTransition
                        key={currentSlide}
                        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        classNames='slider-fade'
                    >
                        <>
                            <SliderContent OnIntervalChangeSlide = {OnChangeSlideHander} currentSlide = {currentSlide}></SliderContent>
                            <div className='main-slider-pagination'>
                                <PaginationButton OnClickPagination = {OnChangeSlideHander} id = {0} currentSlide = {currentSlide}></PaginationButton>
                                <PaginationButton OnClickPagination = {OnChangeSlideHander} id = {1} currentSlide = {currentSlide}></PaginationButton>
                                <PaginationButton OnClickPagination = {OnChangeSlideHander} id = {2} currentSlide = {currentSlide}></PaginationButton>
                            </div>
                        </>
                    </CSSTransition>
                </SwitchTransition>
            </div> 
        </div>
    )
}