import React from "react";
import "./services.css";

import { SectionTitles } from "../../components/index";

import imageExports from '../index'; 


import { useTranslation } from "react-i18next";



const Services = () => {
  const { t } = useTranslation();
  const images = imageExports.serviceImages


  return (
    <div name="cv__section-services">
      <section id="services">
        <div className="cv__section-services__container">
          <SectionTitles
            className="cv__section-services__container-title"
            sectionName="services_title"
          />
          <div className="spacer" data-height="60"></div>
          <div className="cv__section-services__container-tiles">
            <div className="cv__section-services__container-tiles-tile cloud-tile"
                          style={{
                            background: "rgb(249, 215, 120)",
                            boxShadow: "rgba(249, 215, 76, 0.5) 0px 5px 20px 0px"
                          }}>
              <div className="cv__section-services__container-tiles-tile cloud-tile-services__cloud-first">
                <div className="cv__section-services__container-tiles-tile cloud-tile-services__cloud-first-image"> <img src={images.services_development} alt="App Development" /> </div>
                <h3>{t('services_development_h3')}</h3>

                <p>{t('services_development')}</p>
              </div>
            </div>
            <div className="cv__section-services__container-tiles-tile cloud-tile"
                          style={{
                            background: "rgb(250, 200, 220)",
                            boxShadow: "rgba(250, 200, 220, 0.5) 0px 5px 20px 0px"
                          }}>
              <div className="cv__section-services__container-tiles-tile cloud-tile-services__cloud-second">
                <div className="cv__section-services__container-tiles-tile cloud-tile-services__cloud-second-image"> <img src={images.services_backend} alt="Back-End Engineer" /> </div>
                <h3>{t('services_backend_h3')}</h3>
                <p>{t('services_backend')}</p>
              </div>
            </div>
            <div className="cv__section-services__container-tiles-tile cloud-tile"
                 style={{
                  background: "rgb(220, 123, 139)",
                  boxShadow: "rgba(249, 123, 139, 0.5) 0px 5px 20px 0px"
                }}>
              <div className="cv__section-services__container-tiles-tile cloud-tile-services__cloud-third">
                <div className="cv__section-services__container-tiles-tile cloud-tile-services__cloud-third-image"> <img src={images.services_frontend} alt="Front-End Design" /> </div>
                <h3>{t('services_frontend_h3')}</h3>
                <p>{t('services_frontend')}</p>

              </div>
            </div>
          </div>
          <div className="cv__section-services__container-customlink">
            <p>{t('services_interested')}&nbsp;<a href="#contact">{t("click_here")}</a> {t('services_contact_me')}&nbsp;&nbsp;👋</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
