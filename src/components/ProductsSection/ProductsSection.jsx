import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
 
import ProductsItemLoad from "../ProductsItemLoad/ProductsItemLoad";
import ProductsItem from "../ProductItem/ProductItem";

import { fetchFunction } from "../../api/fetchAPI";

import css from "./ProductsSection.module.scss";

function ProductsSection({ bg, endpoint, sectionJSON }) {
  const { title } = sectionJSON;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchFunction(endpoint);
        if (response.data.length > 0) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchProducts();
  }, []);

  const setItems = () => {
    let productsRendered = [];

    for (let i = 0; i < 4; i++) {
      productsRendered.push(<ProductsItemLoad key={endpoint + "_" + i} />);
    }

    if (products.length > 0) {
      productsRendered = products.map((product) => {
        return <ProductsItem key={product.id} product={product} />;
      });
    }

    return productsRendered;
  };

  return (
    <section
      className={clsx(css.section__products, {
        [css.bg]: bg,
      })}
    >
      <div className="container">
        <h2 className="section__title">{title}</h2>
        <div className={css.products__seccont}>
          <ul className={clsx(css.products__list, "flex")}>{setItems()}</ul>
        </div>
        {sectionJSON.button && sectionJSON.button.button_text && sectionJSON.button.button_route && (
          <div className={clsx(css.products__bottom, "flex")}>
            <NavLink to={sectionJSON.button.button_route} className={clsx(css.button, "button", "reg")}>
              <span>{sectionJSON.button.button_text}</span>
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductsSection;
