import React from 'react'
// importing of the css file is important for the perfect run flow .
import '../Intro/intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import uttkarsh from '../../img/uttkarsh.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'


// adding library npm i framer-motion for tranisition.
import {motion} from 'framer-motion'
import { useContext } from 'react'
import { themeContext } from '../../context'

const Intro = () => {

    const tranisition = {duration: 2, type:'spring'}


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro" id='Navbar'>
            {/* designing the left side of the intro */}
            <div className="i-left">
                <div className="i-name">
                    {/* filling the details */}
                    <span style={{color: darkMode? 'white' : ''}}>Hi! I am </span>
                    <span>Uttkarsh Sharma</span>
                    <span>I am a front end Developer with a high level of Experince in UI/UX and desingning.Count me as your best employee for the company!
                    </span>
                </div>
            <button className="button i-intro">Hire Me!</button>
            <div className="i-icons">
                {/* Creating a link for the github,insta */}
                <a href="https://github.com/UttkarshSharma23">
                <img src={Github} alt="" />
                </a>
                <a href="https://linkedin.com/in/uttkarsh-sharma-93b8411b6">
                <img src={LinkedIn} alt="" />
                </a>
                <a href="https://instagram.com/uttkarshtration">
                <img src={Instagram} alt="" />
                </a>
            </div>
            </div>
            {/* right side of the intro being made */}
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={uttkarsh} alt="" />
                
                {/* animation parameters being declared here */}
                {/* 1st animation */}
                <motion.img
                initial={{left:'-36%'}}
                whileInView = {{left:'-24%'}}
                transition ={tranisition}
                src={glassesimoji}
                alt="" 
                />
             
             {/* 2nd animation */}
                <motion.div 
                initial= {{left:'74%',top:'-4%'}}
                whileInView={{left:'68%'}}
                transition={tranisition}
                // styling for the box
                style={{top:'-10%', left:'50%'}}
                className='floating-div'
                >
                   <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
                </motion.div>


                {/* 3rd animation */}
                <motion.div 
                initial= {{left:'9rem',top:'18rem'}}
                whileInView={{left:'0rem'}}
                transition={tranisition}
                
                style={{top:'75%' , left:'0rem'}}
                className='floating-div'
                >
                <FloatingDiv image={thumbup} txt1='Awesome Perosnality' txt2='Awarded'/>
                </motion.div>
                
                {/* blur Divs */}
                <div className='blur' style={{background: "rgb (238 210 255)"}}></div>
                <div className='blur' 
                style={{
                    background:'#c1F5FF',
                    top:'17rem',
                    width:'21rem',
                    height:'11rem',
                    left:'-9rem'}}>
                 </div>
            </div>
        </div>

    )
}

export default Intro
