import React from 'react';
import './Plans.css';
import { plansData } from '../data/plansData';
import whiteTick from '../assets/whiteTick.png';

function Plans() {
  return (
    <div className='plans-container'>
      <div className='blur plans-blur-1'></div>
      <div className='blur plans-blur-2'></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>WITH US </span>
      </div>
      
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> ${plan.price}</span>
            
            <div className='features'>
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={whiteTick} alt="whiteTick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="more-benefits">
              <span>See More Benefits-> </span>
              <button className='btn'>Join Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;