import React from "react";
import Image from "next/image";

type Props = {};

export default function Footer({}: Props) {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="footer__container">
      <div className="footer__logo-media-container">
        <div className="footer__logo-about_me-container">
          <div className="footer__logo-email-container">
            <div className="footer__logo-container">
              <Image
                className="footer__logo-image small-logo-image"
                width={200}
                height={200}
                src="/assets/images/logo-terminal.png"
                alt=""
              />
              <h3 className="footer__logo-title">Yuriy</h3>
            </div>
            <span className="footer__email">yuriy.plakhin@gmail.com</span>
          </div>
          <p className="footer__about_me">
            Fullstack developer based in Kazakhstan
          </p>
        </div>
        <div className="footer__media-container">
          <h3 className="footer__media-heading">Contacts</h3>
          <ul className="footer__media-links">
            <li className="footer__media-link-container">
              <a
                href="tel:87770164685"
                className="contacts__contacts-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="contacts__contacts-contact">
                  <Image
                    src="/assets/images/phone-icon.png"
                    width={200}
                    height={200}
                    alt="Phone Icon"
                    className="footer__media-image"
                  />
                </p>
              </a>
            </li>
            <li className="footer__media-link-container">
              <a
                href="https://telegram.me/dvaranir"
                className="footer__media-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/images/logo-telegram.png"
                  width={200}
                  height={200}
                  alt="Telegram Icon"
                  className="footer__media-image"
                />
              </a>
            </li>
            <li className="footer__media-link-container">
              <a
                href="https://api.whatsapp.com/send?phone=77770164685"
                className="footer__media-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/images/logo-whatsapp.png"
                  width={200}
                  height={200}
                  alt="WhatsApp Icon"
                  className="footer__media-image"
                />
              </a>
            </li>
            <li className="footer__media-link-container">
              <a
                href="https://www.linkedin.com/in/yuriy-plakhin/"
                className="footer__media-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/images/logo-linkedin-black.png"
                  width={200}
                  height={200}
                  alt="Linkedin Icon"
                  className="footer__media-image"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copyright">© Copyright {currentYear}. Made by Yuriy</p>
    </footer>
  );
}
