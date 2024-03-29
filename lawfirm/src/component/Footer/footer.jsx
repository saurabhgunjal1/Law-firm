import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.png"
import insta from "../../assets/socialmedia/insta.png"
import fb from "../../assets/socialmedia/fb.png"
import x from "../../assets/socialmedia/x.png"
import pin from "../../assets/socialmedia/pin.png"



export default function Footer(props) {


    return (
        <div className='footertopdiv'>
            <div className='footernavdiv'>
                <div className="logocontainer">
                    <img src={logo} alt="img" id="logoimg" />
                </div>


                <div className="btn">
                    <div>
                        <a href="#">Home</a>
                    </div>
                    <div>
                        <a href="#">Attorneys</a>
                    </div>
                    <div>
                        <a href="#">Practice Areas</a>
                    </div>
                    <div>
                        <a href="#">About us</a>
                    </div>


                </div>



                <div>
                    <button className="socialmediaicon"><img src={insta} alt="insta" className='socialmediaiconimg' /></button>
                    <button className="socialmediaicon"><img src={fb} alt="fb" className='socialmediaiconimg' /></button>
                    <button className="socialmediaicon"><img src={x} alt="x" className='socialmediaiconimg' /></button>
                    <button className="socialmediaicon"><img src={pin} alt="pin" className='socialmediaiconimg' /></button>
                </div>
            </div>
            <div className='footercopywritediv'>
                <p className='footerptag'>© 2020 Acme. All right reserved.</p>
                <p className='footerptag'>Privacy Policy</p>
                <p className='footerptag'>Terms of Service</p>
            </div>

        </div>
    )
}
