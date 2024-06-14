import React, { useEffect, useState } from 'react';
import './Intro3.css';
import intro3Image from '../Assets/in1.png'; 

const Intro3 = ({ navigateTo }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1.5); 

    const navigateTimer = setTimeout(() => {
      navigateTo('home'); 
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [navigateTo]);

  return (
    <div className={`intro3-container ${startAnimation ? 'animate' : ''}`}>
      <img src={intro3Image} alt='Intro3' />
    </div>
  );
};

export default Intro3;
