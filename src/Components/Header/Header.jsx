import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate()
  return (
    <div id='main'>
        <div className='pr-heading'>
          <h2>STEP UP YOUR</h2>
          <h1> <span>FITNESS</span>WITH US</h1>
          <p className='details'>Build Your Body And Fitness Professional Touch</p>
          <div className='header-btns'>
            <a href="#" onClick={()=>navigate('pricing')} className='header-btn'>JOIN US</a>
          </div>
        </div>
    </div>
  )
}

export default Header