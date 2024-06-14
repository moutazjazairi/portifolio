import React from 'react'
import { useEffect, useState } from 'react'
import "./Home.css"
import Group3 from '../Assets/Group 3.png'
import jsl from "../Assets/jsl.png"
import html5l from "../Assets/html5l.png"
import cssl from "../Assets/cssl.png"
import githupl from "../Assets/githupl.png"
import linkdinl from "../Assets/linkdinl.png"
import himg from "../Assets/himg.png"




const Home = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
          setAnimate(true);
        }, 2000); 
    
        return () => clearTimeout(timer);
      }, []);



  return (
    <div className={`home-container ${animate ? 'animate' : ''}`}>
      
      
      
      
      <div className="right-side">
      <img className="tailwindimage" src={Group3} alt="Additional Image 1" />
      
        <h1>Front-End React <br></br>Developer</h1>
        <p>Hi, I am Moutaz Jazairi, a passionate<br/> Front End Developer from Syria</p>
        <div className="icons">
          <a href="github-link"><img src={githupl} alt="GitHub" /></a>
          <a href="linkedin-link"><img src={linkdinl} alt="LinkedIn" /></a>
          
        </div>
        <h2>Tech Stack</h2>
      </div>

      <div className="left-side">
        <img src={himg} alt="Yourself" />
      </div>

      <img className='jsl' src={jsl} alt="Second Additional Image"  />
      <img className="html5l" src={html5l} alt="HTML5L Image" />
      <img className="cssl" src={cssl} alt="CSSL Image" />
      
      
      
      
    </div>
  );
};

export default Home;
