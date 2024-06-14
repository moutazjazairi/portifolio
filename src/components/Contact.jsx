import React from 'react'
import phoneimg from "../Assets/phoneimg.png"
import mailimg from "../Assets/mailimg.png"
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact-container' >
        <button className='see-more-button'> See More</button>
        <div className='contact-header'>
            <h2> Contact</h2>
            <p>Don't Hesitate to Contact me</p>
        </div>
        <div className='contact-info'>
            <div className='contact-item'>
                <img src={phoneimg} alt=''/>
                <div>
                    <h3>Phone Number</h3>
                    <p>+971 566399817</p>
                </div>
            </div>
            <div className='contact-item'>
                <img src={mailimg} alt=''/>
                <div>
                    <h3>Email</h3>
                    <p>Moutazjazairi77@gmail.com</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact;