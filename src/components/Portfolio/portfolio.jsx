import React from "react";
import './portfolio.css'
// importing from swiper library
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';

import { useContext } from 'react'
import { themeContext } from '../../context'

const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id="Portfolio">
        {/* Adding a Library for the portfolio as
        yarn/npm add swiper in terminal */}
      
            {/* heading */}
            <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* Adding the Slider */}
          <Swiper
          // parsing the values so that proper distance and sliding can be done appropriatly.
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className='portfolio-slider'
          >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
          </Swiper>     
    </div>
  )
}

export default Portfolio
