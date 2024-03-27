import React from "react";
import logo from "../../assets/logo.png"
import "./navbar.css"
const Navbar=()=>{
    return(
        <nav>
        <div className="logocontainer">
            <img src={logo} alt="img"  id="logoimg"/>
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
            <button className="feedbackbtn">Contact Now</button>
        </div>
    </nav>
    )
}

export default Navbar