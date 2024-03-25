import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import clsx from "clsx";

import css from "./MobileNav.module.scss";

function MobileNav({ isOpenNav, hendleNav, navigationMobile }) {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && css.active);
  };

  useEffect(() => {
    if(isOpenNav) {
      document.body.classList.add('overhideAll');
    } else {
      document.body.classList.remove('overhideAll');
    }

    return () => document.body.classList.remove('overhideAll');
  }, [isOpenNav]);

  return (
    <Menu
      isOpen={isOpenNav}
      right
      width={"26.786em"}
      onClose={(hendleNav)}
      className={css.mobile__navigationcont}
      overlayClassName={css.mobile__navoverlay}
    >
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
    </Menu>
  );
}

export default MobileNav;
