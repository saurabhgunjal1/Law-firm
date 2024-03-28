import { useSwiper } from 'swiper/react'
import './CarouselRightNavigation.css'
import React from 'react';
import {  useEffect, useState } from 'react'

import  { ReactComponent as RightArrow } from "../../assets/RightArrow.svg"

export default function CarouselRightNavigation(){
    const swiper = useSwiper();
    useEffect(() => {
        // Initialize swiper when component mounts
        if (swiper) {
            swiper.init();
        }
    }, [swiper]);

    return (
        <div className='rightnavigation'>
             <RightArrow onClick={() => swiper?.slideNext()} className="Right-arrow" />
        </div>
    )
}