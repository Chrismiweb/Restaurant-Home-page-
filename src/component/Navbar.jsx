import React, { useState } from 'react'
import img from '../image/FOODIE.svg';
import './Navbar.css';
import {AiOutlineShoppingCart} from "react-icons/ai";



// const toggle(){
//   const[hiddedToggle, showToggle]= useState=("")
// }
// function 


function Navbar() {
    // const[emptyItem, showItem] = useState("");
    const [toggle, setToggle] = useState(false)
    const handleClick=()=>{
      setToggle(!toggle)
    }


  return (
    <div>
      <div className='body'>
        <div className='logo'>
          <img src={img} alt=""/>
        </div>
        <div className='MenuList'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Testimonial</a>
          <a href="">Contact</a>
          <AiOutlineShoppingCart/>
          <button>Booking Now</button>
        </div>
        <button onClick={handleClick} className='toggleBtn' >=</button>
    </div>
      <div className={toggle? "mobileItemSub":'mobileItem'}>
         <a href="">Home</a>
          <a href="">About</a>
          <a href="">Testimonial</a>
          <a href="">Contact</a>
          <AiOutlineShoppingCart/>
          <button>Booking Now</button>
    
      </div>
  
    </div>
    
  )
}

export default Navbar

