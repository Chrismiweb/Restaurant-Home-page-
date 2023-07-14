import React from 'react';
import './Navbar.css';
import PickMeals from '../image/Vector.png';
import ChooseMeals from '../image/finger.png';
import FastDeliveries from '../image/truck.png';


function Work() {
    const workInfoData = [
        {
          image: PickMeals,
          title: "Pick Meals",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum", 
        },
        {
          image: ChooseMeals,
          title: "Choose How Often",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et" , 
        }, 
        {
          image: FastDeliveries,
          title: "Fast Deliveries",
          text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum", 
        },
    ]
  return (
    <div className='Work'>
      <div className='WorkContent'>
        <h1>Work</h1>
        <h2>How It Works</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.</p>
      </div>

      {/* --------------- */}

      <div className='workSection'>
         {workInfoData.map((mapIt)=> (

          <div className='workBorder'>
              <div className='workImages'>
                  <img src={mapIt.image} alt="" />
              </div>

              <h1>{mapIt.title}</h1>
              <p>{mapIt.text}</p>
          </div>

         ))}
      </div>
    </div>
  )
}

export default Work
