import clsx from "clsx";

import css from "./Navigation.module.scss";

function Navigation() {
  return (
    <ul className={clsx(css.header__nav)}>
      <li>
        <a href="products.html">Наші бокси</a>
      </li>
      <li>
        <a href="constructor.html">Зберіть свій бокс</a>
      </li>
      <li>
        <a href="collections.html">Книжкові добірки</a>
      </li>
      <li>
        <a href="sertificates.html">Сертифікати</a>
      </li>
      <li className={css.has__children}>
        <a href="#">Про нас</a>
        <ul className={css.sub__menu}>
          <li>
            <a href="about.html">Хто ми?</a>
          </li>
          <li>
            <a href="delievery.html">Доставка і оплата</a>
          </li>
          <li>
            <a href="faq.html">FAQ</a>
          </li>
          <li>
            <a href="#">Як додати більше книг</a>
          </li>
        </ul>
      </li>
      <li className={css.has__children}>
        <a href="#">Тест</a>
        <ul className={css.sub__menu}>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://love.whiterabbitsbox.com.ua/"
            >
              Твоя книжкова мова любові
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener"
              href="https://test.whiterabbitsbox.com.ua/"
            >
              В яких ви стосунках з книжками?
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Navigation;
