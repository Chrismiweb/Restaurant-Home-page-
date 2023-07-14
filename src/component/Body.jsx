import React from 'react';
import aboutBackground from '../image/home-background.png'
import './Navbar.css';
import food from '../image/food.png'

function Home() {
  return (
    <div className='hello'>
       <div className='favouriteFood'>
          <h1>Your Favourite Food
            Delivered Hot & Fresh
          </h1>
          <p>Healthy switcher chefs do all the prep work, like 
  peeding, chopping & marinating, so you can cook
  a fresh food.</p>
          <button className='OrderBtn'>Order Now </button>
       </div>
       <div className='foodImage'>
          <img src={food} alt="" />
       </div>
    </div>
  )
}

export default Home