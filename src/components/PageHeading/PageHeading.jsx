import { Link } from "react-router-dom";
import clsx from "clsx";

import { HOME } from "../../constants";

import css from "./PageHeading.module.scss";

function PageHeading({ title, isBigger }) {
  return (
    <section
      class={clsx(css.section__head, {
        [css.bigger]: isBigger,
      })}
    >
      <div class="container">
        <ul class={css.breadcrumbs}>
          <li>
            <Link to={HOME}>Головна</Link>
          </li>
        </ul>
        <h1 class={css.page__title}>{title}</h1>
      </div>
    </section>
  );
}

export default PageHeading;
