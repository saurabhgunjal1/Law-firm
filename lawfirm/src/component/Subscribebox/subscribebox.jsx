import React from 'react'
import "./subscribebox.css"
export default function Subscribebox() {
    

    return (
        <div className='subheaddiv'>
            <div className='subheading'>
                <h1 className='subh1'>Subscribe Our Newsletter</h1>
            </div>
            <div className='searchboxdiv'>
                <input type="text" placeholder='Name' className='subsearchbar'/>
                <input type="text" placeholder='Enter Your Email' className='subsearchbar2'/>
                <button className='subbtn'>SEND</button>
            </div>

        </div>
    )
}
