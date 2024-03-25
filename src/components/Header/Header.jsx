import { useState, useEffect } from "react";
import clsx from "clsx";

import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Socials from "./Socials/Socials";
import HeaderCart from "./HeaderCart/HeaderCart";
import Hamburger from "./Hamburger/Hamburger";
import MobileNav from "./MobileNav/MobileNav";

import data from '../../../public/resource/header/header.json';

import css from "./Header.module.scss";

function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isWindowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navigation, setNavigation] = useState(data.navigation);
  const [navigationMobile, setNavigationMobile,] = useState(data.navigationMobile);

  const hendleNav = () => {
    setIsOpenNav(!isOpenNav);
  }

  useEffect(() => {
    window.addEventListener("resize", lisnerWindowWidth);

    return () => window.removeEventListener("resize", lisnerWindowWidth);
  }, []);

  const lisnerWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <>
      <header className={css.header}>
        <div className="container">
          <div className={clsx(css.header__content, "flex")}>
            <div className={clsx(css.header__part, "flex")}>
              <Logo data={data.logo} />
            </div>
            <div className={clsx(css.header__part, "flex")}>
              {isWindowWidth >= 960 ? <Navigation data={navigation} /> : ""}
              <Socials />
              <HeaderCart />
              {isWindowWidth < 960 ? <Hamburger hendleNav={hendleNav} isOpenNav={isOpenNav} /> : ""}
            </div>
          </div>
        </div>
      </header>
      {isWindowWidth < 960 ? <MobileNav isOpenNav={isOpenNav} hendleNav={hendleNav} navigationMobile={navigationMobile} /> : ""}
    </>
  );
}

export default Header;
