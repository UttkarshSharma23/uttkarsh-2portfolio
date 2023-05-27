import React from 'react'
import './card.css'

// props being defined here explicitly
const Card = ({emoji , heading , detail}) => {
  return (
    <div className='card'>
        {/* span 2 */}
        <img src={emoji} alt="" />
        {/* span 3 */}
        <span>{heading}</span>
        {/* span 4 */}
        <span>{detail}</span>
        {/* setting up the learn more button */}
        <button className='c-button'>Learn More</button>
    </div>
  )
}

export default Card
