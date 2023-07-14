import React from 'react';
import logo from '../image/FOODIE.svg';
import {FaTwitter} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";



function footer() {
  return (
    <div className='footer'>
        <div className='footerOne'>
            <h1>Have Question In Mind? Let Us Help You</h1>
            <div className='inputPart'>
                <input type="email" placeholder='yourmail@gmail.com'/>
                <button>Submit</button>
            </div>
        </div>
        <div className='footerTwo'>
            <div className='foodie'>
                <div className='foodieLogo'>
                    <img src={logo} alt="" />
                </div>
                
                <div className='sociaMedia'>
                    <FaTwitter/>
                    <FaLinkedin/>
                    <FaYoutube/>
                    <FaFacebookF/>
                </div>
                
            </div>

            <div className='quality'>
                <p>Quality</p>
                <p>Help
                </p>
                <p>Share</p>
                <p>Careers</p>
                <p>Work</p>
                <p>Testimonial</p>

            </div>

            <div className='contact'>
                <p>+234-8106794406</p>
                <p>chrismibiteso@gmail.com</p>
                <p>press@food.com</p>
                <p>Contact@food.com</p>
                

            </div>

            <div className='terms'>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
               
                

            </div>
            
        </div>

        
    </div>
  )
}

export default footer