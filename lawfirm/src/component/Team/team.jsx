import React from 'react'
import "./team.css"
import tm1 from "../../assets/Teams/TM1.png"
import tm2 from "../../assets/Teams/TM2.png"
import tm3 from "../../assets/Teams/TM3.png"
import tm4 from "../../assets/Teams/TM4.png"
import tm5 from "../../assets/Teams/TM5.png"
import tm6 from "../../assets/Teams/TM6.png"




export function Team() {


    return (
        <div className='Allteamjsx'>
            <div className='teamH1div'>
                <h1 className='teamH1'> Our Team</h1>
            </div>
            <div className='teamcarddiv'>
                <div className='teamcards'>
                <img src={tm1} alt="" className='teamcardimg'/>
                      
                
                    <div className='cardtextdiv'>
                   
                    <h3 className='teamcardH3'>Danial Def</h3>
                    <p className='teamcardp'>301 Cases</p>
                    </div>
                </div>
                <div className='teamcards'>
                <img src={tm2} alt="" className='teamcardimg'/>
                      
                
                    <div className='cardtextdiv'>
                   
                    <h3 className='teamcardH3'>Sanfole</h3>
                    <p className='teamcardp'>850 Cases</p>
                    </div>
                </div>
                <div className='teamcards'>
                <img src={tm3} alt="" className='teamcardimg'/>
                      
                
                    <div className='cardtextdiv'>
                   
                    <h3 className='teamcardH3'>Cesforila</h3>
                    <p className='teamcardp'>870 Cases</p>
                    </div>
                </div>
                <div className='teamcards'>
                <img src={tm4} alt="" className='teamcardimg'/>
                      
                
                    <div className='cardtextdiv'>
                   
                    <h3 className='teamcardH3'>Colleen</h3>
                    <p className='teamcardp'>180 Cases</p>
                    </div>
                </div>
                <div className='teamcards'>
                <img src={tm5} alt="" className='teamcardimg'/>
                      
                
                    <div className='cardtextdiv'>
                   
                    <h3 className='teamcardH3'>Haldone</h3>
                    <p className='teamcardp'>212 Cases</p>
                    </div>
                </div>
                <div className='teamcards'>
                <img src={tm6} alt="" className='teamcardimg'/>
                      
                
                    <div className='cardtextdiv'>
                   
                    <h3 className='teamcardH3'>Nik Jeo</h3>
                    <p className='teamcardp'>350 Cases</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
