import React from 'react'
import aboutimage from '../../assets/images/backgrd3.jpg'
import './About.css'

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt="" />
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quod non ab quasi quos, accusamus nemo voluptates inventore fugiat velit nostrum iste cumque quibusdam deleniti dicta sapiente alias id. Id?</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About