import React from 'react';
import './HeroSection.css';
import FormBookingCard from './FormBookingCard';

function HeroSection() {
  return (
    <div>
      <div className="hero-container">
        <div className="heading__primary">
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
        </div>

        <div className="right-floated-content">
          <FormBookingCard />
        </div>

      </div>
    </div>
  )
}

export default HeroSection;
