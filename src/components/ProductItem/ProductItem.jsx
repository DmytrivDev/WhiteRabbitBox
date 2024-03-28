import clsx from "clsx";

import css from "./ProductItem.module.scss";

function ProductsItem({ item }) {
  const {
    name,
    image,
    type,
    price,
    regular_price,
    sale_price,
    date_on_sale_from,
    date_on_sale_to,
    manage_stock,
    stock_quantity,
    stock_status,
  } = item;

  let saleIs = false;
  let dataIs = false;
  let dataCur;
  let dataSt = 0;
  let dataEd = new Date("3000-01-01").getTime();

  if (date_on_sale_from || date_on_sale_to) {
    dataIs = true;
    dataCur = new Date().getTime();
    if (date_on_sale_from) {
      dataSt = new Date(date_on_sale_from.date).getTime();
    }
    if (date_on_sale_to) {
      dataEd = new Date(date_on_sale_to.date).getTime();
    }
  }

  if(sale_price && !dataIs || sale_price && dataIs && dataCur > dataSt && dataCur < dataEd) {
    saleIs = true;
  }

  const cartButton = () => {
    if(stock_status === 'instock') {
      return (<button className={css.products__addcart}>
        <span>В кошик</span>
      </button>)
    } else {
      return (<div className={css.products__outof}>
        <span>Розпродано</span>
      </div>)
    }
  }

  return (
    <li className={clsx(css.products__item, "flex")}>
      <div className={css.products__part}>
        <div className={css.product__img}>
          <a href="product.html">
            <img src={image[0]} alt="" className="cover" />
          </a>
        </div>
        <a href="product.html" className={css.products__name}>
          {name}
        </a>
      </div>
      <div className={clsx(css.products__bottom, "flex")}>
        <div className={css.product__pricecont}>
          {saleIs && <div className={css.priceokd}>{regular_price} грн</div>}
          <div className={css.price}>{price} грн</div>
        </div>
        {type === "simple" ? (
          cartButton()
        ) : (
          <a
            href="product.html"
            className={clsx(css.products__addcart, css.products__var)}
          >
            <span>Перейти</span>
          </a>
        )}
      </div>
    </li>
  );
}

export default ProductsItem;
