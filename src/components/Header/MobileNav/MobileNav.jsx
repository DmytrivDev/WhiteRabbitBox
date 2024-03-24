import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./MobileNav.module.scss";

function MobileNav({ isOpenNav }) {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && css.active);
  };

  return (
    <>
      <div
        className={clsx(css.mobile__nav, {
          [css.openedNav]: isOpenNav,
        })}
      >
        <div className={css.mobilenav__inner}>
          <nav>
            <ul className={css.mob__nav}>
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
              <li>
                <a
                  href="https://www.instagram.com/book.bouquet.ua/"
                  target="_blank"
                >
                  Книжкові букети
                </a>
              </li>
              <li className={css.has__child}>
                <NavLink to="/pro-nas" className={buildLinkClass}>
                  Про нас
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
          </nav>
          <div className={css.mobnav__test}>
            <div className={css.mobnav__testtitle}>Тести:</div>
            <nav>
              <ul className={css.mobtest__nav}>
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
            </nav>
          </div>
        </div>
      </div>
      <div className={css.mobnav__underlay}></div>
    </>
  );
}

export default MobileNav;
