import clsx from "clsx";

import css from "./Logo.module.scss";

function Logo() {
  return (
    <>
      <a href="/" className={css.logo__link}>
        <img src="/src/assets/img/icons/logo.svg" className={css.logo__link} />
      </a>
      <a href="/" className={css.header__title}>
        Книжкові бокси від Білого кролика
      </a>
    </>
  );
}

export default Logo;
