import React from "react";
import heroimg from '../../assets/heroimg.png'
import "./herosection.css"
import mailicon from "../../assets/Vector.png"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
const HeroSection=()=>{
    return (
        <div className="Containerdiv">
            <div className="textdiv">
                <div className="headingdiv">
                
                    <h1  className="h1">You don't have to</h1>                   
                
                <h1 className="h2">Fight them Alone.</h1>
                
                </div>
                <br />
                <div className="ptext">
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                </div>
                <br />
                <div>
            
              <img src={mailicon} alt="img"  className="searchbarimg"/>
                <input type="text" placeholder="Enter your email address" className="heroinput"/>
                <button className="searchbarbtn">let's Talk</button>
                </div>
            </div>
            <div className="heroimgdiv">

                <img src={heroimg} alt="img" className="heroimg"/>
                
            </div>
        </div>
    )
}

export default HeroSection;