import clsx from "clsx";

import css from "./SeoLoading.module.scss";

function SeoLoading() {
  return (
    <div className={clsx(css.seo__part, "loadingAnimation")}>
      <p>
        <span></span>
        <span></span>
        <span></span>
      </p>
      <p>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </p>
      <p>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </p>
    </div>
  );
}

export default SeoLoading;
