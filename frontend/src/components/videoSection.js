import React from 'react';import '../App.css';
import './videoSection.css';

function Contentvideo() {
  return (
    <div className='test-container'>
      <video src='/videos/loop.mp4' autoPlay loop muted />
      <h1>One Stop Destination For Students</h1>
      <p>What are you Waiting for ? </p>
    </div>
  );
}

export default Contentvideo;
