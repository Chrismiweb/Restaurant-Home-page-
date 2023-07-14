import React from 'react';
import './Navbar.css';
import man from '../image/man.png';
import {AiFillStar} from 'react-icons/ai';


function Testimonial() {
  return (
    <div className='testimonial'>
        <div className='testimonialText'>
            <h4>Testimonial</h4>
            <h1>What They Are Saying</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p>

        </div>

        <div className='johnSection'>
            <div className='manImage'>
                <img src={man} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p>

            <div className='star'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <p2>John Doe</p2>

        </div>

    </div>
  )
}

export default Testimonial