import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import './header.css';
import './parallax.css';
import './self-typing.css';
import Navbar from '../../components/navbar/Navbar';
import avatar from '../../assets/header_avatar.svg';
import images from '../index.js'; // Your images folder location
import "./self-typing.js"
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'



const Header = () => {
  const parallaxContainerRef = useRef(null);

  useEffect(() => {
    // Initialize the parallax effect
    const parallaxInstance = new Parallax(parallaxContainerRef.current, {
      relativeInput: true, // Enable relative input mode
      clipRelativeInput: true, // Clip input to bounds of the container
    });

    // Clean up the parallax effect on component unmount
    return () => {
      parallaxInstance.destroy();
    };
  }, []);

  return (
    <div className="cv__header" id="home">
      <Navbar />
      <div className="cv__header-container">
        <div className="cv__header-container-info">
          <div className="cv__header-container-info-avatar">
            <img src={avatar} alt="Jacob" />
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
              <div cv__header-container-info__social-github><BsGithub/></div>
              <div cv__header-container-info__social-instagram><BsInstagram/></div>
              <div cv__header-container-info__social-twitter><BsTwitter/></div>
              <div cv__header-container-info__social-linkedin><BsLinkedin/></div>
              <div cv__header-container-info__social-facebook><FaFacebookSquare/></div>
          </div>
          <div className='cv__header-container-info-hire-me scale-up-center'>
              <button className='btn from-top' type='button'>Hire me</button>
          </div> 
        </div>
        <div className="cv__header-container-scroll">
          <div className='cv__header-container-scroll-text'>
            <p>Scroll Down</p>
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
                className={`parallax_img`}
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






