import React from 'react'
import Aboutimg from "../Assets/Aboutimg.png"
import "./About.css"

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-img'>
        <img src={Aboutimg} alt='About' />
        </div>
        <div className='about-header'>
            About me
        </div>
        <div className='about-paragraph'>
        Hello, I'm Moutaz, a Frontend Developer who is dedicated to crafting sleek UI/UX experiences for users. Currently, I primarily work with React/Next.js, Tailwind CSS, and TypeScript in my projects.
        </div>
    </div>
  )
}

export default About;