import React from "react";
import './titles.css';

import { useTranslation } from 'react-i18next'
import dots from "../../assets/dots-bg.svg"

import './observer.js'

const SectionTitles = ({className, sectionName}) => {
  const { t } = useTranslation();
  

  return (
    <div className={`${className} section-titles hidden-observer` } >
        <div className={`${className}-dots section-titles-dots`}
                style={{
                backgroundImage: `url(${dots})`,
                backgroundRepeat:"no-repeat",backgroundSize:"contain", 
                height:37,width:37}}> 
        </div>
            <h2 className={`${className}-title section-titles-title`}>{t(sectionName)}</h2>
        
    </div>
  );
}

export default SectionTitles;
