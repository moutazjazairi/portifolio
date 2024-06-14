import React, { useEffect, useState } from 'react';
import './Intro.css';
import introImage from '../Assets/in2.png'; 

const Intro = ({ navigateTo }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1); 

    const navigateTimer = setTimeout(() => {
      navigateTo('intro3'); 
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [navigateTo]);

  return (
    <div className={`intro-container ${startAnimation ? 'animate' : ''}`}>
      <img src={introImage} alt='Intro' />
    </div>
  );
};

export default Intro;
