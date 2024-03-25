import { useMemo } from "react";
import clsx from "clsx";

import { NavLink } from "react-router-dom";

import css from "./NavItemMob.module.scss";

function NavItem({ item, index }) {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && css.active);
  };

  const createLink = useMemo(() => {
    return (itemLink) => {
      const { name, slug, type } = itemLink;

      let navItemElement = (
        <NavLink to={slug} className={buildLinkClass}>
          {name}
        </NavLink>
      );

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
    <li key={index} className={clsx(css.nav__item, buildLinkClass)}>
      {createLink(item)}
    </li>
  );
}

export default NavItem;
