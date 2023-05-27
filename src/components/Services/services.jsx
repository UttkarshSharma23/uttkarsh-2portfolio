import React from 'react'
import '../Services/services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
// component card created seperately to import in the main
import Card from '../Card/card'
import Resume from '../Services/resume.pdf.pdf'

import {motion} from 'framer-motion'
import { useContext } from 'react'
import { themeContext } from '../../context'

const Services = () => {


  const tranisition = {duration: 1, type:'spring'}


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
        {/* Left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}>
              My Awesome Text</span>
            <span>Services</span>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <br />
             Iusto aspernatur cumque beatae odio odit maxime fugit molestiae, aliquid dolorem impedit quod! Officia, illum.</span>

             {/* adding resume file link */}
             <a href={Resume} download>
             <button className='button s-button'>
              Download Resume
             </button>
             </a>

             <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        
        
        
        {/* right side */}
      <div className="cards">
        {/* 1st Card */}
        {/* 4th animation */}
        <motion.div 
        initial= {{left:'25%'}}
        whileInView={{left:'14rem'}}
        transition={tranisition}
        // styling of card
        style={{left:'14rem'}}>
          <Card
          emoji = {HeartEmoji}
          heading ={'Designer'}
          detail = {'Figma, Blender, Canva,Adobe Photoshop,Adobe Xd'}
          />  
        </motion.div>
        {/* 2nd Card */}
        <div style={{top:'12rem',left:'-4rem'}}>
        <Card
          emoji = {Glasses}
          heading ={'Developer'}
          detail = {'HTML , CSS , JavaScript , React'}
          />
        </div>
        {/* 3rd Card */}
        <div style={{top:'19rem',left:'12rem'}}>
        <Card
          emoji = {Humble}
          heading ={'UI/UX'}
          detail = {'I have done many projects for the UI/UX based companies.'}
          />
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services
