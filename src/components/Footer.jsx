import React from 'react'
import "./Footer.css"
import linkdinFl from "../Assets/linkdinFl.png"
import githupFl from "../Assets/githupFl.png"

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer-content'>
        <p>Copyright<span>©</span>  Moutaz Jazairi. All rights reserved.</p>
        <div>

        </div>
        <div className='img-container'>
        <img src={githupFl} alt='Github' />
        <img src={linkdinFl} alt='Linkedin' />
        </div>
      
        </div>
      
     
    </footer>
  )
}

export default Footer;