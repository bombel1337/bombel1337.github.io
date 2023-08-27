import React from "react";
import './tileexperience.css';

import { useTranslation } from 'react-i18next'



const TileExperience = ({translate}) => {
  const { t } = useTranslation();
  
  return (
    <div className="cv__experience__container__tiles-first cloud-tile-text__content">
        <span className="cv__experience__container__tiles-first cloud-tile-text__content-time">{t(translate + "_time")}</span>
        <h3 className="cv__experience__container__tiles-first cloud-tile-text__content-title">{t(translate + "_title")}</h3>
        <p className="cv__experience__container__tiles-first cloud-tile-text__content-text">{t(translate + "_text")}</p>
    </div>
  );
}

export default TileExperience;
