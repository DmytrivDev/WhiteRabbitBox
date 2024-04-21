import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Slider from "react-slick";

import AdventageItem from "./AdventageItem/AdventageItem";
import SeoVideo from "../SeoVideo/SeoVideo";

import dataJSON from "../../../public/resource/adventages/adventages.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Adventage.module.scss";

function Adventage() {
  const isBreikpointPt = useMediaQuery("(max-width: 960px)");
  const isBreikpointMb = useMediaQuery("(max-width: 760px)");

  const { title, undertitle, adventages, video, srcJSON } = dataJSON;
  const { video_src, video_img } = video;

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
    <section className={css.section__adventage}>
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {undertitle && <p className="section__undertitle">{undertitle}</p>}
        <div className={css.adventage__content}>
          {isBreikpointMb ? (
            <Slider {...sliderSettings} className={css.adv__carousel}>
              {adventages.map((item, index) => {
                return <AdventageItem key={"adv_" + index} item={item} />;
              })}
            </Slider>
          ) : (
            <div className={css.adv__carousel}>
              {adventages.map((item, index) => {
                return <AdventageItem key={"adv_" + index} item={item} />;
              })}
            </div>
          )}

          {video_src && video_img && !isBreikpointPt && (
            <SeoVideo
              isAdventages={true}
              video_src={video_src}
              video_img={video_img}
              srcJSON={srcJSON}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Adventage;
