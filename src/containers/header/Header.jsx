import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import './header.css';
import './parallax.css';
import './self-typing.css';
import "./self-typing.js"

import Navbar from '../../components/navbar/Navbar'
import Social from '../../components/social/Social'


import imageExports from '../index'; // Adjust the path accordingly


import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'


import { useTranslation } from 'react-i18next'


const Header = () => {
  const parallaxContainerRef = useRef(null);
  const images  = imageExports.images;

  const { t } = useTranslation();

  useEffect(() => {
    const parallaxInstance = new Parallax(parallaxContainerRef.current, {
      relativeInput: true, // Enable relative input mode
      clipRelativeInput: true, // Clip input to bounds of the container
    });
    return () => {
      parallaxInstance.destroy();
    };
  }, []);

  const socialData = [
    { icon:BsGithub, iconName:"github", linkRedirect:"www.github.com/bombel1337"},
    { icon:BsInstagram, iconName:"instagram", linkRedirect:"www.instagram.com/przygodajacob/" },
    { icon:BsTwitter, iconName:"twitter", linkRedirect:"www.twitter.com/2115_bombel"},
    { icon:BsLinkedin, iconName:"linkedin", linkRedirect:"www.linkedin.com/in/przygodajacob" },
    { icon:FaFacebookSquare, iconName:"facebook", linkRedirect:"www.facebook.com/przygodajacob" },
  ];


  return (
    <div className="cv__header" id="home">
      <Navbar />
      <div className="cv__header-container scale-up-center">
        <div className="cv__header-container-info">
          <div className="cv__header-container-info-avatar">
            <img src={imageExports.selfieImages.selfie_image_2} 
              width="150px"
              style={{borderRadius:"50px"}}
            alt="Jacob" />
          </div>
          <div className="cv__header-container-info-text">
           <h1>Jakub  Przygoda</h1>
           <p>I'm a&nbsp;
           <div id="container">
                <div id="text"></div><div id="cursor"></div>
            </div>
           </p>
          </div>
          <div className='cv__header-container-info__social'>
          {socialData.map((data, index) => (
              <Social
                key={index}
                icon={data.icon}
                iconName={data.iconName}
                linkRedirect={data.linkRedirect}
                index={index}
              />
           ))}
          </div>
          <div className='cv__header-container-info-hire-me scale-up-center'>
            <a href="#contact">
              <button className='btn from-top' type='button'>{t("header_hire-me")}</button>
              </a>
          </div> 
        </div>
        <div className="cv__header-container-scroll">
          <div className='cv__header-container-scroll-text'>
            <p>{t("header_scroll-down")}</p>
          </div>
          <div className='cv__header-container-scroll-text-wheel'>
            <div className='cv__header-container-scroll-text-wheel-dot' ></div>
          </div>
        </div>
        <div className="cv__header-container-parallax" ref={parallaxContainerRef}>
          {/* Parallax content */}
          {Object.values(images).map((imageSrc, index) => {
          const randomDepth = (Math.random() - 0.5) * 0.4;


          return (
            <div key={index} data-depth={randomDepth}>
              <img
              left
                src={imageSrc}
                className={`parallax_img scale-up-center`}
                id={`parallax_img_${index}`}
                alt={`parallax_img_${index}`}
              />
            </div>
          );
        })}
        </div>
      </div>
    </div>
    
  );
};

export default Header;






