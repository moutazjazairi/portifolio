import React from 'react'
import githupl from "../Assets/githupl.png"
import Livedemo from "../Assets/Livedemo.png"
import Erickcoffe from "../Assets/Erickcoffe.png"
import Chicken from "../Assets/Chicken.png"
import Elevate from "../Assets/Elevate.png"
import "./Project.css"


const Project = () => {
  return (
    <div className='project-container'>
        <h2 >Portifolio</h2>
        <p>I would Like to present my projects.</p>
        <div className='project1'>
            <img  src={Erickcoffe} alt=''/>
            <div className='project-detailes1'>
                <h3>Erick Coffe</h3>
                <p> The website features a modern and sleek design, showcasing Erick Coffee’s products and brand story. </p>
                <div className='tech-stach1'>
                    <span>React</span>
                    <span>SCSS</span>

                </div>  
                <div className='project-link'>
                    
                    <img src={githupl} alt='Github'/>
                    
                    
                    
                        <img src={Livedemo} alt='Live Demo'/>
                    

                </div>

            </div>
        </div>
        <div className='project2'>
            <img src={Chicken} alt=''/>
            <div className='project-detailes2'>
                <h3>Chicken</h3>
                <p> I designed a website for the restaurant Chicken, featuring an elegant and user-friendly interface to showcase their menu offerings and services. </p>
                <div className='tech-stach2'>
                    <span>React</span>
                    <span>SCSS</span>

                </div>  
                <div className='project-link2'>
                    
                    <img src={githupl} alt='Github'/>
                    
                    
                    
                        <img src={Livedemo} alt='Live Demo'/>
                    

                </div>

            </div>
        </div>

        <div className='project3'>
            <img src={Elevate} alt=''/>
            <div className='project-detailes3'>
                <h3>Elevate</h3>
                <p> I crafted a website for Elevate Airlines that prioritizes both sophistication and ease of use. This user-friendly interface will seamlessly showcase our flight destinations, services, and booking options. </p>
                <div className='tech-stach3'>
                    <span>React</span>
                    <span>SCSS</span>

                </div>  
                <div className='project-link3'>
                    
                    <img src={githupl} alt='Github'/>
                    
                    
                    
                        <img src={Livedemo} alt='Live Demo'/>
                    

                </div>

            </div>
        </div>

    </div>
  )
}

export default Project;