import { SliderText } from "./SliderData/SliderText"

import SliderImage1 from "./SliderData/SliderImage1.svg"
import SliderImage2 from "./SliderData/SliderImage2.svg"
import SliderImage3 from "./SliderData/SliderImage3.svg"
import { useEffect, useState } from "react"

const SliderImages = [
    SliderImage1, SliderImage2, SliderImage3
]

export default function SliderContent(props) {
    const currentSlide = props.currentSlide;
    const nextSlide = currentSlide < 2 ? currentSlide + 1 : 0;

    useEffect(() => {
        let IntervalID = setInterval(() => {
            props.OnIntervalChangeSlide(nextSlide);
        }, 5000);

        return () => clearInterval(IntervalID);}
        , [currentSlide])

    return (
        <div className='main-slider-content'>
            <div className='main-slider-content-body'>
                <h1 className='main-slider-content-body-title'>{SliderText[currentSlide].heading}</h1>
                <div className='main-slider-content-body-paragraphs'>
                    <p className='body2 regular'>{SliderText[currentSlide].description}</p>
                </div>
                <button>Register</button>
            </div>
            <div className='main-slider-content-illustration'>
                <img src={SliderImages[currentSlide]} alt="an illustration with a man who writes code on a laptop" />
            </div>
        </div>
    )
}