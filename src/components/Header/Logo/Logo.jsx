import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Logo.module.scss";

function Logo() {
  return (
    <>
      <NavLink to="/" className={css.logo__link}>
        <img src="/src/assets/img/icons/logo.svg" className={css.logo__link} />
      </NavLink>
      <NavLink to="/" className={css.header__title}>
        Книжкові бокси від Білого кролика
      </NavLink>
    </>
  );
}

export default Logo;
