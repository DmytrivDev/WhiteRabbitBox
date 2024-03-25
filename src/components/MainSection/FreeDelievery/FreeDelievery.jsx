import clsx from "clsx";

import css from "./FreeDelievery.module.scss";

function FreeDelievery({data}) {
  const {title, text} = data;

  return (
    <div className={css.free__del}>
      <h3 className={clsx(css.freedel__title, "flex")}>
        <span>{title}</span>
      </h3>
      <p className={css.freedel__text}>{text}</p>
    </div>
  );
}

export default FreeDelievery;
