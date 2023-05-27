import React from 'react'
import './works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { useContext } from 'react'
import { themeContext } from '../../context'
import {motion} from 'framer-motion'



const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='works'id='Experinces'>
            {/* Left side */}
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Worked for all these</span>
                <span>Comapnies & Clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    <br />
                    Iusto aspernatur cumque beatae odio odit maxime fugit molestiae, aliquid dolorem impedit quod! Officia, illum.
                    <br />
                    Iusto aspernatur cumque beatae odio odit
                    <br />
                    Iusto aspernatur cumque beatae odio odit
                </span>

                {/* adding resume file link */}

                <button className='button s-button'>
                    Hire Me
                </button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>


            {/* Right side */}
            <div className="w-right">
                <motion.div 
                initial={{rotate:45}}
                whileInView = {{rotate:0}}
                viewport={{margin:'-40px'}}
                // this will help the rotation of the circle when the screeenview is 40per
                transition ={{duration:3.5, type:'spring'}}
                className="w-mainCircle"
                >
                    {/* 1st Secondary Circle for the site */}
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    {/* 2nd Circle */}
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    {/* 3rd Circle */}
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    {/* 4th Circle */}
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    {/* 5th Circle */}
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>


            {/* background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works
