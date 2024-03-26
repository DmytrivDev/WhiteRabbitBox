import { NavLink } from "react-router-dom";

import css from "./Logo.module.scss";

function Logo({ data, srcJSON }) {
  const { logo_imgname, site_name } = data;
  const logoSrc = srcJSON + logo_imgname;
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
