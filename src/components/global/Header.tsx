import React from "react";

import Image from "next/image";
import Link from "next/link";

import LanguageSelector from "@/components/ui/language-selector/LanguageSelector";

function Header() {
  return (
    <header className="header__container">
      <div className="header__logo-container">
        <Image
          className="header__logo-image small-logo-image"
          width={200}
          height={200}
          src="/assets/images/logo-terminal.png"
          alt=""
        />
        <span className="header__logo-title">Yuriy</span>
      </div>
      <nav className="header__navigation-container">
        <ul className="header__navigation-list">
          <li className="header__navigation-item">
            <Link href="/" className="header__navigation-anchor">
              <span className="header__navigation-cage primary-color">#</span>
              home
            </Link>
          </li>
          <li className="header__navigation-item">
            <Link href="/projects" className="header__navigation-anchor">
              <span className="header__navigation-cage primary-color">#</span>
              projects
            </Link>
          </li>
          <li className="header__navigation-item">
            <Link href="/small-projects" className="header__navigation-anchor">
              <span className="header__navigation-cage primary-color">#</span>
              small-projects
            </Link>
          </li>
          <li className="header__navigation-item">
            <Link href="/about" className="header__navigation-anchor">
              <span className="header__navigation-cage primary-color">#</span>
              about-me
            </Link>
          </li>
          <li className="header__navigation-item">
            <Link href="" className="header__navigation-anchor">
              <span className="header__navigation-cage primary-color">#</span>
              contacts
            </Link>
          </li>
          <li className="header__navigation-item">
            <LanguageSelector />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
