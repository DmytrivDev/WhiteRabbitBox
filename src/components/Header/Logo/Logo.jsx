import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Logo.module.scss";

function Logo({data}) {
  const {logo_imgname, site_name} = data;
  const logoSrc = "/resource/header/img/"+logo_imgname;
  return (
    <>
      <NavLink to="/" className={css.logo__link}>
        <img src={logoSrc} className={css.logo__link} />
      </NavLink>
      <NavLink to="/" className={css.header__title}>
        {site_name}
      </NavLink>
    </>
  );
}

export default Logo;
