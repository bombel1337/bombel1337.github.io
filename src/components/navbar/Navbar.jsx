import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { BiHomeAlt2, BiBriefcase } from 'react-icons/bi'
import { PiUser } from 'react-icons/pi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { PiChatsCircleLight } from 'react-icons/pi'
import { FiLayers } from 'react-icons/fi'

import './navbar.css';




const Menu = () => (
  <>
  <p className='cv__navbar-links__container-icon'>  <a href="#home"> <i> <BiHomeAlt2/> </i> Home</a> </p>
  <p className='cv__navbar-links__container-icon'>  <a href="#about"> <i> <PiUser/> </i> About</a> </p>
  <p className='cv__navbar-links__container-icon'> <a href="#services"> <i> <BiBriefcase/>  </i>  Services</a> </p>
  <p className='cv__navbar-links__container-icon'>  <a href="#experience"> <i> <AiOutlineFundProjectionScreen/> </i> Experience</a> </p>
  <p className='cv__navbar-links__container-icon'> <a href="#projects"> <i> <FiLayers/> </i> Projects</a>   </p>
  <p className='cv__navbar-links__container-icon'>  <a href="#contact"> <i> <PiChatsCircleLight/> </i> Contact</a>   </p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const desktopContainer = document.getElementsByClassName('cv__navbar-desktop__container')[0];

  if (desktopContainer) {
    desktopContainer.style.transform = !toggleMenu ? '' : 'translateX(0)';
  }


  const container = document.querySelector('.cv__navbar-desktop__container');
  console.log('1xx23');
  document.addEventListener('click', function(event) {
    console.log(event.target);
    if (!container.contains(event.target)) {
      console.log(toggleMenu)
     
    }
  });


  return (
    <div className='cv__navbar'>
      <div className='cv__navbar-desktop__container'>
      <a className='cv__navbar-logo cv__navbar-logo-desktop' href="#home">

          <h1>Jacob</h1>
          <span class="dot"></span>
          </a>
        <div className='cv__navbar-links__container'>
            <Menu/>
        </div>
        <div className='cv__navbar-copyrights gradient__text'>
            <p>© 2023 J.P. Portfolio/CV.</p>
        </div>
      </div>
      <div className='cv__navbar-mobile__container'>
      <a className='cv__navbar-logo' href="#home">

<h1>Jacob</h1>
<span class="dot"></span>
</a>
      {toggleMenu ?  <RiCloseLine className='cv__navbar-mobile__container-close' color="#fff" size={27} onClick={()=> {
        setToggleMenu(false)
      }} /> 
        : <RiMenu3Line className='cv__navbar-mobile__container-burger' color="#fff" size={27} onClick={()=> setToggleMenu(true)} /> 
        }
        {/* {toggleMenu && (
          <div className='cv__navbar-menu_container scale-up-center'>
            <div className='cv__navbar-menu_container-links'></div>
            <Menu />
          </div>
        )} */}
      </div>
       
        
    </div>
    
  )
}

export default Navbar