import clsx from "clsx";

import css from "./FeatureItem.module.scss";

function FeatureItem({ item, srcJSON, index }) {
  const { name, text, icon } = item;
  const iconSrc = srcJSON + icon;
  const alt = new DOMParser().parseFromString(name, 'text/html').body.textContent;

  return (
    <div className={clsx(css.fishka__item, css[`m${index}`], css[`it${index}`], "flex")}>
      <div className={css.fishka__icon}>
        <img src={iconSrc} alt={alt} className="contain" />
      </div>
      <div className={css.fishka__info}>
        {name && <h3 className={clsx(css.fishka__title, css[`fh${index}`])} dangerouslySetInnerHTML={{ __html: name }} />}
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default FeatureItem;
