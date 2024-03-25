import NavItem from "./NavItem/NavItem";

import css from "./Navigation.module.scss"; 

function Navigation({ data }) {
  return (
    <nav>
      <ul className={css.header__nav}>
        {data.map((item, index) => {
          return <NavItem item={item} key={'nav_'+index} />;
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
