import { useMemo } from "react";

import css from "./NavTests.module.scss";

function NavTests({ dataTests }) {
  const createLink = useMemo(() => {
    return (itemLink) => {
      const { name, slug } = itemLink;
      return (
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
    };
  }, []);

  return (
    <div className={css.mobnav__test}>
      <div className={css.mobnav__testtitle}>Тести:</div>
      <nav>
        <ul className={css.mobtest__nav}>
          {dataTests.map((item, index) => {
            return <li key={index}>{createLink(item)}</li>;
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavTests;
