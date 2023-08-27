import React, {useState, useRef, useEffect } from "react";

import Flag from 'react-world-flags'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { BiHomeAlt2, BiBriefcase } from 'react-icons/bi'
import { PiUser } from 'react-icons/pi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { PiChatsCircleLight } from 'react-icons/pi'
import { FiLayers } from 'react-icons/fi'


import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import i18next from 'i18next'



import './navbar.css';


const languages = [
  {
    code: 'pl',
    name: 'Polska',
    country_code: 'pl',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
]

const defaultLanguage = languages.find(language => language.code === 'pl');


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const desktopContainer = document.getElementsByClassName('cv__navbar-desktop__container')[0];

  if (desktopContainer) {
    desktopContainer.style.transform = !toggleMenu ? '' : 'translateX(0)';
  }


  const navbarRef = useRef(null);
  const mobileContainerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        toggleMenu &&
        mobileContainerRef.current &&
        mobileContainerRef.current.offsetHeight > 0 &&
        navbarRef.current &&
        navbarRef.current.getElementsByClassName('cv__navbar-desktop__container')[0].style.transform === 'translateX(0px)' &&
        !navbarRef.current.contains(event.target)
      ) {
        setToggleMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [toggleMenu]);

  const handleMenuLinkClick = (event) => {
    if (
      toggleMenu &&
      mobileContainerRef.current &&
      mobileContainerRef.current.offsetHeight > 0 &&
      navbarRef.current &&
      navbarRef.current.getElementsByClassName('cv__navbar-desktop__container')[0].style.transform === 'translateX(0px)' &&
      navbarRef.current.contains(event.target)
    ) {
      document.querySelectorAll('.cv__navbar-links__container-icon').forEach(link => {
        link.classList.remove('active');
      });
      console.log(event.currentTarget);
      event.currentTarget.classList.add('active')
      console.log(event.currentTarget.children[0]);
      setToggleMenu(false);
    }
  }; 

  cookies.set('i18next',defaultLanguage.code)
  const currentLanguageCode = cookies.get('i18next') || defaultLanguage.code
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  
  useEffect(() => {
    console.log('Setting page stuff')

    document.title = t('CV, Portfolio Jakub Przygoda')
  }, [currentLanguage, t])
  return (
    <div className='cv__navbar' ref={navbarRef}>
      
      <div className='cv__navbar-desktop__container'>
      <a className='cv__navbar-logo cv__navbar-logo-desktop' href="#home">

          <h1>Jacob</h1>
          <span class="dot"></span>
          </a>
        <div className='cv__navbar-links__container'>
            <p className='cv__navbar-links__container-icon' onClick={handleMenuLinkClick}>  <a href="#home"> <i> <BiHomeAlt2/> </i>{t("navbar_home")}</a> </p>
            <p className='cv__navbar-links__container-icon' onClick={handleMenuLinkClick}>  <a href="#about"> <i> <PiUser/> </i>{t("navbar_about")}</a> </p>
            <p className='cv__navbar-links__container-icon' onClick={handleMenuLinkClick}> <a href="#services"> <i> <BiBriefcase/>  </i>{t("navbar_services")}</a> </p>
            <p className='cv__navbar-links__container-icon' onClick={handleMenuLinkClick}>  <a href="#experience"> <i> <AiOutlineFundProjectionScreen/> </i>{t("navbar_experience")}</a> </p>
            <p className='cv__navbar-links__container-icon' onClick={handleMenuLinkClick}> <a href="#projects"> <i> <FiLayers/> </i>{t("navbar_projects")}</a>   </p>
            <p className='cv__navbar-links__container-icon' onClick={handleMenuLinkClick}>  <a href="#contact"> <i> <PiChatsCircleLight/> </i>{t("navbar_contact")}</a>   </p>
        </div>
        <div className="cv__navbar-language-selector">
        {languages.map(({ code, name, country_code }) => (
          <div className={`cv__navbar-language-selector-flag ${name}`} 
          key={code}>
            
            <Flag 
                key={country_code}
                code={country_code} 
                height="26"
                className={name === defaultLanguage.name ? "active" : ""}
                onClick={(e) => {
                  i18next.changeLanguage(code)
                  document.querySelectorAll('.cv__navbar-language-selector-flag').forEach(link => {
                    link.children[0].classList.remove('active');
                  });
                  e.target.classList.add('active')
                }}
          
            />
            
          </div>

                 
      
              ))
              
        }
        </div>
        <div className='cv__navbar-copyrights gradient__text'>
            <p>© 2023 J.P. Portfolio/CV.</p>
        </div>
      </div>
      <div className='cv__navbar-mobile__container scale-up-center' ref={mobileContainerRef}>
      <a className='cv__navbar-logo' onClick={handleMenuLinkClick} href="#home">
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