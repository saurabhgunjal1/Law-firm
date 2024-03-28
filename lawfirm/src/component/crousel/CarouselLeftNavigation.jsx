import React from 'react'
import { useState,useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg"
import "./CarouselLeftNavigation.css"
// import 'swiper/modules/navigation.scss';
import { Navigation, Pagination } from 'swiper/modules';

export default function CarouselLeftNavigation  ()  {
    const swiper = useSwiper();
    useEffect(() => {
        // Initialize swiper when component mounts
        if (swiper) {
            swiper.init();
        }
    }, [swiper]);
  return (
    <div className="leftnavigation">
      <LeftArrow onClick={() => swiper?.slidePrev()} className="left-arrow" />
    </div>
  )
}