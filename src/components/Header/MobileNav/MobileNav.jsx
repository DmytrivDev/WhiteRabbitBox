import { useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import clsx from "clsx";

import NavItemMob from "./NavItemMob/NavItemMob";
import NavTests from "./NavTests/NavTests";

import css from "./MobileNav.module.scss";

function MobileNav({ isOpenNav, hendleNav, data, dataTests }) {
  useEffect(() => {
    if (isOpenNav) {
      document.body.classList.add("overhideAll");
    } else {
      document.body.classList.remove("overhideAll");
    }

    return () => document.body.classList.remove("overhideAll");
  }, [isOpenNav]);

  return (
    <Menu
      isOpen={isOpenNav}
      right
      width={"26.786em"}
      onClose={hendleNav}
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
              {data.map((item, index) => {
                return <NavItemMob item={item} key={"navmob_" + index} />;
              })}
            </ul>
          </nav>
          {dataTests.length > 0 && (<NavTests dataTests={dataTests} />)}
        </div>
      </div>
    </Menu>
  );
}

export default MobileNav;
