import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from '@react-hook/media-query';
import clsx from "clsx";

import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Socials from "./Socials/Socials";
import HeaderCart from "./HeaderCart/HeaderCart";
import Hamburger from "./Hamburger/Hamburger";
import MobileNav from "./MobileNav/MobileNav"; 

import dataJSON from '../../../public/resource/header/header.json';

import css from "./Header.module.scss";

function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const location = useLocation();
  const isBreikpoint = useMediaQuery('(max-width: 960px)');

  const hendleNav = () => {
    setIsOpenNav(!isOpenNav);
  }

  useEffect(() => {
    setIsOpenNav(false);
  }, [location])

  return (
    <>
      <header className={css.header}>
        <div className="container">
          <div className={clsx(css.header__content, "flex")}>
            <div className={clsx(css.header__part, "flex")}>
              <Logo data={dataJSON} />
            </div>
            <div className={clsx(css.header__part, "flex")}>
              {!isBreikpoint ? <Navigation data={dataJSON} /> : ""}
              {dataJSON.socials.length > 0 && (<Socials data={dataJSON} />)}
              <HeaderCart />
              {isBreikpoint ? <Hamburger hendleNav={hendleNav} isOpenNav={isOpenNav} /> : ""}
            </div>
          </div>
        </div>
      </header>
      {isBreikpoint ? <MobileNav isOpenNav={isOpenNav} hendleNav={hendleNav} data={dataJSON} /> : ""}
    </>
  );
}

export default Header;
