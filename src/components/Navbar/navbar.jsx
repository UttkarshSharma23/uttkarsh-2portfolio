import React from 'react'
import '../Navbar/navbar.css'
import Toggle from '../Toggle/toggle'
// for direct link of the sections adding the library npm i react-scroll
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
         <div className="n-name">Uttkarsh</div> 
        <Toggle/>
        </div>
        <div className="n-right"></div>
        <div className="n-list">
          {/* listStyleType mark the captial letters else error would come */}
            <ul style={{listStyleType:'None'}}>

              {/* adding a link for home section */}
              {/* 1st link */}
              <Link spy={true} to='Navbar'  smooth={true}activeClass='activeClass'>
                <li>Home</li>
                </Link>
                {/* 2nd link */}
                <Link spy={true} to='Services' smooth={true}activeClass='activeClass'>  
                <li>Services</li>
                </Link>
                {/* 3rd link */}
                <Link spy={true} to='About Us'  smooth={true}activeClass='activeClass'>
                <li>About Us</li>
                </Link>
                {/* 4th link */}
                <Link spy={true} to='Portfolio'  smooth={true}activeClass='activeClass'>                <li>Portfolio</li>
                </Link>
                {/* 5th link */}
                <Link spy={true} to='Experinces'  smooth={true}activeClass='activeClass'>  
                <li>Experinces</li>
                </Link>
                {/* 6th Link */}
                <Link spy={true} to='Testimonials'  smooth={true}activeClass='activeClass'>  
                <li>Testimonials</li>
                </Link>
            </ul>
        </div>
        <button className='button n-button'>
            Contact
        </button>
    </div>
  )
}

export default Navbar
