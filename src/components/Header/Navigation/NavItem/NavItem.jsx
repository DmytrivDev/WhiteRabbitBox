import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./NavItem.module.scss";

function NavItem({ item, index }) {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && css.active);
  };

  const createLink = useMemo(() => {
    return (itemLink) => { 
      const { name, slug, type } = itemLink;
      let navItemElement = <NavLink to={slug} className={buildLinkClass}>{name}</NavLink>;

      if (type === "link") {
        navItemElement = (
          <a
            target="_blank"
            onClick={(evt) => {
              if (slug === "#") {
                evt.preventDefault();
              }
            }}
            href={slug}
            rel="noopener noreferrer"
          >
            {name}
          </a>
        );
      }

      return navItemElement;
    };
  }, []);

  return (
    <li
      key={index}
      className={clsx(css.nav__item, {
        [css.has__child]: item.sub_nav,
      })}
    >
      {createLink(item)}
      {item.sub_nav && (
        <ul className={css.sub__menu}>
          {item.sub_nav &&
            item.sub_nav.map((item, index) => {
              return (
                <li key={"sub_" + index}>
                  {createLink(item)}
                </li>
              );
            })}
        </ul>
      )}
    </li>
  );
}

export default NavItem;
