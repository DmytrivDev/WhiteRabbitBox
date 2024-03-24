import clsx from "clsx";

import MainItems from "./MainItems/MainItems";
import FreeDelievery from "./FreeDelievery/FreeDelievery";

import css from "./MainSection.module.scss";

function Header() {
  return (
    <section className={css.section__main}>
    <div className="container">
      <div className={css.msin__container}>
        <MainItems />
        <MainItems />

        <FreeDelievery />
      </div>
    </div>
  </section>
  );
}

export default Header;
