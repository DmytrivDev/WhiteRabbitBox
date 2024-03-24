import clsx from "clsx";

import css from "./MainItems.module.scss";

function MainItems() {
  return (
    <div className={css.main__part}>
      <img src="/src/assets/img/content/main_1.jpg" alt="" className="cover" />
      <div className={css.main__inner}>
        <h1 className={css.main__title}>Індивідуальні книжкові бокси</h1>
        <a href="#" className={clsx(css.main__button, "button")}>
          <span>Зібрати власноруч</span>
        </a>
      </div>
    </div>
  );
}

export default MainItems;
