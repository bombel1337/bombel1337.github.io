import img_1 from "../assets/header_parallax_1.png"
import img_2 from "../assets/header_parallax_2.png"
import img_3 from "../assets/header_parallax_3.png"
import img_4 from "../assets/header_parallax_4.png"
import img_5 from "../assets/header_parallax_5.png"
import img_6 from "../assets/header_parallax_6.png"
import img_7 from "../assets/header_parallax_7.png"
import img_8 from "../assets/header_parallax_8.png"

import services_backend from "../assets/services_backend.png"
import services_development from "../assets/services_development.png"
import services_frontend from "../assets/services_frontend.png"

import experience_python from "../assets/experience_python_image.png"
import experience_html from "../assets/experience_html_image.png"
import experience_css from "../assets/experience_css_image.png"
import experience_nodejs from "../assets/experience_nodejs_image.png"
import experience_react from "../assets/experience_react_image.png"
import experience_cpp from "../assets/experience_cpp_image.png"
import experience_js from "../assets/experience_js_image.png"
import experience_golang from "../assets/experience_golang_image.png"
import experience_electron from "../assets/experience_electron_image.png"
import experience_ts from "../assets/experience_ts_image.png"

import projects_image_1 from "../assets/projects_image_1.png"
import projects_image_2 from "../assets/projects_image_2.png"
import projects_image_3 from "../assets/projects_image_3.png"
import projects_image_4 from "../assets/projects_image_4.png"
import projects_image_5 from "../assets/projects_image_5.png"
import projects_image_6 from "../assets/projects_image_6.png"






// https://www.online-image-editor.com/?language=polish
const images = {  /*https://www.pngegg.com*/
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
}

const serviceImages = {
    services_backend,
    services_development,
    services_frontend
}

const experienceImages = {
    experience_python,
    experience_html,
    experience_css,
    experience_nodejs,
    experience_react,
    experience_cpp,
    experience_js,
    experience_golang,
    experience_electron,
    experience_ts
}

const projectsImages = {
    projects_image_1,
    projects_image_2,
    projects_image_3,
    projects_image_4,
    projects_image_5,
    projects_image_6
}


export { default as Header } from './header/Header'
export { default as About } from './about/About'
export { default as Services } from './services/Services'
export { default as Experience } from './experience/Experience'
export { default as Projects } from './projects/Projects'
export { default as Contact } from './contact/Contact'
export default { images, serviceImages, experienceImages, projectsImages }; // Export the image objects
