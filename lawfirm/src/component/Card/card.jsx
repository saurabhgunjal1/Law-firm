import React from 'react'
import "./card.css"
import gift from "../../assets/Gift.png"
export default function Card() {
    

    return (
 <div className='cardcontaienerdiv'>
    <div className='carddiv'>
        <div className='ellipse'><img src={gift} alt="" className='cardimgdiv'/></div>
        
        <h5 className='cardh5'>98% Success Rate</h5>
        <p className='cardptag'>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.
        </p>
        <button className='cardbtn'>Read More</button>
    </div>
    <div className='carddiv'>
        <div className='ellipse'><img src={gift} alt="" className='cardimgdiv'/></div>
        
        <h5 className='cardh5'>100% Success Rate</h5>
        <p className='cardptag'>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.
        </p>
        <button className='cardbtn'>Read More</button>
    </div>
    <div className='carddiv'>
        <div className='ellipse'><img src={gift} alt="" className='cardimgdiv'/></div>
        
        <h5 className='cardh5'>100% Success Rate</h5>
        <p className='cardptag'>
        Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.
        </p>
        <button className='cardbtn'>Read More</button>
    </div>
 </div>
    )
}
