import clsx from "clsx";

import css from "./ProductsItemLoad.module.scss";

function ProductsItem() {
  return (
    <li className={clsx(css.products__item, "flex", "loadingAnimation")}>
      <div className={css.products__part}>
        <div className={css.product__img}></div>
        <div className={css.products__name}>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
      <div className={clsx(css.products__bottom, "flex")}>
        <div className={css.product__pricecont}>
          <span>.</span>
        </div>
        <div className={css.products__addcart}></div>
      </div>
    </li>
  );
}

export default ProductsItem;
