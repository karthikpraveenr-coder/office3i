import React from 'react';
import back from './assets/images/header_background.png';
import './assets/css/herostyle.css';

function HeroSection() {
  const heroStyle = {
    backgroundImage: `url(${back})`, // Use backticks for template literals
    backgroundSize: 'cover',         // Uncommented this line to cover the entire div with the image
    backgroundRepeat: 'no-repeat',   // Prevents the background image from repeating
    backgroundPosition: 'center',       // Position the image at the top of the div
    height: '60vh',                  // Set the height to 50% of the viewport height
    width: '100%',                   // Set the width to 100% of the parent element
  };

  const herosec__container = {
    minHeight: '100%',              
  };

  return (
    <div style={herosec__container}>
      <div style={heroStyle}></div>
      <h1 className='hero__head display-4 display-md-3 display-lg-1'>We Made It Simple For You !!!</h1>
    </div>
  );
}

export default HeroSection;
