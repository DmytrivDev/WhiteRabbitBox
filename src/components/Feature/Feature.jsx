import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import FeatureItem from "./FeatureItem/FeatureItem";

import data from "../../../public/resource/feature/feature.json";

import css from "./Feature.module.scss";

function Feature() {
  const [dataJSON] = useState(data);
  const { title, undertitle, features, button, srcJSON } = dataJSON;
  const { button_text, button_route } = button;

  return (
    <section className={css.section__fishka}>
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {undertitle && <p className="section__undertitle">{undertitle}</p>}
        <div className={css.fishka__content}>
          <div className={css.fishka__inner}>
            {features.map((item, index) => {
              return <FeatureItem key={index} item={item} srcJSON={srcJSON} index={index} />;
            })}
          </div>
        </div>
        {button_text && button_route && (
          <div className={clsx(css.fishka__bottom, "flex")}>
            <NavLink to={button_route} className={clsx("button", "reg", css.button)}>
              <span>{button_text} </span>
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
}

export default Feature;
