import React from 'react'
import { useEffect } from 'react'
import "./crousel.css"
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import elp1 from "../../assets/elp1.png"
import elp2 from "../../assets/elp2.png"
import elp3 from "../../assets/elp3.png"
import CarouselLeftNavigation from './CarouselLeftNavigation'
import CarouselRightNavigation from './CarouselRightNavigation'
// import { Navigation, Pagination } from 'swiper/modules';

export default function Crousel() {
    const swiper = useSwiper();
    const Controls = () => {
        const swiper = useSwiper();
    
        useEffect(() => {
            swiper.slideTo(0);
        },[])
    
        return <></>
    }

    return (
     <div className='allinonediv'>
      
           
        <div className='crouselheadingbtn'>  
    
        <div className='cheading'>
            <h1>What says our
            happy Clients</h1>
        </div>
        
   <div className='crouselbuttondiv'>
    
   <CarouselLeftNavigation/>
            <CarouselRightNavigation/> 
   </div>
   </div>
        
        <div className="crouselmaindiv">
        <Swiper 
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"3"}
        spaceBetween={1}
        allowTouchMove
        navigation
        >
           
           <Controls />
      
           <SwiperSlide>
           <div className='crouselcarddiv'>
        {/* <div className='ellipse'></div> */}
        <img src={elp1} alt="" className='crouselellipse'/>
        
        <h5 className='crouselcardh5'>Jane Cooper</h5>
        <p className='ceo'>Ceo of Hunt</p>
        <p className='crouselcardptag'>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.
        </p>
        
    </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className='crouselcarddiv'>
        {/* <div className='ellipse'></div> */}
        <img src={elp2} alt="" className='crouselellipse'/>
        
        <h5 className='crouselcardh5'>Devon Lane</h5>
        <p className='ceo'>Ceo of Hunt</p>
        <p className='crouselcardptag'>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.
        </p>
        
    </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className='crouselcarddiv'>
        {/* <div className='ellipse'></div> */}
        <img src={elp3} alt="" className='crouselellipse'/>
        
        <h5 className='crouselcardh5'>Robert Fox</h5>
        <p className='ceo'>Ceo of Hunt</p>
        <p className='crouselcardptag'>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.
        </p>
        
    </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className='crouselcarddiv'>
        {/* <div className='ellipse'></div> */}
        <img src={elp1} alt="" className='crouselellipse'/>
        
        <h5 className='crouselcardh5'>Jane Cooper</h5>
        <p className='ceo'>Ceo of Hunt</p>
        <p className='crouselcardptag'>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.
        </p>
        
    </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className='crouselcarddiv'>
        {/* <div className='ellipse'></div> */}
        <img src={elp1} alt="" className='crouselellipse'/>
        
        <h5 className='crouselcardh5'>Jane Cooper</h5>
        <p className='ceo'>Ceo of Hunt</p>
        <p className='crouselcardptag'>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.
        </p>
        
    </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className='crouselcarddiv'>
        {/* <div className='ellipse'></div> */}
        <img src={elp1} alt="" className='crouselellipse'/>
        
        <h5 className='crouselcardh5'>Jane Cooper</h5>
        <p className='ceo'>Ceo of Hunt</p>
        <p className='crouselcardptag'>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.
        </p>
        
    </div>
           </SwiperSlide>
           <SwiperSlide>
           <div className='crouselcarddiv'>
        {/* <div className='ellipse'></div> */}
        <img src={elp1} alt="" className='crouselellipse'/>
        
        <h5 className='crouselcardh5'>Jane Cooper</h5>
        <p className='ceo'>Ceo of Hunt</p>
        <p className='crouselcardptag'>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.
        </p>
        
    </div>
           </SwiperSlide>
     
           

        </Swiper>
    </div>
     </div>
    )
}
