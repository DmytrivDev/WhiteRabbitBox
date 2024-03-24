import clsx from "clsx";

import { NavLink } from "react-router-dom";

import css from "./Navigation.module.scss";

function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && css.active);
  };
 
  return (
    <nav>
      <ul className={css.header__nav}>
        <li>
          <NavLink to="/ourboxes" className={buildLinkClass}>
            Наші бокси
          </NavLink>
        </li>
        <li>
          <NavLink to="/zibraty-svij-boks" className={buildLinkClass}>
            Зберіть свій бокс
          </NavLink>
        </li>
        <li>
          <NavLink to="/pidpysky-na-boksy" className={buildLinkClass}>
            Підписка на бокси
          </NavLink>
        </li>
        <li>
          <NavLink to="/sertyfikaty" className={buildLinkClass}>
            Сертифікати
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection" className={buildLinkClass}>
            Книжкові добірки
          </NavLink>
        </li>
        <li className={css.has__child}>
          <NavLink to="/pro-nas" className={buildLinkClass}>
            Про нас
          </NavLink>
          <ul className={css.sub__menu}>
            <li>
              <NavLink to="/pro-nas" className={buildLinkClass}>
                Хто ми?
              </NavLink>
            </li>
            <li>
              <NavLink to="/dostavka-i-oplata" className={buildLinkClass}>
                Доставка і оплата
              </NavLink>
            </li>
            <li>
              <NavLink to="/cziny" className={buildLinkClass}>
                FAQ
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={css.has__child}>
          <a href="#">Тести</a>
          <ul className={css.sub__menu}>
            <li>
              <a
                target="_blanl"
                href="https://love.whiterabbitsbox.com.ua/"
                rel="noopener noreferrer"
              >
                Тест “Твоя книжкова мова любові”
              </a>
            </li>
            <li>
              <a
                target="_blanl"
                href="https://test.whiterabbitsbox.com.ua/"
                rel="noopener noreferrer"
              >
                Тест “В яких ви стосунках з книжками?”
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
