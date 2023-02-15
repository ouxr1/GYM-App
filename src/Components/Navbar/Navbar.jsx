import React, {useState} from 'react'
import logo from '../../assets/images/logo.png'
import { Outlet, Link } from "react-router-dom";



import './Navbar.css'

function  Navbar() {
  const [nav,setNav]=useState(false);
  const changeBackground=()=>{
    if(window.scrollY>=50){
      setNav(true)
    }
    else{
      setNav(false)
    }
  }
  window.addEventListener("scroll",changeBackground)
  return (<>
    <nav className={nav?"nav active":"nav"}>
      <Link to='/'  className='logo'>
        <img src={logo} alt=''/>
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>

        {/* <li><Link to='main' smooth={true} duration={1000}>Header</Link></li>
        <li><Link to='features'smooth={true} duration={1000}>Features</Link></li>

        <li><Link to='presentaion' smooth={true} duration={1000}>Offer</Link></li>
        <li><Link to='about'smooth={true} duration={1000}>About</Link></li>
        <li><Link to='contact'smooth={true} duration={1000}>Contact</Link></li>
        <li><Link to='Testimonials'smooth={true} duration={1000}>Testimonials</Link></li> */}
        <li><Link to='/'>Header</Link></li>
        <li><Link to='/features'>Features</Link></li>
        <li><Link to='/offer'>Offer</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/testimonials'>Testimonials</Link></li>
        <Outlet/>
      </ul>




    </nav>
    </>
    
  )
}

export default Navbar