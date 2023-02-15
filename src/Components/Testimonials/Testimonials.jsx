import React, { useState } from 'react'
import './Testimonials.css'
import leftArrow from '../../assets/images/left-arrow.png'
import rightArrow from '../../assets/images/right-arrow.png'
import {testimonialsData} from "../../assets/TestimonialsData"
import { motion } from 'framer-motion'

function Testimonials() {
    const transition={type:"spring",duration:3}
    const [selected,setSlected]=useState(0)
    const tLength=testimonialsData.length

  return (
    <div className="Testimonials"> 
        <div className='left-t'>
            <span>Testimonials</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>
            <motion.span
            key={selected}
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:100}}
            transition={transition}
            >{testimonialsData[selected].review}</motion.span>
            <span><span style={{color:"#ff9114"}}>{testimonialsData[selected].name}</span>-{testimonialsData[selected].status}</span>
        </div>
        <div className="right-t">
          <motion.div 
          initial={{opacity:0,x:-100}}
          transition={{...transition,duration:2}}
          whileInView={{opacity:1,x:0}}></motion.div>

          <motion.div
          initial={{opacity:0,x:100}}
          transition={{...transition,duration:2}}
          whileInView={{opacity:1,x:0}}></motion.div>
            <motion.img               key={selected}
              initial={{opacity:0,x:100}}
              animate={{opacity:1,x:0}}
              exit={{opacity:0,x:-100}}
              transition={{transition}} src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
              <img onClick={()=>{selected===0?setSlected(tLength-1):setSlected((prev)=>prev-1)}} src={leftArrow} alt="" />
              <img onClick={()=>{selected===tLength-1?setSlected(0):setSlected((prev)=>prev+1)}} src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials