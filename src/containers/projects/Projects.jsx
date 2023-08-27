import React from "react";

import "./projects.css";

import { useTranslation } from "react-i18next";

import { SectionTitles } from "../../components/index";

import imageExports from "../index"; // Adjust the path accordingly

const Projects = () => {
  const { t } = useTranslation();
  const { projectsImages } = imageExports;

  return (
    <div name="cv__section-projects">
      <section id="projects">
        <div className="cv__projects__container">
          <SectionTitles
            className="cv__experience__container__projects-title"
            sectionName="projects_title"
          />
          <div className="spacer" data-height="60"></div>
          <div className="cv__projects__container__projects">
            {Object.values(projectsImages).map((imageSrc, index) => {
              return (
                <div className="cv__projects__container__projects-tile cloud-tile">
                  <div className="cv__projects__container__projects-tile-mask"></div>
                  <div
                    className={`cv__projects__container__projects-tile-details scale-up-center projects_image_${index}`}
                  >
                    <span className="cv__projects__container__projects-tile-details-language">
                      {t("projects_project_language_" + index)}
                    </span>
                    <h4 className="cv__projects__container__projects-tile-details-title">
                      {t("projects_project_title_" + index)}
                    </h4>
                  </div>
                  <div
                    className={`cv__projects__container__projects-tile-png scale-up-center projects_image_${index}`}
                  >
                    <img
                      src={imageSrc}
                      id={imageSrc}
                      alt={`projects_image_${index}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
