import React from "react";
import "./experience.css";


import { TileExperience, SectionTitles } from "../../components/index";

import imageExports from '../index'; // Adjust the path accordingly


const Experience = () => {
  const { experienceImages } = imageExports
  const educationTile = [
    { translate: "experience_tile_left_first" },
    { translate: "experience_tile_left_second" },
    { translate: "experience_tile_left_third" },
  ];
  const experienceTile = [
    { translate: "experience_tile_right_first" },
    { translate: "experience_tile_right_second" },
    { translate: "experience_tile_right_third" },
  ];

  return (
    <div name="cv__section-experience">
      <section id="experience">
        <div className="cv__experience__container">
          <SectionTitles
            className="cv__experience__container__experience"
            sectionName="experience_title"
          />
          <div className="spacer" data-height="60"></div>
          <div className="cv__experience__container__tiles">
            <div className="cv__experience__container__tiles-first cloud-tile">
              <div className="cv__experience__container__tiles-first cloud-tile-line"></div>
              <div className="cv__experience__container__tiles-first cloud-tile-text">
                {educationTile.map((data, index) => (
                  <TileExperience
                    key={index}
                    translate={data.translate}
                    index={index}
                  />
                ))}
              </div>
            </div>
            <div className="cv__experience__container__tiles-second cloud-tile">
              <span className="cv__experience__container__tiles-first cloud-tile-line"></span>
              <div className="cv__experience__container__tiles-first cloud-tile-text">
                {experienceTile.map((data, index) => (
                  <TileExperience
                    key={index}
                    translate={data.translate}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="spacer" data-height="60"></div>
          <div className="cv__experience__container__languages">
            <div className="cv__experience__container__languages__container">
            {Object.values(experienceImages).map((imageSrc, index) => {
              return (
                <div className={`cv__experience__container__languages__container-png scale-up-center experience_image_${index}`}>
                  <img
                  width="70px"
                  left
                    src={imageSrc}
                    id={imageSrc}
                    alt={`experience_image_${index}`}
                  />
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
