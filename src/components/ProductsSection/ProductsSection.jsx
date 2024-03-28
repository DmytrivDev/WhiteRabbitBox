import { useState, useEffect } from "react";
import axios from 'axios';
import clsx from "clsx";

import ProductsItem from "../ProductItem/ProductItem";

import css from "./ProductsSection.module.scss";

function ProductsSection({ bg, bestsellersJSON }) {
  const {title} = bestsellersJSON;

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get('https://whiterabbitsbox.com.ua/wp-json/v2/bestsellers/');
        if (response.data.length > 0) {
          setOptions(response.data);
        }
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  console.log(options)

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
            {options.map((item) => {
              return <ProductsItem key={item.id} item={item}/>
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
