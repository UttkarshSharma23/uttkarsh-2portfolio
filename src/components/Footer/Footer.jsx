import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';



const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{Widht:'100%'}} />
        <div className="f-content">
            {/* for icons installing a beautiful Library npm install @iconscout/react-unicons */}
            <span>uttkarsh.sharma2019@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem' />
                <LinkedIn color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
            </div>

        </div>
    </div>
  )
}

export default Footer
