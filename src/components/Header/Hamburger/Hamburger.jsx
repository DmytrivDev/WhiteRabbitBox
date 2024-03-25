import clsx from "clsx";

import css from "./Hamburger.module.scss";

function Hamburger({ hendleNav, isOpenNav }) {
  return (
    <button onClick={hendleNav} className={clsx(css.hamburger, {
      [css.opened]: isOpenNav
    })}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default Hamburger;
