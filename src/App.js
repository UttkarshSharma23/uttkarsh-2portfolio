import React, { useContext } from 'react'
import Navbar from "./components/Navbar/navbar";
import './App.css';
import Intro from "./components/Intro/intro";
import Services from './components/Services/services'
import Experience from "./components/Experience/experience";
import Works from "./components/Works/works";
import Portfolio from './components/Portfolio/portfolio';
import Testimonial from './components/Testimonials/testimonial';
import ContactUS from './components/Contact/contact';
import Footer from './components/Footer/Footer';
// importing the theme context. created by ourslef
import {themeContext} from './context'


function App() {
  const theme =  useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='App'
    // styling for the app
    style={{
      // ? that is the value is true
      background: darkMode? 'black': '',
      color : darkMode? 'white': '',
    }}
    >
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Works/>
     <Portfolio/>
    <Testimonial/>
    <ContactUS/>
    <Footer/>
      </div>
  );
}

export default App;
