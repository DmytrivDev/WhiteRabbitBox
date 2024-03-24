import clsx from "clsx";

import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Socials from "./Socials/Socials";
import HeaderCart from "./HeaderCart/HeaderCart";
import Hamburger from "./Hamburger/Hamburger";
import MobileNav from "./MobileNav/MobileNav";

import css from "./Header.module.scss";

function Header() {
  return (
    <>
      <header className={css.header}>
        <div className="container">
          <div className={clsx(css.header__content, "flex")}>
            <div className={clsx(css.header__part, "flex")}>
              <Logo />
            </div>
            <div className={clsx(css.header__part, "flex")}>
              <Navigation />
              <Socials />
              <HeaderCart />
              <Hamburger />
            </div>
          </div>
        </div>
      </header>
      <MobileNav />
    </>
  );
}

export default Header;