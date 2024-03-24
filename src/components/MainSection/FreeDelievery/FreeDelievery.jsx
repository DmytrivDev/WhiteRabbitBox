import clsx from "clsx";

import css from "./FreeDelievery.module.scss";

function FreeDelievery() {
  return (
    <div className={css.free__del}>
      <h3 className={clsx(css.freedel__title, "flex")}>
        <span>Безкоштовна доставка</span>
      </h3>
      <p className={css.freedel__text}>
        Укрпоштою на суму понад 1300 грн та Новою поштою – на суму понад 1800
        грн.
      </p>
    </div>
  );
}

export default FreeDelievery;
