import React, { useEffect, useRef } from 'react'
import './Contact.css'

function Contact() {
  const inputRef=useRef(null)

  useEffect(()=>{
    //focus the input element
    inputRef.current.focus()
  },[])


  return (
    <div id='contact'>
      <h1>CONTACT US</h1>
      <form>
        <input ref={inputRef} type="text" placeholder='fullName' required/>
        <input type="email" placeholder='Type Your Email' required />
        <textarea name="message" placeholder='Write Here......' ></textarea>
        <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default Contact