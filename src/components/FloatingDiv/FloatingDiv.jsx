import React from 'react'
import './floatingdiv.css'
const FloatingDiv = ({image,txt1,txt2}) => {
  return (
    <div className='floatingdiv'>
        <img src={image} alt="" />
        <span>
            {/* writing the texts dynamically rather than statically */}
            {/* Web
            <br />
            Developer */}
            {txt1}
            <br />
            {txt2}
        </span>
      
    </div>
  )
}

export default FloatingDiv
