import { Link } from "react-router-dom";

import { HOME } from "../../../constants";

import css from "./Logo.module.scss";

function Logo({ data, srcJSON }) {
  const { logo_imgname, site_name } = data.logo;
  const logoSrc = data.srcJSON + logo_imgname;
  return (
    <>
      <Link to={HOME} className={css.logo__link}>
        <img src={logoSrc} className={css.logo__link} />
      </Link>
      <Link to={HOME} className={css.header__title}>
        {site_name}
      </Link>
    </>
  );
}

export default Logo;
