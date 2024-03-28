import React from 'react'
import "./AOPcards.css"
import bussinesslaw from "../../assets/AOPCARDS/businesslaw.png"
import patenershiplaw from "../../assets/AOPCARDS/patenershiplaw.png"
import  bussinesslaw2 from "../../assets/AOPCARDS/businesslaw2.png"
import elderabuse from "../../assets/AOPCARDS/elderabuse.png"
import landlord from "../../assets/AOPCARDS/landlord.png"
import realestate from "../../assets/AOPCARDS/realestate.png"


export default function AOPcards() {
    

    return (
     <div  className='topleveldiv'>
        <h1 className='AOPHEADING'>Area of Practices</h1>
        <div>
            <div className='maindiv'>
                <img src={bussinesslaw} alt="img" className='wideimg'/>
                <h3 className='h3wideimg'>BUSINESS LAW</h3>
                <img src={patenershiplaw} alt="img" className='shortimg' />
                <h3 className='h3shortimg'>PARTNERSHIP LAW</h3>
            </div>
            <div className='maindiv'>

                <img src={realestate} alt="img" className='short2img' />
                <h3 className='h3short2img'>REAL ESTATE LAW</h3>
                <img src={bussinesslaw2} alt="img" className='wide2img'/>
                <h3 className='h3wide2img'>BUSINESS LAW</h3>
            </div>
            <div className='maindiv'>
                <img src={landlord} alt="img" className='wideimg'/>
                <h3 className='h3wideimg'>
LANDLORD DISPUTES</h3>
                <img src={elderabuse} alt="img" className='shortimg' />
                <h3 className='h3shortimg'>ELDER ABUSE</h3>
            </div>
            
        </div>
     </div>
    )
}
