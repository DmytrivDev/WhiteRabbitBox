import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Slider from "react-slick";
import clsx from "clsx";

import { fetchFunction } from "../../api/fetchAPI";

import css from "./Reviews.module.scss";

function Reviews({ reviewsJSON, endpoint }) {
  const { title, text, phone_img, rev_placeholder, socials, srcJSON } = reviewsJSON;
  const placeImgSrc = srcJSON + rev_placeholder;
  const defoultReviews = [
    {
      src: placeImgSrc,
    },
    {
      src: placeImgSrc,
    },
    {
      src: placeImgSrc,
    },
    {
      src: placeImgSrc,
    },
  ];

  const [reviews, setReviews] = useState(defoultReviews);
  const [isDefault, setIsDefault] = useState(true);

  const isBreikpointPt = useMediaQuery("(max-width: 960px)");
  const phoneImgSrc = srcJSON + phone_img;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchFunction(endpoint);
        if (response.data.length > 0) {
          setReviews(response.data);
          setIsDefault(false);
        }
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchReviews();
  }, []);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
    dotsClass: "slick__dots white",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          infinite: false,
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          infinite: false,
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 460,
        settings: {
          infinite: false,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const styles = `
    .slick-slide {
        opacity: .4;
        transition: .3s;
    }
    .slick-slide.slick-active {
      opacity: 1;
    }
  `;

  const createImg = (imgName, img, index) => {
    const imgSrc = srcJSON + "socials/" + img;
    return <img key={index} src={imgSrc} alt={imgName} />;
  };

  return (
    <section className={css.section__reviews}>
      <style>{styles}</style>
      <div className={clsx(css.container, "container")}>
        <div className={css.reviews__part}>
          {title && (
            <h2 className={clsx(css.section__title, "section__title", "white")}>
              {title}
            </h2>
          )}
          {!isBreikpointPt && text && (
            <div className={css.reviews__text}>{text}</div>
          )}
          {!isBreikpointPt && socials && (
            <ul className={clsx(css.footer__list, "footer__list", "flex")}>
              {socials.map((item, index) => {
                const { name, link, img } = item;
                return (
                  <li key={index} className="footer__socitem">
                    <a href={link} target="_blank">
                      {createImg(name, img, index)}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className={css.reviews__container}>
          {!isBreikpointPt && (
            <div className={css.reviews__phone}>
              <img
                src={phoneImgSrc}
                draggable="false"
                alt=""
                className={css.phone__img}
              />
              <a href="/" className={css.reviews__logo}>
                <img
                  src="/resource/header/img/logo.svg"
                  alt="White Rabbot`s Box"
                />
              </a>
            </div>
          )}
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...sliderSettings}
            className={css.reviews__carousel}
          >
            {reviews.map((item, index) => {
              return (
                <div
                  key={index}
                  className={clsx(css.reviews__item, {
                    [css.loadingRev]: isDefault,
                  })}
                >
                  <div
                    className={clsx(css.reviews__itemupper, {
                      loadingAnimation: isDefault,
                    })}
                  ></div>
                  <img src={item.src} alt={"Відгук " + index} />
                </div>
              );
            })}
          </Slider>
          <div className={css.rev__arrows}>
            <button className={css.prev} onClick={previous}></button>
            <button className={css.next} onClick={next}></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
