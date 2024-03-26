import clsx from "clsx";

import css from "./Feature.module.scss";

function Feature() {
  return (
    <section className={css.section__fishka}>
    <div className="container">
      <h2 className="section__title">
        Наша головна фішка
      </h2>
      <p className="section__undertitle">
        Щоб зібрати унікальний бокс вам потрібно:
      </p>
      <div className={css.fishka__content}>
        <div className={css.fishka__inner}>
          <div className={clsx(css.section__fishka, css.fishka__item, css.m0, "flex")}>
            <div className={css.fishka__icon}>
              <img src="assets/img/icons/f_1.svg" alt="" class="contain" />
            </div>
            <div className={css.fishka__info}>
              <h3 className={clsx(css.fishka__title, css.fh1)}>
                Обрати коробку
              </h3>
            </div>
          </div>
          <div className={clsx(css.section__fishka, css.fishka__item, css.m1, css.it2, "flex")}>
            <div className={css.fishka__icon}>
              <img src="assets/img/icons/f_1.svg" alt="" class="contain" />
            </div>
            <div className={css.fishka__info}>
              <h3 className={clsx(css.fishka__title, css.fh2)}>
                Обрати коробку
              </h3>
            </div>
          </div>
          <div className={clsx(css.section__fishka, css.fishka__item, css.m2, "flex")}>
            <div className={css.fishka__icon}>
              <img src="assets/img/icons/f_1.svg" alt="" class="contain" />
            </div>
            <div className={css.fishka__info}>
              <h3 className={clsx(css.fishka__title, css.fh3)}>
                Обрати коробку
              </h3>
            </div>
          </div>
          <div className={clsx(css.section__fishka, css.fishka__item, css.m3, css.it3, "flex")}>
            <div className={css.fishka__icon}>
              <img src="assets/img/icons/f_1.svg" alt="" class="contain" />
            </div>
            <div className={css.fishka__info}>
              <h3 className={clsx(css.fishka__title, css.fh4)}>
                Обрати коробку
              </h3>
            </div>
          </div>
          <div className={clsx(css.section__fishka, css.fishka__item, css.it4, "flex")}>
            <div className={css.fishka__icon}>
              <img src="assets/img/icons/f_1.svg" alt="" class="contain" />
            </div>
            <div className={css.fishka__info}>
              <h3 className={clsx(css.fishka__title)}>
                Обрати коробку
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class={clsx(css.fishka__bottom, "flex")}>
        <a href="#" class={clsx("button", "reg", css.button)}>
          <span>Конструктор</span>
        </a>
      </div>
    </div>
  </section>
  );
}

export default Feature;
