import React, { useRef } from 'react'
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css'
import {Link} from 'react-scroll'

import logo from '../../assets/logo.svg';

const Navbar = () => {

//  function show 

let ref=useRef(null)
let ref2=useRef(null)
let show_value=false
const show=()=>{
  // alert('clicked')
  if(show_value===false){
  ref.current.style.display='flex'
  ref2.current.innerHTML='<i class="bi bi-x-lg"></i>'
  show_value=true
  }
  else{
  ref.current.style.display='none'
  ref2.current.innerHTML='<i class="bi bi-justify"></i>'

  show_value=false

  }
}



  return (
    <div className='navbar'>
      <div className='navbar_links'>
        <div className='navbar_links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='navbar_links_menu scale-up-center' ref={ref}>
          <p><Link to='header_main' spy={true} offset={50} duration={500} onClick={show} >Home</Link></p>
          <p><Link to='what' spy={true} offset={50} duration={500} >What is GPT?</Link></p>
          <p><Link to='featuress' spy={true} offset={50} duration={500} >Open Al</Link></p>
          <p><Link to='blog' spy={true} offset={50} duration={500} >Case Studies</Link></p>
          <p><Link to='possibility' spy={true} offset={50} duration={500} >Library</Link></p>
        </div>
      </div>
      <div className='navbar_btn'>
        <p className='navbar_btn_in'>Sign in</p>
        <button className='navbar_btn_up'>Sign up</button>

      </div>
      <div ref={ref2} className='navbar_phone' onClick={show}><i class="bi bi-justify"></i></div>
    </div>
  )
}

export default Navbar