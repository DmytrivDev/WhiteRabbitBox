import { useState } from "react";
import { useMediaQuery } from '@react-hook/media-query';
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
  const [dataJSON, setdataJSON] = useState(data);
  const isBreikpoint = useMediaQuery('(max-width: 960px)');

  const hendleNav = () => {
    setIsOpenNav(!isOpenNav);
  }

  return (
    <>
      <header className={css.header}>
        <div className="container">
          <div className={clsx(css.header__content, "flex")}>
            <div className={clsx(css.header__part, "flex")}>
              <Logo data={data.logo} srcJSON={data.srcJSON} />
            </div>
            <div className={clsx(css.header__part, "flex")}>
              {!isBreikpoint ? <Navigation data={dataJSON.navigation} /> : ""}
              {dataJSON.socials.length > 0 && (<Socials data={dataJSON.socials} srcJSON={data.srcJSON} />)}
              <HeaderCart />
              {isBreikpoint ? <Hamburger hendleNav={hendleNav} isOpenNav={isOpenNav} /> : ""}
            </div>
          </div>
        </div>
      </header>
      {isBreikpoint ? <MobileNav isOpenNav={isOpenNav} hendleNav={hendleNav} data={dataJSON.navigationMobile}  dataTests={dataJSON.testsNav} /> : ""}
    </>
  );
}

export default Header;
