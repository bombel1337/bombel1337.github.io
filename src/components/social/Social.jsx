import React from "react";
import './social.css';



const Social = ({ icon: IconComponent, iconName, linkRedirect }) => {

  return (
    <div onClick={()=> {
        window.open(`https://${linkRedirect}`, "_blank")
    }} className={`cv__header-container-info__social-${iconName}`}>
        <IconComponent /> 
    </div>
  );
}

export default Social;
