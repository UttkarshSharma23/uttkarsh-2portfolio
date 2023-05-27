import React from 'react'
import './contact.css'
// installing a library so that we can recieve the details from  the user who is working on our portfolio.
import emailjs from '@emailjs/browser';
import {useRef} from 'react';
import { useState } from 'react';

import { useContext } from 'react'
import { themeContext } from '../../context'
// ContactUs special function Defined
function ContactUS() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  //  creating a function to show a done message after the submission of the form.
const [done,setDone] = useState(false)



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d2iept9', 'template_z6brvix', form.current, 'NXowc0Ylnhfh71zJt')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
        console.log(error.text);
      });
  };



  return (
    <div className='contact-form'>
      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkMode? 'white' : ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className='blur s-blur'
            style={{ background: "ABF1FF94" }}
          ></div>
        </div>
      </div>


      <div className="c-right">
        {/* using the apis we are calling the function so that we receive all the emails on the id */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' className='user' placeholder='Name' />
          <input type="email" name='user_email' className='user' placeholder='Email' />
          <textarea name="message" id="" className='user' placeholder='Message'></textarea>
          <input type="submit" value="Send" className='button' />
          <span>{done && 'Thanks for contacting me!'}</span>
          <div className="blur c-blur"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>

    </div>
  );
}

export default ContactUS
