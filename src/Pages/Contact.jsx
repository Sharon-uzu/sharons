import React from 'react';
import Navbar from '../Components/Navbar';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";

const Contact = () => {
  return (
    
    <div className='contact' id='contact'>
        {/* <Navbar/> */}

          <div className='form-c'>

            <div>

          
              <form method='POST' name='contactform' className='contactForm' data-netlify="true">
                <div className='form1'>
                <h1>Contact Me</h1>
                </div>

                <div className='form2'>

                  <input type="hidden" name="form-name" value="contact" />


                  <input type="text" name="FirstName" id="" placeholder='First Name'/>
                  <input type="text" name="LastName" id="" placeholder='Last Name'/>
                  <input type="email" name="email" id="" placeholder='Email'/>
                  <input type="tel" name="tel" id="" placeholder='Phone Number'/>
                  <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                  <button type="submit">SEND</button>
                </div>

              </form>

              <div className='socials'>
                <span><a href='https://github.com/Sharon-uzu'><AiFillGithub/></a></span>
                <span><a href='https://www.facebook.com/profile.php?id=100082117092461'><BiLogoFacebook/></a></span>
                <span><a href='https://www.linkedin.com/in/sharonuzu'><FaLinkedinIn/></a></span>
                <span><a href='https://twitter.com/sharon_uzu'><FaTwitter/></a></span>
                <span><a href='mailto:victorysharon0@gmail.com'><MdOutlineMail/></a></span>
                <span><a href='tel:08173763120'><BiPhoneCall/></a></span>

            </div>
          </div>
        </div>

        </div>

        
        
        
    

  )
}

export default Contact