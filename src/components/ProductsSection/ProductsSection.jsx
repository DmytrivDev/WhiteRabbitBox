import { useState } from "react";
import clsx from "clsx";

import data from '../../../public/resource/bestsellers/bestsellers.json';

import css from "./ProductsSection.module.scss";

function ProductsSection({ bg }) {
  const [dataJSON] = useState(data);
  const {title} = dataJSON;

  return (
    <section
      className={clsx(css.section__products, {
        [css.bg]: bg,
      })}
    >
      <div className="container">
        <h2 className="section__title">{title}</h2>
        <div className={css.products__seccont}>
          <ul className={clsx(css.products__list, "flex")}>
            <li className={clsx(css.products__item, "flex")}>
              <div className={css.products__part}>
                <div className={css.product__img}>
                  <a href="product.html">
                    <img
                      src="assets/img/content/product_1.png"
                      alt=""
                      className="cover"
                    />
                  </a>
                </div>
                <a href="product.html" className={css.products__name}>
                  Адвент-календар для книголюбів
                </a>
              </div>
              <div className={clsx(css.products__bottom, "flex")}>
                <div className={css.product__pricecont}>
                  <div className={css.priceokd}>125 грн</div>
                  <div className={css.price}>75 грн</div>
                </div>
                <a
                  href="product.html"
                  className={clsx(css.products__addcart, css.products__var)}
                >
                  <span>Перейти</span>
                </a>
              </div>
            </li>
            <li className={clsx(css.products__item, "flex")}>
              <div className={css.products__part}>
                <div className={css.product__img}>
                  <a href="product.html">
                    <img
                      src="assets/img/content/product_1.png"
                      alt=""
                      className="cover"
                    />
                  </a>
                </div>
                <a href="product.html" className={css.products__name}>
                  Адвент-календар для книголюбів
                </a>
              </div>
              <div className={clsx(css.products__bottom, "flex")}>
                <div className={css.product__pricecont}>
                  <div className={css.priceokd}>125 грн</div>
                  <div className={css.price}>75 грн</div>
                </div>
                <button className={css.products__addcart}><span>В кошик</span></button>
              </div>
            </li>
            <li className={clsx(css.products__item, "flex")}>
              <div className={css.products__part}>
                <div className={css.product__img}>
                  <a href="product.html">
                    <img
                      src="assets/img/content/product_1.png"
                      alt=""
                      className="cover"
                    />
                  </a>
                </div>
                <a href="product.html" className={css.products__name}>
                  Адвент-календар для книголюбів
                </a>
              </div>
              <div className={clsx(css.products__bottom, "flex")}>
                <div className={css.product__pricecont}>
                  <div className={css.priceokd}>125 грн</div>
                  <div className={css.price}>75 грн</div>
                </div>
                <a
                  href="product.html"
                  className={clsx(css.products__addcart, css.products__var)}
                >
                  <span>Перейти</span>
                </a>
              </div>
            </li>
            <li className={clsx(css.products__item, "flex")}>
              <div className={css.products__part}>
                <div className={css.product__img}>
                  <a href="product.html">
                    <img
                      src="assets/img/content/product_1.png"
                      alt=""
                      className="cover"
                    />
                  </a>
                </div>
                <a href="product.html" className={css.products__name}>
                  Адвент-календар для книголюбів
                </a>
              </div>
              <div className={clsx(css.products__bottom, "flex")}>
                <div className={css.product__pricecont}>
                  <div className={css.priceokd}>125 грн</div>
                  <div className={css.price}>75 грн</div>
                </div>
                <a
                  href="product.html"
                  className={clsx(css.products__addcart, css.products__var)}
                >
                  <span>Перейти</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
