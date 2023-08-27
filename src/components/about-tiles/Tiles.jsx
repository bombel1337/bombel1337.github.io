import React from "react";
import './tiles.css';

import { useTranslation } from 'react-i18next'



const Tiles = ({ icon: IconComponent, titleText, subText, index }) => {
  const { t } = useTranslation();


  const isOdd = index % 2 === 0;
  const classNames = isOdd ? "cv__about__container__aboutme-items-tiles odd" : "cv__about__container__aboutme-items-tiles";

  return (
    <div className={classNames}>
      <div className="cv__about__container__aboutme-items-tiles-badge">
        <IconComponent/>
      </div>  
      <div className="cv__about__container__aboutme-items-tiles-details">
        <h3 className="cv__about__container__aboutme-items-tiles-details-title">{t('home_titleText_' +titleText)}</h3>
        <p className="cv__about__container__aboutme-items-tiles-details-subtext">{t('home_subText_' +subText)}</p>
      </div>
    </div>
  );
}

export default Tiles;
