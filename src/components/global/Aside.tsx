import React from "react";

import Image from "next/image";

export default function Aside() {
  return (
    <aside className="aside__container">
      <div className="aside__line"></div>
      <ul className="aside__links-container">
        <li className="aside__link-container">
          <a href="#" className="aside__link">
            <Image
              className="aside__image"
              width={200}
              height={200}
              src="/assets/images/logo-github.svg"
              alt="Github Logo"
            />
          </a>
        </li>
        <li className="aside__link-container">
          <a href="#" className="aside__link">
            <Image
              className="aside__image"
              width={200}
              height={200}
              src="/assets/images/logo-bitbucket.webp"
              alt="Bitbucket Logo"
            />
          </a>
        </li>
        <li className="aside__link-container">
          <a href="#" className="aside__link">
            <Image
              className="aside__image"
              width={200}
              height={200}
              src="/assets/images/logo-linkedin.webp"
              alt="Lenkedin Logo"
            />
          </a>
        </li>
      </ul>
    </aside>
  );
}
