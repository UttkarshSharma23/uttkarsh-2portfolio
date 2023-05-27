import React from 'react'
import './experience.css'
const experience = () => {
  return (
    <div className='experience'>
        {/* 1st achievement Div */}
      <div className="achievement">
        <div className="circle">8+</div>
        <span>Years </span>
        <span>Experience</span>
      </div>
      {/* 2nd Achievement div */}
        <div className="achievement">
        <div className="circle">20+</div>
        <span>Completed </span>
        <span>Projects</span>
        </div>
      {/* 3rd Achievement div */}
        <div className="achievement">
        <div className="circle">5+</div>
        <span>Internships </span>
        <span>Completed</span>
        </div>

    </div>
  )
}

export default experience
