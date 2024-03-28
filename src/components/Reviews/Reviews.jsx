import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import clsx from "clsx";

import css from "./Reviews.module.scss";

function Reviews({ reviewsJSON }) {
  const { title, text, enable } = reviewsJSON;

  var sliderSettings = {
    dots: true,
    dotsClass: "slick__dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
  };

  return (
    <section className={css.section__reviews}>
      <div className={clsx(css.container, "container")}>
        <div className={css.reviews__part}>
          {title && (
            <h2 className={clsx(css.section__title, "section__title", "white")}>
              {title}
            </h2>
          )}
          {text && <div className={css.reviews__text}>{text}</div>}=
          <ul className={clsx(css.footer__list, "flex")}>
            <li className={css.footer__socitem}>
              <a href="#" target="_blank">
                <img src="assets/img/icons/fsoc_3.svg" alt="" />
              </a>
            </li>
            <li className={css.footer__socitem}>
              <a href="#" target="_blank">
                <img src="assets/img/icons/fsoc_4.svg" alt="" />
              </a>
            </li>
            <li className={css.footer__socitem}>
              <a href="#" target="_blank">
                <img src="assets/img/icons/fsoc_1.svg" alt="" />
              </a>
            </li>
            <li className={css.footer__socitem}>
              <a href="#" target="_blank">
                <img src="assets/img/icons/fsoc_2.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className={css.reviews__container}>
          <div className={css.reviews__phone}>
            <img
              src="assets/img/decor/phone.png"
              draggable="false"
              alt=""
              className={css.phone__img}
            />
            <a href="/" className="custom-logo-link">
              <img src="assets/img/icons/logo.svg" className="custom-logo" />
            </a>
          </div>
          <Slider {...sliderSettings} className={css.reviews__carousel}>
            <div className={css.reviews__item}>
              <img src="assets/img/content/rev_1.png" alt="" />
            </div>
            <div className={css.reviews__item}>
              <img src="assets/img/content/rev_2.png" alt="" />
            </div>
            <div className={css.reviews__item}>
              <img src="assets/img/content/rev_1.png" alt="" />
            </div>
            <div className={css.reviews__item}>
              <img src="assets/img/content/rev_2.png" alt="" />
            </div>
            <div className={css.reviews__item}>
              <img src="assets/img/content/rev_1.png" alt="" />
            </div>
            <div className={css.reviews__item}>
              <img src="assets/img/content/rev_2.png" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
