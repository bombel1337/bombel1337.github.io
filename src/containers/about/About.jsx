import React from "react";
import Tiles from '../../components/about-tiles/Tiles';
import SectionTitles from '../../components/section-titles/Titles';
import './about.css';
import { SlBadge } from "react-icons/sl"
import { AiOutlineFire } from "react-icons/ai"
import { FiUsers } from "react-icons/fi"
import { PiCoffee } from "react-icons/pi"

import { useTranslation } from 'react-i18next'
import avatar from '../../assets/header_avatar.svg';


import images from '../index.js';



const About = () => {
  const { t } = useTranslation();
  console.log(images.about_dots);
  const tileData = [
    { icon:AiOutlineFire, titleText:"projects", subText:"projects"},
    { icon:PiCoffee, titleText:"coffee", subText:"coffee" },
    { icon:FiUsers, titleText:"clients", subText:"clients"},
    { icon:SlBadge, titleText:"creative", subText:"creative" },

  ];
  return (
    <div name="cv__section-about">
    <section id='about'>
        <div className="cv__about__container">
          <SectionTitles className="cv__about__container__aboutme" sectionName="about_title"/>
          <div className="spacer" data-height="60"></div>
          <div className="cv__about__container__aboutme-info">
            <div className="cv__about__container__aboutme-info-image">
                <img src={avatar} alt="about_Jacob" />
            </div>
            <div className="cv__about__container__aboutme-info-text">
                <div className="cv__about__container__aboutme-info-text-cloud cloud-tile">
                  <div className="cv__about__container__aboutme-info-text-cloud__box">
                    <div className="cv__about__container__aboutme-info-text-cloud__box-aboutme">
                    <p>{t('about_maintext')}</p>
                    <div className="cv__about__container__aboutme-info-text-cloud__box-aboutme-cv">
                      <button type="button" className="btn from-top">{t('about_cv_download')}</button>
                    </div>
                    </div>
                    <div className="cv__about__container__aboutme-info-text-cloud__box-lines">
                        <div className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item">
                            <div className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item-info">
                              <h4>Development</h4>
                              <span>75%</span>
                            </div>
                            <div className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item-progress">
                                <div style={{
                                background:"rgb(255, 209, 92)",
                                width:"75%"
                              }}
                              className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item-progress-bar">
                              </div>
                            </div>
                        </div>
                        <div className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item">
                            <div className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item-info">
                              <h4>Front-End</h4>
                              <span>60%</span>
                            </div>
                            <div className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item-progress">
                                <div style={{
                                background:"rgb(108, 108, 229)",
                                width:"60%"
                              }}
                              className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item-progress-bar">
                              </div>
                            </div>
                        </div>
                        <div className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item">
                            <div className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item-info">
                              <h4>Back-End</h4>
                              <span>50%</span>
                            </div>
                            <div className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item-progress">
                                <div style={{
                                background:"rgb(255, 76, 96)",
                                width:"50%"
                              }}
                              className="cv__about__container__aboutme-info-text-cloud__box-lines-skill-item-progress-bar">

                              </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="spacer" data-height="60"></div>
          <div className="cv__about__container__aboutme-items">
          {tileData.map((data, index) => (
        <Tiles
          key={index}
          icon={data.icon}
          titleText={data.titleText}
          subText={data.subText}
          index={index}
        />
      ))}
          </div>  
        </div>
    </section>
    </div>
    
  )
}

export default About