import React from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import "./contact.css";

import { SectionTitles } from "../../components/index";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const Contact = () => {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      process.env.REACT_APP_EMAIL_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAIL_EMAILJS_TEMPLATE,
      e.target,
      process.env.REACT_APP_EMAIL_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result);
      if (result.status === 200) {
        MySwal.fire({
          title: <strong>{t('contact_email_send_success_title')}</strong>,
          html: <i>{t('contact_email_send_success_html')}</i>,
          icon: 'success'
        })
      } else {
        MySwal.fire({
          title: <strong>{t('contact_email_send_error_title')}</strong>,
          html: <i>{t('contact_email_send_error_html')}</i>,
          icon: 'error'
        })
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div name="cv__section-contact">
      <section id="contact">
        <div className="cv__contact__container">
          <SectionTitles
            className="cv__contact__container_contact-title"
            sectionName="contact_title"
          />
          <div className="spacer" data-height="60"></div>
          <div className="cv__contact__container-row">
            <div className="cv__contact__container-row-text">
              <div className="cv__contact__container-row__container">
                <h3>{t("contact_h3_form")}</h3>
                <p>
                  {t("contact_p_form")}
                  <a href="mailto:przygi997@gmail.com">&nbsp;email</a>. 👋
                </p>
              </div>
            </div>
            <div className="cv__contact__container-row-form">
              <form id="contact-form" onSubmit={sendEmail}>
                <div className="cv__contact__container-row-form__fields">
                  <div className="cv__contact__container-row-form__fields-field half-line">
                    <input
                      className="cv__contact__container-row-form__fields-field-cloud"
                      type="text"
                      id="InputName"
                      name="name_from"
                      placeholder={t("contact_placeholder_inputname")}
                      required
                    />
                  </div>
                  <div className="cv__contact__container-row-form__fields-field half-line">
                    <input
                      className="cv__contact__container-row-form__fields-field-cloud"
                      type="email"
                      id="InputEmail"
                      name="email_from"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="cv__contact__container-row-form__fields-field full-line">
                    <input
                      className="cv__contact__container-row-form__fields-field-cloud"
                      type="text"
                      id="InputSubject"
                      name="subject_from"
                      placeholder={t("contact_placeholder_inputsubject")}
                      required
                    />
                  </div>
                  <div className="cv__contact__container-row-form__fields-field full-line">
                    <textarea
                      className="cv__contact__container-row-form__fields-field-cloud"
                      placeholder={t("contact_placeholder_message")}
                      name="message"
                      id="InputMessage"
                      rows="5"
                      // style={{
                      //   height: "111px",
                      // }}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn">
                    {t("contact_send_form")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
