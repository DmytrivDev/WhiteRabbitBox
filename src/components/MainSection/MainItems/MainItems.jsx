import { Link } from "react-router-dom";
import clsx from "clsx";

import css from "./MainItems.module.scss";

function MainItems({ part, srcJSON }) {
  const { text, button_text, button_route, photo } = part;
  const photoSrc = srcJSON + photo;
  return (
    <div className={css.main__part}>
      <img src={photoSrc} alt={text} className="cover" />
      <div className={css.main__inner}>
        <h1 className={css.main__title}>{text}</h1>
        <Link to={button_route} className={clsx(css.main__button, "button")}>
          <span>{button_text}</span>
        </Link>
      </div>
    </div>
  );
}

export default MainItems;
