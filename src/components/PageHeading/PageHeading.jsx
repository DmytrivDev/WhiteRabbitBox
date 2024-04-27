import { Link } from "react-router-dom";
import clsx from "clsx";

import { HOME } from "../../constants";

import css from "./PageHeading.module.scss";

function PageHeading({ title, isBigger }) {
  return (
    <section
      className={clsx(css.section__head, {
        [css.bigger]: isBigger,
      })}
    >
      <div className="container">
        <ul className={css.breadcrumbs}>
          <li>
            <Link to={HOME}>Головна</Link>
          </li>
        </ul>
        <h1 className={css.page__title}>{title}</h1>
      </div>
    </section>
  );
}

export default PageHeading;
