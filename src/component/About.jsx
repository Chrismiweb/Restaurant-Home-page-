import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai';
import aboutimage from '../image/about-banner.png';


function About() {
  return (
    <div className='aboutPage'>
        <div className='aboutImg'>
            <img src={aboutimage} alt="" />
        </div>
        <div className='aboutContent'>
            <p1>About</p1>
            <h1>Food Is An Important Part Of A Balanced Diet</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p>
            <p>Non tincidunt magna non et elit. Dolor turpis molestie 
dui magnis facilisis at fringilla quam.</p>
            <div className='playButton'>
                <button className='OrderBtn'>Learn More</button>
                <AiFillPlayCircle size={40}/>Watch Video
            </div>
        </div>
    </div>
  )
}

export default About